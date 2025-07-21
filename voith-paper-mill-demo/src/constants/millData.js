// Defines the physical components of the paper mill.
export const COMPONENTS = {
  PULP_PREPARATION: { name: 'Pulp Preparation' },
  HEADBOX: { name: 'Headbox' },
  WIRE_SECTION: { name: 'Wire Section' },
  PRESS_SECTION: { name: 'Press Section' },
  DRYING_SECTION: { name: 'Drying Section' },
  CALENDERING: { name: 'Calendering' },
  WINDING_REELING: { name: 'Winding/Reeling' },
};

// Defines the types of sensors and their properties.
export const SENSOR_CONFIG = {
  TEMPERATURE: { unit: '°C', normal: [20, 120], warning: [15, 130], critical: [10, 140] },
  PRESSURE: { unit: 'bar', normal: [2, 8], warning: [1.5, 9], critical: [1, 12] },
  VIBRATION: { unit: 'mm/s', normal: [0.1, 2.5], warning: [0.05, 4.0], critical: [0.02, 5] },
  SPEED: { unit: 'm/min', normal: [800, 1200], warning: [750, 1250], critical: [700, 1300] },
  WEB_TENSION: { unit: 'N/m', normal: [2000, 4000], warning: [1800, 4200], critical: [1600, 4500] },
  MOISTURE: { unit: '%', normal: [4, 8], warning: [3, 10], critical: [2, 12] },
};

// Creates a comprehensive map of every unique sensor instance in the mill.
// Each sensor is uniquely identified by combining its component and type.
export const SENSORS = {
  // Pulp Preparation
  PULP_PREPARATION_TEMPERATURE: { name: 'Temperature', component: 'PULP_PREPARATION', type: 'TEMPERATURE' },
  PULP_PREPARATION_PRESSURE: { name: 'Pressure', component: 'PULP_PREPARATION', type: 'PRESSURE' },
  PULP_PREPARATION_VIBRATION: { name: 'Vibration', component: 'PULP_PREPARATION', type: 'VIBRATION' },
  PULP_PREPARATION_SPEED: { name: 'Speed', component: 'PULP_PREPARATION', type: 'SPEED' },
  // Headbox
  HEADBOX_TEMPERATURE: { name: 'Temperature', component: 'HEADBOX', type: 'TEMPERATURE' },
  HEADBOX_PRESSURE: { name: 'Pressure', component: 'HEADBOX', type: 'PRESSURE' },
  HEADBOX_VIBRATION: { name: 'Vibration', component: 'HEADBOX', type: 'VIBRATION' },
  HEADBOX_SPEED: { name: 'Speed', component: 'HEADBOX', type: 'SPEED' },
  HEADBOX_WEB_TENSION: { name: 'Web Tension', component: 'HEADBOX', type: 'WEB_TENSION' },
  // Wire Section
  WIRE_SECTION_TEMPERATURE: { name: 'Temperature', component: 'WIRE_SECTION', type: 'TEMPERATURE' },
  WIRE_SECTION_PRESSURE: { name: 'Pressure', component: 'WIRE_SECTION', type: 'PRESSURE' },
  WIRE_SECTION_VIBRATION: { name: 'Vibration', component: 'WIRE_SECTION', type: 'VIBRATION' },
  WIRE_SECTION_SPEED: { name: 'Speed', component: 'WIRE_SECTION', type: 'SPEED' },
  WIRE_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'WIRE_SECTION', type: 'WEB_TENSION' },
  WIRE_SECTION_MOISTURE: { name: 'Moisture', component: 'WIRE_SECTION', type: 'MOISTURE' },
  // Press Section
  PRESS_SECTION_TEMPERATURE: { name: 'Temperature', component: 'PRESS_SECTION', type: 'TEMPERATURE' },
  PRESS_SECTION_PRESSURE: { name: 'Pressure', component: 'PRESS_SECTION', type: 'PRESSURE' },
  PRESS_SECTION_VIBRATION: { name: 'Vibration', component: 'PRESS_SECTION', type: 'VIBRATION' },
  PRESS_SECTION_SPEED: { name: 'Speed', component: 'PRESS_SECTION', type: 'SPEED' },
  PRESS_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'PRESS_SECTION', type: 'WEB_TENSION' },
  PRESS_SECTION_MOISTURE: { name: 'Moisture', component: 'PRESS_SECTION', type: 'MOISTURE' },
  // Drying Section
  DRYING_SECTION_TEMPERATURE: { name: 'Temperature', component: 'DRYING_SECTION', type: 'TEMPERATURE' },
  DRYING_SECTION_PRESSURE: { name: 'Pressure', component: 'DRYING_SECTION', type: 'PRESSURE' },
  DRYING_SECTION_VIBRATION: { name: 'Vibration', component: 'DRYING_SECTION', type: 'VIBRATION' },
  DRYING_SECTION_SPEED: { name: 'Speed', component: 'DRYING_SECTION', type: 'SPEED' },
  DRYING_SECTION_WEB_TENSION: { name: 'Web Tension', component: 'DRYING_SECTION', type: 'WEB_TENSION' },
  DRYING_SECTION_MOISTURE: { name: 'Moisture', component: 'DRYING_SECTION', type: 'MOISTURE' },
  // Calendering
  CALENDERING_TEMPERATURE: { name: 'Temperature', component: 'CALENDERING', type: 'TEMPERATURE' },
  CALENDERING_PRESSURE: { name: 'Pressure', component: 'CALENDERING', type: 'PRESSURE' },
  CALENDERING_VIBRATION: { name: 'Vibration', component: 'CALENDERING', type: 'VIBRATION' },
  CALENDERING_SPEED: { name: 'Speed', component: 'CALENDERING', type: 'SPEED' },
  CALENDERING_WEB_TENSION: { name: 'Web Tension', component: 'CALENDERING', type: 'WEB_TENSION' },
  // Winding/Reeling
  WINDING_REELING_TEMPERATURE: { name: 'Temperature', component: 'WINDING_REELING', type: 'TEMPERATURE' },
  WINDING_REELING_PRESSURE: { name: 'Pressure', component: 'WINDING_REELING', type: 'PRESSURE' },
  WINDING_REELING_VIBRATION: { name: 'Vibration', component: 'WINDING_REELING', type: 'VIBRATION' },
  WINDING_REELING_SPEED: { name: 'Speed', component: 'WINDING_REELING', type: 'SPEED' },
  WINDING_REELING_WEB_TENSION: { name: 'Web Tension', component: 'WINDING_REELING', type: 'WEB_TENSION' },
};

