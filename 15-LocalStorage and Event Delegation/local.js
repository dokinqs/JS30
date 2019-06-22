const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; 
const wrapper = document.querySelector('.wrapper');
const check = document.querySelector('[name=check]');
const uncheck = document.querySelector('[name=uncheck]');
const clear = document.querySelector('[name=clear]');

function addItem(e) {
	e.preventDefault();
	const text = (this.querySelector('[name=item]')).value;
	const item = {
		text,
		done: false
	}

	items.push(item);
	populateList(items, itemsList);

	localStorage.setItem('items', JSON.stringify(items));
	this.reset(); // form method on input
}

function setState(item) {
	if (item) {
	  this.push(item);
	}
	localStorage.setItem('items', JSON.stringify(this));
}

function updateList() {
    itemsList.innerHTML = this.map(function (item, index) {
      var isChecked = item.done ? 'checked' : '';
      return `
        <li>
          <input type="checkbox" data-index=${index} id="item${index}"
           ${isChecked}>
          <label for="item${index}">${item.text}<label>
          <span class="delete-item" data-index=${index}>✖</span>
        </li>
      `;
    }).join('');
  }

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
				<label for="item${i}">${plate.text}</label>
				 <span class="delete-item" data-index=${i}>✖</span>
			</li>
		`;
	}).join('');
}

function deleteItem(e) {
	let index, element;

	if (e.target.matches('span')) {
	  element = e.target;
	  index = element.dataset.index;
	  element.style.display = "none";
	  items.splice(index, 1);
	  setState.call(items);
	  updateList.call(items);
	} else {
	  return;
	}
}

function toggleDone(e) {
	if (!e.target.matches('input')) return;
	// event delegation: listen for click on higher parent then check if it's what we want
	// console.log(.target);
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;

	setState.call(items);
    	updateList.call(items);
 	// localStorage.setItem('items', JSON.stringify(items));
	// populateList(items, itemsList);
}

function checkAll(){
  items.map(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll(){
  items.map(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll(){
  localStorage.removeItem('items');
  items.length = 0;
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', deleteItem);
populateList(items, itemsList);

check.addEventListener('click', checkAll);
uncheck.addEventListener('click', uncheckAll);
clear.addEventListener('click', clearAll);