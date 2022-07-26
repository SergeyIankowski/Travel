import React from 'react';
import Wrapper from './wrapper/Wrapper';
import Header from './semantic-structure/header/Header';
import Start from './semantic-structure/start/Start';
import Steps from './semantic-structure/steps/Steps';
import '../styles/main.scss';

function App() {
  const header = <Header />;
  const start = <Start />;
  const steps = <Steps />;
  return (
    <>
      <Wrapper elem={header} />
      <Wrapper elem={start} />
      <Wrapper elem={steps} />
    </>
  );
}

export default App;
