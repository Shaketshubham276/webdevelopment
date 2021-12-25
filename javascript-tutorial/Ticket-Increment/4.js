let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
// added=document.getElementById("add")
// subtracted=document.getElementById("subtract")
// multiplied=document.getElementById("")
// divided=document.getElementById("add")
sumel=document.getElementById("sum-el")
function add(){
    let sum=num1+num2
    sumel.textContent="sum :"+sum 
}
function subtract(){
    let subtract=num1-num2
    sumel.textContent="subtract :"+subtract  
}
function multiply(){
    let sum=num1*num2
    sumel.textContent="multiply :"+sum 
}
function divide(){
    let sum=num1/num2
    sumel.textContent="Divide :"+sum 
}
