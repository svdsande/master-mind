import { module, test } from 'qunit';
import { setupTest } from 'master-mind/tests/helpers';

module('Unit | Controller | number-setup', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:number-setup');
    assert.ok(controller);
  });
});
