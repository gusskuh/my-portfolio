'use strict'
//debugger;
console.log('hellos soboken!!!!');

var gGamerPos = { row: 2, col: 2 }
var gPlayerSteps = 0;
var isGameOn = true;
var gBoard = buildBoard(9);
var playerSelector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;

document.onkeyup = checkKey;

boardRender(gBoard);
createGameOutline();

//Reset Game Function///////////////////
function reset() {
    location.reload();
}

//Key event handler/////////////////////
function checkKey(e) {

    if(!isGameOn) {
        return;
    }
    //debugger;
    var cells = document.querySelectorAll('.cell');
    // console.log(cells);
    // console.log(cells[1]);
    var cellsOnTarget = 0;
    for(var i = 0; i < cells.length; i++) {
        
            if(cells[i].classList.contains('boxOnTarget')) {
                cellsOnTarget++;
                console.log('cells on target are : ' + cellsOnTarget);
            
        }
    }

    if(cellsOnTarget === 7) {
        document.querySelector('.playerStatus').innerHTML = 'You Won!!!!!!'
        isGameOn = false;
    } 
    
    if(gPlayerSteps === 69) {
        document.querySelector('.playerStatus').innerHTML = 'You Lost!!!!!!'
        isGameOn = false;
    }

    gPlayerSteps++;
    //console.log(gPlayerSteps);
    document.querySelector('h3').innerHTML = gPlayerSteps;

    e = e || window.event;
    //console.log('a key is pressed');
    //nextCellToDown = document.querySelector('.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col);
    var curPlayerCell = document.querySelector('.cell-' + (gGamerPos.row) + '-' + gGamerPos.col);
    //console.log('player is in:' + '.cell-' + (gGamerPos.row) + '-' + gGamerPos.col);
    if (curPlayerCell.classList.contains('circle')) {
        curPlayerCell.classList.remove('circle');
        curPlayerCell.classList.add('player');
    }

    if (document.querySelector('.cell-2-1').classList.contains('player')) {
        document.querySelector('.cell-2-1').classList.remove('player')
        document.querySelector('.cell-2-1').classList.add('circle')
    }
    if (document.querySelector('.cell-4-1').classList.contains('player')) {
        document.querySelector('.cell-4-1').classList.remove('player')
        document.querySelector('.cell-4-1').classList.add('circle')
    }
    if (!document.querySelector('.cell-3-5').classList.contains('player')) {
        document.querySelector('.cell-3-5').classList.remove('player')
        document.querySelector('.cell-3-5').classList.add('circle')
    }
    if (document.querySelector('.cell-6-3').classList.contains('player')) {
        document.querySelector('.cell-6-3').classList.remove('player')
        document.querySelector('.cell-6-3').classList.add('circle')
    }
    if (document.querySelector('.cell-6-6').classList.contains('player')) {
        document.querySelector('.cell-6-6').classList.remove('player')
        document.querySelector('.cell-6-6').classList.add('circle')
    }
    if (document.querySelector('.cell-7-4').classList.contains('player')) {
        document.querySelector('.cell-7-4').classList.remove('player')
        document.querySelector('.cell-7-4').classList.add('circle')
    }
    if (document.querySelector('.cell-5-4').classList.contains('player')) {
        document.querySelector('.cell-5-4').classList.remove('player')
        document.querySelector('.cell-5-4').classList.add('circle')
    }

    if (e.keyCode == '38') {
        //console.log('up arrow');
        var nextCellToUp = document.querySelector('.cell-' + (gGamerPos.row - 1) + '-' + gGamerPos.col);
        var nextCellToSecondUp = document.querySelector('.cell-' + (gGamerPos.row - 2) + '-' + gGamerPos.col);
        if (nextCellToUp.classList.contains('wall')) return;
        if (nextCellToUp.classList.contains('box')) {
            if (nextCellToSecondUp.classList.contains('box')) {
                return;
            } else if (nextCellToSecondUp.classList.contains('wall')) return;
            //if(nextCellToSecondLeft.classList.contains('wall')) return;
        }
        moveUp();
        nextCellToUp = document.querySelector('.cell-' + (gGamerPos.row - 1) + '-' + gGamerPos.col);
        nextCellToSecondUp = document.querySelector('.cell-' + (gGamerPos.row - 2) + '-' + gGamerPos.col);

        if (nextCellToUp.classList.contains('box') && nextCellToUp.classList.contains('circle')) {
            nextCellToUp.classList.remove('circle');
            nextCellToUp.classList.add('boxOnTarget');
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        var nextCellToDown = document.querySelector('.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col);
        var nextCellToSecondDown = document.querySelector('.cell-' + (gGamerPos.row + 2) + '-' + gGamerPos.col);

        if (nextCellToDown.classList.contains('wall')) return;
        if (nextCellToDown.classList.contains('box')) {
            if (nextCellToSecondDown.classList.contains('box')) {
                return;
            } else if (nextCellToSecondDown.classList.contains('wall')) return;
        }

        moveDown();
        // console.log('down arrow');
        var nextCellToDown = document.querySelector('.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col);
        var nextCellToSecondDown = document.querySelector('.cell-' + (gGamerPos.row + 2) + '-' + gGamerPos.col);

        if (nextCellToDown.classList.contains('box') && nextCellToDown.classList.contains('circle')) {
            nextCellToDown.classList.remove('circle');
            nextCellToDown.classList.add('boxOnTarget');

        }
    }
    else if (e.keyCode == '37') {
        var nextCellToLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 1));
        var nextCellToSecondLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 2));
        // left arrow
        if (nextCellToLeft.classList.contains('wall')) return;
        if (nextCellToLeft.classList.contains('box')) {
            if (nextCellToSecondLeft.classList.contains('box')) {
                return;
            } else if (nextCellToSecondLeft.classList.contains('wall')) return;
        }

        moveLeft();
        // console.log('left arrow');

        var nextCellToLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 1));
        var nextCellToSecondLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 2));

        if (nextCellToLeft.classList.contains('box') && nextCellToLeft.classList.contains('circle')) {
            nextCellToLeft.classList.remove('circle');
            nextCellToLeft.classList.add('boxOnTarget');

        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        var nextCellToRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 1));
        var nextCellToSecondRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 2));
        if (nextCellToRight.classList.contains('wall')) return;
        if (nextCellToRight.classList.contains('box')) {
            if (nextCellToSecondRight.classList.contains('box')) {
                return;
            } else if (nextCellToSecondRight.classList.contains('wall')) return;

        }

        moveRight();
        //console.log('right arrow');
        var nextCellToRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 1));
        var nextCellToSecondRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 2));

        if (nextCellToRight.classList.contains('box') && nextCellToRight.classList.contains('circle')) {
            nextCellToRight.classList.remove('circle');
            nextCellToRight.classList.add('boxOnTarget');

        }
    }

}

