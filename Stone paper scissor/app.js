let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return options [randomChoice];
}

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#DCF763";
    msg.style.color = "#0F0F0F";
    msg.style.fontFamily = "poppins";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "#00A676"
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} Beats Yours ${userChoice}` ;
        msg.style.backgroundColor = "#DE1A1A"
    }
}


const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});