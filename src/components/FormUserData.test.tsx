import React from 'react';
import renderer from 'react-test-renderer';
import FromUserData from './FormUserData';

test('Should render the form', () => {
  const tree = renderer
    .create(<FromUserData />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})