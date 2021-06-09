let Title = document.querySelector('.listTitle');
let myButton = document.querySelector('#myButton');
let Input = document.querySelector('.input_deal');
let ListDeals = document.querySelector('.list_deals');
let SortBtn = document.querySelector('.sort_btn');
let DateDeal = document.querySelector('.date_deal');
const DateGlobal = new Date();
let SORT_TYPE = 'any'; // a-z, z-a
let deals = [];
let count = deals.length;
let DeadLine;
const temp = localStorage.getItem('deals');
if(temp){
	deals = JSON.parse(temp);
	showDeals(deals, ListDeals);
};

document.addEventListener("DOMContentLoaded", () => {
	console.log('DateGlobal: ', DateGlobal);
	
	let a = document.querySelectorAll('.deal');
	console.log('DateGlobal: ', a);

	
});

myButton.addEventListener('click', addNewDeal);

DateDeal.addEventListener('change', setDate);

ListDeals.addEventListener('click', removeDeals);
ListDeals.addEventListener('click', setStatusDeal);
SortBtn.addEventListener('click', sortList);

function setDate(){
	console.log('DateDeal: ', DateDeal.value);
	console.log('DateGlobal: ', DateGlobal);

	let DeadlineYear = DateDeal.value.slice(0, 4);
	let DeadlineMonth = DateDeal.value.slice(5, 7);
	let DeadlineDay = DateDeal.value.slice(8, 10);
	console.log(DeadlineYear, DeadlineMonth, DeadlineDay);
	// console.log('Year: ', DateGlobal.getFullYear());
	// console.log('Month: ', DateGlobal.getMonth());
	// console.log('Day: ', DateGlobal.getDate());
	DeadLine = DateGlobal.getFullYear().toString() + '-' + DateGlobal.getMonth().toString() + '-' + DateGlobal.getDate().toString();
	// console.log('DeadLine: ', DeadLine);

}

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

		showDeals(deals, ListDeals);
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

	if (element.nodeName === 'BUTTON'){
		if(element.parentElement.hasAttribute('data-id')){
			const id = element.parentElement.getAttribute('data-id');
			const index = deals.findIndex(function(dealName){
				return dealName.id === id;
			});
			deals.splice(index, 1);
	
			showDeals(deals, ListDeals);
		}
	}
}

function sortList(event){
	event.preventDefault();

	//check&change list status
	if (SORT_TYPE === 'any'){
		SORT_TYPE = 'a-z';
	} else if (SORT_TYPE === 'a-z') {
		SORT_TYPE = 'z-a';
	} else if (SORT_TYPE === 'z-a') {
		SORT_TYPE = 'any';
	}

	//change name button
	if (SORT_TYPE === 'any') {
		SortBtn.innerHTML = `Sort (no sort)`;
	} else if (SORT_TYPE === 'a-z') {
		SortBtn.innerHTML = `Sort (a-z)`;
	} else if (SORT_TYPE === 'z-a') {
		SortBtn.innerHTML = `Sort (z-a)`;
	}

	// sort list
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
		deals.sort(function (element1, element2){
			if (element1.value > element2.value) {
				return 1;
			} else if (element1.value < element2.value) {
				return -1;
			} else {
				return 0;
			}
		});
	} else if (SORT_TYPE === 'z-a') {
		deals.sort(function (element1, element2) {
			if (element1.value < element2.value) {
				return 1;
			} else if (element1.value > element2.value) {
				return -1;
			} else {
				return 0;
			}
		});
	}

	showDeals(deals, ListDeals);
}

function addNewDeal(e){
	e.preventDefault();
		
	if(Input.value){
		// === first
		// let count = document.querySelector('.listTitle span');
		// count.innerHTML ++;

		// === second
		deals.push({id: r4(), value: Input.value});
		Input.value = '';
	}
	Title.innerHTML = `To do list (${deals.length})`;
	showDeals(deals, ListDeals);
}

function showDeals(array, domElement){

	localStorage.setItem('deals',JSON.stringify(array));
	
	domElement.innerHTML = array.reduce(
		function(html, dealName, index){
			return (
				html +
				`<div data-id='${dealName.id}' data-deadline="${DateDeal.value}" class="deal">
				<input type="checkbox" ${dealName.isDone ? 'checked' : ''}> 
				<span>${dealName.value}</span>
				<span class="deadline">${DateDeal.value}</span>
				<button class="remove">-</button>
				</div>`
			);
		}, '');
}

function r4() {
	let key = '';
	for (let i = 0; i < 4; i++) {
		key += Math.random().toString(36).replace('0.', '');
	}
	console.log('key',key);
	return key;
}