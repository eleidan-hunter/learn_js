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
