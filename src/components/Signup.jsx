import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      console.log('Form data being sent:', formData); // Log formData
  
      try {
        const response = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Signup failed');
        }
  
        console.log('Signup successful:', data);
        toast.success('Signup successful!');
        navigate('/Login'); // Redirect to login page on successful signup
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || 'Signup failed');
      }
    }
  };

  return (
    <div className="flex w-full h-screen bg-black">
      {/* Right side: Ball bouncing animation */}
      <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-pink-500 to-blue-800 rounded-full animate-bounce"></div>
        <div className="absolute w-[100%] h-1/2 bottom-0 bg-white/10 backdrop-blur-xl"></div>
      </div>

      {/* Left side: Signup form */}
      <div className="relative w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-10 bg-gray-900 text-white rounded-lg shadow-lg">
          <ToastContainer />
          <div className="absolute top-4 right-4">
            <button
              onClick={() => navigate('/login')} // Navigate to login page on button click
              className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              Log In
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Coach Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium">
                Coaching Experience (in years)
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;