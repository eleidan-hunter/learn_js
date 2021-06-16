let Fild = document.querySelector('.fild');
let sb = '0'; //1
let Player = document.querySelector('.player_index');
let Cells;

let arrGame = [];
let arrWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
for(let i = 0; i < 9; i++){
	Fild.innerHTML += (
		`<div class="cell" data-index='${i}'></div>`
	)
	Cells = document.querySelectorAll('.cell'); 
}

 
Cells.forEach(function(element){
    // console.log(element);
    element.addEventListener('click', function(event){
        const Click = event.target;

        if (Click.innerHTML === ''){
            if( sb === '0'){
                Player.innerHTML = 'Ходят крестики';
                sb = '1';
                Click.classList.add('zero');
								arrGame[Click.getAttribute('data-index')] = 'x';
            } else if (sb === '1' ){
                sb = '0';
                Player.innerHTML = 'Ходят нолики';
                Click.classList.add('cross');
								arrGame[Click.getAttribute('data-index')] = 'o';
            }
						console.log(arrGame);
        }
    })
		
})


    


// let field = [
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' ']
// ]
// // let sb = 'x'

// for( let m = 0; m < 9; m++){
// 	let html = '';

// 	// let playerI = +prompt ('enter row number. Player: ' + sb)
// 	// let playerJ = +prompt ('enter column number. Player: ' + sb)

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