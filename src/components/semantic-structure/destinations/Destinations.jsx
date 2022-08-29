import React from 'react';
import './destinations.scss';
import Carousel from '../../carousel/Carousel';
import MoreButton from '../../buttons/more-button/MoreButton';
import PHOTOS from '../../carouselData';

function Destinations({ idName }) {
  return (
    <section className="destinations" id={idName}>
      <h2 className="destinations__head">POPULAR DESTINATIONS</h2>
      <Carousel photos={PHOTOS} />
      <MoreButton innerText="Find More" />
    </section>

  );
}

export default Destinations;
