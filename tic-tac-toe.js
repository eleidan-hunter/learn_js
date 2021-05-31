// tic tac toe

let Fild = document.querySelector('.fild');
let sb = '0'; //1
let Player = document.querySelector('.player_index');

for(let i = 0; i < 9; i++){
    Fild.innerHTML += (
        `<div class="cell" data-index='${i}'></div>`
    )
    
}




let Cells = document.querySelectorAll('.cell');
Cells.forEach(function(element){
    // console.log(element);
    element.addEventListener('click', function(event){
        const Click = event.target;
        console.log('click', Click.innerHTML);
        // console.log('target', event.target);

        if (Click.innerHTML === ''){
            if( sb === '0'){
                Player.innerHTML = 'Игрок 1';
                sb = '1';
                Click.classList.add('zero');
            } else if (sb === '1' ){
                sb = '0';
                Player.innerHTML = 'Игрок 2';
                Click.classList.add('cross');
            }
            // Click.innerText = `${sb}`;
        }
    })
})


    // Cell.addEventListener('click', function(){console.log('click')});


    


// let field = [
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' ']
// ]
// let sb = 'x'

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