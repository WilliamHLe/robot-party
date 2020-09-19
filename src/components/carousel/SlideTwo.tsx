import React from "react";
import Canvas2 from "../canvas/Canvas2";
import Canvas1 from "../canvas/Canvas1";
import DisplayPoetry from "../DisplayPoetry";
/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

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
            <Canvas2 />
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideTwo;