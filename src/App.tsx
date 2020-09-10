import React from "react";
import './App.css';
import DisplayPoetry from "./components/DisplayPoetry";
import Footer from "./components/Footer";
import Head from "./components/Head";

function App() {
  return (
      <div>
          <Head />
          <DisplayPoetry />
          <Footer />
      </div>
  )
}

export default App;
