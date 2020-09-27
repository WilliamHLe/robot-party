import React from 'react';
import Radio from "./Radio";
/*
import RadioContext from "../context/RadioContext";
import {act, render, fireEvent, cleanup} from '@testing-library/react';
import Canvas1 from "../canvas/Canvas1";
*/
const renderer = require("react-test-renderer");


it('renders correctly', () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
});

//test context??


/*
afterEach(cleanup)

it('Context value is updated by child component', () => {

    const { container, getByText } = render(<Radio/>);

    expect(getByText(/Some/i).textContent).toBe("Some Text")

    fireEvent.click(getByText("Change Text"))

    expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})
*/
