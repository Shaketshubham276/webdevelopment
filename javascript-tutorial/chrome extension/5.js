const welcomeEl=document.getElementById("welcome-el")
function greetUser(greeting, name){
    welcomeEl.textContent=`${greeting}, ${name}`
}
greetUser("How are you","Shaket Shubham")


console.log(`${player} got ${points} points and won the ${game} game!`)