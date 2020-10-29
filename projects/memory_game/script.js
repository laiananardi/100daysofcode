const cards = document.querySelectorAll('.cards');
const scene = document.querySelectorAll('.scene');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');
const game = document.querySelector('.memory-game');
const endTime = document.querySelector('.endTime');

const timer = document.querySelector('.timer');
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let hh = 0;
mm = 0;
ss = 0;

var stopwatch;


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let i = 50

function startGame() {
  initial.style.display = 'none';
  game.style.display = 'flex';
  timer.style.display = 'flex'

  //start timer
  stopwatch = setInterval(() => {
    ss++;
    if (ss == 60) {
      ss = 0
      mm++
    }
    if (mm == 60) {
      mm = 0
      hh++
    }
    if (hh <= 9) hours.innerText = "0" + hh + " : "
    else hours.innerText = hh + " : "
    if (mm <= 9) minutes.innerText = "0" + mm + " : "
    else minutes.innerText = mm + " : "
    if (ss <= 9) seconds.innerText = "0" + ss
    else seconds.innerText = ss
  }, 1000)

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
  if (isMatch) {
    disableCards()
    i++;
    console.log(i);
    if (i >= 6) {
      clearInterval(stopwatch)
      setTimeout(function () {
        game.style.display = 'none';
        timer.style.display = 'none';
        final.style.display = 'flex';
        let he; 
        let me; 
        let se;
        const time = document.createElement("div")
        if (hh <= 9) he = `0${hh}`
        else he = hh
        if (mm <= 9) me = `0${mm}`
        else me = mm 
        if (ss <= 9) se = `0${ss}`
        else se = ss

        time.innerHTML = `<h3>${he} : ${me} : ${se}</h3>`
        endTime.appendChild(time);


      }, 1800);
    }

    // if(i >= 6){
    //   game.style.display = 'none';
    //   final.style.display = 'flex';
    // }
  } else {
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

function endGame() {
  window.location.reload();
}

cards.forEach(card => card.addEventListener('click', flipCard));
start.addEventListener('click', startGame);
end.addEventListener('click', endGame);
