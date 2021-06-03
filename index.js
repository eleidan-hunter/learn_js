// const Btn = document.querySelector('#btn');
// const Counter = document.querySelector('#counter');
// const Input = document.querySelector('#input');
// const Wrapper = document.querySelector('.wrapper');
// const SortButton = document.querySelector('.button__sort');
// let SORT_TYPE = 'any'; // a-z, z-a

// const deals = [];

// Btn.addEventListener('click', addNewDeal);
// Wrapper.addEventListener('click', removeDeal);
// Wrapper.addEventListener('click', setStatusDeals);
// SortButton.addEventListener('click', sortList);

// function setStatusDeals(event) {
//   event.preventDefault();
//   const domElement = event.target;
//   if (domElement.nodeName === 'INPUT' && domElement.type === 'checkbox') {
//     const id = domElement.parentElement.getAttribute('data-id');

//     deals.find(function (dealObject) {
//       if (dealObject.id === id) {
//         dealObject.isDone = domElement.checked;
//         return true;
//       }
//       return false;
//     });

//     showDeals(deals, Wrapper);
//   }
// }

// function sortList(event) {
//   event.preventDefault();

//   if (SORT_TYPE === 'any') {
//     SORT_TYPE = 'a-z';
//   } else if (SORT_TYPE === 'a-z') {
//     SORT_TYPE = 'z-a';
//   } else if (SORT_TYPE === 'z-a') {
//     SORT_TYPE = 'any';
//   }

//   if (SORT_TYPE === 'any') {
//     console.log(SORT_TYPE);
//     SortButton.innerHTML = `Sort (any)`;
//   } else if (SORT_TYPE === 'a-z') {
//     SortButton.innerHTML = `Sort (a-z)`;
//   } else if (SORT_TYPE === 'z-a') {
//     SortButton.innerHTML = `Sort (z-a)`;
//   }

//   showDeals(deals, Wrapper);
// }

// function removeDeal(event) {
//   event.preventDefault();
//   const domElement = event.target;
//   if (domElement.nodeName === 'BUTTON') {
//     if (domElement.parentElement.hasAttribute('data-id')) {
//       const id = domElement.parentElement.getAttribute('data-id');
//       const index = deals.findIndex(function (dealObject) {
//         return dealObject.id === id;
//       });
//       deals.splice(index, 1);
//       showDeals(deals, Wrapper);
//     }
//   }
// }

// function addNewDeal(event) {
//   event.preventDefault();
//   if (Input.value) {
//     deals.push({ id: r4(), value: Input.value, isDone: false });
//     Input.value = '';
//   }

//   Counter.innerHTML = `To Do List ${deals.length}`;
//   showDeals(deals, Wrapper);
// }

// function showDeals(arr, domElem) {
//   // if (SORT_TYPE === 'any') {
//   //   deals.sort(function () {
//   //     let num = Math.random() - 0.5;

//   //     if (num > 0) {
//   //       return 1;
//   //     } else {
//   //       return -1;
//   //     }
//   //   });
//   // } else if (SORT_TYPE === 'a-z') {
//   //   deals.sort();
//   // } else if (SORT_TYPE === 'z-a') {
//   //   deals.sort(function (element1, element2) {
//   //     if (element1 < element2) {
//   //       return 1;
//   //     } else if (element1 > element2) {
//   //       return -1;
//   //     } else {
//   //       return 0;
//   //     }
//   //   });
//   // }

//   localStorage.setItem('deals', JSON.stringify(arr));

//   domElem.innerHTML = arr.reduce(function (html, dealObject, index) {
//     return (
//       html +
//       `<div data-id='${dealObject.id}'>
//         <input type="checkbox" ${dealObject.isDone ? 'checked' : ''}> 
//         <span>${dealObject.value}</span>
//         <button>Remove</button>
//       </div>`
//     );
//   }, '');
// }


