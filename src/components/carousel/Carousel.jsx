import React from 'react';
import './carousel.scss';
import Spain from '../../assets/images/spain.jpg';
import Japan from '../../assets/images/japan.jpg';
import USA from '../../assets/images/usa.jpg';

function Photo({ url, caption }) {
  return (
    <div className="carousel__item">
      <img className="carousel__photo" src={url} alt="carousel" />
      <p className="carousel__caption">{caption}</p>
    </div>
  );
}

function Carousel() {
  const photos = {
    SPAIN: Spain,
    JAPAN: Japan,
    USA,
  };
  return (
    <div className="carousel">
      <div className="slider">
        {
          Object.entries(photos).map((obj) => <Photo caption={obj[0]} url={obj[1]} />)
        }
      </div>
      <div className="markers">
        <div className="marker" />
        <div className="marker" />
        <div className="marker" />
      </div>
    </div>
  );
}

export default Carousel;
