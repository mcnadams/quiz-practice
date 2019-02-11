import weaponScore from './weaponScore.js';
import rateScorecard from './rate-scorecard.js';

function calculateResult(answers) {
    const scorecard = { pirate : 0, viking : 0, ninja : 0 };
    weaponScore(answers.weapon, scorecard);
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;