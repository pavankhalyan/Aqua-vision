import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const MainContent = () => {
  // Mock data for demonstration purposes
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

  const laneChangeData = {
    labels: ['Left Lane', 'Right Lane'],
    datasets: [
      {
        label: 'Lane Changes',
        data: [12, 8],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Speed Over Time</h2>
        <Line data={speedData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Lane Changes</h2>
        <Bar data={laneChangeData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Heartbeat Over Time</h2>
        <Line data={heartbeatData} />
      </div>
    </div>
  );
};

export default MainContent;
