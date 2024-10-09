# Hangman Game

## Introduction
Welcome to the Hangman game built using React! The objective of this game is to guess the hidden word one letter at a time. You only have six incorrect attempts, so choose wisely!

## Installation Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Gwagon1/hangman-game.git
   cd hangman-game

2. **Install Dependencies**
   ```bash  
   npm install

This will download all the necessary dependencies for the project to run.

3. **Start the Application**
   ```bash
   npm start

This will open the game in your default browser at http://localhost:3000.

4. **Buld for Production (Optional)**
   ```bash
   npm run build

This will create an optimized build in the build/ directory, ready for development.

## Rules of the Game
1. A random word is selected for the user to guess.
2. The user must guess letters, one at a time.
3. Correct guesses fill in the corresponding letters in the word.
4. Incorrect guesses increment the "hangman" drawing.
5. The game is lost when the hangman is fully drawn (after a set number of wrong guesses).
6. The game is won if all letters are guessed correctly before the hangman is fully drawn.

### Features
- Random word selection
- Multiple game states (win/loss)
- Interactive UI with disabled guessed letters
- Option to restart the game

---

### Technologies Used

- React
- React Bootstrap