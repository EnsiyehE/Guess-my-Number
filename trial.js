'use strict';
/*
document.querySelector('.message')
//inside the ' ' we write exactly how we are selecting in css

console.log(document.querySelector('.message'));

document.querySelector('.message').textContent // we get the text inside the element

//lecture 72 , selecting and manipulating elements
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value; // we read the value from the empty input box

document.querySelector('.guess').value = 23 // we can see 23 in the input value because we manipulated it
*/
//Handling click Events or event listeners , video 73
// we need to define the secret number in start,lecture 74
let number = Math.trunc(Math.random() * 20) + 1;
let x = 0
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    //when there is no input
    if (!guess) {
        //imagine the zero situation 
        // document.querySelector('.message').textContent = 'NO NUMBER!!'
        displayMessage('NO NUMBER!!')
    }
    //when the player wins
    else if (guess === number) {
        // document.querySelector('.message').textContent = 'Correct Number!🎉';
        displayMessage('Correct Number!🎉');

        document.querySelector('.number').textContent = number


        document.querySelector('body').style.backgroundColor = '#60b347';

        //whenever we are manipulating a style we should specify it to a string , not only for example a number
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }
    //when the guess is wrong 
    else if (guess !== number) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > number ? 'too high!📉' : 'too low!📈';
            displayMessage(guess > number ? 'too high!📉' : 'too low!📈')
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            // document.querySelector('.message').textContent = 'You lost the game!💥'
            displayMessage('You lost the game!💥')
            document.querySelector('.score').textContent = 0
        }

    }
})
//Implementing the Game logic , video 74
//we implemented already when we had no number as a guess

//we need to implement when the guess is correct
// we need to implement when the guess is too high
// we need to implement when the guess is too low
// we need to define the secret number in start

//Implement the game reset functionality or Again buttom 

document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    score = 20;
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''


    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
})

//lecture 77 implement the high score 
