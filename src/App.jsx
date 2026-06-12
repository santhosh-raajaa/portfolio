import React from "react";

import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  TechWorks,
  ArtWorks,
  Contact,
  Footer,
} from "./components/exports";

import "./App.css";
// import TechWorks from './components/techWork/TechWorks'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <TechWorks/> */}
      <ArtWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
