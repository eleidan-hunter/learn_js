// const num = 0;
// const nan = Nan;

// const str = 'any hello';

// const bool = true;

// const object = {};
// const array = [];

// const _null = null;
// const n = undefined; //mistake of js

// let a = 1;
// let b = 2;

// let c = a;
// a = b;
// b = c;

// a = a + b; // a = 3
// b = a - b; //
// a = a - b; //

// console.log('a = :', a);
// console.log('b = :', b);

//JSON.stringify => JSON.parse

//==========================
// bankomat

// let enter = prompt();

// console.log('enter:', enter);

// let fifth = enter / 50;
// fifth_q = parseInt(fifth);
// fifthSum = fifth_q * 50;
// res_1 = enter - fifthSum;

// let twenty = res_1 / 20;
// twenty_q = parseInt(twenty);
// twentySum = twenty_q * 20;
// res_2 = res_1 - twentySum;

// let ten = res_2 / 10;
// ten_q = parseInt(ten);
// tenSum = ten_q * 10;
// res_3 = res_2 - tenSum;

// let rest = enter - (fifthSum + twentySum + tenSum);

// console.log('50: ', fifth_q, '20: ', twenty_q, '10 :', ten_q, 'rest: ', rest);

// random numbers generator

let num_1 = + prompt();
let num_2 = + prompt();
let min = num_1;
let max = num_2;

// verification min/max value
if (num_1 < num_2){
	min = num_1;
	max = num_2;
} else {
	min = num_2;
	max = num_1;
}

console.log('min:', min);
console.log('max:', max);

// end verification min/max value

// random number
let range = min + Math.random() * (max - min);
console.log('range: ', range);

let res = Math.round(range);
console.log('res: ', res);

// end random number