///Build Board Function////////////////////

function buildBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = { type: '', isContains: false };
        }
    }
    return board;
}

//Board Render Function///////////////////

function boardRender(board) {
    //debugger;
    var elBoard = document.querySelector('.board');
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cellClass = 'cell cell-' + i + '-' + j;
            strHtml += '<td onclick="cellClicked(this, ' + i + ',' + j + ' )" class="' + cellClass + '">'
            strHtml += '';
            strHtml += '</td>'
        }
    }
    //console.log(strHtml);
    elBoard.innerHTML = strHtml;
}



//////Move Up Function//////////////////////
function moveUp() {
    var selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    document.querySelector(selector).classList.remove('player');
    gGamerPos.row--;
    selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    
    if (document.querySelector(selector).classList.contains('circle')) {
        document.querySelector(selector).classList.remove('circle');
        document.querySelector(selector).classList.add('player');
    }
    
    if (document.querySelector(selector).classList.contains('boxOnTarget')) {
        document.querySelector(selector).classList.remove('boxOnTarget');
        document.querySelector(selector).classList.add('player');
    }

    document.querySelector(selector).classList.add('player');
    
    
    var currentCell = document.querySelector('.cell-' + gGamerPos.row + '-' + gGamerPos.col);
    //debugger;
    if (currentCell.classList.contains('box')) {
        var boxSelector = '.cell-' + (gGamerPos.row - 1) + '-' + gGamerPos.col;
        //console.log('the cell contains a box');
        currentCell.classList.remove('box');
        
        document.querySelector(boxSelector).classList.add('box');
    }
}

//////Move Down Function//////////////////////

function moveDown() {
    var selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    document.querySelector(selector).classList.remove('player');
    gGamerPos.row++;
    selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    
    if (document.querySelector(selector).classList.contains('circle')) {
        document.querySelector(selector).classList.remove('circle');
        document.querySelector(selector).classList.add('player');
    }
    
    if (document.querySelector(selector).classList.contains('boxOnTarget')) {
        document.querySelector(selector).classList.remove('boxOnTarget');
        document.querySelector(selector).classList.add('player');
    }
    
    document.querySelector(selector).classList.add('player');
    
    var currentCell = document.querySelector('.cell-' + gGamerPos.row + '-' + gGamerPos.col);
    //debugger;
    if (currentCell.classList.contains('box')) {
        var boxSelector = '.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col;
        //console.log('the cell contains a box');
        currentCell.classList.remove('box');
        
        document.querySelector(boxSelector).classList.add('box');
        
    }
}

