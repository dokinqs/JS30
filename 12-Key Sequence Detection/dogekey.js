class Doge {
  constructor() {
    this.position = {
      y: Math.floor(Math.random() * 90),
      x: Math.floor(Math.random() * 90)
    };
    this.randomY = Math.random() >= 0.5 ? `bottom:${this.position.y}%;` : `top:${this.position.y}%;`;
    this.randomX = Math.random() >= 0.5 ? `left:${this.position.x}%;` : `right:${this.position.x}%;`;
    this.flip = Math.random() >= 0.5 ? 1 : -1;
    this.rotate = Math.floor(Math.random() * 360);
    this.url = {
      0: "image/chuck.png",
      1: http://i.imgur.com/iVegJ35.png,
      2: https://d30y9cdsu7xlg0.cloudfront.net/png/99472-200.png,
      3: https://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/9/94/Doge_bread_by_thepinknekos-d9nolpe.png/revision/latest?cb=20161002220924,
      4: https://orig00.deviantart.net/2ad5/f/2015/278/9/c/angry_doge_render_by_princesskillerbee-d9c3fsj.png,
      5: http://i.imgur.com/RMKNpGQ.png,
      6: https://t4.rbxcdn.com/d3133f6ed71d601465c8d89f1773a6ef,
      7: https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/Emote_dogecoin.png/revision/latest?cb=20150910175941
    };
    this.img = this.url[Math.floor(Math.random() * 7)];
  }
  render(){
    const body = document.querySelector('body');
    const render = `<img class="doge"
                      style="${this.randomY} ${this.randomX}
                      transform: rotate(${this.rotate}deg) scaleX(${this.flip});"
                      src=${this.img}>`;

    body.insertAdjacentHTML("beforeend", render);
  }
}

// Konami code
const pressed = [];
const secretCode = "38384040373937396665";

window.addEventListener('keyup', (e) => {
  pressed.push(e.keyCode);
  pressed.splice(- secretCode.length - 1, pressed.length -  (secretCode.length / 2));

  if (pressed.join("").includes(secretCode)) {
    (new Doge().render());
    console.log('%cCreate Doge!', 'font-size: 30px; color: #333;');
  }
});