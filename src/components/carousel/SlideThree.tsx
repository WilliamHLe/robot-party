import React from "react";
import Canvas3 from "../canvas/Canvas3";
import DisplayPoetry from "../DisplayPoetry";


const SlideThree = () => {

    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Success%20is%20counted%20sweetest"
    return (
        <div>
            <h1>
                Blinkende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>
            <Canvas3/>
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideThree;