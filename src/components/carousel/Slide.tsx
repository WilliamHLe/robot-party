import React from "react";
import DisplayPoetry from "../poetry/DisplayPoetry";
import "../Container.css"


interface SlideProps {
    url: string;
    canvas: JSX.Element;
}

//Slide returnerer innholdet selve <div>en som skal vises i slideshowet
//Tar inn en url for å hente riktig dikt og en canvas-komponent som props
const Slide = ({url, canvas}: SlideProps) => {
    return (
        <div className="grid-container">
            <div className="grid-canvas">
                {canvas}
            </div>
            <div className="grid-poetry">
                <DisplayPoetry url={url} />
            </div>

        </div>
    )
}

export default Slide;