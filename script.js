let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const textMessage = function (message) {
    document.querySelector('.message').inner.Text = message;
}