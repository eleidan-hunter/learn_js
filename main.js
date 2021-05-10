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
