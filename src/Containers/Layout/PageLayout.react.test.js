import React from 'react';
import PageLayout from './PageLayout'
import renderer from 'react-test-renderer'

it('renders as expected', () => {
    const tree = renderer
    .create(<PageLayout/>)
    .toJSON();
    expect(tree).toMatchSnapshot(); 
})