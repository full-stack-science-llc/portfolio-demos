import { useState, useEffect, useRef } from 'react';
import { SENSORS, SENSOR_CONFIG, ISSUES } from '../constants/millData';

// Helper to generate a random number in a range
const generateRandomValue = (min, max) => Math.random() * (max - min) + min;

// Initialize the state for each unique sensor instance
const getInitialState = () => {
  const initialState = {};
  for (const sensorId in SENSORS) {
    const sensor = SENSORS[sensorId];
    const config = SENSOR_CONFIG[sensor.type];
    initialState[sensorId] = {
      value: generateRandomValue(config.normal[0], config.normal[1]),
      status: 'normal',
    };
  }
  return initialState;
};

// Custom hook to manage the sensor data simulation
export const useSensorData = () => {
  const [sensorData, setSensorData] = useState(getInitialState);
  const [activeIssue, setActiveIssue] = useState(null);
  const activeIssueRef = useRef(null);

  useEffect(() => {
    activeIssueRef.current = activeIssue;
  }, [activeIssue]);

  useEffect(() => {
    const interval = setInterval(() => {
      const issue = activeIssueRef.current ? ISSUES[activeIssueRef.current] : null;

      setSensorData(prevData => {
        const newData = { ...prevData };
        for (const sensorId in SENSORS) {
          const sensor = SENSORS[sensorId];
          const config = SENSOR_CONFIG[sensor.type];
          let [min, max] = config.normal;

          // Check if an active issue affects this sensor's component and type
          if (issue && issue.affectedComponents.includes(sensor.component) && issue.effects[sensor.type]) {
            const multiplier = issue.effects[sensor.type];
            const midPoint = (min + max) / 2;
            const range = (max - min) / 2;
            min = midPoint - (range * multiplier);
            max = midPoint + (range * multiplier);
          }

          // Simulate a new value
          const fluctuation = (generateRandomValue(min, max) - newData[sensorId].value) * 0.3;
          let newValue = newData[sensorId].value + fluctuation;
          newValue = Math.max(config.critical[0], Math.min(newValue, config.critical[1]));

          // Determine the sensor's status
          let status = 'normal';
          if (newValue < config.warning[0] || newValue > config.warning[1]) {
            status = 'warning';
          }
          if (newValue < config.critical[0] || newValue > config.critical[1]) {
            status = 'critical';
          }
          
          newData[sensorId] = { value: newValue, status };
        }
        return newData;
      });
    }, 1500); // Update every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const introduceIssue = (issueKey) => setActiveIssue(issueKey);
  const resetSimulation = () => setActiveIssue(null);

  return { sensorData, activeIssue, introduceIssue, resetSimulation };
};
