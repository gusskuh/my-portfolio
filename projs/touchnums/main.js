'use strict'

var gNumCount = 16;
var counter = 0
var isFirstclick = false;
var startTime = 0;
var midTime = 0;
var intervalId;

buildBoard(16);

function buildBoard(num) {
    gNumCount = num;
    var items = resetNums();
    var elTable = document.querySelector('.mainTable');
    var strHtml = '';
    //var strHtml2 ='';
    //var tr = '<tr></tr>';
    for (var i = 0; i < Math.sqrt(num); i++) {
        strHtml += '<tr></tr>'
        for (var j = 0; j < Math.sqrt(num); j++) {
            var randNum = drawNum(items);
            strHtml += '<td class="tableCell" onclick="cellClicked(this)">' + randNum + '</td>';

        }

    }
    elTable.innerHTML = strHtml;
}

function cellClicked(elTd) {
    //debugger;
    var endTime = 0;
    var gameTime = 0;
    //var timeClac = 0;
    if (!isFirstclick) {
        //debugger;
        isFirstclick = true;
        startTime = new Date().getTime();
        intervalId = setInterval(gameClac, 100);
    }

    var cellValue = +elTd.innerHTML;
    //console.log(value);
    if (cellValue === counter + 1) {
        elTd.classList.add('clicked');
        counter++;
    } else {
        return;
    }

    if (counter === gNumCount) {
        //debugger;
        clearInterval(intervalId);
        endTime = new Date().getTime();
        gameTime = (endTime - startTime) / 1000;
        document.querySelector('h2').innerHTML = gameTime + ' Seconds!';
    }

}

function gameClac() {
    midTime = new Date().getTime();
    document.querySelector('h2').innerHTML = (midTime - startTime) / 1000;
}

function drawNum(items) {
    var idx = Math.floor(Math.random() * items.length);
    return +items.splice(idx, 1);
}

function resetNums() {
    var nums = []
    for (var i = 1; i < gNumCount + 1; i++) {
        nums.push(i);
    }
    return nums;
}

function gameInit(num) {
    buildBoard(num);
    counter = 0
    isFirstclick = false;
    startTime = 0;
    midTime = 0;
    intervalId;
}

