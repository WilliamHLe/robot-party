import React from "react";
import Canvas3 from "./Canvas3";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideThree = () => (
    <div>
        <h1>
            Blinkende robot
        </h1>
        <p>
            Tredje bilde av en ukjent robot
        </p>
        <Canvas3 />
    </div>
);

export default SlideThree;