import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameRabbitAndBear from './components/GameRabbitAndBear';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <GameRabbitAndBear></GameRabbitAndBear>
        </header>
        
        <p className="App-intro">
          How to play
        </p>
      </div>
  );
}

export default App;
