import React from 'react';

const HangmanDrawing = ({ incorrectGuesses }) => {
  const drawings = [
    // Add drawing elements or images for different incorrect guesses here
    <div className="drawing">Drawing 0</div>,
    <div className="drawing">Drawing 1</div>,
    <div className="drawing">Drawing 2</div>,
    <div className="drawing">Drawing 3</div>,
    <div className="drawing">Drawing 4</div>,
    <div className="drawing">Drawing 5</div>,
    <div className="drawing">Drawing 6</div>
  ];

  return <div className="hangman-drawing">{drawings[incorrectGuesses]}</div>;
};

export default HangmanDrawing;
