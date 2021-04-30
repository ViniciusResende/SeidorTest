import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; //fazer a parada q o Bruno me ensinou
import Footer from './Footer';

const NewFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
}

test('Should render the Footer with navigation anchors', () => {
  const { getByText } = render(<NewFooter />);
  const footerButton = getByText("Lista");
  expect(footerButton).toBeInstanceOf(HTMLAnchorElement);
});

test('Should render the Footer text', () => {
  const { getByText } = render(<NewFooter />);
  const footerText = getByText("Todos os direitos reservados à");
  expect(footerText).toBeInstanceOf(HTMLParagraphElement);
})

test('Should render the Footer logo image', () => {
  const { getByAltText } = render(<NewFooter />);
  const footerImage = getByAltText("logo");
  expect(footerImage).toBeInstanceOf(HTMLImageElement);
})