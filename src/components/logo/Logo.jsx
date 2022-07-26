import React from 'react';
import './logo.scss';
import logo from '../../assets/icons/logo-icon.svg';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__icon" src={logo} alt="logo-icon" />
      <p className="logo__description">Travel portal</p>
    </div>
  );
}
export default Logo;
