const doge = document.querySelector('.doge');
  const text = doge.querySelector('h1');
  const walk = 500;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = doge;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(180,100,180,0.9),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,100,180,0.9),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,100,0,0.9),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,180,0.9) 
    `;

  }

  doge.addEventListener('mousemove', shadow);

// pink
// blue
// green
// dark blue