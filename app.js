let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option= ["stone","paper","scissor"];
    const ranIdx= Math.floor(Math.random()*3);
    return option[ranIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        //console.log("You win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        //console.log("You Loose");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Loose ! ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}

const GameDraw = () => {
    //console.log("Game Was Draw");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "white";
}

const playGame = (userChoice) => {
   console.log("user choice = ",userChoice);
    const compChoice = genCompChoice() ;
   console.log("computer choice = ", compChoice);

    
    if(userChoice === compChoice){
       GameDraw ();
    }else{
    let userWin = true ;

     if ( userChoice === "stone"){
        userWin = compChoice ==="paper" ? false : true ;
    }
    
    else if (userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true ;
    }

    else if (userChoice === "scissor"){
        userWin = compChoice === "stone" ? false : true ;
    }
    showWinner(userWin, userChoice, compChoice);}
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
       const userChoice = choice.getAttribute("id");
           // console.log("choice was clicked",userChoice);
            playGame (userChoice);
    });
});