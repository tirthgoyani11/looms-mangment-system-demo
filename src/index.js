import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main stylesheet. Webpack will handle bundling this.
import './index.css';

// Import the root component of the application.
import App from './App';

/**
 * This is the entry point of your React application.
 * It uses the createRoot API, which is the modern standard for React 18+.
 */

// 1. Find the root DOM element where the app will be mounted.
const rootElement = document.getElementById('root');

// 2. Create a React root for that element.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the main <App /> component into the root.
// <React.StrictMode> is a wrapper that helps find potential problems in an app.
// It doesn't render any visible UI and only runs in development mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
