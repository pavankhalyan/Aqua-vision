import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Statistics from './components/Statistics';
import SwimmerDetails from './components/SwimmerDetails';
import CoachDetails from './components/CoachDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <div className="flex w-full h-screen bg-black">
                {/* Left side: Background animation with additional div */}
                <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
                  <div className="absolute w-80 h-80 bg-gradient-to-tr from-pink-500 to-blue-800 rounded-full animate-bounce"></div>
                  <div className="absolute w-[100%] h-1/2 bottom-0 bg-white/10 backdrop-blur-xl"></div>
                </div>
                {/* Right side: Login form with Sign Up button */}
                <div className="relative w-1/2 flex items-center justify-center">
                  <div className="w-full max-w-md px-8 py-10">
                    <Login onLogin={handleLogin} />
                    <div className="absolute top-4 right-4">
                      <Link to="/signup">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/statistics"
          element={isLoggedIn ? <Statistics /> : <Navigate to="/" />}
        />
        <Route
          path="/swimmer-details"
          element={isLoggedIn ? <SwimmerDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/coach-details"
          element={isLoggedIn ? <CoachDetails /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
