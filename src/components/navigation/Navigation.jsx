import React from 'react';
import './navigation.scss';

function Navigation({ navFields }) {
  const navItems = navFields.map((item) => item);
  const createNavItem = (item, index) => <li key={index}><a href="#">{item}</a></li>;
  return (
    <nav className="navigation">
      <ul>
        {navItems.map((item, index) => createNavItem(item, index))}
      </ul>
    </nav>
  );
}
export default Navigation;
