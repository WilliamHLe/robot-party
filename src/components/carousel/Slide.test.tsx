import React from 'react';
import Slide from "./Slide";
import Canvas1 from "../canvas/Canvas1";
const TestRenderer = require('react-test-renderer');


it('renders correctly when canvas and poem is passed as prop', () => {
    const tree = TestRenderer.create(<Slide url={"https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"}  canvas={<Canvas1/>} />).toJSON();
    expect(tree).toMatchSnapshot();
});