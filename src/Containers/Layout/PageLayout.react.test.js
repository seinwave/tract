import React from 'react';
import Layout from './Layout'
import renderer from 'react-test-renderer'

it('renders as expected', () => {
    const tree = renderer
    .create(<Layout/>)
    .toJSON();
    expect(tree).toMatchSnapshot(); 
})