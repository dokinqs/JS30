  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const startButton = document.querySelector('.startButton');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const indx = Math.floor(Math.random() * holes.length);
    const hole = holes[indx];

    if (hole === lastHole) {
      // console.log('random returned same hole, do again');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;

  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
      hole.classList.remove('up');
      !timeUp ? peep() : startButton.classList.remove('gameInProgress');
    }, time);

  }

  function startGame() {
    // console.log("play pressed");
    startButton.classList.add('gameInProgress');
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();

    setTimeout(() => timeUp = true, 10000);

  }

  function whacked(e) {
    if (!e.isTrusted) return; // scripted cheater, not real user action
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', whacked));