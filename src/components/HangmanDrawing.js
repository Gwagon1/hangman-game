import React from 'react';
import stage0 from '../assets/stage0.png';
import stage1 from '../assets/stage1.png';
import stage2 from '../assets/stage2.png';
import stage3 from '../assets/stage3.png';
import stage4 from '../assets/stage4.png';
import stage5 from '../assets/stage5.png';
import stage6 from '../assets/stage6.png';
import stage7 from '../assets/stage7.png';

class HangmanDrawing extends React.Component {
  // Function to get the correct image based on incorrect guesses
  getDrawingImage(incorrectGuesses) {
    switch (incorrectGuesses) {
      case 0:
        return stage0;
      case 1:
        return stage1;
      case 2:
        return stage2;
      case 3:
        return stage3;
      case 4:
        return stage4;
      case 5:
        return stage5;
      case 6:
        return stage6;
      case 7:
        return stage7;
      default:
        return stage0; // fallback to initial image
    }
  }

  render() {
    const { incorrectGuesses } = this.props; // Receive incorrect guesses as prop
    const drawingImage = this.getDrawingImage(incorrectGuesses); // Get the corresponding image

    return (
      <div className="hangman-drawing">
        <img src={drawingImage} alt={`Hangman drawing stage ${incorrectGuesses}`} />
      </div>
    );
  }
}

export default HangmanDrawing;
