import Navigation from 'components/Navigation/Navigation';

import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navigatios />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
