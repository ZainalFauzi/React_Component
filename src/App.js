import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CounterFunc from './Components/CounterFunc';
import CounterClass from './Components/CounterClass';

function App() {
  return (
    <div className="App">
          <CounterClass />
          <CounterFunc />
    </div>
  );
}

export default App;
