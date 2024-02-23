let options = ["rock","paper","scissors"]
let randomChoice = Math.floor(Math.random()*3)
let playerChoice = options[randomChoice]

console.log(playerChoice)

function computerChoice(){
    let choiceForComputer = Math.floor(Math.random()*3)
    let computerSelected = options[choiceForComputer]
    // console.log(computerSelected)
    return computerSelected
}

function checkTheWinner(){
    if(playerChoice===compSelection){
        console.log("It's a tie...")
    }
    else if(playerChoice === "rock"){
        if(compSelection==="paper"){
            console.log("Paper wrap the rock..You Lose...")
        }
        else if(compSelection==="scissors"){
            console.log("Rock breaks scissors...You Won...")
        }
    }
    else if(playerChoice==="paper"){
        if(compSelection==="rock"){
            console.log("Paper wrap the rock..You Won...")
        }
        else if(compSelection==="scissors"){
            console.log("Scissors cut the paper..You Lose")
        }
    }
    else if(playerChoice==="scissors"){
        if(compSelection==="rock"){
            console.log("Rock break scissors..You Lose.")
        }
        else if(compSelection==="paper"){
            console.log("Scissors cut the paper..You Win!")
        }
    }
}
// console.log(computerChoice())
let compSelection = computerChoice()
console.log(compSelection)
checkTheWinner()