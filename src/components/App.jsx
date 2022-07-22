import React from "react";
import Wrapper from "./wrapper/Wrapper.jsx";
import Header from "./semantic-structure/header/Header.jsx";
import '../styles/main.scss';

function App() {
  const header = <Header/>;
  return (
      <Wrapper elem={header} />
  )
}

export default App;
