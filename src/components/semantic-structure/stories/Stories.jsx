import React from 'react';
import './stories.scss';

function Story({ data }) {
  return (
    <div className="story">
      <img src={data.imgPath} alt={data.imgCaption} className="story__img" />
      <div className="story__description">
        <h3 className="story__head">{data.head}</h3>
        <p className="story__synopsis">{data.synopsis}</p>
        <a href="#" className="story__read-more-link">Read More</a>
      </div>
    </div>
  );
}

function Stories({ storiesObjArr }) {
  const stories = storiesObjArr.map((story) => <Story data={story} />);
  return (
    <section className="stories">
      <h2 className="stories__head">TRAVEL STORIES</h2>
      <div className="stories__board">
        {stories}
      </div>
    </section>
  );
}

export default Stories;
