import React, {useState} from "react";
import {getJson} from "./JsonStorage";
import ChangeName from "./ChangeName";
import "./PresentName.css";

//Komponent som viser introduksjonen øverst på siden som sier enten "Hei!" eller "Hei, Navn!"
//Henter et navn til introduksjonen dersom det fins i localstorage
const PresentName = () => {

    let personalInfo = getJson("personalInfo") || "{}";

    const [visible, setVisible] = useState<boolean>(false);
    const [icon, setIcon] = useState<string>("+")

    let introduction:string;

    if ("name" in personalInfo) {
        introduction = "Hei, " + personalInfo.name + "!"
    }
    else {
        introduction = "Hei!"
    }

    const toggleChange = () => {
        setVisible(!visible) //toggler mellom false og true hver gang man trykker på knappen

        if (visible) {
            setIcon("+")
        }
        else {
            setIcon(("-"))
        }
    }

    return (
        <div className={"introductionWrapper"}>
            <h1>{introduction}</h1>
            <button onClick={toggleChange} className={"toggleButton"}>
                <span>Endre navn</span><span className={"plusMinus"}>{icon}</span>
            </button>
            {visible ? <ChangeName/> : null}
        </div>
    )
};

export default PresentName;