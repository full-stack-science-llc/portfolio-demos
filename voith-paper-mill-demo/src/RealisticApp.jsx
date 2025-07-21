import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaperMillDiagram from './components/PaperMillDiagram';
import RealisticControlPanel from './components/RealisticControlPanel';
import EnhancedSensorDashboard from './components/EnhancedSensorDashboard';
import { useRealisticSensorData } from './hooks/useRealisticSensorData';
import { SENSORS, COMPONENTS, SENSOR_CONFIG } from './constants/realisticMillData';

const MAX_DATA_POINTS = 30;

function RealisticApp() {
  const { 
    sensorData, 
    activeIssues, 
    introduceIssue, 
    clearIssue, 
    resetSimulation, 
    getAvailableIssues 
  } = useRealisticSensorData();
  
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [chartDataStorage, setChartDataStorage] = useState({});

  // Initialize chart data for ALL components at startup
  useEffect(() => {
    const initialStorage = {};
    Object.keys(COMPONENTS).forEach(componentKey => {
      const componentSensors = Object.keys(SENSORS).filter(
        (id) => SENSORS[id].component === componentKey
      );
      const initialData = {};
      componentSensors.forEach(id => {
        initialData[id] = Array(MAX_DATA_POINTS).fill(null);
      });
      initialStorage[componentKey] = initialData;
    });
    setChartDataStorage(initialStorage);
  }, []);

  // Update chart data for ALL components simultaneously with new sensor readings
  useEffect(() => {
    if (sensorData) {
      setChartDataStorage(prevStorage => {
        // Only update if we have initialized storage
        if (Object.keys(prevStorage).length === 0) return prevStorage;
        
        const newStorage = { ...prevStorage };
        
        // Update data for ALL components, not just the selected one
        Object.keys(COMPONENTS).forEach(componentKey => {
          const componentSensors = Object.keys(SENSORS).filter(
            (id) => SENSORS[id].component === componentKey
          );

          componentSensors.forEach(sensorId => {
            if (sensorData[sensorId] && newStorage[componentKey]) {
              const currentHistory = newStorage[componentKey][sensorId] || [];
              const newHistory = [...currentHistory, sensorData[sensorId].value];
              if (newHistory.length > MAX_DATA_POINTS) {
                newHistory.shift();
              }
              newStorage[componentKey] = {
                ...newStorage[componentKey],
                [sensorId]: newHistory
              };
            }
          });
        });
        
        return newStorage;
      });
    }
  }, [sensorData]);

  const handleComponentClick = (componentKey) => {
    setSelectedComponent(componentKey);
  };

  const handleCloseDashboard = () => {
    setSelectedComponent(null);
  };

  // Calculate actual sensor status based on current value and ranges (same as in EnhancedSensorDashboard)
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

  // Calculate component status based on worst sensor in that component
  const getComponentStatus = (componentKey) => {
    const componentSensors = Object.keys(SENSORS).filter(
      (id) => SENSORS[id].component === componentKey
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
    
    return worstStatus;
  };

  // Calculate real-time alarm counts
  const getAlarmCounts = () => {
    let criticalCount = 0;
    let warningCount = 0;
    
    Object.keys(SENSORS).forEach(sensorId => {
      if (sensorData[sensorId]) {
        const sensor = SENSORS[sensorId];
        const config = SENSOR_CONFIG[sensor.type];
        const currentValue = sensorData[sensorId].value;
        const actualStatus = calculateSensorStatus(currentValue, config);
        
        if (actualStatus === 'critical') {
          criticalCount++;
        } else if (actualStatus === 'warning') {
          warningCount++;
        }
      }
    });
    
    return { criticalCount, warningCount };
  };

  const { criticalCount, warningCount } = getAlarmCounts();

  return (
    <div className="bg-voith-gray-50 min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Process Flow Diagram */}
        <div className="mb-8">
          <PaperMillDiagram
            sensorData={sensorData}
            onComponentClick={handleComponentClick}
            selectedComponent={selectedComponent}
            getComponentStatus={getComponentStatus}
          />
        </div>

        {/* Data & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sensor Dashboard */}
          <div className="lg:col-span-3">
            {selectedComponent ? (
              <EnhancedSensorDashboard
                liveData={sensorData}
                selectedComponent={selectedComponent}
                chartData={chartDataStorage[selectedComponent] || {}}
                onClose={handleCloseDashboard}
              />
            ) : (
              <div className="voith-card h-full min-h-[400px]">
                <div className="flex items-center justify-center h-full p-12">
                  <div className="text-center max-w-md">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      criticalCount > 0 ? 'bg-red-100' :
                      warningCount > 0 ? 'bg-yellow-100' :
                      'bg-green-100'
                    }`}>
                      {criticalCount > 0 ? (
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      ) : warningCount > 0 ? (
                        <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold text-voith-gray-700 mb-3">
                      {criticalCount > 0 ? `${criticalCount} Critical Alert${criticalCount !== 1 ? 's' : ''}` :
                       warningCount > 0 ? `${warningCount} Warning Alert${warningCount !== 1 ? 's' : ''}` :
                       'All Systems Normal'}
                    </h2>
                    <p className="text-voith-gray-500 leading-relaxed">
                      {criticalCount > 0 || warningCount > 0 ? 
                        'Sensor anomalies detected. Select a component from the diagram above to view detailed sensor data.' :
                        'No active alerts. Select a component from the diagram above to view its live sensor data.'}
                    </p>
                    {activeIssues.length > 0 && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>{activeIssues.length}</strong> active issue{activeIssues.length !== 1 ? 's' : ''} detected
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Control Panel */}
          <div className="lg:col-span-1">
            <div className="voith-card p-6">
              <RealisticControlPanel
                introduceIssue={introduceIssue}
                clearIssue={clearIssue}
                resetSimulation={resetSimulation}
                activeIssues={activeIssues}
                getAvailableIssues={getAvailableIssues}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Status Bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm border border-voith-gray-200 p-4">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${
                criticalCount > 0 ? 'bg-red-500 animate-pulse' : 
                warningCount > 0 ? 'bg-yellow-500' :
                activeIssues.length === 0 ? 'bg-green-500' : 
                activeIssues.some(issue => getAvailableIssues().find(a => a.key === issue)?.severity === 'critical') ? 'bg-red-500 animate-pulse' :
                'bg-yellow-500'
              }`}></div>
              <div>
                <div className="text-sm font-medium text-voith-gray-900">System Status</div>
                <div className="text-xs text-voith-gray-500">
                  {criticalCount > 0 ? `${criticalCount} Critical` : 
                   warningCount > 0 ? `${warningCount} Warning` :
                   activeIssues.length === 0 ? 'All Normal' : `${activeIssues.length} Active Issue${activeIssues.length !== 1 ? 's' : ''}`}
                </div>
              </div>
            </div>
          </div>

          {/* Sensor Count */}
          <div className="bg-white rounded-lg shadow-sm border border-voith-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-3 bg-blue-500"></div>
              <div>
                <div className="text-sm font-medium text-voith-gray-900">Active Sensors</div>
                <div className="text-xs text-voith-gray-500">
                  {Object.keys(sensorData).length} sensors monitored
                </div>
              </div>
            </div>
          </div>

          {/* Critical Alarms */}
          <div className="bg-white rounded-lg shadow-sm border border-voith-gray-200 p-4">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${
                criticalCount > 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-300'
              }`}></div>
              <div>
                <div className="text-sm font-medium text-voith-gray-900">Critical Alarms</div>
                <div className="text-xs text-voith-gray-500">
                  {criticalCount} critical
                </div>
              </div>
            </div>
          </div>

          {/* Warning Alarms */}
          <div className="bg-white rounded-lg shadow-sm border border-voith-gray-200 p-4">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${
                warningCount > 0 ? 'bg-yellow-500' : 'bg-gray-300'
              }`}></div>
              <div>
                <div className="text-sm font-medium text-voith-gray-900">Warning Alarms</div>
                <div className="text-xs text-voith-gray-500">
                  {warningCount} warnings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation Info */}
        <div className="mt-6 bg-gradient-to-r from-voith-primary to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Realistic Simulation</h3>
              <p className="text-blue-100 text-sm">
                This demo features industry-authentic sensor ranges, realistic cascade effects, and time-delayed responses 
                based on comprehensive research of actual paper mill operations.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{Object.keys(SENSORS).length}</div>
                  <div className="text-xs text-blue-100">Sensors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RealisticApp;