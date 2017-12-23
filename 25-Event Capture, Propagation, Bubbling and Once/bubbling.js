const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling, will just be 3 instead of 321 for one click
  // but if once is true also, pressing 2 will result in 1 next time cuz 2 can only be counted once. child will be counted instead. so pressing 2 3 3 will log 2 3 1
  console.log(this);
}

// document.body.addEventListener('click', logText);
// if active would log keep logging bod
 
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // default
  // if capture is true, with stop propagation from going down further, pressing 3 will just get 1
  once: true // unbinds itself, removes eventlistener
  // have to refresh page
  // can only get 1 2 3,   1 32,   21 3,   or 321
}));

 button.addEventListener('click', () => {
    console.log('Click');
  }, {
    once: true
  });

// once true is confusing from a console standpoint but used for online shopping carts submit buttons etc. only want to be able to press once