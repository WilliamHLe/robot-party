import React from "react";
import Canvas1 from "./Canvas1";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideOne = () => (
    <div>
        <h1>
            Dansende robot
        </h1>
        <p>
            Første bilde av en dansende robot.
        </p>
        <Canvas1 />
    </div>
);

export default SlideOne;