import React, { useState, useEffect, createContext, useCallback } from 'react';

// Layouts
import AppLayout from './layouts/AppLayout';

// Page Components
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Reports from './pages/Reports';
// As you build your project, you'll import more pages here.
// For example: import MachineList from './pages/MachineList';

/**
 * React Context provides a way to pass data through the component tree
 * without having to pass props down manually at every level.
 * Here, we use it to manage routing and authentication state globally.
 */
export const AppContext = createContext();

/**
 * This is the root App component, the "heart" of the application.
 * It manages the overall state, including routing and authentication.
 */
function App() {
  // --- STATE MANAGEMENT ---

  // Manages the currently visible page. Defaults to 'dashboard'.
  const [page, setPage] = useState('dashboard');
  
  // Manages the authentication state of the user.
  // In a real app, you'd check localStorage or an auth service for an existing session.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // --- ROUTING ---

  // This `useEffect` hook handles the client-side routing.
  // It listens for changes to the URL's hash (e.g., #dashboard, #login).
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'dashboard';
      setPage(hash);
    };

    // Add the event listener when the component mounts.
    window.addEventListener('hashchange', handleHashChange);
    // Set the initial page based on the URL when the app first loads.
    handleHashChange();

    // Cleanup: Remove the event listener when the component unmounts to prevent memory leaks.
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // The empty dependency array `[]` ensures this effect runs only once.

  /**
   * The `useCallback` hook memoizes this function so it isn't recreated on every render.
   * This is a performance optimization.
   * It determines which page component to render based on the `page` state.
   */
  const renderPage = useCallback(() => {
    // If the user is not authenticated, show the login page for any route
    // that isn't the register page.
    if (!isAuthenticated && page !== 'register') {
      // Allow access to the login page even if not authenticated.
      if (page === 'login') {
        return <Login />;
      }
      // Redirect to login for all other protected pages.
      window.location.hash = 'login';
      return <Login />;
    }

    // If authenticated, or for public pages like 'register'.
    switch (page) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'reports':
        return <Reports />;
      // Add cases for other pages as you build them.
      // case 'machines':
      //   return <MachineList />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  }, [page, isAuthenticated]); // This function will only be re-created if `page` or `isAuthenticated` changes.

  // --- RENDER ---
  
  return (
    // The AppContext.Provider makes state and functions available to all child components.
    // Any component within this provider can access `page`, `setPage`, `isAuthenticated`, etc.
    <AppContext.Provider value={{ page, setPage, isAuthenticated, setIsAuthenticated }}>
      <AppLayout>
        {/* The renderPage function is called here to display the correct page content. */}
        {renderPage()}
      </AppLayout>
    </AppContext.Provider>
  );
}

export default App;
