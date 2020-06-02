class Doge {
  constructor() {
    this.position = {
      y: Math.floor(Math.random() * 50),
      x: Math.floor(Math.random() * 50)
    };
    this.randomY = Math.random() >= 0.5 ? `bottom:${this.position.y}%;` : `top:${this.position.y}%;`;
    this.randomX = Math.random() >= 0.5 ? `left:${this.position.x}%;` : `right:${this.position.x}%;`;
    this.flip = Math.random() >= 0.5 ? 1 : -1;
    this.rotate = Math.floor(Math.random() * 360);
    this.url = {
      0: 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/Emote_dogecoin.png/revision/latest?cb=20150910175941',
      1: 'https://pngimage.net/wp-content/uploads/2018/05/doge-face-png-7.png',
      2: 'https://d30y9cdsu7xlg0.cloudfront.net/png/99472-200.png',
      3: 'https://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/9/94/Doge_bread_by_thepinknekos-d9nolpe.png/revision/latest?cb=20161002220924',
      4: 'https://orig00.deviantart.net/2ad5/f/2015/278/9/c/angry_doge_render_by_princesskillerbee-d9c3fsj.png'
    };
    this.img = this.url[Math.floor(Math.random() * 5)];
  }
  render() {
    const body = document.querySelector('body');
    const render = `<img class="doge"
                      style="${this.randomY} ${this.randomX}
                      transform: rotate(${this.rotate}deg) scaleX(${this.flip});"
                      src=${this.img}>`;

    body.insertAdjacentHTML("beforeend", render);
  }
}

const pressed = [];
const secretCode = 'doge';
const pressd = [];
const secret = 'weird';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressd.push(e.key);
  // pressed.splice(-5, pressed.length-4);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // pressd.splice(-6, pressd.length-4);
  pressd.splice(-secret.length - 1, pressd.length - secret.length);
  if (pressed.join("").includes(secretCode)) {
    (new Doge().render());
    console.log('%cCreated a Doge!', 'font-size: 30px;');
  } 
  if (pressd.join('').includes(secret)) {
		console.log('cornify');
		cornify_add();
	}
});