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
  const header = <Header />;
  const start = <Start />;
  const steps = <Steps />;
  const destinations = <Destinations />;
  const stories = <Stories storiesObjArr={storiesData} />;
  const footer = <Footer />;
  return (
    <>
      <Wrapper elem={header} />
      <Wrapper elem={start} />
      <Wrapper elem={steps} />
      <Wrapper elem={destinations} />
      <Wrapper elem={stories} />
      <Wrapper elem={footer} />

    </>
  );
}

export default App;
