'use strict'
//debugger;
var gLevel = { size: 8, mines: 8 };
var SYMBOL = '💣';
var gState = {
    isGameOn: true,
    shownCount: 0,
    markedCount: gLevel.mines,
    secsPassed: 0
};

var startTime = 0;
var midTime = 0;
var isFirstclick = false;
var intervalId;

var gBoard = buildBoard(gLevel.size);
document.querySelector('h5').innerHTML = gState.markedCount;
boardRender(gBoard);

function gameInit(size, mines) {
 gLevel.size = size;
 gLevel.mines = mines;

 gState = {
    isGameOn: true,
    shownCount: 0,
    markedCount: mines,
    secsPassed: 0
};

startTime = 0;
midTime = 0;
isFirstclick = false;
intervalId;

gBoard = buildBoard(size);
document.querySelector('h5').innerHTML = gState.markedCount;
boardRender(gBoard);
document.querySelector('h3').innerHTML = 'Liking this game?'
clearInterval(intervalId);
document.querySelector('h2').innerHTML = 'Your Time:';
 
}


// setIsShown(gBoard);

function buildBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = { val: 0, isFlagged: false, isShown: false };
        }
    }
    return board;
}

function insertMines(board, mines, m, n) {
    //debugger;
    var a;
    var b;
    var counter = 0;
    while (counter < mines) {
        a = Math.floor(Math.random() * board.length);
        b = Math.floor(Math.random() * board.length);
        if (a !== m && b !== n) {
            if (board[a][b].val === 0) {
                board[a][b].val = SYMBOL;
                counter++
            }
        }
    }
    return board;
}

function minesNegsCount(board, m, n) {
    //debugger;
    var count = 0;
    for (var i = m - 1; i < (m - 1) + 3; i++) {
        if (i < 0 || i > board.length - 1) continue;
        for (var j = n - 1; j < (n - 1) + 3; j++) {
            if (j < 0 || j > board.length - 1) continue;
            if (!(i === m && j === n) && board[i][j].val === SYMBOL) {
                count++;
            }
        }
    }
    return count;
}

function setMinesNiebgCount(board) {
    //debugger;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j].val !== SYMBOL) {
                //debugger;
                if (minesNegsCount(board, i, j) === 0) {
                    board[i][j].val = '';
                } else {
                    board[i][j].val = minesNegsCount(board, i, j);
                }

            }
        }
    }
    return board;
}

function boardRender(board) {
    // debugger;
    var elBoard = document.querySelector('.board');
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cellClass = 'cell cell-' + i + '-' + j;
            strHtml += '<td onclick="cellClicked(this, ' + i + ',' + j + ' )" class="' + cellClass + '"oncontextmenu="cellRightClick(this, ' + i + ',' + j + ');return false;">'
            strHtml += '';
            strHtml += '</td>'

        }
    }
    //console.log(strHtml);
    elBoard.innerHTML = strHtml;
}

function cellRightClick(elCell, i, j) {
    //debugger;
    if (!gState.isGameOn) {
        return;
    }

    if (elCell.classList.contains('flipped')) {
        return;
    }

    if (elCell.innerHTML === '🚩') {
        elCell.innerHTML = '';
        gBoard[i][j].isFlagged = false;
        gState.markedCount++;
        console.log('Marked Cells are: ' + gState.markedCount);
        document.querySelector('h5').innerHTML = gState.markedCount;

    } else {
        elCell.innerHTML = '🚩';
        gBoard[i][j].isFlagged = true;
        gState.markedCount--;
        console.log('Marked Cells are: ' + gState.markedCount);
        document.querySelector('h5').innerHTML = gState.markedCount;
    }

    checkGameStatus();
}

function getShownCount(board) {
    //debugger;
    gState.shownCount = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j].isShown === true) {
                gState.shownCount++;

            }
        }
    }
    console.log(gState.shownCount);
    return gState.shownCount;
}

function gameClac() {
    midTime = new Date().getTime();
    document.querySelector('h2').innerHTML = (Math.round((midTime - startTime) / 1000)) + ' seconds';
}

