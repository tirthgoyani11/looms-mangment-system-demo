import React, { useState, useEffect } from 'react';

// In a real application, you would import your initialized Firebase database instance
// and the necessary Firestore functions to fetch data in real-time.
// import { db } from '../config/firebase-init';
// import { collection, onSnapshot } from "firebase/firestore";

// For demonstration purposes, we'll use static mock data.
// This object simulates the data you would fetch from your 'dashboard-stats' collection in Firestore.
const mockStats = {
    looms: 5,
    activeLooms: 4,
    totalProduction: 12580,
    lowStockAlerts: 2,
};

/**
 * The Dashboard component serves as the main landing page after a user logs in.
 * It displays key performance indicators (KPIs) for the textile operation.
 */
const Dashboard = () => {
  // The 'stats' state will hold the data for our dashboard cards.
  // We initialize it with our mock data.
  const [stats, setStats] = useState(mockStats);

  // This `useEffect` hook is where you would place your real-time data fetching logic.
  // The commented-out code below shows a standard pattern for listening to a Firestore collection.
  useEffect(() => {
    // --- FIREBASE DATA FETCHING EXAMPLE ---
    //
    // // Create a reference to the 'dashboard-stats' collection in Firestore.
    // const statsCollectionRef = collection(db, "dashboard-stats");
    //
    // // onSnapshot creates a real-time listener. This function will be called
    // // immediately with the current data and then again every time the data changes.
    // const unsubscribe = onSnapshot(statsCollectionRef, (snapshot) => {
    //   // For simplicity, let's assume you have one document in this collection holding all stats.
    //   if (!snapshot.empty) {
    //     const dashboardData = snapshot.docs[0].data();
    //     setStats(dashboardData);
    //   }
    // });
    //
    // // The cleanup function returned by useEffect will be called when the component
    // // unmounts. It's crucial to unsubscribe from the listener to prevent memory leaks.
    // return () => unsubscribe();
    //
  }, []); // The empty dependency array [] ensures this effect runs only once when the component mounts.

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      
      {/* Grid container for the statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card for Total Looms */}
        <div className="card p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm font-medium">Total Looms</h3>
          <p className="text-3xl font-bold text-white mt-2">{stats.looms}</p>
        </div>

        {/* Card for Active Looms */}
        <div className="card p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm font-medium">Active Looms</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">{stats.activeLooms}</p>
        </div>

        {/* Card for Total Production */}
        <div className="card p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm font-medium">Total Production (m)</h3>
          <p className="text-3xl font-bold text-blue-400 mt-2">{stats.totalProduction.toLocaleString()}</p>
        </div>

        {/* Card for Low Stock Alerts */}
        <div className="card p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm font-medium">Low Stock Alerts</h3>
          <p className="text-3xl font-bold text-red-400 mt-2">{stats.lowStockAlerts}</p>
        </div>

      </div>
      
      {/* You can add more sections to the dashboard here, like charts or recent activity lists */}
      <div className="mt-8">
        {/* Example: <RecentActivityList /> */}
        {/* Example: <ProductionChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
