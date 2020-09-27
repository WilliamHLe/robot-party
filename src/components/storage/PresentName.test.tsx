import React from 'react';
import PresentName from "./PresentName";
const renderer = require("react-test-renderer");


it('renders correctly', () => {
    const tree = renderer.create(<PresentName />).toJSON();
    expect(tree).toMatchSnapshot();
});

//test localstorage?