import React from 'react';
import './header.scss';
import Logo from '../../logo/Logo';
import Sidebar from '../../sidebar/Sidebar';

function Header() {
  return (
    <React.StrictMode>
      <header className="header">
        <Logo />
        <Sidebar />
      </header>
    </React.StrictMode>
  );
}

export default Header;
