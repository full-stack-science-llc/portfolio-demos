import React from 'react';
import { COMPONENTS, SENSORS, SENSOR_CONFIG } from '../constants/realisticMillData';

const componentKeys = Object.keys(COMPONENTS);

const StatusIndicator = ({ status }) => {
  if (status === 'critical') {
    return (
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    );
  }
  
  if (status === 'warning') {
    return (
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    );
  }
  
  return (
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  );
};

const FlowConnection = ({ index, isLast }) => {
  if (isLast) return null;
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-8 h-0.5 bg-voith-gray-300"></div>
        <svg className="w-4 h-4 text-voith-gray-400 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

function PaperMillDiagram({ sensorData, onComponentClick, selectedComponent, getComponentStatus }) {
  // Calculate actual sensor status based on current value and ranges
  const calculateSensorStatus = (sensorValue, sensorConfig) => {
    if (sensorValue === undefined || sensorValue === null) return 'normal';
    
    // Check critical ranges first
    if (sensorValue < sensorConfig.critical[0] || sensorValue > sensorConfig.critical[1]) {
      return 'critical';
    }
    
    // Check warning ranges
    if (sensorValue < sensorConfig.warning[0] || sensorValue > sensorConfig.warning[1]) {
      return 'warning';
    }
    
    // Check normal ranges
    if (sensorValue < sensorConfig.normal[0] || sensorValue > sensorConfig.normal[1]) {
      return 'warning';
    }
    
    return 'normal';
  };

  const componentStatus = componentKeys.reduce((acc, key) => {
    // Use the passed getComponentStatus function if available, otherwise calculate locally
    if (getComponentStatus) {
      acc[key] = getComponentStatus(key);
    } else {
      const componentSensors = Object.keys(SENSORS).filter(
        (sensorId) => SENSORS[sensorId].component === key
      );

      let worstStatus = 'normal';
      componentSensors.forEach(sensorId => {
        if (sensorData[sensorId]) {
          const sensor = SENSORS[sensorId];
          const config = SENSOR_CONFIG[sensor.type];
          const currentValue = sensorData[sensorId].value;
          const actualStatus = calculateSensorStatus(currentValue, config);
          
          // Determine worst status (critical > warning > normal)
          if (actualStatus === 'critical') {
            worstStatus = 'critical';
          } else if (actualStatus === 'warning' && worstStatus !== 'critical') {
            worstStatus = 'warning';
          }
        }
      });
      acc[key] = worstStatus;
    }
    return acc;
  }, {});

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-voith-gray-700 mb-2">Paper Mill Process Flow</h3>
        <p className="text-sm text-voith-gray-500">Click on any stage to view detailed sensor data</p>
      </div>
      
      {/* Process Flow Diagram */}
      <div className="flex items-center justify-between">
        {componentKeys.map((key, index) => {
          const component = COMPONENTS[key];
          const isSelected = selectedComponent === key;
          const status = componentStatus[key];

          return (
            <React.Fragment key={key}>
              <div className="flex flex-col items-center flex-1">
                <div
                  onClick={() => onComponentClick(key)}
                  className={`relative w-32 h-32 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center ${
                    isSelected
                      ? 'bg-voith-primary text-white shadow-xl'
                      : status === 'critical'
                      ? 'bg-red-50 border-2 border-red-200 text-red-700'
                      : status === 'warning'
                      ? 'bg-yellow-50 border-2 border-yellow-200 text-yellow-700'
                      : 'bg-white border-2 border-voith-gray-200 text-voith-gray-700 hover:bg-voith-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-base font-semibold leading-tight">
                      {component.name.split(' ')[0]}
                    </div>
                    {component.name.split(' ').length > 1 && (
                      <div className="text-sm leading-tight">
                        {component.name.split(' ').slice(1).join(' ')}
                      </div>
                    )}
                  </div>
                  <StatusIndicator status={status} />
                </div>
              </div>
              <FlowConnection index={index} isLast={index === componentKeys.length - 1} />
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-voith-gray-200">
        <div className="flex items-center justify-center space-x-6 text-xs text-voith-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full border border-white shadow-sm"></div>
            <span>Normal</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full border border-white shadow-sm"></div>
            <span>Warning</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full border border-white shadow-sm"></div>
            <span>Critical</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperMillDiagram;
