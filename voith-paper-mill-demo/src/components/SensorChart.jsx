import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { SENSORS, SENSOR_CONFIG } from '../constants/realisticMillData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

function SensorChart({ sensorId, data }) {
  const sensor = SENSORS[sensorId];
  
  // Error handling for missing sensor
  if (!sensor) {
    console.error(`Sensor not found: ${sensorId}`);
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        Sensor not found: {sensorId}
      </div>
    );
  }
  
  const sensorConfig = SENSOR_CONFIG[sensor.type];
  
  // Error handling for missing sensor config
  if (!sensorConfig) {
    console.error(`Sensor config not found for type: ${sensor.type}`);
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        Config not found: {sensor.type}
      </div>
    );
  }

  const chartData = {
    labels: data.map((_, index) => index), // Simple numeric labels
    datasets: [
      {
        label: sensor.name,
        data: data,
        borderColor: '#003d82', // Voith primary blue
        backgroundColor: 'rgba(0, 61, 130, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${sensorConfig.unit}`,
        font: {
          size: 11,
          weight: '500',
          family: 'Inter, system-ui, sans-serif',
        },
        color: '#64748b',
        padding: {
          bottom: 8,
        },
        align: 'end',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 61, 130, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#003d82',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        titleFont: {
          size: 12,
          weight: '600',
        },
        bodyFont: {
          size: 11,
        },
        callbacks: {
          title: function() {
            return sensor.name;
          },
          label: function(context) {
            const value = typeof context.parsed.y === 'number' ? context.parsed.y.toFixed(2) : context.parsed.y;
            return `${value} ${sensorConfig.unit}`;
          }
        }
      },
      annotation: {
        annotations: {
          criticalMax: {
            type: 'box',
            yMin: sensorConfig.warning[1],
            yMax: sensorConfig.critical[1],
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            borderColor: 'rgba(239, 68, 68, 0)',
          },
          warningMax: {
            type: 'box',
            yMin: sensorConfig.normal[1],
            yMax: sensorConfig.warning[1],
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            borderColor: 'rgba(245, 158, 11, 0)',
          },
          warningMin: {
              type: 'box',
              yMin: sensorConfig.warning[0],
              yMax: sensorConfig.normal[0],
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              borderColor: 'rgba(245, 158, 11, 0)',
          },
          criticalMin: {
              type: 'box',
              yMin: sensorConfig.critical[0],
              yMax: sensorConfig.warning[0],
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              borderColor: 'rgba(239, 68, 68, 0)',
          },
        }
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 4,
          color: '#94a3b8',
          font: {
            size: 10,
            family: 'Inter, system-ui, sans-serif',
          },
          callback: function(value) {
            return typeof value === 'number' ? value.toFixed(1) : value;
          }
        },
        border: {
          display: false,
        }
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    animation: {
      duration: 0, // Disable animation for smoother real-time updates
    },
    elements: {
      point: {
        hoverRadius: 6,
        hoverBorderWidth: 2,
        hoverBorderColor: '#003d82',
        hoverBackgroundColor: '#ffffff',
      }
    }
  };

  return <Line options={options} data={chartData} />;
}

export default SensorChart;
