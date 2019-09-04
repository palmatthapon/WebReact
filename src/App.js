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
          High score
        </p>
      </div>
  );
}

export default App;
