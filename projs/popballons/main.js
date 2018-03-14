


'use strict'

var popSound = new Audio('popSound.wav');


function baloonMoved() {
    var elBalls = document.querySelectorAll('.balloon');
    console.log(elBalls);
    for (var i = 0; i < elBalls.length; i++) {
        var margin = parseInt(elBalls[i].style.bottom);
        console.log('margin', margin);
        elBalls[i].style.bottom = margin + 3 + 'px';
        gBalloons[i].speed += margin;
    }
}
//baloonMoved();

function balloonClicked(elBalloon) {
    //alert ('balloon clicked');

    console.log(elBalloon);
    popSound.play();
    elBalloon.classList.add('hidden');
}



var gBalloons = [{
    bottom: 0,
    speed: 10
},
{
    bottom: 0,
    speed: 20
}
];

setInterval(baloonMoved, 25);