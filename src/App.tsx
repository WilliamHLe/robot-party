import React, {useEffect, useState} from "react";
import './App.css';
//import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

//import Carousel from "./components/carousel/Carousel";
//import SlideOne from './components/carousel/SlideOne';
//import SlideTwo from "./components/carousel/SlideTwo";
//import SlideThree from "./components/carousel/SlideThree"
//import Radios from "./components/Radios";
import Radio from "./components/radio/Radio";
//import ColorRadio from "./components/radio/Radio";
import ChangeName from "./components/storage/ChangeName";

import { getJson } from "./components/storage/jsonStorage"
import PresentName from "./components/storage/PresentName";

function App() {

    /*
    const [activeMoodCategory, setActiveMoodCategory] = useState("fast");

    function changeAnimation(data: any) {
        setActiveMoodCategory(data)
    }
    */


    return (
      <div>
          <Head/>

              <PresentName />
              <div>
                  <Radio/>
              </div>

          {/*
          <div>
              <Carousel>
                  <SlideOne />
                  <SlideTwo />
                  <SlideThree />
              </Carousel>
          </div>
          */}
        <Footer />
      </div>
    )
}

export default App;
