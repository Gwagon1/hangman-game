import React from 'react';
import GameBoard from './components/GameBoard';
import './styles.css';

// Main App component that serves as the entry point of the Hangman game
function App() {
  return (
    <div className="App">
      {/* App header section displaying the title */}
      <header className="App-header">
        <h1>Hangman Game</h1>
      </header>

      {/* The GameBoard component which contains the game's main logic */}
      <GameBoard />
    </div>
  );
}

export default App;
