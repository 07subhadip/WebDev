let fruits = ["🍎","🍌","🍌","🍎","🍌","🍎","🍎"]
let apple = document.getElementById("apple-shelf")
let banana = document.getElementById("banana-shelf")

function sortFruits(){
    for(let i=0;i<fruits.length;i++){
        if(fruits[i] === "🍎"){
            apple.textContent += "🍎"
        }
        else if(fruits[i]==="🍌"){
            banana.textContent += "🍌"
        }
    }
}
sortFruits()