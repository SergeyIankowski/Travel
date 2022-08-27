import React, { useState } from 'react';
import './carousel.scss';
import Photo from './carousel-photo/CarouselPhoto';
import carouselLeftButton from '../../assets/icons/carousel-left-arrow.svg';
import carouselRightButton from '../../assets/icons/carousel-right-arrow.svg';

const createPhotosList = (photosObj, currentForShow) => photosObj.map((photo, index) => {
  if (index === currentForShow) {
    return (
      <Photo
        key={photo.name}
        caption={photo.name}
        url={photo.url}
        show
      />
    );
  }
  return (
    <Photo
      key={photo.name}
      caption={photo.name}
      url={photo.url}
      show={false}
    />
  );
});

const createMarkers = (itemsObj, lighted, clickHandler) => itemsObj.map((obj, index) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button
    key={obj.name}
    className={index === lighted ? 'marker marker_checked' : 'marker'}
    type="button"
    data-marker-id={index}
    onClick={clickHandler}
  />
));

const createLeftRightButtons = (leftHandler, rightHandler) => (
  <>
    <button
      className="carousel__button carousel__button_left"
      type="button"
      onClick={leftHandler}
    >
      <img
        src={carouselLeftButton}
        className="left__button"
        alt="carousel left arrow"
      />

    </button>
    <button
      className="carousel__button carousel__button_right"
      type="button"
      onClick={rightHandler}
    >
      <img
        src={carouselRightButton}
        className="right__button"
        alt="carousel right arrow"
      />

    </button>
  </>
);

function Carousel({ photos }) {
  const [current, setCurrent] = useState(0);
  const { length } = photos;

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  // auto slide for photos functionality

  const timerId = setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), 10000);

  // click handler for markers

  const handleMarkerClick = (e) => {
    clearTimeout(timerId);
    setCurrent(+e.target.dataset.markerId);
  };
  const handleLeftArrowClick = () => {
    clearTimeout(timerId);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleRightArrowClick = () => {
    clearTimeout(timerId);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const markers = createMarkers(photos, current, handleMarkerClick);
  const photosItems = createPhotosList(photos, current);
  const leftRightButtons = createLeftRightButtons(handleLeftArrowClick, handleRightArrowClick);
  return (
    <div className="carousel">
      <div className="slider">
        {photosItems}
        {leftRightButtons}
        <div className="markers">
          {markers}
        </div>
      </div>

    </div>
  );
}

export default Carousel;
