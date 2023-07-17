import { module, test } from 'qunit';
import { setupTest } from 'master-mind/tests/helpers';

module('Unit | Route | color-code', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:color-code');
    assert.ok(route);
  });
});
