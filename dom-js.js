let title = document.querySelector('.listTitle');
let myButton = document.querySelector('#myButton');
let input = document.querySelector('form input');
let listDeals = document.querySelector('.wrapper');
let SortBtn = document.querySelector('.sort_btn');

let deals = [];
let count = deals.length;

let SORT_TYPE = 'any'; // a-z, z-a

// console.log(r4);
myButton.addEventListener('click', addNewDeal);
listDeals.addEventListener('click', removeDeals);
SortBtn.addEventListener('click', sortList);

function removeDeals(event){
	event.preventDefault();

	let element = event.target;
	// // console.log('has',elem.hasAttribute('data-index'));
	if(element.hasAttribute('data-id')){
		const id = element.getAttribute('data-id');
		const index = deals.findIndex(function(dealName){
			return dealName.id === id;
		});
		deals.splice(index, 1);

		showDeals(deals, listDeals);
	}
}

function sortList(event){
	event.preventDefault();

	if (SORT_TYPE === 'any'){
		SORT_TYPE = 'a-z';
	} else if (SORT_TYPE === 'a-z') {
		SORT_TYPE = 'z-a';
	} else if (SORT_TYPE === 'z-a') {
		SORT_TYPE = 'any';
	}

	if (SORT_TYPE === 'any') {
		SortBtn.innerHTML = `Sort (no sort)`;
	} else if (SORT_TYPE === 'a-z') {
		SortBtn.innerHTML = `Sort (a-z)`;
	} else if (SORT_TYPE === 'z-a') {
		SortBtn.innerHTML = `Sort (z-a)`;
	}

	if (SORT_TYPE === 'any') {
		deals.sort(function () {
			let num = Math.random() - 0.5;

			if (num > 0) {
				return 1;
			} else {
				return -1;
			}
		});
	} else if (SORT_TYPE === 'a-z') {
		deals.sort();

	} else if (SORT_TYPE === 'z-a') {

		deals.sort(function (element1, element2) {
			if (element1 < element2) {
				return 1;
			} else if (element1 > element2) {
				return -1;
			} else {
				return 0;
			}
		});
	}

	showDeals(deals, listDeals);
}

function addNewDeal(e){
	e.preventDefault();
		
	if(input.value){
		// === first
		// let count = document.querySelector('.listTitle span');
		// count.innerHTML ++;

		// === second
		deals.push({id: r4(), value: input.value});
		input.value = '';
		// deals.push({});
	}
	title.innerHTML = `To do list (${deals.length})`;
	showDeals(deals, listDeals);
}

function showDeals(array, domElement){

	
	domElement.innerHTML = array.reduce(
		function(html, dealName, index){
			return (
				html +
				`<div>
				<input type="checkbox"> 
				<span>${dealName.value}</span>
				<button data-id='${dealName.id}'>Delete deal</button>
				<div>`
			);
		}, '');
}

