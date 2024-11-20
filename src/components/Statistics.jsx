import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MainContent = () => {
  const speedData = {
    labels: ['0:00', '0:05', '0:10', '0:15', '0:20', '0:25'],
    datasets: [
      {
        label: 'Speed (m/s)',
        data: [1.5, 1.7, 1.6, 1.8, 1.7, 1.9],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const leftTurnData = {
    labels: ['0:00', '0:05', '0:15', '0:25', '0:35', '0:45'],
    datasets: [
      {
        label: 'Left Turns',
        data: [2, 3, 2, 4, 3, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const rightTurnData = {
    labels: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50'],
    datasets: [
      {
        label: 'Right Turns',
        data: [1, 2, 3, 2, 4, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const heartbeatData = {
    labels: ['0:00', '0:05', '0:10', '0:15', '0:20', '0:25'],
    datasets: [
      {
        label: 'Heartbeat (bpm)',
        data: [80, 85, 78, 90, 88, 92],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white', 
        },
      },
      title: {
        display: true,
        color: 'white', 
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
      y: {
        ticks: {
          color: 'white', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        }
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black p-6 min-h-screen-[100%]">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Speed Over Time</h2>
        <Line data={speedData} options={chartOptions} />
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Left Turns Over Time</h2>
        <Bar data={leftTurnData} options={chartOptions} />
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Right Turns Over Time</h2>
        <Bar data={rightTurnData} options={chartOptions} />
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Heartbeat Over Time</h2>
        <Line data={heartbeatData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MainContent;
