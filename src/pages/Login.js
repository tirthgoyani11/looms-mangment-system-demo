import React, { useState, useContext } from 'react';

// Import the AppContext to access global state and functions, like setIsAuthenticated.
import { AppContext } from '../App';

// In a real app, you would import your Firebase auth functions.
// import { auth } from '../services/firebase'; // Assuming you have this file
// import { signInWithEmailAndPassword } from 'firebase/auth';

/**
 * The Login component provides a user interface for authentication.
 */
const Login = () => {
  // Use the useContext hook to get the setIsAuthenticated function from the global context.
  const { setIsAuthenticated } = useContext(AppContext);

  // State to manage the input fields for email and password.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to manage any error messages during login.
  const [error, setError] = useState('');

  /**
   * Handles the form submission event.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleLogin = async (e) => {
    // Prevent the default form submission behavior which reloads the page.
    e.preventDefault();
    setError(''); // Reset any previous errors.

    // --- FIREBASE AUTHENTICATION LOGIC ---
    // The commented-out code below shows how you would handle login with Firebase.
    try {
      // Use the Firebase auth instance to sign in the user.
      // await signInWithEmailAndPassword(auth, email, password);
      
      // If login is successful:
      console.log('User logged in successfully!');
      setIsAuthenticated(true); // Update the global authentication state.
      window.location.hash = '#dashboard'; // Redirect the user to the dashboard.

    } catch (err) {
      // If login fails, display an error message to the user.
      console.error("Login Error:", err.message);
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="flex items-center justify-center mt-10 md:mt-16">
      <div className="card w-full max-w-md p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>
        
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Link to Register Page */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <a href="#register" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
