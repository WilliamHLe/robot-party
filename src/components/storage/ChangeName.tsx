//UFERDIG OG IKKE TESTET ENDA

import React, {useState} from "react"
import {setJson} from "./jsonStorage";
import "./ChangeName.css"

const ChangeName = () => {

    const [name, setName] = useState("");
    const [saved, setSaved] = useState(false);

    // The event type is a "ChangeEvent"
    // We pass in "HTMLInputElement" to the input
    /*
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
     */

    function handleSubmit() {
        //JSON-lagring
        let personalInfo = {
            name: name
        }

        setJson("personalInfo", personalInfo)
        setSaved(true);

    }


    return (
        <div className={"formWrapper"}>
            <label id="nameInput" htmlFor="name" style={{marginBottom:"10px", marginTop:"5px"}}>Navn:
                <br/><input id="name" type="text" name="Navn" placeholder={name} onChange={e => setName(e.target.value)}></input>
            </label>
            <button type="submit" onClick={() => handleSubmit()}>
                Lagre endringer
            </button>
            {saved ? <p>Ditt navn er lagret! Lukk endringsmenyen for å få ny hilsen.</p> : null}
        </div>
    );
};

export default ChangeName;