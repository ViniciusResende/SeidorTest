import React from 'react';
// import { render } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom'; //fazer a parada q o Bruno me ensinou
// import List from './List';

// const NewList= () => {
//   return (
//     <BrowserRouter>
//       <List />
//     </BrowserRouter>
//   )
// }

// test('Should render the List with Header content', () => {
//   const { getByText, getByAltText } = render(<NewList />);
//   const headerTitle = getByText("Registrar Funcionarios - Tabelas e cálculos do IRPF");
//   expect(headerTitle).toBeInstanceOf(HTMLTitleElement);
//   const headerImage = getByAltText("logo");
//   expect(headerImage).toBeInstanceOf(HTMLImageElement);
// });

// test('Should render the List with InformationSection content', () => {
//   const { getByText } = render(<NewList />);
//   const informationTitle = getByText("Tabelas e cálculos do IRPF");
//   expect(informationTitle).toBeInstanceOf(HTMLTitleElement);
//   const informationContent = getByText(/A tabela do IR é um dos/i);
//   expect(informationContent).toBeInstanceOf(HTMLParagraphElement);
// });