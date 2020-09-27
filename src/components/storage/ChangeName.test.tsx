import React from 'react';
import ChangeName from "./ChangeName";
const renderer = require("react-test-renderer");


it('renders correctly', () => {
    const tree = renderer.create(<ChangeName />).toJSON();
    expect(tree).toMatchSnapshot();
});

// test localstorage?