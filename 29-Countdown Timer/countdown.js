let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
	// clear existing timers
	clearInterval(countdown);

	const now = Date.now();
	const then = now + (seconds * 1000);
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		// fix float error and make ms into secs
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if should stop it
		if (secondsLeft < 0) { // not equal to 0 cuz 1 sec interval
			clearInterval(countdown);
			return;
		}
		// display it
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	
	// instead of 2:1, put 0 in tenths place so 2:01. otherwise remainder seconds as normal
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
	document.title = display; // change title tab!
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	let ampm = "AM";

	let adjustedHour = hour;
	if (hour == 0) {
		adjustedHour = 12;
	}
	if (hour > 12) {
		adjustedHour = hour - 12;
		ampm = "PM";
	}
	
	const minutes = end.getMinutes();
	endTime.textContent = `Done at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}	

function startTimer() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
	// stop from input to get in url 
	e.preventDefault();
	const mins = this.minutes.value;
	console.log(mins);
	timer(mins * 60);
	this.reset();
});
