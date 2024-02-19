let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let log = ""

let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let cardEl = document.getElementById("card-el")

let player = {
    Name : "Subhadip",
    Money : 245
}

let playerEl=document.getElementById("player-el")
playerEl.textContent = player.Name+": $ "+player.Money

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1 
    if(randomCard === 1){
        return 11
    }
    else if(randomCard > 10){
        return 10
    }
    else{
        return randomCard
    }
    }

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    if(sum<21){
        log = "Do you want to draw a new card ? 😊"
    }
    else if(sum === 21){
        log = "Wahoo! You got a BlackJack!!!😍"
        hasBlackJack = true
    }
    else{
        log = "You are out of the game... 😢"
        isAlive = false
    }
    cardEl.textContent = "Cards :"
    for(let i = 0;i<cards.length;i++){
        cardEl.textContent+=cards[i] + " "
    }
    sumEl.textContent = "Sum: "+sum
    messageEl.textContent=log
}
function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else{
        console.log("You are not alive")
    }
}