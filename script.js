let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const textMessage = function (message) {
    document.querySelector('.message').inner.Text = message;
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').inner.Text = score;
    textMessage('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.background = '#60b347';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    } else if (guess !== secretNumber) {
        if (score > 1) {
            textMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            textMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});