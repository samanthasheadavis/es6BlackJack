const dealerDisplay = document.querySelector('#dealerCards');
const display = document.querySelector('#cards');
const alert = document.querySelector('.alert');
const cards = ['A', '2', '3', '4', '5', "6", '7', '8', '9', "10", 'J', 'Q', 'K'];

function hit() {
    let card = Math.floor(Math.random() * cards.length);
    display.innerHTML += ' ' + cards[card];
    let dealerCard = Math.floor(Math.random() * cards.length);
    dealerDisplay.innerHTML += ' ' + cards[card];
    checkResult(false, true);
}

function checkResult(standing, hitting) {
    let currentCards = display.innerHTML.split(' ');
    let dealerCards = dealerDisplay.innerHTML.split(' ');
    let playerCardValue = 0;
    let dealerCardValue = 0;

    currentCards.forEach(card => {
        if (parseInt(card) >= 2 && parseInt(card) <= 10) {
            playerCardValue += parseInt(card);
        } else if (card === 'J' || card == 'Q' || card === 'K') {
            playerCardValue += 10;
        } else if (card === 'A') {
            if (playerCardValue <= 10) {
                playerCardValue += 11;
            } else {
                playerCardValue += 1;
            }
        }
    });

    dealerCards.forEach(card => {
        if (parseInt(card) >= 2 && parseInt(card) <= 10) {
            dealerCardValue += parseInt(card);
        } else if (card === 'J' || card == 'Q' || card === 'K') {
            dealerCardValue += 10;
        } else if (card === 'A') {
            if (dealerCardValue <= 10) {
                dealerCardValue += 11;
            } else {
                dealerCardValue += 1;
            }
        }
    });

    if (dealerCardValue < 17) {
        let dealerCard = Math.floor(Math.random() * cards.length);
        dealerDisplay.innerHTML += ' ' + cards[dealerCard];
        checkResult(false, true);
    } else {
        score(playerCardValue, dealerCardValue, standing, hitting);
    }
}

function score(playerCardValue, dealerCardValue, standing, hitting) {
    if (playerCardValue === 21 && dealerCardValue === 21) {
        alert.innerHTML="it's a tie!";
    } else if (playerCardValue === 21) {
        alert.innerHTML = "you won!";
    } else if (playerCardValue > 21 && dealerCardValue > 21) {
        alert.innerHTML = "double bust!";
    } else if (playerCardValue > 21) {
        alert.innerHTML = "you bust!";
    } else if (playerCardValue < 21 && dealerCardValue > 21) {
        alert.innerHTML = "You win! Dealer busts";
    } else if (playerCardValue < 21 && dealerCardValue < 21) {
        if (playerCardValue > dealerCardValue) {
            alert.innerHTML = "You won with high score of " + playerCardValue;
        } else {
            alert.innerHTML= "Dealer wins with a high score of " + dealerCardValue;
        }
    }
}

  document.querySelector('#stand').addEventListener('click', function() {
      checkResult(true, false);
  });

  document.querySelector('#hit').addEventListener('click', hit);

  document.querySelector('#newGame').addEventListener('click', function() {
    init();
  });

function init() {
  let card1 = Math.floor(Math.random() * cards.length);
  let card2 = Math.floor(Math.random() * cards.length);
  let dealer1 = Math.floor(Math.random() * cards.length);
  let dealer2 = Math.floor(Math.random() * cards.length);

  display.innerHTML = cards[card1] + ' ' + cards[card2];
  dealerDisplay.innerHTML = cards[dealer1];
  alert.innerHTML = '';
}

init();
