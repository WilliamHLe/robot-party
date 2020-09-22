import React from "react";
import Canvas4 from "../canvas/Canvas4";
import DisplayPoetry from "../DisplayPoetry";
import "../container.css"
import Canvas2 from "../canvas/Canvas2";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

interface SlideProps {
    speedValue: number;
    colorValue: string;
}

const SlideFour = ({speedValue, colorValue}: SlideProps) => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Nature%20can%20do%20no%20more"
    return (
        <div className="grid-container">
            {/*<h1>
                Dansende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>*/}
            <div className="grid-canvas">
                <Canvas4 speedValue={speedValue} colorValue={colorValue} />
            </div>
            <div className="grid-poetry">
                <DisplayPoetry url={url} />
            </div>
            <div className="grid-audio">
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg"></source>
                </audio>
            </div>

        </div>
    )
}

export default SlideFour;