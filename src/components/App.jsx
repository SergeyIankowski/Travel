import React from 'react';
import Wrapper from './wrapper/Wrapper';
import Header from './semantic-structure/header/Header';
import Start from './semantic-structure/start/Start';
import Steps from './semantic-structure/steps/Steps';
import Destinations from './semantic-structure/destinations/Destinations';
import Stories from './semantic-structure/stories/Stories';
import Footer from './semantic-structure/footer/Footer';
import storiesData from './storiesData';

import '../styles/main.scss';

function App() {
  const navLinks = [{ name: 'How it works', url: 'howItWorks' }, { name: 'Plan Your Trip', url: 'planYourTrip' }, { name: 'Destinations', url: 'destinations' }, { name: 'Travel Stories', url: 'travelStories' }, { name: 'Media', url: 'media' }];
  const navUrls = navLinks.map((item) => item.url);
  const header = <Header navLinks={navLinks} />;
  const start = <Start idName={navUrls[1]} />;
  const steps = <Steps idName={navUrls[2]} />;
  const destinations = <Destinations idName={navUrls[2]} />;
  const stories = <Stories storiesObjArr={storiesData} idName={navUrls[3]} />;
  const footer = <Footer idName={navUrls[4]} />;
  return (
    <main>
      <Wrapper elem={header} />
      <Wrapper elem={start} />
      <Wrapper elem={steps} />
      <Wrapper elem={destinations} />
      <Wrapper elem={stories} />
      <Wrapper elem={footer} />

    </main>
  );
}

export default App;
