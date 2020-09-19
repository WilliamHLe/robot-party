import React, {useState} from "react";
import "./Radio.css";

// To radiokomponenter
// En for farger (RGB-verdier)
// En for hastighet (tall)

const ColorRadio: React.FC = () => {

    const [selected, setSelected] = useState<number>(0);

    return(
        <div className="radio-wrapper">
            <h3>Velg fargetema:</h3>
            <div className="radio-buttons">

                <label>
                    <input type="radio" value="Red" name="Rødt" checked={selected === 0} onChange={() => setSelected(0)}/>
                    Rødt&nbsp;&nbsp;
                </label>
                <label>
                    <input type="radio" value="Blue" name="Blått" checked={selected === 1} onChange={() => setSelected(1)}/>
                    Blått&nbsp;&nbsp;
                </label>
                <label>
                    <input type="radio" value="Yellow" name="Gult" checked={selected === 2} onChange={() => setSelected(2)}/>
                    Gult
                </label>

            </div>
        </div>
    );

};

export default ColorRadio;