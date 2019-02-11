const test = QUnit.test;
import weaponScore from '../src/weaponScore.js';

QUnit.module('weapons score');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { pirate : 0, ninja : 0, viking : 0 };
});



test('add 1 to viking within scorecard if axe is chosen', function(assert) {
    let result = weaponScore('axe', scorecard);
    const expected = { pirate : 0, ninja : 0, viking : 1 };

    assert.deepEqual(result, expected);
});

test('add 1 to pirate within scorecard if cutlass is chosen is chosen', function(assert) {
    let result = weaponScore('cutlass', scorecard);
    const expected = { pirate : 1, ninja : 0, viking : 0 };

    assert.deepEqual(result, expected);
});

test('add 1 to ninja within scorecard if shuriken is chosen is chosen', function(assert) {
    let result = weaponScore('shuriken', scorecard);
    const expected = { pirate : 0, ninja : 1, viking : 0 };

    assert.deepEqual(result, expected);
});

