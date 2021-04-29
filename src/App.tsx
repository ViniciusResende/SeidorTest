import React from 'react';

import { GlobalStyle } from './App.styles';
import { AppProvider } from './contexts/AppContext'

import Menu from './components/Menu'
import FormUserData from './components/FormUserData';
import List from './components/List';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  
  
  return (
    <>
    <AppProvider>
      <GlobalStyle />
      <div className="App">
        <Menu />
        <FormUserData />
        <List />
        <Footer />
      </div>
    </AppProvider>
    </>
  );
}

export default App;
