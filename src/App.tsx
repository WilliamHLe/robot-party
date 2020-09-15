import React from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

import Carousel from "./components/carousel/Carousel";
import SlideOne from './components/carousel/Testslide1';
import SlideTwo from "./components/carousel/Testslide2";
import SlideThree from "./components/carousel/Testslide3"
import Canvas from "./components/carousel/Canvas";

function App() {
  return (
      <div>
          <Head />

          <div>
              <Carousel>
                  <Canvas />
                  <SlideTwo/>
                  <SlideThree/>
              </Carousel>
          </div>

          <DisplayPoetry />
          <Footer />
      </div>
  )
}

export default App;
