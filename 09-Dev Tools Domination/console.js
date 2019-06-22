const dogs = [{ name: 'doge', age: 11 }, {name: 'corki', age: 3 }, { name: 'Pavlov\'s dog', age: 128 }];

function makeUltraViolet() {
  const p = document.querySelector('p');
  p.style.color = '#7f1ae5';
  p.style.fontSize = '50px';
  p.innerHTML = '×2018 Color of the Year×';
}

// Regular
console.log('i\'m a boring string');

// Interpolated
console.log('interpolated %s string!', '✌️');

console.table(dogs);

// counting
console.count('yes');
console.count('no');
console.count('yes');
console.count('yes');
console.count('yes');
console.count('no');

// // clearing
// console.clear();

// Styled
console.log('%c ho ho ho', 'font-size:50px; background:red; text-shadow:10px 10px green; padding-right:30px;')

// warning
console.warn('Warningg');

// Error
console.error('Errorr');

// Assert - error message if test evaluates false
const p = document.querySelector('p');
console.assert(p.classList.contains('blah'), 'That\'s wrong!');


// Viewing DOM Elements
// usually a toString representation
console.log(p);
// navigable tree, shows properties, aka console.log(util.inspect(myObj))
console.dir(p);


// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// timing
console.time('fetching data');
fetch('https://api.github.com/users/dokinqs')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
      console.log("hireable?: "+ data.hireable);
    });

alert('Look in Console for Dev Tools! Click on the text for Ultra Violet!');