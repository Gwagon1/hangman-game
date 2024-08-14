import React from 'react';

const Status = ({ word, guessedLetters, gameStatus }) => {
  const displayWord = word.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');

  return (
    <div className="status">
      <h2>Word: {displayWord}</h2>
      {gameStatus === 'won' && <h3>You Win!</h3>}
      {gameStatus === 'lost' && <h3>You Lose! The word was {word}</h3>}
    </div>
  );
};

export default Status;
