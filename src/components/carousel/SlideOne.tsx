import React from "react";
import Canvas1 from "../canvas/Canvas1";
import DisplayPoetry from "../DisplayPoetry";
import "../Container.css"

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

interface SlideProps {
    speedValue: number;
    colorValue: string;
}

const SlideOne = ({speedValue, colorValue}: SlideProps) => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"
    return (
        <div className="container">
            {/*<h1>
                Dansende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>*/}
            <div className="canvas">
                <Canvas1 speedValue={speedValue} colorValue={colorValue} />
            </div>
            <div className="poetry">
                <DisplayPoetry url={url} />
            </div>
            <div className="audio">
                <p>test</p>
            </div>

        </div>
    )
}

export default SlideOne;