// Enhanced paper mill data with industry-realistic sensor configurations
// Based on comprehensive research of actual paper mill operations

// Defines the physical components of the paper mill
export const COMPONENTS = {
  PULP_PREPARATION: { name: 'Pulp Preparation' },
  HEADBOX: { name: 'Headbox' },
  WIRE_SECTION: { name: 'Wire Section' },
  PRESS_SECTION: { name: 'Press Section' },
  DRYING_SECTION: { name: 'Drying Section' },
  CALENDERING: { name: 'Calendering' },
  WINDING_REELING: { name: 'Winding/Reeling' },
};

// Enhanced sensor types with industry-realistic ranges and properties
export const SENSOR_CONFIG = {
  // Basic process sensors
  TEMPERATURE: { 
    unit: '°C', 
    normal: [60, 120], 
    warning: [50, 140], 
    critical: [40, 160],
    noise: 0.5, // ±0.5°C noise
    responseTime: 5, // 5 second response time
  },
  
  // Specialized pressure sensors
  PRESSURE: { 
    unit: 'bar', 
    normal: [2, 8], 
    warning: [1.5, 10], 
    critical: [1, 12],
    noise: 0.1,
    responseTime: 2,
  },
  
  STEAM_PRESSURE: { 
    unit: 'bar', 
    normal: [3, 8], 
    warning: [2, 10], 
    critical: [1, 12],
    noise: 0.2,
    responseTime: 3,
  },
  
  VACUUM_PRESSURE: { 
    unit: 'kPa', 
    normal: [10, 40], 
    warning: [5, 50], 
    critical: [2, 70],
    noise: 1.0,
    responseTime: 2,
  },
  
  NIP_PRESSURE: { 
    unit: 'MPa', 
    normal: [5, 12], 
    warning: [3, 14], 
    critical: [2, 16],
    noise: 0.2,
    responseTime: 1,
  },
  
  // Motion and tension sensors
  SPEED: { 
    unit: 'm/min', 
    normal: [800, 1800], 
    warning: [600, 2000], 
    critical: [400, 2200],
    noise: 5,
    responseTime: 1,
  },
  
  WEB_TENSION: { 
    unit: 'N/m', 
    normal: [100, 300], 
    warning: [75, 450], 
    critical: [50, 500],
    noise: 2,
    responseTime: 0.5,
  },
  
  VIBRATION: { 
    unit: 'mm/s', 
    normal: [0.5, 2.5], 
    warning: [0.2, 4.0], 
    critical: [0.1, 6.0],
    noise: 0.1,
    responseTime: 0.1,
  },
  
  // Quality and process sensors
  CONSISTENCY: { 
    unit: '%', 
    normal: [0.5, 1.2], 
    warning: [0.3, 1.5], 
    critical: [0.2, 2.0],
    noise: 0.02,
    responseTime: 10,
  },
  
  MOISTURE: { 
    unit: '%', 
    normal: [6, 9], 
    warning: [4, 11], 
    critical: [2, 13],
    noise: 0.1,
    responseTime: 5,
  },
  
  PH: { 
    unit: 'pH', 
    normal: [6.5, 7.5], 
    warning: [6.0, 8.0], 
    critical: [5.5, 8.5],
    noise: 0.05,
    responseTime: 15,
  },
  
  FLOW_RATE: { 
    unit: 'm³/h', 
    normal: [200, 800], 
    warning: [150, 1000], 
    critical: [100, 1200],
    noise: 5,
    responseTime: 3,
  },
  
  // Advanced quality sensors
  BASIS_WEIGHT: { 
    unit: 'g/m²', 
    normal: [75, 85], 
    warning: [70, 90], 
    critical: [65, 95],
    noise: 0.5,
    responseTime: 30,
  },
  
  CALIPER: { 
    unit: 'µm', 
    normal: [80, 120], 
    warning: [70, 130], 
    critical: [60, 140],
    noise: 1,
    responseTime: 30,
  },
  
  SMOOTHNESS: { 
    unit: 'µm', 
    normal: [1.5, 3.0], 
    warning: [1.0, 4.0], 
    critical: [0.8, 5.0],
    noise: 0.05,
    responseTime: 60,
  },
  
  GLOSS: { 
    unit: 'GU', 
    normal: [50, 70], 
    warning: [40, 80], 
    critical: [30, 90],
    noise: 1,
    responseTime: 60,
  },
  
  // Specialized equipment sensors
  LINEAR_LOAD: { 
    unit: 'kN/m', 
    normal: [300, 800], 
    warning: [200, 1000], 
    critical: [100, 1200],
    noise: 10,
    responseTime: 2,
  },
  
  ROLL_DIAMETER: { 
    unit: 'm', 
    normal: [1.5, 3.5], 
    warning: [1.0, 4.0], 
    critical: [0.8, 4.5],
    noise: 0.01,
    responseTime: 5,
  },
};

// Comprehensive sensor mapping with realistic industry sensors
export const SENSORS = {
  // Pulp Preparation - Realistic sensor set
  PULP_PREPARATION_TEMPERATURE: { name: 'Process Temperature', component: 'PULP_PREPARATION', type: 'TEMPERATURE' },
  PULP_PREPARATION_PRESSURE: { name: 'System Pressure', component: 'PULP_PREPARATION', type: 'PRESSURE' },
  PULP_PREPARATION_CONSISTENCY: { name: 'Pulp Consistency', component: 'PULP_PREPARATION', type: 'CONSISTENCY' },
  PULP_PREPARATION_PH: { name: 'pH Control', component: 'PULP_PREPARATION', type: 'PH' },
  PULP_PREPARATION_FLOW_RATE: { name: 'Flow Rate', component: 'PULP_PREPARATION', type: 'FLOW_RATE' },
  PULP_PREPARATION_VIBRATION: { name: 'Equipment Vibration', component: 'PULP_PREPARATION', type: 'VIBRATION' },
  
  // Headbox - Critical consistency and distribution control
  HEADBOX_TEMPERATURE: { name: 'Stock Temperature', component: 'HEADBOX', type: 'TEMPERATURE' },
  HEADBOX_PRESSURE: { name: 'Header Pressure', component: 'HEADBOX', type: 'PRESSURE' },
  HEADBOX_CONSISTENCY: { name: 'Stock Consistency', component: 'HEADBOX', type: 'CONSISTENCY' },
  HEADBOX_PH: { name: 'Stock pH', component: 'HEADBOX', type: 'PH' },
  HEADBOX_FLOW_RATE: { name: 'Total Flow', component: 'HEADBOX', type: 'FLOW_RATE' },
  HEADBOX_BASIS_WEIGHT: { name: 'Basis Weight Profile', component: 'HEADBOX', type: 'BASIS_WEIGHT' },
  
  // Wire Section - Forming and dewatering
  WIRE_SECTION_TEMPERATURE: { name: 'Process Temperature', component: 'WIRE_SECTION', type: 'TEMPERATURE' },
  WIRE_SECTION_VACUUM_PRESSURE: { name: 'Vacuum Pressure', component: 'WIRE_SECTION', type: 'VACUUM_PRESSURE' },
  WIRE_SECTION_SPEED: { name: 'Wire Speed', component: 'WIRE_SECTION', type: 'SPEED' },
  WIRE_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'WIRE_SECTION', type: 'WEB_TENSION' },
  WIRE_SECTION_MOISTURE: { name: 'Sheet Moisture', component: 'WIRE_SECTION', type: 'MOISTURE' },
  WIRE_SECTION_CONSISTENCY: { name: 'Formation Quality', component: 'WIRE_SECTION', type: 'CONSISTENCY' },
  WIRE_SECTION_VIBRATION: { name: 'Table Vibration', component: 'WIRE_SECTION', type: 'VIBRATION' },
  
  // Press Section - Mechanical dewatering
  PRESS_SECTION_TEMPERATURE: { name: 'Roll Temperature', component: 'PRESS_SECTION', type: 'TEMPERATURE' },
  PRESS_SECTION_NIP_PRESSURE: { name: 'Nip Pressure', component: 'PRESS_SECTION', type: 'NIP_PRESSURE' },
  PRESS_SECTION_LINEAR_LOAD: { name: 'Linear Load', component: 'PRESS_SECTION', type: 'LINEAR_LOAD' },
  PRESS_SECTION_SPEED: { name: 'Press Speed', component: 'PRESS_SECTION', type: 'SPEED' },
  PRESS_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'PRESS_SECTION', type: 'WEB_TENSION' },
  PRESS_SECTION_MOISTURE: { name: 'Sheet Moisture', component: 'PRESS_SECTION', type: 'MOISTURE' },
  PRESS_SECTION_VIBRATION: { name: 'Press Vibration', component: 'PRESS_SECTION', type: 'VIBRATION' },
  
  // Drying Section - Thermal processing
  DRYING_SECTION_TEMPERATURE: { name: 'Cylinder Temperature', component: 'DRYING_SECTION', type: 'TEMPERATURE' },
  DRYING_SECTION_STEAM_PRESSURE: { name: 'Steam Pressure', component: 'DRYING_SECTION', type: 'STEAM_PRESSURE' },
  DRYING_SECTION_SPEED: { name: 'Section Speed', component: 'DRYING_SECTION', type: 'SPEED' },
  DRYING_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'DRYING_SECTION', type: 'WEB_TENSION' },
  DRYING_SECTION_MOISTURE: { name: 'Sheet Moisture', component: 'DRYING_SECTION', type: 'MOISTURE' },
  DRYING_SECTION_VIBRATION: { name: 'Cylinder Vibration', component: 'DRYING_SECTION', type: 'VIBRATION' },
  
  // Calendering - Surface finishing
  CALENDERING_TEMPERATURE: { name: 'Roll Temperature', component: 'CALENDERING', type: 'TEMPERATURE' },
  CALENDERING_NIP_PRESSURE: { name: 'Nip Pressure', component: 'CALENDERING', type: 'NIP_PRESSURE' },
  CALENDERING_LINEAR_LOAD: { name: 'Linear Load', component: 'CALENDERING', type: 'LINEAR_LOAD' },
  CALENDERING_SPEED: { name: 'Calender Speed', component: 'CALENDERING', type: 'SPEED' },
  CALENDERING_WEB_TENSION: { name: 'Web Tension', component: 'CALENDERING', type: 'WEB_TENSION' },
  CALENDERING_CALIPER: { name: 'Sheet Caliper', component: 'CALENDERING', type: 'CALIPER' },
  CALENDERING_SMOOTHNESS: { name: 'Surface Smoothness', component: 'CALENDERING', type: 'SMOOTHNESS' },
  CALENDERING_GLOSS: { name: 'Surface Gloss', component: 'CALENDERING', type: 'GLOSS' },
  
  // Winding/Reeling - Final processing
  WINDING_REELING_TEMPERATURE: { name: 'Process Temperature', component: 'WINDING_REELING', type: 'TEMPERATURE' },
  WINDING_REELING_SPEED: { name: 'Winding Speed', component: 'WINDING_REELING', type: 'SPEED' },
  WINDING_REELING_WEB_TENSION: { name: 'Web Tension', component: 'WINDING_REELING', type: 'WEB_TENSION' },
  WINDING_REELING_LINEAR_LOAD: { name: 'Nip Load', component: 'WINDING_REELING', type: 'LINEAR_LOAD' },
  WINDING_REELING_ROLL_DIAMETER: { name: 'Roll Diameter', component: 'WINDING_REELING', type: 'ROLL_DIAMETER' },
  WINDING_REELING_MOISTURE: { name: 'Final Moisture', component: 'WINDING_REELING', type: 'MOISTURE' },
  WINDING_REELING_VIBRATION: { name: 'Winding Vibration', component: 'WINDING_REELING', type: 'VIBRATION' },
};

