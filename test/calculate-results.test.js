const test = QUnit.test;

import calculateResult from '../src/result/calculate/calculate-result.js';


test('if answers.weapon is axe, calculateResult returns Viking', function(assert) {
    const answers = {
        weapon: 'axe'
    };

    const result = calculateResult(answers);
    const expected = 'Viking';

    assert.equal(result, expected);
});

test('if answers.weapon is cutlass, calculateResult returns Pirate', function(assert) {
    const answers = {
        weapon: 'cutlass'
    };

    const result = calculateResult(answers);
    const expected = 'Pirate';

    assert.equal(result, expected);
});

test('if answers.weapon is shuriken, calculateResult returns Ninja', function(assert) {
    const answers = {
        weapon: 'shuriken'
    };

    const result = calculateResult(answers);
    const expected = 'Ninja';

    assert.equal(result, expected);
});