import { module, test } from 'qunit';
import { setupTest } from 'master-mind/tests/helpers';

module('Unit | Controller | color-setup', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:color-setup');
    assert.ok(controller);
  });
});
