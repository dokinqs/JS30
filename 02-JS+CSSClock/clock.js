const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + ((seconds / 60 ) * 6) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (secondDegrees === 90) {
      secondHand.style.transition = 'all 0s';
  } else {
      secondHand.style.transition = 'all .05s';
  }

  if (minDegrees === 90) {
      minHand.style.transition = 'all 0s';
  } else {
      minHand.style.transition = 'all .1s';
  }

  console.log('Time: ' + hours + ":" + mins);
}

setInterval(setDate, 1000);
setDate();