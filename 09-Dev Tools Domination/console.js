const dogs = [{ name: 'doge', age: 11 }, { name: 'Pavlov\'s dog', age: 128 }];

function makeUltraViolet() {
  const p = document.querySelector('p');
  p.style.color = '#7f1ae5';
  p.style.fontSize = '50px';
  p.innerHTML = '×2018 Color of the Year×';
}

// Regular
console.log('i\'m bored');

// Interpolated
console.log('imma %s string!', '✌️');

// Styled
console.log('%c ho ho ho', 'font-size:50px; background:red; text-shadow:10px 10px 0 green')

// warning!
console.warn('GASP');

// Error :|
console.error('Fatality');

// Info
console.info('Hamsters are cute af');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('blah'), 'That\'s wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('yes');
console.count('no');
console.count('yes');
console.count('yes');
console.count('yes');
console.count('no');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/dokinqs')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });

console.table(dogs);

alert('Look in Console for Dev Tools! Click on text for Ultra Violet!');