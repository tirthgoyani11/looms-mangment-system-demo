import React from 'react';
import '../components/Navbar'; // Import Navbar component

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
