import React, { useState } from 'react';
import './carousel.scss';
import Photo from './carousel-photo/CarouselPhoto';

// const setRadioBtns = (photoData) => {
//   const inputs = photoData.map((photo, index) => (
//     <input
//       className="radio"
//       type="radio"
//       name="photo-navigation"
//       id={`btn${index + 1}`}
//       key={photo.name}
//     />
//   ));
//   return inputs;
// };

function Carousel({ photos }) {
  const [current, setCurrent] = useState(0);
  // const { length } = photos;
  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }
  // let timerId = setInterval(
  //   () => { setCurrent(current === length - 1 ? 0 : current + 1); },
  //   1000,
  // );
  const handleMarkerClick = (e) => {
    setCurrent(+e.target.dataset.markerId);
  };
  const markers = photos.map((obj, index) => (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      key={obj.name}
      className={index === current ? 'marker marker_checked' : 'marker'}
      type="button"
      data-marker-id={index}
      onClick={handleMarkerClick}
    />
  ));
  return (
    <div className="carousel">

      <div className="slider">
        {
          photos.map((photo, index) => {
            if (index === current) {
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
          })
        }
      </div>
      <div className="markers">
        {markers}
      </div>
    </div>
  );
}
export default Carousel;
