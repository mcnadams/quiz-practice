const test = QUnit.test;
import rateScorecard from '../src/result/calculate/rate-scorecard.js';

QUnit.module('rate scorecard');

test('if scorecard.ninja is highest, return Ninja', function(assert) {
    const scorecard = { pirate : 0, ninja : 1, viking : 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Ninja';
    assert.equal(result, expected);
});

test('if scorecard.viking is highest, return Viking', function(assert) {
    const scorecard = { pirate : 0, ninja : 1, viking : 2 };
    const result = rateScorecard(scorecard);
    const expected = 'Viking';
    assert.equal(result, expected);
});

test('if scorecard.pirate is highest or tied for highest, return Pirate', function(assert) {
    const scorecard = { pirate : 3, ninja : 1, viking : 2 };
    const result = rateScorecard(scorecard);
    const expected = 'Pirate';
    assert.equal(result, expected);
});
