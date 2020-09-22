import React, {useState} from "react";
import "./Radio.css";

import Carousel from "../carousel/Carousel";
import SlideOne from "../carousel/SlideOne";
import SlideTwo from "../carousel/SlideTwo";
import SlideThree from "../carousel/SlideThree";
import RadioContext from "../context/RadioContext";

// To radiokomponenter
// En for hastighet (tall)
// En for farger (RGB-verdier)


const Radio: React.FC = () => {

    //60 = SLOW, 35 = NORMAL, 15 = FAST
    const [speed, setSpeed] = useState<number>(60);

    // "#FF0000" = RED, "#0000FF" = BLUE, "#00FF00" = GREEN
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
            <RadioContext.Provider value={{speed, color}}>
                <div>
                    <Carousel>
                        {/* GAMMEL METODE MED PROPS, TAR VARE PÅ INNTIL VIDERE
                        <SlideOne speedValue={speed} colorValue={color}/>
                        <SlideTwo speedValue={speed} colorValue={color}/>
                        <SlideThree speedValue={speed} colorValue={color}/>
                        */}
                        <SlideOne/>
                        <SlideTwo/>
                        <SlideThree/>
                    </Carousel>
                </div>
            </RadioContext.Provider>
        </div>
    );

};

export default Radio;