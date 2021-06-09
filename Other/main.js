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

// with circle
				// let enter = prompt();
				// console.log('enter:', enter);

				// let bills = [
				// 	50,
				// 	20,
				// 	10
				// ]

				// let count = [
				// 	0,
				// 	0,
				// 	0
				// ]

				// for(let i = 0; i < 3; i++) {
					
				// 	count[i]=parseInt(enter / bills[i]);
				// 	console.log('bills: ',count[i]);
				// 	let rest = enter - count[i] * bills[i];

				// 	enter = rest;
				// 	console.log('rest: ',rest);
					
				// }

				// =====
				// second

				// let sum = 555;
				// let $ = [50, 20, 10];
				// let mas_num = [];

				// for (let i = 0; i < $.length; i++){
				// 	mas_num.push(Math.floor(sum/$[i]));
				// 	sum -= mas_num[i] * $[i];
				// }

				// console.log(... mas_num);

				// =============
				// true - false

				// let range = 1 + Math.random() * (1000 - 1);
				// let num = Math.round(range);
				// console.log('number: ', num);

				// let userNumber = prompt('Enter your number between 1 and 1000:');
				// console.log('user number: ', userNumber)

				// while(num != userNumber){
				// 	if( num > userNumber ){
				// 		userNumber = prompt('Your number is less. Try again');
				// 	} else if ( num < userNumber){
				// 		userNumber = prompt('Your number is more. Try again');
				// 	} else if (num == userNumber){
				// 		alert('You win!');
				// 		break;
				// 	}
				// }


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

		//==============================
		// diagrama
		// 
		// let arr = [];
		
		// let sum = 0;
		// for (let i = 0; i < 10; i++){
		// 	arr.push(Math.floor(Math.random() * 100));
		// 	sum += arr[i];
		// }

		// for (let i = 0; i < 10; i++){
		// 	document.write(`<div class="col" style="height:${arr[i]}%"><p>${arr[i]}%</p></div>`)
		// }

		// while(true) {
		// 	let end = true;
		// 	for( let i = 0; i < 10; i++ ){
		// 		const a = arr[i];
		// 		const b = arr[i + 1];

		// 		if (a > b){
		// 			arr[i] = b;
		// 			arr[i + 1] = a;

		// 			end = false;
		// 		}
					
		// 	}

		// 	if(end){
		// 		break;
		// 	}
		// }

		// let min = arr[0];
		// let max = arr[arr.length - 1];
		// let avg = sum / arr.length
		// document.write(`
		// <div class="line max" style="bottom:${max}%"> <p> <span> max value: ${max} </span> </p> </div>
		// <div class="line min" style="bottom:${min}%"> <p> <span>min value: ${min} </span></p> </div>
		// <div class="line avg" style="bottom:${avg}%"> <p> <span>average value: ${avg} </span></p> </div>
		// `)

