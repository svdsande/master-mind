import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class NumberCodeController extends Controller {
  queryParams = ['code'];

  @service codeValidation;

  @tracked code = null;
  @tracked codeIsIncorrect = false;
  @tracked codeIsCorrect = false;
  @tracked firstNumber = '';
  @tracked secondNumber = '';
  @tracked thirdNumber = '';

  @action
  checkCode() {
    this.input = [this.firstNumber, this.secondNumber, this.thirdNumber].map(
      (number) => parseInt(number)
    );
    const code = this.code.split(',').map((number) => parseInt(number));
    const codeIsValid = this.codeValidation.validateAllCodeValuesArePresent(
      code,
      this.input
    );
    this.codeIsIncorrect = !codeIsValid;
    this.codeIsCorrect = codeIsValid;

    if (!codeIsValid) {
      this.resetNumbers();
    }
  }

  resetNumbers() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.thirdNumber = '';
  }
}
