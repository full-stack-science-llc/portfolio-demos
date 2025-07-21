import { useState, useEffect, useRef, useCallback } from 'react';
import { SENSORS, SENSOR_CONFIG, ENHANCED_ISSUES } from '../constants/realisticMillData';

// Advanced sensor simulation with realistic dynamics
class SensorSimulator {
  constructor() {
    this.sensors = {};
    this.issueStates = {};
    this.time = 0;
    this.updateInterval = 1.5; // seconds
    
    // Initialize all sensors
    this.initializeSensors();
  }
  
  initializeSensors() {
    Object.keys(SENSORS).forEach(sensorId => {
      const sensor = SENSORS[sensorId];
      const config = SENSOR_CONFIG[sensor.type];
      
      this.sensors[sensorId] = {
        // Current state
        value: this.generateRandomValue(config.normal[0], config.normal[1]),
        targetValue: null,
        status: 'normal',
        
        // Dynamics
        responseTime: config.responseTime || 5,
        noise: config.noise || 0.1,
        drift: 0.0001, // Small drift over time
        
        // History for realistic behavior
        previousValue: null,
        changeRate: 0,
        
        // Issue effects
        baseMultiplier: 1.0,
        issueEffects: {},
        
        // Timing
        lastUpdate: this.time,
      };
    });
  }
  
  generateRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Realistic noise generation (Gaussian-like)
  generateNoise(amplitude) {
    // Box-Muller transform for Gaussian noise
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return z0 * amplitude;
  }
  
  // First-order dynamic response simulation
  updateSensorDynamics(sensorId, targetValue, deltaTime) {
    const sensor = this.sensors[sensorId];
    const config = SENSOR_CONFIG[SENSORS[sensorId].type];
    
    // Calculate time constant from response time (95% response)
    const timeConstant = sensor.responseTime / 3;
    
    // First-order response: y(t) = target + (current - target) * exp(-dt/tau)
    const alpha = 1 - Math.exp(-deltaTime / timeConstant);
    
    // Apply dynamics
    sensor.previousValue = sensor.value;
    sensor.value = sensor.value + alpha * (targetValue - sensor.value);
    
    // Add realistic noise
    sensor.value += this.generateNoise(sensor.noise);
    
    // Add small drift
    sensor.value += sensor.drift * deltaTime;
    
    // Calculate change rate for trending
    sensor.changeRate = (sensor.value - sensor.previousValue) / deltaTime;
    
    // Clamp to critical limits
    sensor.value = Math.max(config.critical[0], Math.min(sensor.value, config.critical[1]));
    
    return sensor.value;
  }
  
  // Calculate composite target value from normal operation + issue effects
  calculateTargetValue(sensorId) {
    const sensor = this.sensors[sensorId];
    const sensorInfo = SENSORS[sensorId];
    const config = SENSOR_CONFIG[sensorInfo.type];
    
    // Start with normal operating point
    const normalMidpoint = (config.normal[0] + config.normal[1]) / 2;
    const normalRange = (config.normal[1] - config.normal[0]) / 2;
    
    // Add some natural variation (±10% of normal range)
    let baseTarget = normalMidpoint + this.generateNoise(normalRange * 0.1);
    
    // Apply issue effects
    let compositeMultiplier = 1.0;
    let hasActiveIssues = false;
    
    Object.keys(sensor.issueEffects).forEach(issueKey => {
      const effect = sensor.issueEffects[issueKey];
      if (effect.active) {
        hasActiveIssues = true;
        
        // Apply time-based progression
        const timeSinceStart = this.time - effect.startTime;
        let progressFactor = 1.0;
        
        if (timeSinceStart >= effect.delay) {
          // Issue has started affecting this sensor
          const effectTime = timeSinceStart - effect.delay;
          const rampTime = Math.min(effect.delay, 30); // 30 second max ramp
          progressFactor = Math.min(effectTime / rampTime, 1.0);
        } else {
          // Issue hasn't reached this sensor yet
          progressFactor = 0;
        }
        
        // Calculate effective multiplier with variance
        const variance = effect.variance * this.generateNoise(1.0);
        const effectiveMultiplier = effect.multiplier + variance;
        
        // Combine effects (multiplicative for multiple issues)
        compositeMultiplier *= (1 + (effectiveMultiplier - 1) * progressFactor);
      }
    });
    
    // Apply composite multiplier
    if (compositeMultiplier !== 1.0) {
      if (compositeMultiplier < 1.0) {
        // Reduction effect
        baseTarget = config.normal[0] + (baseTarget - config.normal[0]) * compositeMultiplier;
      } else {
        // Increase effect
        const range = config.normal[1] - normalMidpoint;
        baseTarget = normalMidpoint + range * (compositeMultiplier - 1);
      }
    }
    
    return baseTarget;
  }
  
  // Determine sensor status based on current value
  updateSensorStatus(sensorId) {
    const sensor = this.sensors[sensorId];
    const config = SENSOR_CONFIG[SENSORS[sensorId].type];
    
    let status = 'normal';
    
    if (sensor.value < config.critical[0] || sensor.value > config.critical[1]) {
      status = 'critical';
    } else if (sensor.value < config.warning[0] || sensor.value > config.warning[1]) {
      status = 'warning';
    }
    
    sensor.status = status;
    return status;
  }
  
