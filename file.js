const getComputerChoice = ()=>{
    const choice = parseInt(Math.random()*3)

    switch (choice)
    {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
        
    }
    
}

const getHumanChoice = (repeat) => {
    let choice
    if(repeat == 0){
    return choice = prompt('give me your choice')}
    else
        return choice = prompt('you both got the same choice , repeat the round')
}
const playRound = (computerchoice , humanchoice ) => {
        
        
        if(computerchoice=='rock'&& humanchoice=='paper' || computerchoice=='paper'&& humanchoice=='scissors' || 
            computerchoice=='scissors'&& humanchoice=='rock'){
            console.log(`you won this round ${humanchoice} beats ${computerchoice}`)
            return true
        }else{
            console.log(`you lost this round ${computerchoice} beats ${humanchoice}`)
            return false
        }
        
}
const fullgame = () =>{
    let computerScore = 0
    let humanScore = 0
    let computerchoice
    let humanchoice
        
while (computerScore + humanScore < 5){
    computerchoice = getComputerChoice()
    humanchoice = getHumanChoice(0).toLowerCase()
    while (computerchoice === humanchoice){
            computerchoice = getComputerChoice()
            humanchoice = getHumanChoice(1).toLowerCase()   
        }
    if (playRound(computerchoice,humanchoice)){
        humanScore++
    }else
        computerScore++

}
if (computerScore>humanScore){
    console.log(`u lost ${computerScore} to  ${humanScore}`)
}else 
    console.log(`u won ${humanScore} to  ${computerScore}`)
}


fullgame()

    