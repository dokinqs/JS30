const timeNodes = Array.from(document.querySelectorAll('[data-time'));
// [...document.query]

const totalTime = document.querySelector('.total');

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
.reduce((total, vidSeconds) => total + vidSeconds); 

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

totalTime.innerHTML = `<span>Total time ${hours}:${mins}:${secondsLeft}</span>`;

console.log(seconds + " seconds");
console.log(hours + " hours " + mins + " mins " + secondsLeft + " seconds");