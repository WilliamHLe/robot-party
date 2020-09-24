import React, {useState} from "react";
import "./Radio.css";
import Carousel from "../carousel/Carousel";
import Slide from "../carousel/Slide";
import RadioContext from "../context/RadioContext";

import Canvas1 from "../canvas/Canvas1";
import Canvas2 from "../canvas/Canvas2";
import Canvas3 from "../canvas/Canvas3";
import Canvas4 from "../canvas/Canvas4";
import Canvas5 from "../canvas/Canvas5";

// To radioknapper
// En for hastighet (lagres som tall)
// En for farger (hex-verdier, lagres som streng)


const Radio: React.FC = () => {

    //60 = SAKTE ---- 35 = NORMAL ---- 15 = RASK
    const [speed, setSpeed] = useState<number>(60);

    // "#FF0000" = RØDT ---- "#0000FF" ---- BLÅTT "#00FF00" ---- GRØNT
    const [color, setColor] = useState<string>("#FF0000");


    return(
        <div>
            <div className="radio-wrapper">
                <div className="radio-element">
                    <h3>Velg hastighet:</h3>
                    <div>
                        <label>
                            <input type="radio" value={60} name="Sakte" checked={speed === 60} onChange={() => setSpeed(60)}/>
                            Sakte&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value={35} name="Normal" checked={speed === 35} onChange={() => setSpeed(35)}/>
                            Normal&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value={15} name="Rask" checked={speed === 15} onChange={() => setSpeed(15)}/>
                            Rask
                        </label>

                    </div>
                </div>
                <div className="radio-element">
                    <h3>Velg fargetema:</h3>
                    <div>

                        <label>
                            <input type="radio" value="#FF0000" name="Rødt" checked={color === "#FF0000"} onChange={() => setColor("#FF0000")}/>
                            Rødt&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value="#0000FF" name="Blått" checked={color === "#0000FF"} onChange={() => setColor("#0000FF")}/>
                            Blått&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value="#00FF00" name="Grønt" checked={color === "#00FF00"} onChange={() => setColor("#00FF00")}/>
                            Grønt
                        </label>
                    </div>
                </div>
            </div>
            {/*Bruker RadioContext.Provider til å sende states for "speed" og "color" nedover i hierarkiet (til Canvas-komponentene)*/}
            <RadioContext.Provider value={{speed, color}}>
                <div>
                    <Carousel>
                        <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"} canvas = {<Canvas1/>}/>
                        <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;Could%20Hope%20inspect%20her%20Basis"} canvas = {<Canvas2/>}/>
                        <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;Success%20is%20counted%20sweetest"} canvas = {<Canvas3/>}/>
                        <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;Nature%20can%20do%20no%20more"} canvas = {<Canvas4/>}/>
                        <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;The%20Butterfly's%20Numidian%20Gown"} canvas = {<Canvas5/>}/>
                    </Carousel>
                </div>
            </RadioContext.Provider>
        </div>
    );

};

export default Radio;