// ===============
				// tic tac toe

				// let field = [
				// 	[' ', ' ', ' '],
				// 	[' ', ' ', ' '],
				// 	[' ', ' ', ' ']
				// ]
				// let sb = 'x'
				
				// for( let m = 0; m < 9; m++){
				// 	let html = '';

				// 	let playerI = +prompt ('enter row number. Player: ' + sb)
				// 	let playerJ = +prompt ('enter column number. Player: ' + sb)

				// 	field[playerI][playerJ] = sb;

				// 	if( sb === 'x'){
				// 		sb = 'o';
				// 	} else {
				// 		sb = 'x';
				// 	}

				// 	for( let i = 0; i < field.length; i++){
				// 		let row = '|'

				// 		for( let j = 0; j < field[i].length; j++){
				// 			row += field[i][j] + '|';
				// 		}
				// 		row += '\n+'

				// 		for( let j = 0; j < field[i].length; j++){
				// 			row += '-' + '+';
				// 		}
				// 		row += '\n'
				// 		html += row
				// 	}

				// 	console.clear();
				// 	console.log(html);
				// }

				// ===============

				// random numbers
				// === first ===

				// function randomInt(num1 = 0, num2 = 0){
						
				// 	// verification min/max value
				// 	if (num1 < num2){
				// 		min = num1;
				// 		max = num2;
				// 	} else {
				// 		min = num2;
				// 		max = num1;
				// 	}
				// 	let random = Math.round(min + Math.random() * (max - min));

				// 	return random;
				// }

				// let result = randomInt(-5, 5);
				// console.log('result: ',result);

				// === second ===

				// function randomInt(num1 = 0, num2 = 0, f = null){
						
				// 	if( typeof f === 'number') {
				// 		if (num1 < num2) {
				// 			return +( a + (b - a) * Math.random()).toFixed(f);
				// 		}
				// 		return +( b + (a - b) * Math.random()).toFixed(f);
				// 	}

				// 	if (num1 < num2) {
				// 		return Math.raund( a + (b - a) * Math.random);
				// 	}
				// 	return Math.raund( b + (a - b) * Math.random);

				// }

				// let result = randomInt(-5, 5);
				// console.log('result: ',result);

				// === homework ===

				// function randomInt(min = 0, max = 0){

				// 	let arr = []
				// 	let obj = {}
						
				// 	let sum = 0
				// 	let range = Math.round(min + Math.random() * (max - min))

				// 	for (let i = 0; i < range; i ++){
				// 		arr.push(Math.round(1 + Math.random() * (5 - 1)))
				// 		sum += arr[i]

				// 		obj[arr[i]] = 1;

				// 		// console.log('[arr[i]]',[arr[i]]);
				// 		// console.log('[arr[i+1]]',[arr[i+1]]);
				// 		// if(obj[arr[i]] === obj[arr[i]]){
				// 		// 	obj[arr[i]] ++
				// 		// }
				// 	}	
						
				// 	for ( let j = 0; j < range; j ++){
				// 		// console.log('[arr[j]]',[arr[j]]);
				// 		// console.log('[arr[j+1]]',[arr[j+1]]);
				// 		if(obj[arr[j]] === obj[arr[j+1]]){
				// 			obj[arr[j]] = obj[arr[j]]+ 1
				// 		} else {
				// 			obj[arr[j]] = 1
				// 		}
				// 	}

				// 	let average = sum / arr.length
				// 	let result = {
				// 		'arr' : arr,
				// 		'sum: ' : sum,
				// 		'average: ' : average,
				// 		'obj: ' : obj
				// 	}

				// 	return result
				// }

				// let res = randomInt(10, 20);
				// console.log('res: ', res)

// CLOCK
// =========================
// document.write(
// 	`
// 	<div class='clock'>
// 		<input type="checkbox" id="time" >
// 		<label for="time">
			
// 			<!-- <div class='meridiem'>Ante Meridiem</div> -->

// 			<div class='arrow arrowHours'><span></span></div>
// 			<div class='arrow arrowMinutes'><span></span></div>
// 			<div class='arrow arrowSeconds'><span></span></div>
// 			<div class="timeMarkers timeMarker__1">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>
// 			</div>
// 			<div class="timeMarkers timeMarker__2">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>						
// 			</div>
// 			<div class="timeMarkers timeMarker__3">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>						
// 			</div>
// 			<div class="timeMarkers timeMarker__4">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>						
// 			</div>
// 			<div class="timeMarkers timeMarker__5">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>						
// 			</div>
// 			<div class="timeMarkers timeMarker__6">
// 				<div class="timeMarker timeMarkerTop"></div>
// 				<div class="timeMarker timeMarkerBottom"></div>						
// 			</div>
// 		</label>
		
// 	</div>
// 	`
// )
// const dataTime = new Date();

// let h = dataTime.getHours();
// let m = dataTime.getMinutes();
// let s = dataTime.getSeconds();



// // let h = +prompt('enter hours');
// // let m = +prompt('enter minutes');
// // let s = +prompt('enter seconds');
// h = h > 12? h - 12: h;
// // console.log('hours', h);
// // if ()

// function animArrow(name, from, to){
// 	return`
// 	<style>
// 		@keyframes ${name}{
// 			from{
// 				transform: rotate(${from}deg);
// 			}
// 			to {
// 				transform: rotate(${to}deg);
// 			}
// 		}

// 	</style>
// 	`;
// }

// let hours = document.write(animArrow('hourSeconds', 6 * s, 360 + 6 * s));
// let minutes = document.write(animArrow('hourMinutes', 6 * m, 360 + 6 * m + .1));
// let seconds = document.write(animArrow('hourArrow', 30 * h + m * .5, 360 + 30 * h + m * .5));
