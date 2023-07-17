import Service from '@ember/service';

export default class CodeValidationService extends Service {
  validate(input, code) {
    return (
      input.length === code.length &&
      input.every((value, index) => value === code[index])
    );
  }

  checkGuess(code, guess) {
    let exactMatches = 0;
    let colorMatches = 0;

    const codeCounts = {};
    const guessCounts = {};

    // Check for exact matches and count the occurrences of each color in the code and guess
    for (let i = 0; i < code.length; i++) {
      const codeColor = code[i];
      const guessColor = guess[i];

      if (codeColor === guessColor) {
        exactMatches++;
      } else {
        // Count occurrences of colors in code and guess
        if (codeColor in codeCounts) {
          codeCounts[codeColor]++;
        } else {
          codeCounts[codeColor] = 1;
        }

        if (guessColor in guessCounts) {
          guessCounts[guessColor]++;
        } else {
          guessCounts[guessColor] = 1;
        }
      }
    }

    // Check for color matches
    for (const color in guessCounts) {
      if (codeCounts[color]) {
        colorMatches += Math.min(codeCounts[color], guessCounts[color]);
      }
    }

    /// Prepare detailed match information
    const exactMatchedColors = [];
    const colorMatchedColors = [];

    for (let i = 0; i < guess.length; i++) {
      const codeColor = code[i];
      const guessColor = guess[i];

      if (codeColor === guessColor) {
        exactMatchedColors.push(guessColor);
      } else if (codeCounts[guessColor] && guessCounts[guessColor]) {
        colorMatchedColors.push(guessColor);
      }
    }

    return {
      exactMatches,
      colorMatches,
      exactMatchedColors,
      colorMatchedColors,
    };
  }

  validateAllCodeValuesArePresent(code, input) {
    const uniqueNumbers = [...new Set(input)];
    return (
      input.length === code.length &&
      code.every((value) => uniqueNumbers.includes(value))
    );
  }
}
