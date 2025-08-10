import React, { useContext } from 'react';

// Import the AppContext to access the global state (like the current page).
import { AppContext } from '../App';

/**
 * The NavLink component is a helper for creating navigation links.
 * It automatically checks if its route matches the current page and applies an 'active' class.
 * @param {object} props - The component's props.
 * @param {string} props.to - The destination route for the link (e.g., 'dashboard').
 * @param {React.ReactNode} props.children - The text or elements to display inside the link.
 */
const NavLink = ({ to, children }) => {
  // Use the useContext hook to get the current 'page' from the AppContext.
  const { page } = useContext(AppContext);
  const isActive = page === to;

  return (
    <a
      href={`#${to}`}
      // Dynamically apply classes based on whether the link is active.
      className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 transition-all duration-300 border-b-2 ${
        isActive ? 'active border-blue-500 text-white' : 'border-transparent hover:border-gray-500'
      }`}
    >
      {children}
    </a>
  );
};

/**
 * The main Navbar component.
 */
const Navbar = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: App Name/Logo */}
          <div className="flex items-center">
            <a href="#dashboard" className="text-2xl font-bold text-white">
              FebriFlow
            </a>
          </div>

          {/* Right side: Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="dashboard">Dashboard</NavLink>
              <NavLink to="reports">Reports</NavLink>
              {/* You can add more links here as you build out your app */}
              {/* <NavLink to="machines">Machines</NavLink> */}
              <NavLink to="login">Login</NavLink>
            </div>
          </div>
          
          {/* Mobile menu button would go here in a more complex implementation */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
