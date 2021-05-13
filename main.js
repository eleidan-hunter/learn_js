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

// =======================
// // random numbers generator

// let num_1 = + prompt();
// let num_2 = + prompt();
// let min = num_1;
// let max = num_2;

// // verification min/max value
// if (num_1 < num_2){
// 	min = num_1;
// 	max = num_2;
// } else {
// 	min = num_2;
// 	max = num_1;
// }

// console.log('min:', min);
// console.log('max:', max);

// // end verification min/max value

// // random number
// let range = min + Math.random() * (max - min);
// console.log('range: ', range);

// let res = Math.round(range);
// console.log('res: ', res);

// // end random number

// ========================
// true - false

// let range = 1 + Math.random() * (9 - 1);
// let num = Math.round(range);
// console.log('number: ', num);

// let userNumber = prompt('Enter your number between 1 and 9:');

// if (userNumber >=1 && userNumber <= 9 ){
//     if (userNumber === num) {
//         alert('You win!');
//     } else {
//         alert('You lose :(');
//     }
// } else {
//     alert('You enter wrong number!');
// }

// end true - false

// for (let i = 10; -- i;){
//     console.log(i); //9 8 7 6 5 4 3 2 2 1
// }

//====================================================================================
// LESSON 2

		// const start = 0;
		// const end = 10;

		// let arr = [];
		// for (let i = start; i < end; i++){
		//     arr.push(Math.floor(Math.random() * 10));
		// }
		// arr.sort();

		// for (i = start; i < end; i++){
		//     // let num = Math.round(1 + Math.random() * (9 - 1));
		//     let num = arr[i];
		    // document.write(`<p style="padding-left:${num}0px">${num}</p>`);
		// }

		//=============================
		// const rnd = Math.floor(Math.random() * 10)

		// while(true){
		//     if (rnd == promt('enter your number')){
		//         document.write(`<h1>win</h1>`);
		//         break;
		//     }
		// }

		// ========================
		// bubbles method

		// let arr = [];
		
		// for (let i = 0; i < 10; i++){
		//     arr.push(Math.floor(Math.random() * 100));
		// }   

		// while(true) {
		//     let end = true;

		//     for( let i = 0; i <10; i++){
		//         const a = arr[i];
		//         const b = arr[i + 1];

		//         if (a > b){
		//             arr[i] = b;
		//             arr[i + 1] = a;

		//             end = false;
		//         }
						
		//     }

		//     if(end){
		//         break;
		//     }
		// }

		// console.log(arr); 
		//


