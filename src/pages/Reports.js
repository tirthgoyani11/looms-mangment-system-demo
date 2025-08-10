import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [filterStatus, setFilterStatus] = useState('all');
  const [summary, setSummary] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    completedOrders: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    // Fetch reports data based on filters
    fetchReports();
  }, [selectedPeriod, filterStatus]);

  const fetchReports = () => {
    // Mock data - in real app this would be an API call
    const mockReports = [
      { id: 1, orderDate: '2025-08-10', customer: 'ABC Textiles', product: 'Cotton Fabric', quantity: 100, status: 'Completed', revenue: 15000 },
      { id: 2, orderDate: '2025-08-09', customer: 'XYZ Industries', product: 'Silk Fabric', quantity: 50, status: 'In Progress', revenue: 25000 },
      { id: 3, orderDate: '2025-08-08', customer: 'DEF Corporation', product: 'Wool Fabric', quantity: 75, status: 'Completed', revenue: 18000 },
      { id: 4, orderDate: '2025-08-07', customer: 'GHI Enterprises', product: 'Linen Fabric', quantity: 120, status: 'Pending', revenue: 22000 },
      { id: 5, orderDate: '2025-08-06', customer: 'JKL Textiles', product: 'Cotton Fabric', quantity: 200, status: 'Completed', revenue: 30000 }
    ];

    const filteredReports = filterStatus === 'all' 
      ? mockReports 
      : mockReports.filter(report => report.status.toLowerCase() === filterStatus.toLowerCase());

    setReports(filteredReports);

    // Calculate summary
    const totalOrders = filteredReports.length;
    const totalRevenue = filteredReports.reduce((sum, report) => sum + report.revenue, 0);
    const completedOrders = filteredReports.filter(r => r.status === 'Completed').length;
    const pendingOrders = filteredReports.filter(r => r.status === 'Pending').length;

    setSummary({ totalOrders, totalRevenue, completedOrders, pendingOrders });
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Order Date', 'Customer', 'Product', 'Quantity', 'Status', 'Revenue'],
      ...reports.map(report => [
        report.orderDate,
        report.customer,
        report.product,
        report.quantity,
        report.status,
        report.revenue
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `looms-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Reports & Analytics</h1>
        <div className="header-actions">
          <button onClick={exportToCSV} className="export-btn">Export CSV</button>
          <Link to="/dashboard" className="back-btn">Back to Dashboard</Link>
        </div>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="period">Period:</label>
          <select 
            id="period" 
            value={selectedPeriod} 
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="status">Status:</label>
          <select 
            id="status" 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="in progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Orders</h3>
          <p className="summary-number">{summary.totalOrders}</p>
        </div>
        <div className="summary-card">
          <h3>Total Revenue</h3>
          <p className="summary-number">₹{summary.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Completed Orders</h3>
          <p className="summary-number">{summary.completedOrders}</p>
        </div>
        <div className="summary-card">
          <h3>Pending Orders</h3>
          <p className="summary-number">{summary.pendingOrders}</p>
        </div>
      </div>

      <div className="reports-table-section">
        <h2>Detailed Reports</h2>
        <div className="table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Order Date</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.orderDate}</td>
                  <td>{report.customer}</td>
                  <td>{report.product}</td>
                  <td>{report.quantity}</td>
                  <td className={`status ${report.status.toLowerCase().replace(' ', '-')}`}>
                    {report.status}
                  </td>
                  <td>₹{report.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {reports.length === 0 && (
          <div className="no-data">
            <p>No reports found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
