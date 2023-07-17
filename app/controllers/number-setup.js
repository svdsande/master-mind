import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class NumberSetupController extends Controller {
    @service router;

    @tracked firstNumber = '';
    @tracked secondNumber = '';
    @tracked thirdNumber = '';

    @action
    submit() {
        const code = [this.firstNumber, this.secondNumber, this.thirdNumber].join(',');
        this.router.transitionTo('number-code', { queryParams: { code } });
    }
}
