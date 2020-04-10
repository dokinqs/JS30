const pressd = [];
const secret = 'corn';

window.addEventListener('keyup', (e) => {
	// console.log(e.key);
	pressd.push(e.key);
	pressd.splice(-secret.length - 1, pressd.length - secret.length);
	if (pressd.join('').includes(secret)) {
		console.log('very wow');
		cornify_add();
	}
	console.log(pressd);
});