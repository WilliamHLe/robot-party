import React, {useState} from "react"
import {setJsonLocal} from "./JsonStorage";
import "./ChangeName.css"

//Komponent som kun vil vises dersom brukeren klikker på toggle-knappen "Endre navn"
//Bruker localstorage til å lagre et nytt navn fra brukerinput
const ChangeName = () => {

    const [name, setName] = useState("");
    const [saved, setSaved] = useState(false);

    function handleSubmit() {
        //JSON-lagring
        let personalInfo = {
            name: name
        }

        setJsonLocal("personalInfo", personalInfo)
        setSaved(true);

    }


    return (
        <div className={"formWrapper"}>
            <label id="nameInput" htmlFor="name" style={{marginBottom:"10px", marginTop:"5px"}}>Navn:
                <br/>
                <input id="name" type="text" name="Navn" placeholder={name} onChange={e => setName(e.target.value)}/>
            </label>
            <button type="submit" onClick={() => handleSubmit()}>
                Lagre endringer
            </button>
            {saved ? <p>Ditt navn er lagret! Lukk endringsmenyen for å få ny hilsen.</p> : null}
        </div>
    );
};

export default ChangeName;