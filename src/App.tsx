import React, {useEffect, useState} from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

import Carousel from "./components/carousel/Carousel";
import SlideOne from './components/carousel/Testslide1';
import SlideTwo from "./components/carousel/Testslide2";
import SlideThree from "./components/carousel/Testslide3"
import Radios from "./components/Radios";

function App() {
    const [activeMoodCategory, setActiveMoodCategory] = useState("fast");

    function changeAnimation(data: any) {
        setActiveMoodCategory(data)
    }



    return (
      <div>
          <Head />
          <div>
              <Carousel>
                  <SlideOne />
                  <SlideTwo />
                  <SlideThree />
              </Carousel>
              <Radios />
          </div>
          <Footer />
      </div>
    )
}

export default App;
