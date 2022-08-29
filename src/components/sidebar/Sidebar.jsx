import React, { useState } from 'react';
import './sidebar.scss';
import Navigation from '../navigation/Navigation';
import LoginButton from '../buttons/Login/LoginButton';

export default function Sidebar({ linkNames }) {
  const [open, setOpen] = useState(false);
  const handleOpenOrCloseClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={open ? 'sidebar sidebar_opened' : 'sidebar'}>
        <Navigation navFields={linkNames} linkClickHandler={handleOpenOrCloseClick} />
        <LoginButton innerText="Login" />
        <div className="close-icon" onClick={handleOpenOrCloseClick} />
      </div>
      <div className="hamburger" onClick={handleOpenOrCloseClick}>
        <div className="hamburger__line" />
        <div className="hamburger__line" />
        <div className="hamburger__line" />
      </div>
    </>
  );
}
