import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaperMillDiagram from './components/PaperMillDiagram';
import ControlPanel from './components/ControlPanel';
import SensorDashboard from './components/SensorDashboard';
import { useSensorData } from './hooks/useSensorData';
import { SENSORS, COMPONENTS } from './constants/millData';

const MAX_DATA_POINTS = 30;

function PaperMillApp() {
  const { sensorData, activeIssue, introduceIssue, resetSimulation } = useSensorData();
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

  return (
    <div className="bg-voith-gray-50 min-h-screen">
      {/* Demo Header - Different from main site header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Paper Mill Process Simulator</h1>
              <p className="text-gray-600">Interactive demonstration of real-time industrial process monitoring</p>
            </div>
            <div className="bg-green-100 border border-green-200 rounded-lg px-4 py-2">
              <span className="text-green-800 font-medium">Live Demo</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Process Flow Diagram */}
        <div className="mb-8">
          <PaperMillDiagram
            sensorData={sensorData}
            onComponentClick={handleComponentClick}
            selectedComponent={selectedComponent}
          />
        </div>

        {/* Data & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sensor Dashboard */}
          <div className="lg:col-span-3">
            {selectedComponent ? (
              <SensorDashboard
                liveData={sensorData}
                selectedComponent={selectedComponent}
                chartData={chartDataStorage[selectedComponent] || {}}
                onClose={handleCloseDashboard}
              />
            ) : (
              <div className="voith-card h-full min-h-[400px]">
                <div className="flex items-center justify-center h-full p-12">
                  <div className="text-center max-w-md">
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-voith-gray-700 mb-3">All Systems Normal</h2>
                    <p className="text-voith-gray-500 leading-relaxed">
                      No active alerts. Select a component from the diagram above to view its live sensor data.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Control Panel */}
          <div className="lg:col-span-1">
            <div className="voith-card p-6">
              <ControlPanel
                introduceIssue={introduceIssue}
                resetSimulation={resetSimulation}
                activeIssue={activeIssue}
              />
            </div>
          </div>
        </div>
        
        {/* Demo Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Demo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You're Seeing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time sensor data simulation with realistic values</li>
                <li>• Interactive process flow diagram</li>
                <li>• Component-level monitoring and analytics</li>
                <li>• Automated issue detection and alerting</li>
                <li>• Historical data tracking and visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-World Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive maintenance scheduling</li>
                <li>• Process optimization and efficiency gains</li>
                <li>• Quality control and consistency monitoring</li>
                <li>• Reduced downtime through early detection</li>
                <li>• Data-driven decision support systems</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-fss-primary/5 border border-fss-primary/20 rounded-lg">
            <h3 className="text-lg font-semibold text-fss-primary mb-3">
              How This Applies to Your Business
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This demo showcases our expertise in manufacturing process automation, real-time data visualization, 
              and ML-driven anomaly detection. Similar solutions can be adapted for any industrial process, 
              from chemical plants to assembly lines, helping organizations achieve operational excellence 
              through intelligent monitoring and automated decision support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaperMillApp;