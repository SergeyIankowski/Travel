import React from 'react';
import './steps-item.scss';

function StepsItem({ url, text }) {
  return (
    <div className="steps-item">
      <object className="icon steps-item__icon" title="some-text" data={url} type="image/svg+xml" />
      <p className="steps-item__description">{text}</p>
    </div>
  );
}

export default StepsItem;
