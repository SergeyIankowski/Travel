import React from 'react';
import './navigation.scss';

function Navigation({ navFields, linkClickHandler }) {
  const navItems = navFields.map((item) => item);
  const createNavItem = (itemName, url) => <li key={itemName}><a href={`#${url}`} onClick={linkClickHandler}>{itemName}</a></li>;
  return (
    <nav className="navigation">
      <ul>
        {navItems.map((item) => createNavItem(item.name, item.url))}
      </ul>
    </nav>
  );
}
export default Navigation;
