let num1 = 8
let num2 = 10
document.getElementById("span1el").textContent = num1
document.getElementById("span2el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
    let sum = num1+num2
    sumEl.textContent = sum
}
let subEl = document.getElementById("sum-el")
function subtraction(){
    let sub = num1-num2
    subEl.textContent = sub
}
let mulEl = document.getElementById("sum-el")
function multiplication(){
    let mul = num1*num2
    mulEl.textContent = mul
}
let divEl = document.getElementById("sum-el")
function division(){
    let div = num1/num2
    divEl.textContent = div
}
