let title = document.querySelector('.listTitle');
let myButton = document.querySelector('#myButton');
let input = document.querySelector('form input');
let listDeals = document.querySelector('.wrapper');
let deals = [];
let count = deals.length;

// console.log(r4);
myButton.addEventListener('click', addNewDeal);
listDeals.addEventListener('click', removeDeals);

function removeDeals(event){

	event.preventDefault();
	let elem = event.target;
	// console.log('has',elem.hasAttribute('data-index'));
	if(elem.hasAttribute('data-index')){
		let attr = parseInt(elem.getAttribute('data-index'));
		deals.splice(attr, 1);
		showDeals(deals, listDeals);
	}
	// console.log('get',elem.getAttribute());
	// console.log('-',elem.getAttribute());
}

function addNewDeal(e){
	e.preventDefault();
		
	if(input.value){
		// === first
		// let count = document.querySelector('.listTitle span');
		// count.innerHTML ++;

		// === second
		title.innerHTML = `To do list (${++count})`;
		// deals.push(input.value);
		// input.value = '';
		deals.push({});
		
	}

	showDeals(deals, listDeals);
}

function showDeals(array, domElement){
	
	domElement.innerHTML = array.reduce(
		function(html, dealName, index){
			html += `<div><input type="checkbox"> ${dealName} <button data-index='${index+1}'>Delete deal</button><div>`;
			return html;
		}, '');
}

function r4(){
	let key = '';

	for (i = 0; i < 4; i++){

			key += Math.random().toString(36).replace('0.', '');
	}
	return key;
}