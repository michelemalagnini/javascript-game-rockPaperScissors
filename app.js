let userScore = 1;
let computerScore = 1;
const userScore_spam = document.getElementById('user-score');
const computerScore_spam = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
let result_div = document.querySelector('.result >p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const actionMessage_p = document.getElementById('action_message');
let choiceOk = document.getElementsByClassName('choice');
console.log(choiceOk)


function getComputerChoice(){
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choises[randomNumber];
};

function convertText(x){
    if(x === 'r'){
        return 'rock';
    } else if(x === 'p'){
        return 'paper'
    } else if(x === 's'){
        return 'scissors'
    }
};

function win(userChoice, computerChoice){
    userScore_spam.innerHTML = userScore++;
    const smallUser = ' user'.fontsize(3).sub();
    const smallComp = ' comp'.fontsize(3).sub();
    result_div.innerHTML = convertText(userChoice) + smallUser + ' beats ' + convertText(computerChoice) + smallComp + ' You win! ;-)';
    console.log('user win');
    document.getElementById(userChoice).classList.add('vinto');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('vinto');
    }, 2000);
};



function lose(userChoice, computerChoice){
    computerScore_spam.innerHTML = computerScore++;
    const smallUser = ' user'.fontsize(3).sub();
    const smallComp = ' comp'.fontsize(3).sub();
    result_div.innerHTML = convertText(userChoice) + smallUser + ' loses to ' + convertText(computerChoice) + smallComp + ' Computer  win! :-(';
    console.log('computer win');
    document.getElementById(userChoice).classList.add('perso');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('perso');
    }, 2000);
};

function draw(userChoice, computerChoice){
    // userScore_spam.innerHTML = userScore++;
    // computerScore_spam.innerHTML = computerScore++;
    const smallUser = ' user'.fontsize(3).sub();
    const smallComp = ' comp'.fontsize(3).sub();
    result_div.innerHTML = convertText(userChoice) + smallUser + ' equals ' + convertText(computerChoice) + smallComp + ' it\'s a Draw! ';
    console.log('pareggio')
    document.getElementById(userChoice).classList.add('pareggiato');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('pareggiato');
    }, 2000);
};

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log('computer ' +computerChoice)
    console.log('user ' +userChoice)
    switch(userChoice + computerChoice){
        case'rs':
        case'sp':
        case'pr':
            win(userChoice, computerChoice);
            break;
        case'sr':
        case'ps':
        case'rp':
            lose(userChoice, computerChoice);
            break;
        case'pp':
        case'rr':
        case'ss':
            draw(userChoice, computerChoice);
            break;
    }
};

game();

function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    });
    paper_div.addEventListener('click', function(){
        game('p');
    });
    scissors_div.addEventListener('click', function(){
        game('s');
    });
};

main();
