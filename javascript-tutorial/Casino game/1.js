
let cards = []
let sum = 0


let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") 
// let sumEl=document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player={
    Name:"Shaket",
    Chips:200

}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name+": $"+ player.Chips



function getRandomCard() {
    let randomNumber = (Math.random() * 13) + 1
    let rand = Math.floor(randomNumber)
    if (rand == 1) {
        return 11

    }
    else if (rand <= 13 && rand >= 11) {
        return 10
    }
    else {
        return rand
    }

}


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    isAlive = true

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }


    if (sum <= 20) {
        message = "Do you want to draw a new card? ";

    }
    else if (sum === 21) {
        message = "You've got Blackjack! ";
        hasBlackJack = true
    }
    else {
        message = "You're out of the game  ";
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}
function newCard() {
    if (sum < 21) {
        let thirdcard = getRandomCard()
        sum += thirdcard
        cards.push(thirdcard)
        renderGame()  
    }

}




// CASH OUT!




