function rateScorecard(scorecard) {
    const pirate = scorecard.pirate;
    const ninja = scorecard.ninja;
    const viking = scorecard.viking;

    if(ninja > pirate && ninja > viking) {
        return 'Ninja';
    }
    else if(viking > pirate && viking > ninja) {
        return 'Viking';
    }
    else {
        return 'Pirate';
    }
}

export default rateScorecard;