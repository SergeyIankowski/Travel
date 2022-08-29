import React from 'react';
import './start.scss';
import PlanYourTripForm from '../../planYourTripForm/PlanYourTripForm';

function Start({ idName }) {
  return (
    <section className="start" id={idName}>
      <PlanYourTripForm />
    </section>
  );
}

export default Start;