// Enhanced issues with realistic primary/secondary response patterns
export const ENHANCED_ISSUES = {
  // Web/Sheet Break - Most critical issue
  WEB_BREAK: {
    name: 'Web Break',
    severity: 'critical',
    primaryEffects: {
      // Immediate response (0-5 seconds)
      WEB_TENSION: { multiplier: 0.0, delay: 0, variance: 0.1 }, // Immediate drop to zero
      SPEED: { multiplier: 0.2, delay: 1, variance: 0.1 }, // Speed reduction
      VIBRATION: { multiplier: 3.0, delay: 2, variance: 0.2 }, // Increased vibration
    },
    secondaryEffects: {
      // Short-term response (5-60 seconds)
      VACUUM_PRESSURE: { multiplier: 0.7, delay: 10, variance: 0.1 },
      STEAM_PRESSURE: { multiplier: 0.8, delay: 15, variance: 0.1 },
      TEMPERATURE: { multiplier: 0.9, delay: 20, variance: 0.1 },
    },
    downstreamEffects: {
      // Medium-term response (1-10 minutes)
      MOISTURE: { multiplier: 1.2, delay: 60, variance: 0.2 },
      BASIS_WEIGHT: { multiplier: 1.1, delay: 120, variance: 0.3 },
    },
    affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION', 'DRYING_SECTION', 'CALENDERING', 'WINDING_REELING'],
  },
  
  // Consistency Control Failure
  CONSISTENCY_CONTROL_FAILURE: {
    name: 'Consistency Control Failure',
    severity: 'high',
    primaryEffects: {
      CONSISTENCY: { multiplier: 1.5, delay: 0, variance: 0.3 },
      FLOW_RATE: { multiplier: 1.2, delay: 5, variance: 0.2 },
      PH: { multiplier: 1.1, delay: 10, variance: 0.1 },
    },
    secondaryEffects: {
      BASIS_WEIGHT: { multiplier: 1.3, delay: 30, variance: 0.4 },
      PRESSURE: { multiplier: 1.1, delay: 20, variance: 0.1 },
    },
    downstreamEffects: {
      MOISTURE: { multiplier: 1.1, delay: 60, variance: 0.2 },
      CALIPER: { multiplier: 1.2, delay: 90, variance: 0.3 },
      SMOOTHNESS: { multiplier: 1.1, delay: 120, variance: 0.2 },
    },
    affectedComponents: ['PULP_PREPARATION', 'HEADBOX', 'WIRE_SECTION'],
  },
  
  // Steam System Failure
  STEAM_SYSTEM_FAILURE: {
    name: 'Steam System Failure',
    severity: 'high',
    primaryEffects: {
      STEAM_PRESSURE: { multiplier: 0.4, delay: 0, variance: 0.2 },
      TEMPERATURE: { multiplier: 0.6, delay: 5, variance: 0.1 },
    },
    secondaryEffects: {
      MOISTURE: { multiplier: 1.4, delay: 30, variance: 0.3 },
      SPEED: { multiplier: 0.8, delay: 45, variance: 0.1 },
      WEB_TENSION: { multiplier: 1.2, delay: 60, variance: 0.2 },
    },
    downstreamEffects: {
      CALIPER: { multiplier: 1.1, delay: 120, variance: 0.2 },
      SMOOTHNESS: { multiplier: 0.9, delay: 180, variance: 0.1 },
    },
    affectedComponents: ['DRYING_SECTION'],
  },
  
  // Bearing Failure - Predictive maintenance scenario
  BEARING_FAILURE: {
    name: 'Bearing Failure',
    severity: 'medium',
    primaryEffects: {
      VIBRATION: { multiplier: 3.5, delay: 0, variance: 0.4 },
      TEMPERATURE: { multiplier: 1.6, delay: 30, variance: 0.2 },
    },
    secondaryEffects: {
      SPEED: { multiplier: 0.95, delay: 300, variance: 0.05 },
      WEB_TENSION: { multiplier: 1.1, delay: 180, variance: 0.1 },
    },
    downstreamEffects: {
      SMOOTHNESS: { multiplier: 0.9, delay: 600, variance: 0.1 },
      GLOSS: { multiplier: 0.95, delay: 900, variance: 0.1 },
    },
    affectedComponents: ['PRESS_SECTION', 'DRYING_SECTION', 'CALENDERING', 'WINDING_REELING'],
  },
  
  // Hydraulic System Failure
  HYDRAULIC_SYSTEM_FAILURE: {
    name: 'Hydraulic System Failure',
    severity: 'high',
    primaryEffects: {
      PRESSURE: { multiplier: 0.3, delay: 0, variance: 0.2 },
      NIP_PRESSURE: { multiplier: 0.2, delay: 5, variance: 0.3 },
      LINEAR_LOAD: { multiplier: 0.2, delay: 5, variance: 0.3 },
    },
    secondaryEffects: {
      MOISTURE: { multiplier: 1.3, delay: 60, variance: 0.2 },
      WEB_TENSION: { multiplier: 1.2, delay: 30, variance: 0.1 },
      VIBRATION: { multiplier: 1.5, delay: 20, variance: 0.2 },
    },
    downstreamEffects: {
      CALIPER: { multiplier: 0.9, delay: 120, variance: 0.1 },
      SMOOTHNESS: { multiplier: 0.8, delay: 180, variance: 0.2 },
    },
    affectedComponents: ['PRESS_SECTION', 'CALENDERING'],
  },
  
  // Vacuum System Failure
  VACUUM_SYSTEM_FAILURE: {
    name: 'Vacuum System Failure',
    severity: 'medium',
    primaryEffects: {
      VACUUM_PRESSURE: { multiplier: 0.3, delay: 0, variance: 0.3 },
    },
    secondaryEffects: {
      MOISTURE: { multiplier: 1.4, delay: 60, variance: 0.3 },
      WEB_TENSION: { multiplier: 1.1, delay: 45, variance: 0.1 },
      CONSISTENCY: { multiplier: 1.2, delay: 30, variance: 0.2 },
    },
    downstreamEffects: {
      BASIS_WEIGHT: { multiplier: 0.9, delay: 120, variance: 0.2 },
      CALIPER: { multiplier: 1.1, delay: 180, variance: 0.2 },
    },
    affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION'],
  },
  
  // Motor Overheating
  MOTOR_OVERHEATING: {
    name: 'Motor Overheating',
    severity: 'medium',
    primaryEffects: {
      TEMPERATURE: { multiplier: 1.8, delay: 0, variance: 0.2 },
      VIBRATION: { multiplier: 1.6, delay: 60, variance: 0.3 },
    },
    secondaryEffects: {
      SPEED: { multiplier: 0.9, delay: 180, variance: 0.1 },
      WEB_TENSION: { multiplier: 1.1, delay: 120, variance: 0.1 },
    },
    downstreamEffects: {
      SMOOTHNESS: { multiplier: 0.95, delay: 300, variance: 0.1 },
    },
    affectedComponents: ['PRESS_SECTION', 'DRYING_SECTION', 'CALENDERING', 'WINDING_REELING'],
  },
  
  // Web Tension Instability
  WEB_TENSION_INSTABILITY: {
    name: 'Web Tension Instability',
    severity: 'medium',
    primaryEffects: {
      WEB_TENSION: { multiplier: 1.8, delay: 0, variance: 0.4 },
      VIBRATION: { multiplier: 2.0, delay: 10, variance: 0.3 },
    },
    secondaryEffects: {
      SPEED: { multiplier: 0.95, delay: 30, variance: 0.1 },
      ROLL_DIAMETER: { multiplier: 1.05, delay: 60, variance: 0.1 },
    },
    downstreamEffects: {
      CALIPER: { multiplier: 1.1, delay: 120, variance: 0.2 },
      SMOOTHNESS: { multiplier: 0.9, delay: 180, variance: 0.1 },
    },
    affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION', 'DRYING_SECTION', 'CALENDERING', 'WINDING_REELING'],
  },
};

// Sensor behavior profiles for realistic simulation
export const SENSOR_PROFILES = {
  // Fast response sensors
  TENSION_FAST: {
    responseTime: 0.5,
    noise: 0.02,
    drift: 0.001,
    nonlinearity: 0.05,
  },
  
  // Medium response sensors  
  PRESSURE_MEDIUM: {
    responseTime: 2.0,
    noise: 0.01,
    drift: 0.0005,
    nonlinearity: 0.02,
  },
  
  // Slow response sensors
  QUALITY_SLOW: {
    responseTime: 30.0,
    noise: 0.005,
    drift: 0.0002,
    nonlinearity: 0.01,
  },
};