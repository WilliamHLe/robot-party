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

function App() {
    const [activeMoodCategory, setActiveMoodCategory] = useState("fast");

    function changeAnimation(data: any) {
        setActiveMoodCategory(data)
    }



    return (
      <div>
          <Head />
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
