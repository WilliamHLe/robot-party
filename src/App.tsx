import React from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

import Carousel from "./components/carousel/Carousel";
import SlideOne from "./components/carousel/Testslide1";
import SlideTwo from "./components/carousel/Testslide2";
import SlideThree from "./components/carousel/Testslide3";

import MoodRadio from "./components/radio/SpeedRadio";
import ColorRadio from "./components/radio/ColorRadio";

//import { getJson, setJson } from "./components/storage/jsonStorage"

function App() {

    return (
      <div>
          <Head/>

          <div className="radios">
              <MoodRadio/>
              <ColorRadio/>
          </div>

          <div>
              <Carousel>
                  <SlideOne/>
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
