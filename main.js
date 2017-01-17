const dealerDisplay = document.querySelector('#dealerCards');
const display = document.querySelector('#cards');
const cards = ['A', '2', '3', '4', '5', "6", '7', '8', '9', "10", 'J', 'Q', 'K'];

function hit() {
  let card = Math.floor(Math.random() * cards.length);
  display.innerHTML += ' ' + cards[card];
  checkResult(false, true);
  let dealerCard = Math.floor(Math.random() * cards.length);
  dealerDisplay.innerHTML += ' ' + cards[card];
}

function checkResult(standing, hitting) {
  let currentCards = display.innerHTML.split(' ');
  let cardValue = 0;

  currentCards.forEach(card => {
    if (parseInt(card) >= 2 && parseInt(card) <= 10) {
      cardValue += parseInt(card);
    } else if (card === 'J' || card == 'Q' || card === 'K') {
      cardValue += 10;
    } else if (card === 'A') {
      if (cardvalue <= 10) {
        cardValue += 11;
      } else {
        cardValue += 1;
      }
    }
  });

}

document.querySelector('#hit').addEventListener('click', hit);

let card1 = Math.floor(Math.random() * cards.length);
let card2 = Math.floor(Math.random() * cards.length);
let dealer1 = Math.floor(Math.random() * cards.length);
let dealer2 = Math.floor(Math.random() * cards.length);
display.innerHTML = cards[card1] + ' ' + cards[card2];
dealerDisplay.innerHTML = cards[dealer1] + ' ' + cards[dealer2];
