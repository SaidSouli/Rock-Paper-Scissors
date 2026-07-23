const CHOICES = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
};


const playRound = (computerChoice, humanChoice) => {
    
    let element = document.querySelector(".roundResult");
    if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
    ) {
        element.textContent = ` You won this round! ${humanChoice} beats ${computerChoice}`
        return true;
    } else {
        element.textContent = ` You lost this round! ${computerChoice} beats ${humanChoice}`;
        return false;
    }
};
const changeText = (roundStatus) => {
    let element = document.querySelector(".changeThis");
    element.textContent = roundStatus
}

const fullGame = () => {
    let computerScore = 0;
    let humanScore = 0;

        
        let element = document.querySelector(".roundResult");
        
        let buttons = document.querySelector("#gameContainer");
        buttons.addEventListener('click',(event)=> {
            if (event.target.tagName!=='BUTTON') return;
        let computerChoice = getComputerChoice();
    
        const humanChoice = event.target.textContent;
        if (computerChoice === humanChoice) {
                       
            element.textContent='You tied! Give me your choice again:';
            return;
        }
        const win = playRound(computerChoice,humanChoice)
        if (win){
            humanScore++;
        }else
            computerScore++;
        
        
        if (humanScore==5||computerScore==5){
            let message = `${humanScore} - ${computerScore} `
            if(humanScore>computerScore){
               element.textContent= 'You Won!!' + message;
            }else
                element.textContent='you lost!! ' + message
            computerScore = 0;
            humanScore = 0;
        }
        
        });
    
        
        

       
};

fullGame();