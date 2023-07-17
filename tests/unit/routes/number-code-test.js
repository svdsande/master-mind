import { module, test } from 'qunit';
import { setupTest } from 'master-mind/tests/helpers';

module('Unit | Route | number-code', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:number-code');
    assert.ok(route);
  });
});
