import React from "react";
import Canvas3 from "../canvas/Canvas3";
import DisplayPoetry from "../DisplayPoetry";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideThree = () => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Success%20is%20counted%20sweetest"
    return (
        <div>
            <h1>
                Blinkende robot
            </h1>
            <p>
                Tredje bilde av en blinkende robot.
            </p>
            <Canvas3 />
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideThree;