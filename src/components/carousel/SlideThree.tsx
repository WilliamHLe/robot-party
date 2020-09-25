import React from "react";
import Canvas3 from "../canvas/Canvas3";
import Canvas1 from "../canvas/Canvas1";
import DisplayPoetry from "../DisplayPoetry";
import Canvas2 from "../canvas/Canvas2";
import "../container.css"
import Music from "../Music";


const SlideThree = () => {

    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Success%20is%20counted%20sweetest"
    return (
        <div className="grid-container">
            {/*<h1>
                Dansende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>*/}
            <div className="grid-canvas">
                <Canvas3 />
            </div>
            <div className="grid-poetry">
                <DisplayPoetry url={url} />
            </div>
            <div className="grid-audio">
            </div>

        </div>
    )
}

export default SlideThree;