import React from 'react';
import './planYourTripForm.scss';

function PlanYourTripForm() {
  return (
    <div className="plan-your-trip">
      <h1 className="start__head">Explore the beauty of the World</h1>
      <p className="start__description">Receive personalized recommendations for countries, hotels, activities and more</p>
      <form action="/" className="plan-your-trip-form">
        <input type="text" placeholder="What would you like to do?" className="start-search__input" />
        <button type="submit" className="button start-search__button">Start planning</button>
      </form>
    </div>
  );
}

export default PlanYourTripForm;
