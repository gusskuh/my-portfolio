console.log('Starting up');
var x = moment().format("MMM Do YY");
console.log(x);

var gProjs = [{
  id: "sokoban",
  name: "Sokoban Game",
  title: "Better push those boxes",
  desc: "Sokoban (倉庫番 sōkoban, warehouse keeper) is a type of transport puzzle, in which the player pushes boxes or crates around in a warehouse, trying to get them to storage locations",
  url: "projs/sokoban",
  publishedAt: moment("20180228").fromNow(),
  labels: ["Matrixes", "keyboard events"]
},
{
  id: "minesweeper",
  name: "Minesweeper Game",
  title: "Whatch out from those mines!",
  desc: "Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.",
  url: "projs/minesweeper",
  publishedAt: moment("20180228").fromNow(),
  labels: ["Matrixes", "keyboard events", "recursion"]
},
{
  id: "popballons",
  name: "Pop Balloons",
  title: "Pop these balloons",
  desc: "Popping ballons is fun, try to pop all the baloon befoer they all go up to the sky!",
  url: "projs/popballons",
  publishedAt: moment("20180225").fromNow(),
  labels: ["keyboard events"]

}, {
  id: "touchnums",
  name: "Touch the numbers",
  title: "Touch the numbers at the best time",
  desc: "You need to touch the numbers in the right order as fast as you can with your mouse arrow",
  url: "projs/touchnums",
  publishedAt: moment("20180224").fromNow(),
  labels: ["Matrixes", "keyboard events"]

}, {
  id: "Whatinpic",
  name: "What is in the picture",
  title: "Choose the correct line",
  desc: "Pick to right sentence for each picture. If you guess wrong you loose 10 points. Lets see what is your best score!",
  url: "projs/Whatinpic",
  publishedAt: moment("20180306").fromNow(),
  labels: ["keyboard events", "modal", 'flex']

}, {
  id: "memorylogos",
  name: "Logos memory game",
  title: "The best memory game!",
  desc: "Lets see how fast you can solve this logos memory game. You need to match a pair of cards. If you you get it wrong, the cards will flip back.",
  url: "projs/memorylogos",
  publishedAt: moment("20180307").fromNow(),
  labels: ["Matrixes", "flex"]

}];

function renderBadges(proj) {
  // debugger;
  var strHTML = '';
  for (var i = 0; i < proj.labels.length; i++) {
      if (proj.labels[i] === 'Matrixes') {
        strHTML += '<span class="badge badge-primary">' + proj.labels[i] + '</span>'
    }
    else if(proj.labels[i] === 'keyboard events') {
      strHTML += '<span class="badge badge-success">' + proj.labels[i] + '</span>'
    }
    else if(proj.labels[i] === 'recursion') {
      strHTML += '<span class="badge badge-danger">' + proj.labels[i] + '</span>'
    }
    else if(proj.labels[i] === 'flex') {
      strHTML += '<span class="badge badge-warning">' + proj.labels[i] + '</span>'
    }
    else if(proj.labels[i] === 'modal') {
      strHTML += '<span class="badge badge-info">' + proj.labels[i] + '</span>'
    }
  }
  return strHTML;
}


function renderProjs(projs) {
  var strHtml = '';
  for (var i = 0; i < projs.length; i++) {
    strHtml += '<div class="col-md-4 col-sm-6 portfolio-item">'
    strHtml += '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal' + (i + 1) + '">'
    strHtml += '<div class="portfolio-hover">'
    strHtml += '<div class="portfolio-hover-content">'
    strHtml += '<i class="fa fa-plus fa-3x"></i>'
    strHtml += '</div>'
    strHtml += '</div>'
    strHtml += '<img class="img-fluid" src="img/portfolio/' + projs[i].id + '.jpg" alt="">'
    strHtml += '</a>'
    strHtml += '<div class="portfolio-caption">'
    strHtml += '<h4>' + projs[i].name + '</h4>'
    strHtml += '<p class="text-muted">' + projs[i].title + '</p>'
    strHtml += renderBadges(projs[i]);
    strHtml += '</div>'
    strHtml += '</div>'
  }

  document.querySelector('.rowPortfolio').innerHTML = strHtml;
}

function renderModals(projs) {
  var strHtml = '';
  for (var i = 0; i < projs.length; i++) {
    strHtml += '<div class="portfolio-modal modal fade" id="portfolioModal' + (i + 1) + '" tabindex="-1" role="dialog" aria-hidden="true">'
    strHtml += '<div class="modal-dialog">'
    strHtml += '<div class="modal-content">'
    strHtml += '<div class="close-modal" data-dismiss="modal">'
    strHtml += '<div class="lr">'
    strHtml += '<div class="rl"></div>'
    strHtml += '</div></div>'
    strHtml += '<div class="container"><div class="row">'
    strHtml += '<div class="col-lg-8 mx-auto">'
    strHtml += '<div class="modal-body">'
    strHtml += '<h2>' + projs[i].name + '</h2>'
    strHtml += ' <p class="item-intro text-muted">' + projs[i].title + '</p>'
    strHtml += '<a href="'+projs[i].url+'/index.html" target= "#"><img class="img-fluid d-block mx-auto" src="img/portfolio/' + projs[i].name + '.jpg" alt=""></a>'
    strHtml += '<p>' + projs[i].desc + '</p>'
    strHtml += '<ul class="list-inline">'
    strHtml += ' <li>Published: ' + projs[i].publishedAt + '</li><li>Client: Coding Academy</li><li>Category: Student Projects</li></ul>'
    strHtml += ' <button class="btn btn-primary" data-dismiss="modal" type="button">'
    strHtml += ' <i class="fa fa-times"></i>'
    strHtml += ' Close Project</button>'
    strHtml += '</div></div></div></div></div></div></div>'
  }
  document.querySelector('.modals').innerHTML = strHtml;
}

function submitButtonClicked() {
  //var userMail = document.getElementById('userMail').value;
  var userSub = document.getElementById('userSubject').value;
  var userMsg = document.getElementById('userMessage').value;

  //location = "http://www.mozilla.org";

  window.open('https://mail.google.com/mail/?view=cm&fs=1&to= odedprivate@gmail.com &su=' + userSub + ' &body= ' + userMsg + '', '_blank');
}

renderProjs(gProjs);
renderModals(gProjs);

/* <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */










//TEST UNIT

/* <div class="col-md-4 col-sm-6 portfolio-item">
<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
  <div class="portfolio-hover">
    <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
    </div>
  </div>
  <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
</a>
<div class="portfolio-caption">
  <h4>Threads</h4>
  <p class="text-muted">Illustration</p>
</div>
</div> */