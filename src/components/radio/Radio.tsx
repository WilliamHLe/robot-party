import React, {useState} from "react";
import "./Radio.css";

import Carousel from "../carousel/Carousel";
import SlideOne from "../carousel/SlideOne";
import SlideTwo from "../carousel/SlideTwo";
import SlideThree from "../carousel/SlideThree";
import SlideFour from "../carousel/SlideFour";
import SlideFive from "../carousel/SlideFive";

// To radiokomponenter
// En for farger (RGB-verdier)
// En for hastighet (tall)


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
                            <input type="radio" value="Red" name="Rødt" checked={color === "RED"} onChange={() => setColor("RED")}/>
                            Rødt&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value="Blue" name="Blått" checked={color === "BLUE"} onChange={() => setColor("BLUE")}/>
                            Blått&nbsp;&nbsp;
                        </label>
                        <label>
                            <input type="radio" value="Green" name="Grønt" checked={color === "GREEN"} onChange={() => setColor("GREEN")}/>
                            Gult
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <Carousel>
                    <SlideOne speedValue={speed} colorValue={color}/>
                    <SlideTwo speedValue={speed} colorValue={color}/>
                    <SlideThree speedValue={speed} colorValue={color}/>
                    <SlideFour speedValue={speed} colorValue={color}/>
                    <SlideFive speedValue={speed} colorValue={color}/>
                </Carousel>
            </div>
        </div>
    );

};

export default Radio;