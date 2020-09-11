import React from "react";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideTwo = () => (
    <div>
        <h1>
            Blinkende robot
        </h1>
        <p>
            Andre bilde av en blinkende robot
        </p>
        <img src="https://via.placeholder.com/400/FF0000/ffffff" alt="Bilde2"/>
    </div>
);

export default SlideTwo;