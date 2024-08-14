import React from 'react';
import GameBoard from './components/GameBoard';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman Game</h1>
      </header>
      <GameBoard />
    </div>
  );
}

export default App;
