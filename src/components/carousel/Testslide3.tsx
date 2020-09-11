import React from "react";

/*Her endrer vi hver slide til å inneholde bilde/tekst/lyd vi ønsker, dette er en helt egen komponent*/
/*Har lagt til header, paragraph og et bilde som placeholder inntil videre*/

const SlideThree = () => (
    <div>
        <h1>
            Ukjent robot
        </h1>
        <p>
            Tredje bilde av en ukjent robot
        </p>
        <img src="https://via.placeholder.com/400/32CD32/ffffff" alt="Bilde3"/>
    </div>
);

export default SlideThree;