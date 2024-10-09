import React, { useState } from 'react';

// Help component for displaying game instructions
const Help = () => {
  // State to toggle showing or hiding the help content
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="help">
      {/* Button to toggle the help instructions */}
      <button onClick={() => setShowHelp(!showHelp)} className="btn btn-info">
        Help
      </button>

      {/* Conditionally render the help content when showHelp is true */}
      {showHelp && (
        <div className="help-content">
          <h3>How to Play Hangman</h3>
          <p>
            Guess the hidden word letter by letter. You have 6 chances to guess
            incorrectly. Each wrong guess results in a part of the hangman
            drawing being added. Guess the word before the drawing is complete
            to win!
          </p>
        </div>
      )}
    </div>
  );
};

export default Help;
