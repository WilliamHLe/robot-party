import React, {useState} from "react";
import {getJson} from "./jsonStorage";
import ChangeName from "./ChangeName";
import "./PresentName.css";


const PresentName = () => {

    let personalInfo = getJson("personalInfo") || "{}";

    const [visible, setVisible] = useState<boolean>(false);
    const [icon, setIcon] = useState<string>("+")

    let introduction:string;

    if (personalInfo.name === "") {
        introduction = "Hei!"
    }
    else {
        introduction = "Hei, " + personalInfo.name + "!"
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