import React from 'react';
import { render } from '@testing-library/react';
import Input from './index';

test('Should render the custom input', () => {
  const { getByPlaceholderText } = render(<Input mask="cpf" placeholder="text"/>);
  const inputElement = getByPlaceholderText("text");
  expect(inputElement).toBeInstanceOf(HTMLInputElement);
});

test('Should render a prefix div with span in case of having it', () => {
  const { getByText } = render(<Input mask="currency" prefix="R$"/>);
  const spanPrefix = getByText("R$");
  expect(spanPrefix).toBeInstanceOf(HTMLSpanElement);
})