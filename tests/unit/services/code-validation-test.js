import { module, test } from 'qunit';
import { setupTest } from 'master-mind/tests/helpers';

module('Unit | Service | code-validation', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:code-validation');
    assert.ok(service);
  });
});
