const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	// promise so use .then
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then(localMediaStream => {
			console.log(localMediaStream);
			// cuz live video
			video.src = window.URL.createObjectURL(localMediaStream);
			video.play();
		})
		.catch(err => {
			console.error(`O NOES`, err);
		});
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;
	// return gives option to clear setInterval
	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);

		// take px out
		let pixels = ctx.getImageData(0, 0, width, height);
		
		// do stuff

		// pixels = redEffect(pixels);

		pixels = rbgSplit(pixels);
		ctx.globalAlpha = 0.3;

		// pixels = greenScreen(pixels);

		// put them back
		// debugger; do not console.log(pixels); lol
		ctx.putImageData(pixels, 0, 0);
	}, 15);
}

function takePhoto() {
	// // play sound
	// snap.currentTime = 0;
	// snap.play();

	// take data out of canvas
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'selfie');
	link.innerHTML = `<img src="${data}" alt="pictur" />`;
	strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i+=4) {
		// R
		pixels.data[i+0] = pixels.data[i+0] + 200;
		// G
		pixels.data[i+1] = pixels.data[i+1] - 100;
		// B
		pixels.data[i+2] = pixels.data[i+2] * 0.5;
	}
	return pixels;
}

function rbgSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i+=4) {
		pixels.data[i+550] = pixels.data[i+0];
		pixels.data[i+400] = pixels.data[i+1];
		pixels.data[i-500] = pixels.data[i+2];
	}
	return pixels;
}

function greenScreen(pixels) {
	const levels = {};

	document.querySelectorAll('.rgb input').forEach((input) => {
		levels[input.name] = input.value;
	});

	// don't console.log(levels); either lol

	for (let i = 0; i < pixels.data.length; i+=4) {
		red = pixels.data[i+0];
		green = pixels.data[i+1];
		blue = pixels.data[i+2];
		alpha = pixels.data[i+3];

		if (red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
		    && green <= levels.gmax
		    && blue <= levels.bmax) {
			// take it out
			pixels.data[i+3] = 0;
		}
	}
	return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
