import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const NewFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
}

test('Should render the Footer with navigation anchors', () => {
  const tree = renderer
    .create(<NewFooter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});