import React from 'react';
import { Button } from 'react-bootstrap';

const Keyboard = ({ onGuess, guessedLetters }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {letters.map(letter => (
        <Button
          key={letter}
          onClick={() => onGuess(letter)}
          className="m-1"
          disabled={guessedLetters.includes(letter)} // Disable already guessed letters
          variant={guessedLetters.includes(letter) ? 'secondary' : 'primary'} // Grey out guessed letters
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
