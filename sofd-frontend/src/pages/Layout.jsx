import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>Header Here</header>
      <main><Outlet/></main>
    </div>
  );
};

export default Layout;
