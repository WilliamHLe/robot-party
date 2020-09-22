import React from "react";
import Canvas4 from "../canvas/Canvas4";
import DisplayPoetry from "../DisplayPoetry";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideFour = () => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Nature%20can%20do%20no%20more"
    return (
        <div>
            <h1>
                80-tallet robot
            </h1>
            <p>
                Fjerde bilde av en dansende robot.
            </p>
            <Canvas4 />
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideFour;