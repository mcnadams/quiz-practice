function weaponScore(weapon, scorecard) {
    if(weapon === 'axe') {
        scorecard.viking += 1;
    }
    else if(weapon === 'cutlass') {
        scorecard.pirate += 1;
    }
    else if(weapon === 'shuriken') {
        scorecard.ninja += 1;
    }

    return scorecard;
}

export default weaponScore;