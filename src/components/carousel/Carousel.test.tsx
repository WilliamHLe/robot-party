import React from 'react';
import Carousel from "./Carousel";
import Slide from "./Slide";
import Canvas1 from "../canvas/Canvas1";
import Canvas2 from "../canvas/Canvas2";

const renderer = require("react-test-renderer");

//carousel must have minimum two children
it('renders correctly with two children that takes url and canvas as props', () => {
    const tree = renderer.create(
        <Carousel>
            <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"} canvas = {<Canvas1/>}/>
            <Slide url = {"https://poetrydb.org/author,title/Emily%20Dickinson;Could%20Hope%20inspect%20her%20Basis"} canvas = {<Canvas2/>}/>
        </Carousel>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});