import React, {useEffect, useState} from "react";
import './App.css';
import Footer from "./components/Footer";
import Head from "./components/Head";
//import Carousel from "./components/carousel/Carousel";
//import SlideOne from './components/carousel/SlideOne';
//import SlideTwo from "./components/carousel/SlideTwo";
//import SlideThree from "./components/carousel/SlideThree"
import Radio from "./components/radio/Radio";
import PresentName from "./components/storage/PresentName";

function App() {

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
