import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

const NewMenu = () => {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  )
}

test('Should render the Footer with navigation anchors', () => {
  const tree = renderer
    .create(<NewMenu />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});