  // Start an issue with realistic cascade effects
  introduceIssue(issueKey) {
    const issue = ENHANCED_ISSUES[issueKey];
    if (!issue) return;
    
    this.issueStates[issueKey] = {
      active: true,
      startTime: this.time,
      severity: issue.severity,
    };
    
    // Apply effects to affected sensors
    issue.affectedComponents.forEach(componentKey => {
      // Find all sensors for this component
      Object.keys(SENSORS).forEach(sensorId => {
        const sensor = SENSORS[sensorId];
        if (sensor.component === componentKey) {
          const sensorType = sensor.type;
          
          // Check for primary effects
          if (issue.primaryEffects[sensorType]) {
            this.applySensorEffect(sensorId, issueKey, issue.primaryEffects[sensorType]);
          }
          
          // Check for secondary effects
          if (issue.secondaryEffects[sensorType]) {
            this.applySensorEffect(sensorId, issueKey, issue.secondaryEffects[sensorType]);
          }
          
          // Check for downstream effects
          if (issue.downstreamEffects[sensorType]) {
            this.applySensorEffect(sensorId, issueKey, issue.downstreamEffects[sensorType]);
          }
        }
      });
    });
  }
  
  // Apply specific effect to a sensor
  applySensorEffect(sensorId, issueKey, effect) {
    if (!this.sensors[sensorId].issueEffects) {
      this.sensors[sensorId].issueEffects = {};
    }
    
    this.sensors[sensorId].issueEffects[issueKey] = {
      active: true,
      startTime: this.time,
      delay: effect.delay || 0,
      multiplier: effect.multiplier || 1.0,
      variance: effect.variance || 0.1,
    };
  }
  
  // Remove an issue and its effects
  clearIssue(issueKey) {
    if (this.issueStates[issueKey]) {
      this.issueStates[issueKey].active = false;
    }
    
    // Remove effects from all sensors
    Object.keys(this.sensors).forEach(sensorId => {
      if (this.sensors[sensorId].issueEffects[issueKey]) {
        this.sensors[sensorId].issueEffects[issueKey].active = false;
      }
    });
  }
  
  // Clear all issues
  clearAllIssues() {
    Object.keys(this.issueStates).forEach(issueKey => {
      this.clearIssue(issueKey);
    });
    this.issueStates = {};
  }
  
  // Main simulation update
  update() {
    const currentTime = this.time + this.updateInterval;
    const deltaTime = currentTime - this.time;
    this.time = currentTime;
    
    const sensorData = {};
    
    Object.keys(this.sensors).forEach(sensorId => {
      // Calculate target value based on normal operation + issues
      const targetValue = this.calculateTargetValue(sensorId);
      
      // Update sensor with realistic dynamics
      const newValue = this.updateSensorDynamics(sensorId, targetValue, deltaTime);
      
      // Update status
      const status = this.updateSensorStatus(sensorId);
      
      sensorData[sensorId] = {
        value: newValue,
        status: status,
        trend: this.sensors[sensorId].changeRate > 0 ? 'rising' : 
               this.sensors[sensorId].changeRate < 0 ? 'falling' : 'stable',
      };
    });
    
    return sensorData;
  }
  
  // Get current issue states
  getActiveIssues() {
    return Object.keys(this.issueStates).filter(key => this.issueStates[key].active);
  }
}

// React hook for realistic sensor data
export const useRealisticSensorData = () => {
  const simulatorRef = useRef(null);
  const [sensorData, setSensorData] = useState({});
  const [activeIssues, setActiveIssues] = useState([]);
  
  // Initialize simulator
  useEffect(() => {
    simulatorRef.current = new SensorSimulator();
    
    // Initial data
    const initialData = simulatorRef.current.update();
    setSensorData(initialData);
    
    // Start simulation loop
    const interval = setInterval(() => {
      const newData = simulatorRef.current.update();
      setSensorData(newData);
      setActiveIssues(simulatorRef.current.getActiveIssues());
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Issue control functions
  const introduceIssue = useCallback((issueKey) => {
    if (simulatorRef.current) {
      simulatorRef.current.introduceIssue(issueKey);
      setActiveIssues(simulatorRef.current.getActiveIssues());
    }
  }, []);
  
  const clearIssue = useCallback((issueKey) => {
    if (simulatorRef.current) {
      simulatorRef.current.clearIssue(issueKey);
      setActiveIssues(simulatorRef.current.getActiveIssues());
    }
  }, []);
  
  const resetSimulation = useCallback(() => {
    if (simulatorRef.current) {
      simulatorRef.current.clearAllIssues();
      setActiveIssues([]);
    }
  }, []);
  
  // Get available issues
  const getAvailableIssues = useCallback(() => {
    return Object.keys(ENHANCED_ISSUES).map(key => ({
      key,
      name: ENHANCED_ISSUES[key].name,
      severity: ENHANCED_ISSUES[key].severity,
    }));
  }, []);
  
  return {
    sensorData,
    activeIssues,
    introduceIssue,
    clearIssue,
    resetSimulation,
    getAvailableIssues,
  };
};