import React from "react";
import './header.scss';
import Navigation from "../../navigation/Navigation.jsx";
import Logo from "../../logo/Logo.jsx";
import LoginBtn from "../../buttons/Login/LoginBtn.jsx";

function Header() {
  const navLinks = ['How it works', 'Plan your trip', 'Destinations', 'Travel stories']
  return (
    <React.StrictMode>
    <header className="header">
      <Logo/>
      <Navigation navFields={navLinks}/>
      <LoginBtn/>
    </header>
    </React.StrictMode>
  )
}

export default Header;