// Defines the simulated issues and their effects on specific sensor types.
export const ISSUES = {
  PAPER_BREAK: { name: 'Paper Break', effects: { WEB_TENSION: 2.5, SPEED: 0.3, VIBRATION: 3.0 }, affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION', 'DRYING_SECTION'] },
  STEAM_SYSTEM_FAILURE: { name: 'Steam System Failure', effects: { TEMPERATURE: 0.6, PRESSURE: 0.4 }, affectedComponents: ['DRYING_SECTION'] },
  BEARING_FAILURE: { name: 'Bearing Failure', effects: { VIBRATION: 4.0, TEMPERATURE: 1.8 }, affectedComponents: ['PRESS_SECTION', 'DRYING_SECTION', 'WINDING_REELING'] },
  MOISTURE_CONTROL_ISSUE: { name: 'Moisture Control Issue', effects: { MOISTURE: 2.0, TEMPERATURE: 1.3 }, affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION', 'DRYING_SECTION'] },
  WEB_TENSION_INSTABILITY: { name: 'Web Tension Instability', effects: { WEB_TENSION: 1.8, VIBRATION: 2.2 }, affectedComponents: ['WIRE_SECTION', 'PRESS_SECTION', 'DRYING_SECTION', 'CALENDERING'] },
  PULP_QUALITY_ISSUE: { name: 'Pulp Quality Issue', effects: { PRESSURE: 1.5, SPEED: 0.8 }, affectedComponents: ['PULP_PREPARATION', 'HEADBOX', 'WIRE_SECTION'] },
  HYDRAULIC_SYSTEM_FAILURE: { name: 'Hydraulic System Failure', effects: { PRESSURE: 0.5, VIBRATION: 2.5 }, affectedComponents: ['PRESS_SECTION'] },
  MOTOR_OVERHEATING: { name: 'Motor Overheating', effects: { TEMPERATURE: 2.0, VIBRATION: 1.8 }, affectedComponents: ['PRESS_SECTION', 'DRYING_SECTION', 'WINDING_REELING'] },
};
