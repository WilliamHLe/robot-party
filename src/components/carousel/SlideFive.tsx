import React from "react";
import Canvas5 from "../canvas/Canvas5";
import DisplayPoetry from "../DisplayPoetry";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

interface SlideProps {
    speedValue: number;
    colorValue: string;
}

const SlideFive = ({speedValue, colorValue}: SlideProps) => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;The%20Butterfly's%20Numidian%20Gown"
    return (
        <div>
            <h1>
                Retro robot dans
            </h1>
            <p>
                Femte bilde av en dansende robot.
            </p>
            <Canvas5 />
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideFive;