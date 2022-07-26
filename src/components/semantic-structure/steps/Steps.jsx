import React from 'react';
import './steps.scss';
import StepsItem from './StepsItem';
import Bike from '../../../assets/icons/bike.svg';
import Calendar from '../../../assets/icons/calendar.svg';
import Airplane from '../../../assets/icons/airplane.svg';

function Steps() {
  const stepsData = {
    'Tell us what you want to do': Bike,
    'Share us preferable dates ': Calendar,
    'We will give you recommendations': Airplane,
  };
  return (
    <section className="steps">
      <h2 className="steps__head">3 STEPS TO PERFECT TRIP</h2>
      <div className="steps-container">
        {Object.entries(stepsData).map((step) => (
          <StepsItem
            url={step[1]}
            text={step[0]}
            key={step[0]}
          />
        ))}
      </div>
    </section>
  );
}

export default Steps;
