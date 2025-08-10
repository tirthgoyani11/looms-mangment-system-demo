import React from 'react';

// Import the Navbar component, which will be part of this layout.
import Navbar from '../components/Navbar';

// This is a placeholder for the 3D background component.
// In a real project, you would create and import this.
// For now, we'll just add a placeholder div.
const ThreeBackground = () => {
  // The actual 3D canvas is rendered by the script in index.html for simplicity,
  // but in a more complex React app, you'd manage the Three.js instance here.
  return (
    <div 
      id="bg-canvas-container" 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    >
      {/* The canvas from index.html lives "behind" this component */}
    </div>
  );
};


/**
 * The AppLayout component provides the consistent structure (shell) for the entire application.
 * It includes the navigation bar and the 3D background.
 * The `children` prop is a special prop in React that renders whatever components are nested
 * inside <AppLayout> in the App.js file. In our case, it will be the current page component.
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 */
const AppLayout = ({ children }) => {
  return (
    // The main container for the entire application view.
    <div className="relative z-10 min-h-screen flex flex-col">
      
      {/* The 3D background component. It's placed here so it's part of the React tree. */}
      <ThreeBackground />

      {/* The persistent navigation bar, visible on all pages. */}
      <Navbar />

      {/* The main content area where page components will be rendered. */}
      <main className="main-content flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* The `children` prop renders the active page (e.g., <Dashboard />, <Login />) */}
        {children}
      </main>

      {/* A simple footer, also part of the consistent layout. */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>FebriFlow &copy; 2025</p>
      </footer>
    </div>
  );
};

export default AppLayout;
