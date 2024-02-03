import React from "react";
import "../src/index.css";
import Header from "./components/Header/Header";

import "./App.css";
import Compaines from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Compaines />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
export default App;
