import React from 'react';
import './moreButton.scss';

import rightArrow from '../../../assets/icons/right-arrow.svg';

function MoreButton({ innerText }) {
  return (
    <button type="submit" className="button more__button">
      <img src={rightArrow} alt="right arrow icon" />
      {innerText}
    </button>
  );
}

export default MoreButton;
