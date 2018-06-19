import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from './components/Header';
import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main className="container">
        <Routes />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
