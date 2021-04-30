import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Input from './index';

test('Should render the custom input', () => {
  const tree = renderer
    .create(<Input mask="currency" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render a prefix div with span in case of having it', () => {
  const { getByText } = render(<Input mask="currency" prefix="R$"/>);
  const spanPrefix = getByText("R$");
  expect(spanPrefix).toBeInstanceOf(HTMLSpanElement);
})