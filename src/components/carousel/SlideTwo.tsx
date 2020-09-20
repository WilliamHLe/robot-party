import React from "react";
import Canvas2 from "../canvas/Canvas2";
import DisplayPoetry from "../DisplayPoetry";

const SlideTwo = () => {

    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Could%20Hope%20inspect%20her%20Basis"
    return (
        <div>
            <h1>
                Hoppende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>
            <Canvas2/>
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideTwo;