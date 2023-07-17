import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ColorSetupController extends Controller {
    @service router;

    firstColor = 'rood';
  secondColor = 'rood';
  thirdColor = 'rood';
  fourthColor = 'rood';
  @tracked number= null;

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
  submit() {
    const code = [
      this.firstColor,
      this.secondColor,
      this.thirdColor,
      this.fourthColor,
    ].join(',');
    this.router.transitionTo('color-code', { queryParams: { code, number: this.number } });
  }
}
