import React from 'react';
import ProductList from './App/Page/ProductList.tsx';
import { AppProvider } from './App/Page/context.tsx';
import './App.css'

const App = () => {
  return (
    <div>
      <AppProvider><ProductList /></AppProvider>
    </div>
  );
};

export default App;
