import React from 'react';
import './header.scss';
import Navigation from '../../navigation/Navigation';
import Logo from '../../logo/Logo';
import LoginButton from '../../buttons/Login/LoginButton';

function Header() {
  const navLinks = ['How it works', 'Plan your trip', 'Destinations', 'Travel stories'];
  return (
    <React.StrictMode>
      <header className="header">
        <Logo />
        <Navigation navFields={navLinks} />
        <LoginButton innerText="Login" />
      </header>
    </React.StrictMode>
  );
}

export default Header;
