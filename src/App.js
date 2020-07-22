import React from 'react';
import Header from './Componentes/Header';
import './styles.css';
import Routes from '../src/routes';

const App = () => {
   return (
    <div className="App">
      <Header />
      <Routes />
    </div>
   )
};

export default App;
