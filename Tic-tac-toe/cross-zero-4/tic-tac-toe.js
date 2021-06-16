let Fild = document.querySelector('.fild');
let sb = '0'; //1
let Player = document.querySelector('.player_index');
let arrPly = [];
let winner = "";
let step = 0; // счетчик ходов

for(let i = 0; i < 9; i++){
    Fild.innerHTML += ( `<div class="cell" data-index='${i}'></div>`)
}

let Cells = document.querySelectorAll('.cell');
Cells.forEach(function(element){
    element.addEventListener('click', function (event) {
        const Click = event.target;
        if (Click.innerHTML === ''){    // <= вот эта проверка на пустую строку
            if (sb === '0') {
                sb = '1';
                Player.innerHTML = 'Следующий ход: Крестики';
                Click.innerText = `${sb}`;    // если ничего не отрисовать в клетке, то проверка на пустую строку не работает. по этому я передаю в клетку   sb.  а в стилях сделал font-size: 0
                arrPly[Click.getAttribute('data-index')] = 'zero';    // получаю номер атрибута и под этим номером добавляю значение 'zero' в массив
                Click.classList.add('zero');
                step++ // счетчик ходов, при клике на клетку плюсуется ход
            } else if (sb === '1' ){
                sb = '0';
                Player.innerHTML = 'Следующий ход: Нолики';
                Click.innerText = `${sb}`; 
                arrPly[Click.getAttribute('data-index')] = 'cross';
                Click.classList.add('cross');
                step++ // счетчик ходов, при клике на клетку плюсуется ход
            }
            getWinner();
            indicateWinner();
            console.log(arrPly);
        }
    })
    
})


function getWinner() { // сравниваю то что у нас в массиве c выигрышными комбинациями
    let arrWin = [ [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];

    for (let i = 0; i < arrWin.length; i++) {
        console.log('arrW',arrWin.length);   
        
        if (arrPly[arrWin[i][0]] === arrPly[arrWin[i][1]] && arrPly[arrWin[i][1]] === arrPly[arrWin[i][2]] && arrPly[arrWin[i][0]] ) {  
            console.log('arrW',arrWin);   
            
            console.log('arr0',arrWin[i][0]);   
            console.log('arr1',arrWin[i][1]);   
            console.log('arr2',arrWin[i][2]);   
            if (winner == '') {
                console.log( arrPly[arrWin[i][0]]) ;
                winner = arrPly[arrWin[i][0]]; // если победитель еще не определен, то присваиваю победителя
                paintCells(arrWin, i);
            }
       }
    }
}

function indicateWinner() {
    if (winner === 'zero') {
        Player.innerHTML = 'Победили Нолики!'; // вывожу победителя 
        reloadBtn(Player);
    }
        
    if (winner === 'cross') {
        Player.innerHTML = 'Победили Крестики!';
        reloadBtn(Player);
    }

    if (step === 9 && winner === '') {
        Player.innerHTML = 'Ничья!'; // если сделано 9 ходов, а победителя нет - ничья
        reloadBtn(Player);
    }
}

function paintCells(arrWin,i) { 
    arrWin[i].forEach((element) => { // перебираю массив из трех выигрышных элементов и к ячейкам с этими номерами добавляю стиль меняющий беграунд
        let winCells = document.querySelector(`[data-index="${element}"]`)
        winCells.classList.add('cross-win');
    });
}

function reloadBtn( Player) {
    Player.innerHTML += ' <input type="button" value="Новая игра?" onClick="window.location.reload()">'
}

