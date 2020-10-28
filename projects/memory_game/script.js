const cards = document.querySelectorAll('.cards');
const scene = document.querySelectorAll('.scene');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');
const game = document.querySelector('.memory-game');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let i = 0;

function startGame(){
  initial.style.display = 'none';
  game.style.display = 'flex';
}
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  if(isMatch){
    disableCards()
    i ++;
    console.log(i);
    setTimeout(function(){
        if(i >= 6){
          game.style.display = 'none';
          final.style.display = 'flex';
        }
      }, 1800);
  
    // if(i >= 6){
    //   game.style.display = 'none';
    //   final.style.display = 'flex';
    // }
  }else{
    unflipCards()
  }
  // isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  scene.forEach(sce => {
    let randomPos = Math.floor(Math.random() * 12);

    sce.style.order = randomPos;
  });
})();

function endGame(){
  window.location.reload();
}

cards.forEach(card => card.addEventListener('click', flipCard));
start.addEventListener('click', startGame);
end.addEventListener('click', endGame);