//////Move Right Function//////////////////////
function moveRight() {

    var selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    document.querySelector(selector).classList.remove('player');
    gGamerPos.col++;
    selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    
    if (document.querySelector(selector).classList.contains('circle')) {
        document.querySelector(selector).classList.remove('circle');
        document.querySelector(selector).classList.add('player');
    }
    
    if (document.querySelector(selector).classList.contains('boxOnTarget')) {
        document.querySelector(selector).classList.remove('boxOnTarget');
        document.querySelector(selector).classList.add('player');
    }
    
    document.querySelector(selector).classList.add('player');
    
    var currentCell = document.querySelector('.cell-' + gGamerPos.row + '-' + gGamerPos.col);
    //debugger;
    if (currentCell.classList.contains('box')) {
        var boxSelector = '.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 1);
        //console.log('the cell contains a box');
        currentCell.classList.remove('box');
        
        document.querySelector(boxSelector).classList.add('box');
        
    }
    
}

//////Move Left Function//////////////////////
function moveLeft() {
    //debugger;
    var selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;
    document.querySelector(selector).classList.remove('player');
    gGamerPos.col--;
    selector = '.cell-' + gGamerPos.row + '-' + gGamerPos.col;

    if (document.querySelector(selector).classList.contains('circle')) {
        document.querySelector(selector).classList.remove('circle');
        document.querySelector(selector).classList.add('player');
    }

    if (document.querySelector(selector).classList.contains('boxOnTarget')) {
        document.querySelector(selector).classList.remove('boxOnTarget');
        document.querySelector(selector).classList.add('player');
    }
    
    document.querySelector(selector).classList.add('player');
    
    var currentCell = document.querySelector('.cell-' + gGamerPos.row + '-' + gGamerPos.col);
    
    if (currentCell.classList.contains('box')) {
        var boxSelector = '.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 1);
        //console.log('the cell contains a box');
        currentCell.classList.remove('box');
        
        document.querySelector(boxSelector).classList.add('box');
    }
}

///Create Game Level Function///////////////
function createGameOutline() {
    for (var i = 0; i < gBoard.length; i++) {
        var selector = '.cell-' + 0 + '-' + i;
        document.querySelector(selector).classList.add('wall');
        selector = '.cell-' + (gBoard.length - 1) + '-' + i;
        document.querySelector(selector).classList.add('wall');
        selector = '.cell-' + i + '-' + 0;
        document.querySelector(selector).classList.add('wall');
        selector = '.cell-' + i + '-' + (gBoard.length - 1);
        document.querySelector(selector).classList.add('wall');
        selector = '.cell-' + i + '-' + (gBoard.length - 2);
        document.querySelector(selector).classList.add('wall');
    }
    for (var i = 0; i < gBoard.length - 3; i++) {
        selector = '.cell-' + i + '-' + (gBoard.length - 3);
        document.querySelector(selector).classList.add('wall');
        
    }
    document.querySelector('.cell-1-1').classList.add('wall');
    document.querySelector('.cell-1-2').classList.add('wall');
    document.querySelector('.cell-3-1').classList.add('wall');
    document.querySelector('.cell-3-2').classList.add('wall');
    document.querySelector('.cell-5-2').classList.add('wall');
    document.querySelector('.cell-4-2').classList.add('wall');
    document.querySelector('.cell-4-3').classList.add('wall');
    document.querySelector('.cell-4-3').classList.add('wall');
    
    document.querySelector('.cell-2-1').classList.add('circle');
    document.querySelector('.cell-4-1').classList.add('circle');
    document.querySelector('.cell-3-5').classList.add('circle');
    // document.querySelector('.cell-6-4').classList.add('circle');
    document.querySelector('.cell-6-3').classList.add('box', 'boxOnTarget');
    document.querySelector('.cell-6-6').classList.add('circle');
    document.querySelector('.cell-7-4').classList.add('circle');
    document.querySelector('.cell-5-4').classList.add('circle');
    
    document.querySelector('.cell-2-3').classList.add('box');
    document.querySelector('.cell-3-4').classList.add('box');
    document.querySelector('.cell-4-4').classList.add('box');
    document.querySelector('.cell-6-5').classList.add('box');
    document.querySelector('.cell-6-4').classList.add('box');
    //document.querySelector('.cell-6-2').classList.add('box');
    document.querySelector('.cell-6-1').classList.add('box');
}


