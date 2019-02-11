import calculateResult from '../result/calculate/calculate-result.js';

const resultNode = document.getElementById('result');

const jsonAnswers = window.localStorage.getItem('answers');

const answers = JSON.parse(jsonAnswers);

const result = calculateResult(answers);

resultNode.textContent = result;

const back = document.getElementById('back');

back.addEventListener('click', function() {
    window.location = 'quiz.html';
});