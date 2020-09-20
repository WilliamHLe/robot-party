import React from "react";
import Canvas1 from "../canvas/Canvas1";
import DisplayPoetry from "../DisplayPoetry";

// GAMMEL METODE MED PROPS //
/*
interface SlideProps {
    speedValue: number;
    colorValue: string;
}
*/

//const SlideOne = ({speedValue, colorValue}: SlideProps) => {

/////////////////////////////


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
            <Canvas1/>
            <DisplayPoetry url={url} />
        </div>
    )
}

export default SlideOne;