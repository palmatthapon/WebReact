import React from 'react';
import './App.css';
import GameRabbitAndBear from './components/Game/GameRabbitAndBear';
import HighScore from './components/Game/HighScore';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <GameRabbitAndBear></GameRabbitAndBear>
        </header>
        <HighScore></HighScore>
      </div>
  );
}

export default App;
