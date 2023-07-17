import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ColorCodeController extends Controller {
  queryParams = ['code', 'number'];
  
  @service codeValidation;
  @tracked codeIsIncorrect = false;
  @tracked codeIsCorrect = false;
  @tracked exactMatches = null;
  @tracked colorMatches = null;
  @tracked exactMatchedColors = null;
  @tracked colorMatchedColors = null;
  @tracked singleExactColorMatch = false;
  @tracked singleColorMatch = false;
  @tracked code = null;
  @tracked number = null;

  firstColor = 'rood';
  secondColor = 'rood';
  thirdColor = 'rood';
  fourthColor = 'rood';

  @action
  setFirstColor(event) {
    this.firstColor = event.target.value;
  }

  @action
  setSecondColor(event) {
    this.secondColor = event.target.value;
  }

  @action
  setThirdColor(event) {
    this.thirdColor = event.target.value;
  }

  @action
  setFourthColor(event) {
    this.fourthColor = event.target.value;
  }

  @action
  checkCode() {
    const colors = [
      this.firstColor,
      this.secondColor,
      this.thirdColor,
      this.fourthColor,
    ];

    const code = this.code.split(',');

    const {
      exactMatches,
      colorMatches,
      exactMatchedColors,
      colorMatchedColors,
    } = this.codeValidation.checkGuess(code, colors);

    console.log(
      exactMatches,
      colorMatches,
      exactMatchedColors,
      colorMatchedColors
    );

    if (exactMatches === 4) {
      this.codeIsCorrect = true;
    } else {
      this.codeIsIncorrect = true;
      this.exactMatches = exactMatches;
      this.colorMatches = colorMatches;
      this.exactMatchedColors = exactMatchedColors.join(', ');
      this.colorMatchedColors = colorMatchedColors.join(', ');
      this.singleExactColorMatch = exactMatches === 1;
      this.singleColorMatch = colorMatches === 1;
    }
  }
}
