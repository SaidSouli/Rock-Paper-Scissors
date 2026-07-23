const CHOICES = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
};

const getHumanChoice = (isTie) => {
    const message = isTie 
        ? 'You tied! Give me your choice again:' 
        : 'Give me your choice (rock, paper, scissors):';
        
    let choice = prompt(message);
    
    // Handle cancel button
    if (choice === null) return null;
    
    choice = choice.trim().toLowerCase();
    
    // Validate input
    if (!CHOICES.includes(choice)) {
        console.log('Invalid choice! Please choose rock, paper, or scissors.');
        return getHumanChoice(isTie); // Prompt again
    }
    
    return choice;
};

const playRound = (computerChoice, humanChoice) => {
    if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
    ) {
        console.log(` You won this round! ${humanChoice} beats ${computerChoice}`);
        return true;
    } else {
        console.log(` You lost this round! ${computerChoice} beats ${humanChoice}`);
        return false;
    }
};

const fullGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    while (computerScore + humanScore < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(0);

        // Exit gracefully if user pressed Cancel
        if (humanChoice === null) {
            console.log('Game canceled.');
            return;
        }

        // Tie loop
        while (computerChoice === humanChoice) {
            computerChoice = getComputerChoice();
            humanChoice = getHumanChoice(1);
            if (humanChoice === null) {
                console.log('Game canceled.');
                return;
            }
        }

        if (playRound(computerChoice, humanChoice)) {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    if (computerScore > humanScore) {
        console.log(` Game Over! You lost ${computerScore} to ${humanScore}.`);
    } else {
        console.log(` Victory! You won ${humanScore} to ${computerScore}.`);
    }
};

fullGame();