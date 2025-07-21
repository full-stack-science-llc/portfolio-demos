import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaperMillDiagram from './components/PaperMillDiagram';
import ControlPanel from './components/ControlPanel';
import SensorDashboard from './components/SensorDashboard';
import { useSensorData } from './hooks/useSensorData';
import { SENSORS, COMPONENTS } from './constants/millData';

const MAX_DATA_POINTS = 30;

function App() {
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
      <Header />
      
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
      </main>
    </div>
  );
}

export default App;
