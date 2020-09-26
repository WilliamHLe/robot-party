import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Head from "./components/Head";
import Radio from "./components/radio/Radio";
import PresentName from "./components/storage/PresentName";


// Bruk av klasse-komponent
class App extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                <PresentName />
                <Radio/>
                <Footer />
            </div>
        )
    }
}

export default App
