import weaponScore from '../result/calculate/weaponScore.js';

const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        weapon: formData.get('weapons')
    };

    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);

    //route to results page
});

console.log(weaponScore('axe', { pirate : 0, ninja : 0, viking : 0 }));