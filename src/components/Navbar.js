import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication tokens
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#007bff',
      padding: '1rem 2rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Looms Management System</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link 
          to="/dashboard" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Dashboard
        </Link>
        
        <Link 
          to="/reports" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Reports
        </Link>
        
        <button 
          onClick={handleLogout}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
