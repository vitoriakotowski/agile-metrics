// src/App.js
import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import About from "./components/About";
import StepByStep from "./components/StepByStep";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <StepByStep />
      <Contact />
    </>
  );
};

export default App;
