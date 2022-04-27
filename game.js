
let computerPlay =  () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper";
    }
    else if (randomNumber === 3){
        return "scissors";
    }
   
};

function playRound(playerSelection, computerSelection){
    input = playerSelection.toLowerCase();
    if (input === computerSelection){
        return "Draw";
    }
    else if (input === "scissors" && computerSelection === "rock"){
        return "Lose";
    }
    else if (input === "scissors" && computerSelection === "paper"){
        return "Win";;
    }
    else if (input === "rock" && computerSelection === "paper"){
        return "Lose";
    }
    else if (input === "rock" && computerSelection === "scissors"){
        return "Win";       
    }
    else if (input === "paper" && computerSelection === "rock"){
        return "Win";
    }
    else if (input === "paper" && computerSelection === "scissors"){
        return "Lose";
    }
};


let btn1 = document.getElementById("rock");
let btn2 = document.getElementById("paper");
let btn3 = document.getElementById("scissors");
let container = document.getElementById("results");
let roundResultcontent = document.createElement("p");
let Scorecontent = document.createElement("p");
let matchResultcontent = document.createElement("p");

let playerscore = 0;
let computerscore = 0;
btn1.addEventListener(("click"), () => {
    let result = playRound("rock", computerPlay());
    if (result === "Win"){
        playerscore ++;
        roundResultcontent.textContent = "Win";
        container.appendChild(roundResultcontent);
    }
    else if (result === "Lose"){
        computerscore ++;
        roundResultcontent.textContent = "Lose";
        container.appendChild(roundResultcontent);
    }
    else {
        roundResultcontent.textContent = "Draw";
        container.appendChild(roundResultcontent);  
    }
    let score = `Your points: ${playerscore} \nComputer points: ${computerscore}`;
    Scorecontent.textContent = score;
    container.appendChild(Scorecontent);
    matchResultcontent.textContent = matchResults();
    container.appendChild(matchResultcontent);
    
});
btn2.addEventListener(("click"), () => {
    let result = playRound("paper", computerPlay());
    if (result === "Win"){
        playerscore ++;
        roundResultcontent.textContent = "Win";
        container.appendChild(roundResultcontent);
        
    }
    else if (result === "Lose"){
        computerscore ++;
        roundResultcontent.textContent = "Lose";
        container.appendChild(roundResultcontent);
    }
    else {
        roundResultcontent.textContent = "Draw";
        container.appendChild(roundResultcontent);  
    }
    let score = `Your points: ${playerscore} \nComputer points: ${computerscore}`;
    Scorecontent.textContent = score;
    container.appendChild(Scorecontent);
    matchResultcontent.textContent = matchResults();
    container.appendChild(matchResultcontent);
});
btn3.addEventListener(("click"), () => {
    let result = playRound("scissors", computerPlay());
    if (result === "Win"){
        playerscore ++;
        roundResultcontent.textContent = "Win";
        container.appendChild(roundResultcontent);
    }
    else if (result === "Lose"){
        computerscore ++;
        roundResultcontent.textContent = "Lose";
        container.appendChild(roundResultcontent);
    }
    else {
        roundResultcontent.textContent = "Draw";
        container.appendChild(roundResultcontent);  
    }
    let score = `Your points: ${playerscore} \nComputer points: ${computerscore}`;
    Scorecontent.textContent = score;
    container.appendChild(Scorecontent);
    matchResultcontent.textContent = matchResults();
    container.appendChild(matchResultcontent);
});

function matchResults(){
    if (playerscore === 5){
        return "You Won this match";
    }
    else if (computerscore === 5){
        return "You Lost this match";
    }
}