function cellClicked(elCell, m, n) {
   // debugger;
    // console.log(m , n);
    if (!gState.isGameOn) {
        return;

    }

    if (gBoard[m][n].isFlagged === true) {
        return;
    } else {
        // elCell.classList.add('flipped');
        if (!isFirstclick) {
            //debugger;
            // elCell.classList.add('flipped');
            gBoard = setMinesNiebgCount(insertMines(buildBoard(gLevel.size), gLevel.mines, m, n));
           // boardRender(gBoard);
            isFirstclick = true;
            startTime = new Date().getTime();
            intervalId = setInterval(gameClac, 1000);
        }
        
        elCell.innerHTML = gBoard[m][n].val;
        elCell.classList.add('flipped'); 
        gBoard[m][n].isShown = true;
            //insert value from the model
            flipCellsAroundEmptyCell(elCell, m, n);
            //setIsShown(gBoard);
            getShownCount(gBoard);

            if (gBoard[m][n].val === SYMBOL) {
               
                //debugger;
                for (var i = 0; i < gBoard.length; i++) {
                    for (var j = 0; j < gBoard[0].length; j++) {
                        if (gBoard[i][j].val === SYMBOL) {
                            var selector = '.cell-' + i + '-' + j;
                            var curCell = document.querySelector(selector);
                            curCell.innerHTML = gBoard[i][j].val;
                            if (gBoard[i][j].isFlagged === true) {
                                curCell.classList.add('flaggedWithBomb');
                            } else {
                                curCell.classList.add('flippedBomb');
                            }
                        }
                        
                    }
                }
                console.log('You Lost!');
                document.querySelector('h3').innerHTML = 'You Lost!!';
                gState.isGameOn = false;
                clearInterval(intervalId);
            }
            checkGameStatus();
            
        }
    }



function flipCellsAroundEmptyCell(cell, m, n) {
    //debugger;
    if (gBoard[m][n].val === '') {

        for (var i = m - 1; i < (m - 1) + 3; i++) {
            if (i < 0 || i > gBoard.length - 1) continue;
            for (var j = n - 1; j < (n - 1) + 3; j++) {
                if (j < 0 || j > gBoard.length - 1) continue;
                var selector = '.cell-' + i + '-' + j;
                var modCell = document.querySelector(selector);
                if (modCell.classList.contains('flipped') || modCell.innerHTML === '🚩') continue;
                if (gBoard[i][j].val === '') {
                    if (!(i === m && j === n)) {
                        flipCellsAroundEmptyCell(modCell, i, j);
                    }
                }
                
                if (modCell.innerHTML !== SYMBOL) {
                    //debugger;
                    modCell.classList.add('flipped');
                    modCell.innerHTML = gBoard[i][j].val;
                    gBoard[i][j].isShown = true;
                }
            }
        }
    }
}


function checkGameStatus() {
    //debugger;
    if (gState.shownCount === Math.pow(gLevel.size, 2) - (gLevel.mines)
        && gState.markedCount === 0) {
        console.log('You won!');
        document.querySelector('h3').innerHTML = 'You Won!!!!!!!';
        gState.isGameOn = false;
        clearInterval(intervalId);

        return;
    }
}


//UNIT TEST
// var tempBoard = [
//     ['','','',''],
//     ['%','','',''],
//     ['','','','%'],
//     ['','','','']];

    //console.log(setMinesNiebgCount(gBoard));
    //console.table(setMinesNiebgCount(gBoard));
    //console.log(setMinesNiebgCount(tempBoard));

//console.log(minesNegsCount(tempBoard,2,2));//1
 //console.log(minesNegsCount(tempBoard,1,1));//1
// console.log(minesNegsCount(tempBoard,2,3));//2
// console.log(minesNegsCount(tempBoard,0,0));//2
// console.log(minesNegsCount(tempBoard,0,2));//3
//console.log(gBoard);
//console.log(tempBoard[2][0]);
//console.log(insertMines(gBoard, 4));
// console.log(insertMines(gBoard, 4));
// console.log(insertMines(gBoard, 4));