import React, {useEffect, useState} from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

import Carousel from "./components/carousel/Carousel";
import SlideOne from './components/carousel/SlideOne';
import SlideTwo from "./components/carousel/SlideTwo";
import SlideThree from "./components/carousel/SlideThree"
import Radios from "./components/Radios";
import MoodRadio from "./components/radio/SpeedRadio";
import ColorRadio from "./components/radio/ColorRadio";

//import { getJson, setJson } from "./components/storage/jsonStorage"

function App() {

    const [activeMoodCategory, setActiveMoodCategory] = useState("fast");

    function changeAnimation(data: any) {
        setActiveMoodCategory(data)
    }

    return (
      <div>
          <Head/>

          <div className="radios">
              <MoodRadio/>
              <ColorRadio/>
          </div>

          <div>
              <Radios />
              <Carousel>
                  <SlideOne />
                  <SlideTwo />
                  <SlideThree />
              </Carousel>

          </div>
          <Footer />
      </div>
    )
}

export default App;
