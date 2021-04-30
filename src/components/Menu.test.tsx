import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; //fazer a parada q o Bruno me ensinou
import Menu from './Menu';

const NewMenu = () => {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  )
}

test('Should render the Menu with navigation anchors', () => {
  const { getByText } = render(<NewMenu />);
  const menuButton = getByText("Cadastro");
  expect(menuButton).toBeInstanceOf(HTMLAnchorElement);
});