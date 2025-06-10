import React from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="page-content">
      <h1 className="neon-glow">📊 Dashboard</h1>
      <p>Overview and access to different dashboard features.</p>
      <button className="button" onClick={handleClick}>Move to Home Page</button>

      <div className="dashboard-links">
        <Link to="/dashboard/courses" className="dashboard-link">📘 Courses</Link>
        <Link to="/dashboard/mock-tests" className="dashboard-link">📝 Mock Tests</Link>
        <Link to="/dashboard/reports" className="dashboard-link">📊 Reports</Link>
      </div>

      {/* Render child routes */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
