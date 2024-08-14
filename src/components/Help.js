import React, { useState } from 'react';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="help">
      <button onClick={() => setShowHelp(!showHelp)} className="btn btn-info">
        Help
      </button>
      {showHelp && (
        <div className="help-content">
          <h3>How to Play Hangman</h3>
          <p>Guess the hidden word letter by letter. You have 6 chances to guess incorrectly. Each wrong guess results in a part of the hangman drawing being added. Guess the word before the drawing is complete to win!</p>
        </div>
      )}
    </div>
  );
};

export default Help;
