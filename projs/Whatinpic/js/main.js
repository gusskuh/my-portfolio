'use strict'

//console.log('heyyyyyyyyy');
var gScore = 0;
var isGameOn = true;
var gQuests = [
    {
        id: 0,
        opts: ['The name of this cartoon is Tom and Jerry',
            'The name of this cartoon is pinky and the brain'],
        correctOptIdx: 0,
        img: '<img src="images/image1.jpg"/>'
    },
    { id: 2, opts: ['The name of this movie is little mermaid', 'The name of this movie is ice age'], correctOptIdx: 1, img: '<img src="images/image2.jpg"/>' },
    { id: 3, opts: ['This is the sherlock holmes', 'this is the little mermaid'], correctOptIdx: 1, img: '<img src="images/image3.jpg"/>' }
];

function gameInit() {
    renderQuest(gQuests[0]);
    //toggleHiddenOnModal();
    document.querySelector('.bg-modal').classList.add('hidden');
    isGameOn = true;
    gScore = 0;
    
}

function renderQuest(quest) {
    //debugger;
    var strHtml = '';
    document.querySelector('.img').innerHTML = quest.img;

    for (var i = 0; i < quest.opts.length; i++) {
        strHtml += '<h2 id=' + quest.id + ' class = ' + i + ' onclick="answerClicked(this)">';
        strHtml += quest.opts[i];
        strHtml += '</h2>';
    }
    document.querySelector('.answers').innerHTML = strHtml;
}
//var count = 0;
function answerClicked(elAns) {
    //debugger;
    if (!isGameOn) {
        return;
    }

    var elAnsId = +elAns.id;
    var elAnsClass = +elAns.classList[0];
    for (var i = 0; i < gQuests.length; i++) {
        if (elAnsId === gQuests[i].id) {
            if (elAnsClass === gQuests[i].correctOptIdx) {
                console.log('right answer');
                gScore += 100/gQuests.length;

                if (elAnsId === gQuests.length) {
                    console.log('game over');
                    toggleHiddenOnModal();
                    document.querySelector('.score').innerHTML = gScore;
                    isGameOn = false;
                    return;
                }
                break;
            } else {
                gScore -= 10;
                console.log('wrong answer');
                turnWrongAnswerRed(elAns);
                return;
            }
        }
    }
    renderQuest(gQuests[i + 1]);
}

function turnWrongAnswerRed(elAns) {
    elAns.classList.add('wrong');
    setTimeout(function () { elAns.classList.remove('wrong') }, 1000);
}

function removeHidden(el) {
    //debugger;
     el = document.querySelector('.bg-modal')
    el.classList.remove('hidden');
}


function toggleHiddenOnModal() {
    //debugger;
    var modal = document.querySelector('.bg-modal')
    modal.classList.toggle('hidden');
}



//UNIT TEST


//renderQuest(gQuests[2]);









