let title = document.querySelector('.listTitle');
let myButton = document.querySelector('#myButton');
let input = document.querySelector('form input');
let listDeals = document.querySelector('.wrapper');
let SortBtn = document.querySelector('.sort_btn');

let deals = [];
let count = deals.length;


const temp = localStorage.getItem('deals');
if(temp){
	deals = JSON.parse(temp);
	showDeals(deals, listDeals);
};
console.log('temp', temp);


let SORT_TYPE = 'any'; // a-z, z-a

// console.log(r4);
myButton.addEventListener('click', addNewDeal);
listDeals.addEventListener('click', removeDeals);
listDeals.addEventListener('click', setStatusDeal);
SortBtn.addEventListener('click', sortList);

function setStatusDeal(event){
	event.preventDefault();

	let element = event.target;
	if (element.nodeName === 'INPUT' && element.type === 'checkbox'){
		console.log(element.checked);
		const id = element.parentElement.getAttribute('data-id');

		deals.find(function (dealName){
			if (dealName.id === id){
				dealName.isDone = element.checked;
				return true;
			}
			return false;
		});

		showDeals(deals, listDeals);
	}

	if(element.checked){
		element.setAttribute('checked', 'checked');
	} else{
		element.removeAttribute('checked');
	}
	
}

function removeDeals(event){
	event.preventDefault();

	let element = event.target;
	// // console.log('has',elem.hasAttribute('data-index'));
	// if(element.hasAttribute('data-id')){
	// 	const id = element.getAttribute('data-id');
	// 	const index = deals.findIndex(function(dealName){
	// 		return dealName.id === id;
	// 	});
	// 	deals.splice(index, 1);

	// 	showDeals(deals, listDeals);
	// }
	if (element.nodeName === 'BUTTON'){
		if(element.parentElement.hasAttribute('data-id')){
			const id = element.parentElement.getAttribute('data-id');
			const index = deals.findIndex(function(dealName){
				return dealName.id === id;
			});
			deals.splice(index, 1);
	
			showDeals(deals, listDeals);
		}
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
	}
	title.innerHTML = `To do list (${deals.length})`;
	showDeals(deals, listDeals);
}

function showDeals(array, domElement){

	localStorage.setItem('deals',JSON.stringify(array));
	
	domElement.innerHTML = array.reduce(
		function(html, dealName, index){
			return (
				html +
				`<div data-id='${dealName.id}'>
				<input type="checkbox" ${dealName.isDone ? 'checked' : ''}> 
				<span>${dealName.value}</span>
				<button >Delete deal</button>
				</div>`
			);
		}, '');
}

