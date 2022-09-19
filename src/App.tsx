import React from 'react';
import './App.css';
import CountriesComponent from './components/Countries/CountriesComponent';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CountriesComponent />
    </div>
  );
}

export default App;
