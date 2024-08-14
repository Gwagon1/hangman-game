import React from 'react';
import { Button } from 'react-bootstrap';

const Keyboard = ({ onGuess }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {letters.map(letter => (
        <Button
          key={letter}
          onClick={() => onGuess(letter)}
          className="m-1"
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
