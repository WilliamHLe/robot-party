import React from "react";
import Canvas2 from "./Canvas2";
/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideTwo = () => (
    <div>
        <h1>
            Hoppende robot
        </h1>
        <p>
            Andre bilde av en blinkende robot
        </p>
        <Canvas2 />
    </div>
);

export default SlideTwo;