import calculateResult from '../result/calculate/calculate-result.js';

const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        weapon: formData.get('weapons')
    };

    const result = calculateResult(answers);
    console.log(result);

    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);

    window.location = 'result.html';
});
