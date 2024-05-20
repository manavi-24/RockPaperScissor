let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#userscore");
let compScorePara=document.querySelector("#compscore");

let genCompChoice=()=>{
    let options=['rock','paper','scissors'];
    let random=Math.floor(Math.random()*3);
    return options[random];
};

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin='true'){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`${userChoice} beats ${compChoice}. You win!`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`${compChoice} beats ${userChoice}. You lose!`;
        msg.style.backgroundColor="red";
    }
};

let drawGame=()=>{
    msg.innerHTML="It's a draw!";
    msg.style.backgroundColor="rgb(133, 130, 130)";
};

let playgame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if ((userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')) {
            userWin = true;
        } else {
            userWin = false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});

/*let playgame=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
           userWin=compChoice==='paper'?false:true;}
           else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;}
            else if(userChoice==='scissors'){
                userWin=compChoice==='rock'?false:true;}
        showWinner(userWin,userChoice,compChoice);
    }
    
};*/


