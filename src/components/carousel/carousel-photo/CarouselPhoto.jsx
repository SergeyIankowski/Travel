import React from 'react';
import './carousel-photo.scss';

function Photo({ url, caption, show = false }) {
  return (
    <div className={show ? 'carousel__item carousel__item_show' : 'carousel__item'}>
      <img className="carousel__photo" src={url} alt="carousel" />
      <p className="carousel__caption">{caption}</p>
    </div>
  );
}

export default Photo;