document.querySelector(playerSelector).classList.add('player');

//UNIT TEST 

//console.log(gBoard);
//console.log(gGamerPos.col);
//console.log(element123);
// document.querySelector('.cell-4-1').classList.add('wall');
// document.querySelector('.cell-3-5').classList.add('box');
// document.querySelector('.cell-1-6').classList.add('wall');
// document.querySelector('.cell-2-3').classList.add('wall');
// document.querySelector('.cell-8-5').classList.add('wall');
// document.querySelector('.cell-1-5').classList.add('circle');
// document.querySelector('.cell-7-5').classList.add('circle');
// document.querySelector('.cell-6-7').classList.add('circle');
// document.querySelector('.cell-3-2').classList.add('circle');
// document.querySelector('.cell-4-4').classList.add('orangeBox');

///////ON CLICK HANDLER FUNCTION///////////////////////////////////

// function cellClicked(elCell, i, j) {
//     //debugger;
//     var nextCellToLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 1));
//     var nextCellToSecondLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 2));
//     //debugger;
//     if (j < gGamerPos.col) {
//         if (nextCellToLeft.classList.contains('wall')) return;
//         if (nextCellToLeft.classList.contains('box')) {
//             if (nextCellToSecondLeft.classList.contains('box')) {
//                 return;
//             } else if (nextCellToSecondLeft.classList.contains('wall')) return;
//         }

//         moveLeft();

//         var nextCellToLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 1));
//         var nextCellToSecondLeft = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col - 2));

//         if (nextCellToLeft.classList.contains('box') && nextCellToLeft.classList.contains('circle')) {
//             nextCellToLeft.classList.remove('circle');
//         }
//     }

//     var nextCellToRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 1));
//     var nextCellToSecondRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 2));

//     if (j > gGamerPos.col) {
//         if (nextCellToRight.classList.contains('wall')) return;
//         if (nextCellToRight.classList.contains('box')) {
//             if (nextCellToSecondRight.classList.contains('box')) {
//                 return;
//             } else if (nextCellToSecondRight.classList.contains('wall')) return;

//         }

//         moveRight();

//         var nextCellToRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 1));
//         var nextCellToSecondRight = document.querySelector('.cell-' + gGamerPos.row + '-' + (gGamerPos.col + 2));

//         if (nextCellToRight.classList.contains('box') && nextCellToRight.classList.contains('circle')) {
//             nextCellToRight.classList.remove('circle');
//         }

//     }

//     var nextCellToDown = document.querySelector('.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col);
//     var nextCellToSecondDown = document.querySelector('.cell-' + (gGamerPos.row + 2) + '-' + gGamerPos.col);

//     if (i > gGamerPos.row) {
//         if (nextCellToDown.classList.contains('wall')) return;
//         if (nextCellToDown.classList.contains('box')) {
//             if (nextCellToSecondDown.classList.contains('box')) {
//                 return;
//             } else if (nextCellToSecondDown.classList.contains('wall')) return;

//         }

//         moveDown();

//         var nextCellToDown = document.querySelector('.cell-' + (gGamerPos.row + 1) + '-' + gGamerPos.col);
//         var nextCellToSecondDown = document.querySelector('.cell-' + (gGamerPos.row + 2) + '-' + gGamerPos.col);

//         if (nextCellToDown.classList.contains('box') && nextCellToDown.classList.contains('circle')) {
//             nextCellToDown.classList.remove('circle');
//         }

//     }

//     var nextCellToUp = document.querySelector('.cell-' + (gGamerPos.row - 1) + '-' + gGamerPos.col);
//     var nextCellToSecondUp = document.querySelector('.cell-' + (gGamerPos.row - 2) + '-' + gGamerPos.col);

//     if (i < gGamerPos.row) {
//         if (nextCellToUp.classList.contains('wall')) return;
//         if (nextCellToUp.classList.contains('box')) {
//             if (nextCellToSecondUp.classList.contains('box')) {
//                 return;
//             } else if (nextCellToSecondUp.classList.contains('wall')) return;

//         }
//         moveUp();
//     }
//     nextCellToUp = document.querySelector('.cell-' + (gGamerPos.row - 1) + '-' + gGamerPos.col);
//     nextCellToSecondUp = document.querySelector('.cell-' + (gGamerPos.row - 2) + '-' + gGamerPos.col);

//     if (nextCellToUp.classList.contains('box') && nextCellToUp.classList.contains('circle')) {
//         nextCellToUp.classList.remove('circle');
//     }
// }