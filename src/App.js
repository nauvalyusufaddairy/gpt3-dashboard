import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  WhatGPT3,
  Header,
  Footer,
  Possibility,
} from "./containers";
import { Brands, Nav, Feature, Article, CTA } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
