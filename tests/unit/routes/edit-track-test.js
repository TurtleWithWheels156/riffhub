import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | edit-track', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:edit-track');
    assert.ok(route);
  });
});
