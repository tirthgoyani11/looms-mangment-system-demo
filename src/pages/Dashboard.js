import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLooms: 0,
    activeOrders: 0,
    completedOrders: 0,
    revenue: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    // Fetch dashboard data
    // This would typically be an API call
    setStats({
      totalLooms: 12,
      activeOrders: 8,
      completedOrders: 45,
      revenue: 125000
    });

    setRecentOrders([
      { id: 1, customer: 'ABC Textiles', product: 'Cotton Fabric', status: 'In Progress', date: '2025-08-10' },
      { id: 2, customer: 'XYZ Industries', product: 'Silk Fabric', status: 'Completed', date: '2025-08-09' },
      { id: 3, customer: 'DEF Corporation', product: 'Wool Fabric', status: 'Pending', date: '2025-08-08' }
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Looms</h3>
          <p className="stat-number">{stats.totalLooms}</p>
        </div>
        <div className="stat-card">
          <h3>Active Orders</h3>
          <p className="stat-number">{stats.activeOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Orders</h3>
          <p className="stat-number">{stats.completedOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">₹{stats.revenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/reports" className="view-all-link">View All Orders</Link>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/orders/new" className="action-btn">Create New Order</Link>
            <Link to="/looms" className="action-btn">Manage Looms</Link>
            <Link to="/reports" className="action-btn">View Reports</Link>
            <Link to="/inventory" className="action-btn">Check Inventory</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
