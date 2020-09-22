import React from "react";
import Canvas2 from "../canvas/Canvas2";
import "../container.css"
import DisplayPoetry from "../DisplayPoetry";
/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

interface SlideProps {
    speedValue: number;
    colorValue: string;
}

const SlideTwo = ({speedValue, colorValue}: SlideProps) => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;Could%20Hope%20inspect%20her%20Basis"
    return (
        <div className="grid-container">
            {/*<h1>
                Dansende robot
            </h1>
            <p>
                Første bilde av en dansende robot.
            </p>*/}
            <div className="grid-canvas">
                <Canvas2 speedValue={speedValue} colorValue={colorValue} />
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

export default SlideTwo;