import React from "react";
import DisplayPoetry from "../DisplayPoetry";
import "../container.css"
import Music from "../Music";


interface SlideProps {
    url: string;
    canvas: JSX.Element;
}


const Slide = ({url, canvas}: SlideProps) => {
    return (
        <div className="grid-container">
            <div className="grid-canvas">
                {canvas}
            </div>
            <div className="grid-poetry">
                <DisplayPoetry url={url} />
            </div>
            <div className="grid-audio">
                <Music />
            </div>

        </div>
    )
}

export default Slide;