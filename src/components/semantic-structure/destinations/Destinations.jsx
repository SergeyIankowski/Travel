import React from 'react';
import './destinations.scss';
import Carousel from '../../carousel/Carousel';
import MoreButton from '../../buttons/Login/more-button/MoreButton';

function Destinations() {
  return (
    <section className="destinations">
      <h2 className="destinations__head">POPULAR DESTINATIONS</h2>
      <Carousel />
      <MoreButton innerText="Find More" />
    </section>

  );
}

export default Destinations;
