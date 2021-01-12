import React from 'react';
import './App.scss';
import Headers from './core/components/Header';

import Home from './pages/Home';
function App() {
  return (
    <div>
      <Headers/>
      <Home/>
    </div>
  );
}

export default App;
