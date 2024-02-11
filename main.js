let saveEntry = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-btn")

let count = 0

console.log(saveEntry)
function increment(){
    count = count + 1
    countEl.innerText = count
    // alert("clicked")
}
function save(){
    console.log(count)
    let countStr = count+" - "
    saveEntry.innerText += countStr
    console.log(countEl)
}

let msg = "you have three new notification "
console.log(msg)
