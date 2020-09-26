import React from 'react';
import DisplayPoetry from "./DisplayPoetry";
const TestRenderer = require('react-test-renderer');


it('renders correctly when poem is fetched', () => {
    const tree = TestRenderer.create(<DisplayPoetry  url={"https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower"} />).toJSON();
    expect(tree).toMatchSnapshot();
});