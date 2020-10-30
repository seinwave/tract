import React from 'react';
import Sidebar from './Sidebar'
import renderer from 'react-test-renderer'

it('renders as expected', () => {
    const tree = renderer
    .create(<Sidebar><div className="testNavChild">Item</div><div className="testNavChild2">Item2</div></Sidebar>)
    .toJSON();
    expect(tree).toMatchSnapshot(); 
})