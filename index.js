let firstCard = Math.floor(Math.random()*20)
let secondCard = Math.floor(Math.random() * 20);
let cards = [firstCard, secondCard]
// let firstCard = 10
// let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
  cardsEl.textContent = `Card : ${cards[0]}, ${cards[1]}`;
  sumEl.textContent = "Sum : " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card ? ";
  } else if (sum === 21) {
    message = "Woohoo ! You've got Blackjack ! ";
    hasBlackJack = true;
  } else {
    message = "Sorry ! You're out of the game ! ";
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(message);
}


function newCard() {
  console.log("new card");
  let card = Math.floor(Math.random() * 8);
  sum += card;
  renderGame();
}

