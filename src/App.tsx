import React from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

import Carousel from "./components/carousel/Carousel";
import SlideOne from './components/carousel/Testslide1';
import SlideTwo from "./components/carousel/Testslide2";
import SlideThree from "./components/carousel/Testslide3"
import Canvas1 from "./components/carousel/Canvas1";
import Canvas2 from "./components/carousel/Canvas2";

function App() {
  return (
      <div>
          <Head />

          <div>
              <Carousel>
                  <Canvas1 />
                  <Canvas2 />
                  <SlideThree/>
              </Carousel>
          </div>

          <DisplayPoetry />
          <Footer />
      </div>
  )
}

export default App;
