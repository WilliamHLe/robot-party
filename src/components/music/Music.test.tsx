import React from 'react';

import Music from "./Music";
const TestRenderer = require('react-test-renderer');

test('renders the music component correctly', () => {
    const component = TestRenderer.create(
        <Music />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});