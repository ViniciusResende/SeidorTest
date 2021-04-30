import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './App.styles';
import { AppProvider } from './contexts/AppContext'

import Menu from './components/Menu'
import Footer from './components/Footer';

import Routes from './Routes';

const App: React.FC = () => {
  
  
  
  return (
    <>
    <AppProvider>
      <BrowserRouter>
        <Menu />
        <Routes />
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </AppProvider>
    </>
  );
}

export default App;
