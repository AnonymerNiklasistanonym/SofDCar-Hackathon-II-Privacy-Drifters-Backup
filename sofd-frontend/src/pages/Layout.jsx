import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

const Layout = () => {
  const [alignment, setAlignment] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    navigate(`/${newAlignment}`);
  };

  React.useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path && path !== alignment) {
      setAlignment(path);
    }
  }, [location, alignment]);

  return (
    <div>
      <header style={{
        backgroundColor: 'rgba(255, 255, 255, .5)',
        position: 'fixed',
        top: '3rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        zIndex: 1000,
      }}>
        <Typography variant="h6" style={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Check what data different services can access</Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Service"
        >
          <ToggleButton value="matching-service">Matching Service</ToggleButton>
          <ToggleButton value="auth-service">Authentication Service</ToggleButton>
          <ToggleButton value="smart-contract">Smart Contracts</ToggleButton>
        </ToggleButtonGroup>
      </header>
      <main><Outlet /></main>
    </div>
  );
};

export default Layout;
