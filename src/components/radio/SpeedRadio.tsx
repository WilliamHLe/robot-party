import React, {useState} from "react";
import "./Radio.css";
//import RadioButton from "./RadioButton";

// To radiokomponenter
// En for farger (RGB-verdier)
// En for hastighet (tall)

const SpeedRadio: React.FC = () => {

    const [selected, setSelected] = useState<string>("SLOW");


    return(
        <div className="radio-wrapper">
            <h3>Velg hastighet:</h3>
            <div className="radio-buttons">

                <label>
                    <input type="radio" value="SLOW" name="Sakte" checked={selected === "SLOW"} onChange={() => setSelected("SLOW")}/>
                    Sakte&nbsp;&nbsp;
                </label>
                <label>
                    <input type="radio" value="NORMAL" name="Normal" checked={selected === "NORMAL"} onChange={() => setSelected("NORMAL")}/>
                    Normal&nbsp;&nbsp;
                </label>
                <label>
                    <input type="radio" value="FAST" name="Rask" checked={selected === "FAST"} onChange={() => setSelected("FAST")}/>
                    Rask
                </label>

            </div>
        </div>
    );

};

export default SpeedRadio;