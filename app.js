let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const option= ["rock","paper","scissors"];
    const ranIdx= Math.floor(Math.random()*3);
    return option[ranIdx];
}

const playGame = (userChoice) => () => {
   console.log("user choice = ",userChoice);
   console.log("computer choice = ",genCompChoice);
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
       const userChoice = choice.getAtteibute("id");
            console.log("choice was clicked",userChoice);
            playGame(userChoice);
    });
});