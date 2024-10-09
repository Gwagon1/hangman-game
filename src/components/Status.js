import React from 'react';

// Status component for displaying the current word and game result
const Status = ({ word, guessedLetters, gameStatus }) => {
  // Format the word, showing guessed letters or underscores for unguessed letters
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div className="status">
      {/* Display the word with guessed letters */}
      <h2>Word: {displayWord}</h2>

      {/* Display win or loss message based on game status */}
      {gameStatus === 'won' && <h3>You Win!</h3>}
      {gameStatus === 'lost' && <h3>You Lose! The word was {word}</h3>}
    </div>
  );
};

export default Status;