// === HOMEWORK ===
			// let arr = [];
			// let min = -100;
			// let max = 100;
			// let newArr;

			// console.log('arr: ',arr);

			// for (let i = 0; i < 100; i ++){
			// 	arr.push(Math.round(min + Math.random() * (max - min)));
			// }

			// // === a.forEach ===
			// // если элемент число отрицательное, то приравнять его к нулю; если положительное, вывести 20% от этого числа
			// arr.forEach(function(element, index, array){

			// 	let newElement;
			// 	if(element <= 0 ){
			// 		newElement = 0;
			// 	} else {
			// 		newElement = element * .2;
			// 	}

			// 	console.log('new ele: ', newElement);
			// })

			// === a.filter ===
			// из массива от -100 до 100 вывести все числа в диапазоне от -10 до 10
			// newArr = arr.filter(function(num){
			// 	return num <= 10;
			// })
			// что-то пошло не так

			// === a.map ===
			// вывести элементы массива в формате "number № {index} : {element} ;"
			// newArr = arr.map((element, index, array) => {
			
				// er №' + index + ':' + element;

			// 	// console.log('newArr:',newArr);

			// 	return newElement;
			// })

			// === a.some ===
			// Проверить есть ли в массиве число пользователя
			// let userNumber = prompt('enter your number');

			// newArr = arr.some((element, array, userNumber)=> {
				
			// return userNumber === element
			// }) 


			// === a.every ===
			// Не смог придумать инетерсное задание, но принцип понял
			// newArr = arr.every((element, array, userNumber)=> {
			// 	return userNumber < element;
			// }) 
	
			// === a.reduce ===
			// newArr = arr.reduce(function(sum, element, array )  {
			// 	return sum + element;
			// }, 0)
			
			
			// === a.find ===
			// === a.slice ===
			// === a.pop ===
			// === a.push ===
			// === a.shift ===
			// === a.unshift ===

			// console.log('arr_2: ',arr);
			// console.log('newArr: ',newArr);
			// END HOME WORK
			// =============

			// === a.forEach ===
			//
			// let num1 = prompt('enter yuor first number');
			// let num2 = prompt('enter yuor second number');
			// let num3 = prompt('enter yuor third number');
			// const a = ['bob', 'mark', 'jack', 'kel'];
			// let arr = [];
			// for (let i = 0; i < 100; i++){
			// 	arr.push(Math.floor(Math.random() * 100));
			// }
			// console.log('arr :', arr);
			// //way 1
			// //a.forEach(() => {})
			// //way 2
			// //a.forEach(function(){})
			// //way 3
			// //function f1(){}
			// //a.forEach(f1)
			// arr.forEach((element, index, array) => {
				// if (element % num1 === 0 && element % num2 === 0 && element % num3 === 0){
				// 	console.log('element',element, 'index',index);
				// }
				// if(index % 2 == 0){
				// 	console.log(element)
				// 	console.log(new Date);
				// };
				// console.log(dataTime);
			// });
			// console.log('arr 2 :', arr);

			//custom a.forEach
			// const a = ['bob', 'mark', 'jack', 'kel'];
			// function customForEach(arr, cb){
			// 	for( let i=0; i<arr.length; i++){
			// 		cb(arr[i], i, arr)
			// 	}
			// }
			// customForEach(a, (...args) => console.log(...args));

			// === a.filter ===
			//
			// console.log(a.filter(e => {
			// 	return e.length > 3;
			// }))

			
			
			//custom a.map
			// function customMap(arr, cb){
			// 	let newArr = [];
			// 	for( let i=0; i<arr.length; i++){
			// 		cb(arr[i], i, arr)
			// 	}
			// 	for( let j=0; j<arr.length; j++){
			// 		newArr.push(cb(arr[j], j, arr));
			// 	}
			// 	console.log(newArr);
			// }
			// customMap(a, (element, index, array) => console.log(element + 1));

			// let newMap = a.map(e => {
			// 	return e + 1;
			// })
			// console.log(newMap);
			
			// ======
			// let arr = []
			// let min = -100
			// let max = 100

			// for (let i = 0; i < 100; i ++){
			// 	arr.push(Math.round(min + Math.random() * (max - min)));
			// }	

			// console.log('arr1: ',arr);

			// let newArr = arr.map((element, index, array) => element > 0 ? '-∞' : element);

			// let newArr = arr.map(function exponentiation(element, index, array) {
			// 	let newElement = '';
				
			// 	if (element < 0){
			// 		newElement = -Math.pow(element, 2);
			// 	} else {
			// 		newElement = Math.pow(element, 2);
			// 	}

			// 	return newElement;
			// }) ;

			// let newArr = arr.reduce
			//сумма всех элементов через reduce
			// console.log('newArr: ',newArr)