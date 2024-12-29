import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BlynkChart = () => {
  const [leftTurns, setLeftTurns] = useState(0);
  const [rightTurns, setRightTurns] = useState(0);
  const [headTurns, setHeadTurns] = useState(0);

  
  const BLYNK_API_TOKEN = 'YOUR_BLYNK_API_TOKEN';
  const LEFT_TURN_PIN = 'V1'; // Virtual pin for left turns
  const RIGHT_TURN_PIN = 'V2'; // Virtual pin for right turns
  const HEAD_TURN_PIN = 'V3'; // Virtual pin for head turns

  const fetchBlynkData = async () => {
    try {
      const [leftTurnResponse, rightTurnResponse, headTurnResponse] = await Promise.all([
        fetch(`https://blynk.cloud/external/api/get?token=Yz8c7dCP1Jf9QXW3nMWgqY1TXMq2bA2y&V1`),
        fetch(`https://blynk.cloud/external/api/get?token=Yz8c7dCP1Jf9QXW3nMWgqY1TXMq2bA2y&V2 `),
        fetch(`https://blynk.cloud/external/api/get?token=Yz8c7dCP1Jf9QXW3nMWgqY1TXMq2bA2y&V0 `),
      ]);

      if (leftTurnResponse.ok && rightTurnResponse.ok && headTurnResponse.ok) {
        setLeftTurns(parseInt(await leftTurnResponse.text(), 10) || 0);
        setRightTurns(parseInt(await rightTurnResponse.text(), 10) || 0);
        setHeadTurns(parseInt(await headTurnResponse.text(), 10) || 0);
      } else {
        console.error('Error fetching data from Blynk API');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchBlynkData();
    const interval = setInterval(fetchBlynkData, 1000); 

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ['Left Turns', 'Right Turns', 'Head Turns'],
    datasets: [
      {
        label: 'Turn Counts',
        data: [leftTurns, rightTurns, headTurns],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue for Left Turns
          'rgba(255, 99, 132, 0.6)', // Red for Right Turns
          'rgba(75, 192, 192, 0.6)', // Green for Head Turns
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
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
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Live Turn Data</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BlynkChart;
