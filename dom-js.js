function addNewDeal(e){
    e.preventDefault();
    
    if(input.value){
        //first
        // let count = document.querySelector('.listTitle span');
        // count.innerHTML ++;

        //second
        let title = document.querySelector('.listTitle');
        title.innerHTML = `To do list (${++count})`;
        deals.push(input.value);
        input.value = '';

        console.log('deals', deals);
    }

    showDeals(deals, document.querySelector('.wrapper'));
}
let myButton = document.querySelector('#myButton');
let input = document.querySelector('form input')
let deals = [];
let count = deals.length;

myButton.onclick = addNewDeal;

function showDeals(array, domElement){
    // console.log('dom',domElement )
    // domElement.innerHTML = array;
    for (i = 0; i < array.length; i++){
        a = `<div><input type="checkbox"> ${array[i]} <button>Delete deal</button><div>`;
        domElement.innerHTML = a
        // sum += domElement.innerHTML;
    }
    
}