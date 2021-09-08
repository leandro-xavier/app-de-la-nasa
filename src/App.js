import React from 'react'
import './App.css';
import { CardNasa } from './components/CardNasa';
import { Navigation } from './components/Navigation';



const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <CardNasa/>
    </div>
  );
}
export default App
