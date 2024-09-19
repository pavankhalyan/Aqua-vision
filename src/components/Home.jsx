import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import statisticsImage from '../images/statistics.jpeg';
import swimmerDetailsImage from '../images/anastasia-pagonis.jpg';
import coachDetailsImage from '../images/coach.webp';

function Home({ onLogout }) {
  const navigate = useNavigate();

  const goToStatistics = () => navigate('/statistics');
  const goToSwimmerDetails = () => navigate('/swimmer-details');
  const goToCoachDetails = () => navigate('/coach-details');

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-pink-500 to-blue-800 rounded-full animate-bounce"></div>
        <div className="w-full h-full bg-black/30 backdrop-blur-xl"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to the paralympics </h1>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Log Out
        </button>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div
            className="bg-white text-black p-6 rounded-lg shadow-lg w-64 cursor-pointer transition-transform transform hover:scale-105"
            onClick={goToStatistics}
          >
            <img
              src={statisticsImage}
              alt="Statistics"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Statistics</h2>
            <p>View swimmer statistics.</p>
          </div>
          <div
            className="bg-white text-black p-6 rounded-lg shadow-lg w-64 cursor-pointer transition-transform transform hover:scale-105"
            onClick={goToSwimmerDetails}
          >
            <img
              src={swimmerDetailsImage}
              alt="Swimmer Details"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Swimmer Details</h2>
            <p>View details of the swimmer.</p>
          </div>
          <div
            className="bg-white text-black p-6 rounded-lg shadow-lg w-64 cursor-pointer transition-transform transform hover:scale-105"
            onClick={goToCoachDetails}
          >
            <img
              src={coachDetailsImage}
              alt="Coach Details"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Coach Details</h2>
            <p>View details of the coach.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Home;
