let field = document.querySelector('.fild');
let player = document.querySelector('.player_index');

let marker = '0';
let cell;
let cells;

let gameField = ['','','','','','','','','',];
let winField = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];



//create cells
for( let i = 0; i < gameField.length; i++){
	cell = document.createElement('div');
	cell.classList.add('cell');
	cell.setAttribute('data-cell', 'empty')
	field.appendChild(cell);
	cells = document.querySelectorAll('.cell');
}

//change players
cells.forEach(function(element){
	element.addEventListener('click', function(event){
		event.preventDefault();
		const click = event.target;
		if(click.innerHTML === ''){
			if(marker === '0'){
				click.classList.add('zero');
				click.innerText = 'o';
				player.innerText = 'set cross';
				gameField[click.getAttribute('data-cell')] = 'o';
				marker = '1';
			} else if (marker === '1'){
				click.classList.add('cross');
				click.innerText = 'x';
				player.innerText = 'set zero';
				gameField[click.getAttribute('data-cell')] = 'x';
				marker = '0';
			}
		}
		
	})
})

//check winner
for(let i = 0; i < winField.length; i++){
	if(gameField[winField[i][0]] === gameField[winField[i][1]] &&
		gameField[winField[i][1]] === gameField[winField[i][2]]){
			console.log('1');
		}
			
}



// let Fild = document.querySelector('.fild');
// let sb = '0'; //1
// let Player = document.querySelector('.player_index');
// let Cells;

// let gameField = [];
// let winField = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
// for(let i = 0; i < 9; i++){
// 	Fild.innerHTML += (
// 		`<div class="cell" data-index='${i}'></div>`
// 	)
// 	Cells = document.querySelectorAll('.cell'); 
// }

// // change players, fill gameField
// Cells.forEach(function(element){
// 	element.addEventListener('click', function(event){
// 		const Click = event.target;

// 		if(Click === '') {
// 			if (Click.innerHTML === ''){
// 				if( sb === '0'){
// 					Player.innerHTML = 'Ходят крестики';
// 					sb = '1';
// 					Click.classList.add('zero');
// 					gameField[Click.getAttribute('data-index')] = 'x';
// 				} else if (sb === '1' ){
// 					sb = '0';
// 					Player.innerHTML = 'Ходят нолики';
// 					Click.classList.add('cross');
// 					gameField[Click.getAttribute('data-index')] = 'o';
// 				}
// 				console.log(gameField);
// 			}
// 		}
				
// 	})
		
// })