import React from 'react';
import './header.scss';
import Logo from '../../logo/Logo';
import Sidebar from '../../sidebar/Sidebar';

function Header({ navLinks }) {
  return (
    <React.StrictMode>
      <header className="header">
        <Logo />
        <Sidebar linkNames={navLinks} />
      </header>
    </React.StrictMode>
  );
}

export default Header;
