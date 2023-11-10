import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const Layout = () => {
  const [alignment, setAlignment] = React.useState('matching-service');
  const navigate = useNavigate();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    navigate(`/${newAlignment}`);
  };

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
        <Box textAlign={'center'} fontWeight={'bold'} mb={1}>
          Check what data different services can access
        </Box>
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
