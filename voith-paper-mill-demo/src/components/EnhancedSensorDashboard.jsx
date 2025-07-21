import React from 'react';
import SensorChart from './SensorChart';
import { SENSORS, COMPONENTS, SENSOR_CONFIG } from '../constants/realisticMillData';

function EnhancedSensorDashboard({ liveData, selectedComponent, chartData, onClose }) {
  const componentSensors = Object.keys(SENSORS).filter(
    (id) => SENSORS[id].component === selectedComponent
  );

  // Get sensor status counts
  const statusCounts = componentSensors.reduce((acc, sensorId) => {
    const status = liveData[sensorId]?.status || 'normal';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  // Group sensors by type for better organization
  const sensorGroups = componentSensors.reduce((groups, sensorId) => {
    const sensor = SENSORS[sensorId];
    const category = getSensorCategory(sensor.type);
    if (!groups[category]) groups[category] = [];
    groups[category].push(sensorId);
    return groups;
  }, {});

  function getSensorCategory(sensorType) {
    const categories = {
      'Process Control': ['TEMPERATURE', 'STEAM_PRESSURE', 'PRESSURE', 'VACUUM_PRESSURE', 'PH', 'CONSISTENCY', 'FLOW_RATE'],
      'Motion & Tension': ['SPEED', 'WEB_TENSION', 'VIBRATION'],
      'Press & Nip': ['NIP_PRESSURE', 'LINEAR_LOAD'],
      'Quality Control': ['MOISTURE', 'BASIS_WEIGHT', 'CALIPER', 'SMOOTHNESS', 'GLOSS'],
      'Equipment': ['ROLL_DIAMETER'],
    };
    
    for (const [category, types] of Object.entries(categories)) {
      if (types.includes(sensorType)) return category;
    }
    return 'Other';
  }

  // Calculate actual sensor status based on current value and ranges
  function calculateSensorStatus(sensorValue, sensorConfig) {
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
  }

  return (
    <div className="voith-card h-full">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between p-6 border-b border-voith-gray-200 bg-gradient-to-r from-voith-gray-50 to-white rounded-t-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-voith-primary rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-voith-primary">
              {COMPONENTS[selectedComponent].name}
            </h2>
            <p className="text-sm text-voith-gray-600 mt-1">
              Real-time sensor monitoring • {componentSensors.length} sensors active
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Enhanced Status indicator */}
          <div className="flex items-center space-x-3 text-sm">
            {statusCounts.critical > 0 && (
              <div className="flex items-center space-x-1 text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-medium">{statusCounts.critical} Critical</span>
              </div>
            )}
            {statusCounts.warning > 0 && (
              <div className="flex items-center space-x-1 text-amber-600">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="font-medium">{statusCounts.warning} Warning</span>
              </div>
            )}
            {(!statusCounts.critical && !statusCounts.warning) && (
              <div className="flex items-center space-x-1 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium">All Normal</span>
              </div>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-voith-gray-400 hover:text-voith-gray-600 hover:bg-voith-gray-100 focus:outline-none focus:ring-2 focus:ring-voith-primary focus:ring-offset-2 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sensor Charts Grid - Organized by Category */}
      <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {Object.entries(sensorGroups).map(([category, sensorIds]) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-lg font-semibold text-voith-gray-800 mb-4 flex items-center">
              <span className="mr-2">{category}</span>
              <span className="text-xs text-voith-gray-500 font-normal">
                ({sensorIds.length} sensor{sensorIds.length !== 1 ? 's' : ''})
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {sensorIds.map(sensorId => {
                const sensor = SENSORS[sensorId];
                const currentValue = liveData[sensorId]?.value;
                const config = SENSOR_CONFIG[sensor.type];
                
                // Calculate the actual status based on current value and ranges
                const actualStatus = calculateSensorStatus(currentValue, config);
                
                return (
                  <div key={sensorId} className="bg-white border border-voith-gray-200 rounded-xl p-4 shadow-sm hover:shadow-voith transition-shadow duration-200">
                    {/* Clean Sensor Info Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          actualStatus === 'critical' ? 'bg-red-500 animate-pulse' :
                          actualStatus === 'warning' ? 'bg-amber-500' : 'bg-green-500'
                        }`}></div>
                        <h3 className="font-medium text-voith-gray-800 text-sm">{sensor.name}</h3>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {currentValue !== undefined && (
                          <span className={`text-sm font-semibold ${
                            actualStatus === 'critical' ? 'text-red-600' :
                            actualStatus === 'warning' ? 'text-amber-600' : 'text-voith-gray-700'
                          }`}>
                            {typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue} {config.unit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Operating Range Indicator */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-voith-gray-500 mb-1">
                        <span>Normal: {config.normal[0]}-{config.normal[1]} {config.unit}</span>
                        <span className={`font-medium ${
                          actualStatus === 'critical' ? 'text-red-600' :
                          actualStatus === 'warning' ? 'text-amber-600' : 'text-green-600'
                        }`}>
                          {actualStatus.toUpperCase()}
                        </span>
                      </div>
                      
                      {/* Range bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="relative h-full">
                          {/* Normal range */}
                          <div 
                            className="absolute bg-green-300 h-full rounded-full"
                            style={{
                              left: `${((config.normal[0] - config.critical[0]) / (config.critical[1] - config.critical[0])) * 100}%`,
                              width: `${((config.normal[1] - config.normal[0]) / (config.critical[1] - config.critical[0])) * 100}%`,
                            }}
                          ></div>
                          
                          {/* Current value indicator */}
                          {currentValue !== undefined && (
                            <div 
                              className={`absolute w-1 h-full rounded-full ${
                                actualStatus === 'critical' ? 'bg-red-600' :
                                actualStatus === 'warning' ? 'bg-amber-600' : 'bg-green-600'
                              }`}
                              style={{
                                left: `${Math.max(0, Math.min(100, ((currentValue - config.critical[0]) / (config.critical[1] - config.critical[0])) * 100))}%`,
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart Container */}
                    <div className="h-40 bg-voith-gray-50 rounded-lg p-2">
                      <SensorChart
                        sensorId={sensorId}
                        data={chartData[sensorId] || []}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        {componentSensors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-voith-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-voith-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-voith-gray-700 mb-2">No Sensors Available</h3>
            <p className="text-voith-gray-500">This component doesn't have any configured sensors.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnhancedSensorDashboard;