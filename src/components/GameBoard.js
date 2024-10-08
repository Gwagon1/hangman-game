import React, { useState, useEffect } from 'react';
import HangmanDrawing from './HangmanDrawing';
import Keyboard from './Keyboard';
import Status from './Status';
import Help from './Help';

const words = ['REACT', 'JAVASCRIPT', 'HANGMAN', 'COMPUTER', 'PROGRAMMING'];

function GameBoard() {
  // Game state management
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'won', 'lost', 'playing'
  const maxIncorrectGuesses = 6;

  // Initialize the word when the component mounts
  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  // Determine if the game is won or lost
  useEffect(() => {
    const uniqueGuessedLetters = new Set(guessedLetters);
    if (word && word.split('').every(letter => uniqueGuessedLetters.has(letter))) {
      setGameStatus('won');
    }
    if (incorrectGuesses >= maxIncorrectGuesses) {
      setGameStatus('lost');
    }
  }, [guessedLetters, incorrectGuesses, word]);

  // Handle letter guesses
  const handleGuess = (letter) => {
    // Check if letter has already been guessed
    if (guessedLetters.includes(letter)) return;

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  // Restart the game
  const restartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('playing');
  };

  return (
    <div className="game-board">
      <HangmanDrawing incorrectGuesses={incorrectGuesses} />
      <Status word={word} guessedLetters={guessedLetters} gameStatus={gameStatus} />
      <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      <Help />
      {gameStatus !== 'playing' && (
        <button onClick={restartGame} className="btn btn-primary">Restart Game</button>
      )}
    </div>
  );
}

export default GameBoard;
