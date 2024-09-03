import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/api/users/login', { // Replace with your backend login URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If response is not ok, show error message
        throw new Error(data.message || 'Login failed');
      }

      // Assuming the backend sends a token on successful login
      const { token } = data;

      // Store the token securely (e.g., localStorage)
      localStorage.setItem('authToken', token);

      // Optionally, you can store user information as well
      // localStorage.setItem('user', JSON.stringify(data.user));

      toast.success('Login successful!');
      onLogin(); // Update the login state in App.js
      navigate('/home'); 
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.message || 'An error occurred during login.');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900">
      <ToastContainer />
      <div className="bg-gray-900 text-white px-8 py-10 rounded-lg shadow-lg max-w-md w-full mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">Log in</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-gray-800 border-gray-700 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-purple-500 hover:text-purple-400">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md ${
                isLoading
                  ? 'bg-purple-300 cursor-not-allowed'
                  : 'text-black bg-purple-500 hover:bg-purple-600'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
