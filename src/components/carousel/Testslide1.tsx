import React from "react";
import Canvas1 from "./Canvas1";
import DisplayPoetry from "../DisplayPoetry";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideOne = () => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"
    return (
        <div>
            <h1>
                Dansende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>
            <Canvas1 />
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideOne;