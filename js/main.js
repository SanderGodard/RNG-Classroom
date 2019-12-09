// ------------------ For future reference ------------------
// Hvis du skal endre på denne siden og få det til å passe
// klassa di trenger man bare endre navnene i denne lista
// her. Hvis dere er flere eller færre tar koden hensyn til
// det.


// Jeg vet det er rotete script og litt duplikasjon, men ork.

idioter = [
"Kjetil",
"Eline",
"Vegard B",
"Markus RD",
"Vidar",
"Anders E",
"Vegard E",
"Anders KF",
"Fredrik",
"Stian",
"Scott",
"Magnus",
"Josue",
"Markus K",
"Sindre",
"Sander",
"Alex",
"Eduard",
"Adrian",
"Vetle",
];
//eidioter = idioter;
borteidag = idioter;
type = 'random';

for (var i = 0; i < idioter.length; i++) {
  navn = idioter[i];
  fraversListe = document.getElementsByClassName('fraver')[0].children[0];
  poengListe = document.getElementsByClassName('poeng')[0].children[0];
  fraverLi = document.createElement('li');
  poengLi = document.createElement('li');
  wrapper = document.createElement('a');
  wrapper.setAttribute("href", "javascript:void(0)");
  wrapper.setAttribute("id", navn);
  //wrapper.setAttribute("type", "button");
  //wrapper.setAttribute("name", navn);
  wrapper.setAttribute("onclick", 'bortenavn("' + navn + '")');
  wrapper.innerHTML = navn;

  divScore = document.createElement('div');
  poengChange = document.createElement('div');
  score = document.createElement('span');
  minus = document.createElement('span');
  plus = document.createElement('span');
  score.setAttribute("id", "point" + idioter[i]);
  minus.setAttribute("onclick", "removePoint('" + idioter[i] + "')");
  plus.setAttribute("onclick", "addPoint('" + idioter[i] + "')");
  score.innerHTML = "0";
  minus.innerHTML = "-";
  plus.innerHTML = "+";

  fraversListe.appendChild(fraverLi);
  fraverLi.appendChild(wrapper);

  poengListe.appendChild(poengLi);
  poengLi.appendChild(divScore);
  divScore.appendChild(score);
  divScore.appendChild(poengChange);
  poengChange.appendChild(minus);
  poengChange.appendChild(plus);
}

var y = 0;
var antall = idioter.length/4*3;
var vis = 0;



function btn(){
  document.getElementsByClassName("quote")[0].innerHTML = "";
  w = 0;
}

function resetRecent() {
  idioter = borteidag.slice(0);
  y = 0;
  for(r=1; r<antall + 1; r++) {
    document.getElementById("List" + r).children[0].children[0].innerHTML = "";
  }
}

function buttonsActive(state) {
  buttons = document.getElementsByClassName('button');
  for (var i = 0; i < buttons.length; i++) {
    if (state) {
      buttons[i].style.cursor = "pointer";
      buttons[i].style.pointerEvents = "auto";
      ac = true;
    } else {
      buttons[i].style.cursor = "not-allowed";
      buttons[i].style.pointerEvents = "none";
      ac = false;
    }
  }
}

document.body.onkeyup = function(e){
  if(e.keyCode == 32 && ac == true){
    runRNG();
  }
}


ac = true;
function runRNG() {
  // sets class "button" to be disabled...
  buttonsActive(false);
  ac = false;
  if (y >= antall) {
    resetRecent();
  }
  y++;
  for(i=0; i<100; ++i) {
    setTimeout(function() {
      var person = idioter[Math.floor((Math.random() * idioter.length))];
      document.getElementsByClassName("name")[0].innerHTML = person;
      document.getElementsByClassName("quote")[0].innerHTML = "";

    }, Math.sqrt(i) * 500);
  }
  randomIdiot();
}

function typeTing(mode) {
  document.getElementsByClassName("name")[0].innerHTML = "";
  document.getElementsByClassName("quote")[0].innerHTML = "";
  btns = document.getElementsByClassName('reset button');
  for (var i = 0; i < btns.length; i++) {
    if (btns[i].getAttribute('onclick').indexOf("order") > -1) {
      btnOrder = btns[i];
    } else if (btns[i].getAttribute('onclick').indexOf("random") > -1) {
      btnRandom = btns[i];
    }
  }
  if (mode == 'order') {
    type = "order";
    btnOrder.classList.add("active");
    btnRandom.classList.remove("active");
    order();
  } else if (mode == 'random') {
    type = 'random';
    btnRandom.classList.add("active");
    btnOrder.classList.remove("active");
    //location.reload();
    random();
  }
}

function order() {
  antall = idioter.length;
  //resetRecent();
  trekkninger()

  //console.log(type);
}

function random() {
  // Er basically deaktivert pga bugfixing. Man må enten resette fravær når man går fra rekkefølge til random, eller ikke kunne gå rett fra plasser til rekkefølge...
  antall = idioter.length/4*3;
  //resetRecent();
  trekkninger()

  //console.log(type);
}


function randomIdiot() {
  if (type == 'random') {
    setTimeout(function() {
      buttonsActive(true);
      person = document.getElementsByClassName("name")[0].innerHTML
      document.getElementById("List" + y).children[0].children[0].innerHTML = person;
      document.getElementsByClassName("quote")[0].innerHTML = getQuote(person);

      var audio = new Audio('elements/bruh.mp3');
      audio.play();
    }, 10 * 510);

  } else if (type == 'order') {
    setTimeout(function() {
      buttonsActive(true);
      document.getElementsByClassName("name")[0].innerHTML = "LMAO";
      document.getElementsByClassName("quote")[0].innerHTML = "Get fucked idiots";

      idioterRNG = idioter;
      shuffle(idioterRNG);

      for (var i = 0; i < idioterRNG.length; i++) {
        document.getElementById("List" + (i + 1)).children[0].children[0].innerHTML = idioterRNG[i];
      }

      var audio = new Audio('elements/bruh.mp3');
      audio.play();
    }, 10 * 500);

  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function bortenavn(navn){
  if (borteidag.indexOf(navn) >= 0) {
    //console.log(navn);

    document.getElementById(navn).setAttribute("class", "borte");
    document.getElementById("point" + navn).parentNode.setAttribute("class", "borte");

    if (borteidag.length == antall) {
        minusAntall();
    }


    var index = idioter.indexOf(navn);
    if (idioter.indexOf(navn) != -1){
      idioter.splice(index, 1);
      //borteidag.splice(index, 1);
      borteidag = idioter;
    } else {
      die("Error skjedd mens endring av fravær skulle endres i arrayet.");
    }

    //antall = borteidag.length;
    //trekkninger();
  } else {
    //console.log(navn + " mordi");
    document.getElementById(navn).setAttribute("class", "");
    document.getElementById("point" + navn).parentNode.setAttribute("class", "");

    //borteidag.push(navn);
    idioter.push(navn);
    borteidag = idioter;


    //antall = borteidag.length;
    //trekkninger();
  }
}


function landing() {
  url = window.location.href;
  if (url.indexOf("order") > -1) {
    typeTing("order");
  } else {
    trekkninger();
  }
}


function trekkninger() {
  room = document.getElementsByClassName('Rom')[0];
  if (typeof(room) != null && typeof(room) != 'undefined') {
    plassGrouping("2");
  } else {

    document.getElementById("trekkninger").innerHTML = antall;

    antallListe = document.getElementsByClassName("recent")[0].children[0];
    antallListe.innerHTML = "";

    for (var i = 0; i<antall; i++) {
      li = document.createElement('li');
      span = document.createElement('span');
      span2 = document.createElement('span');
      li.setAttribute("class", "liste");
      li.setAttribute("id", ("List" + (i+1)));

      antallListe.appendChild(li);
      li.appendChild(span);
      span.appendChild(span2);
    }
  }
}



function plussAntall() {
  if (antall != borteidag.length) {
    antall++;

    antallListe = document.getElementsByClassName("recent")[0].children[0];
    li = document.createElement('li');
    span = document.createElement('span');
    span2 = document.createElement('span');
    li.setAttribute("class", "liste");
    li.setAttribute("id", ("List" + antall));
    li.setAttribute("class", "liste");
    antall = parseInt(antall);
    antallListe.appendChild(li)
    li.appendChild(span);
    span.appendChild(span2);
    document.getElementById("trekkninger").innerHTML = antall;
  }
}



function minusAntall() {
  if (document.getElementById("List" + (antall)).children[0].children[0].innerHTML == "") {
    if (antall != 1){

      remove = document.getElementById("List" + (antall));
      remove.parentNode.removeChild(remove);

      antall--;
      antall = parseInt(antall);
      document.getElementById("trekkninger").innerHTML = antall;
    }
  }
}


function fargeMode(farge) {
  switch (farge) {
    case "rosa": document.getElementById('style').href = 'css/rosa.css';
      break;
    case "hvit": document.getElementById('style').href = 'css/hvit.css';
      break;
    case "svart": document.getElementById('style').href = 'css/main.css';
      break;
    default:document.getElementById('style').href = 'css/main.css';

  }

}


function addPoint(navn) {
  counter = document.getElementById("point" + navn);
  num = counter.innerHTML;
  num = parseInt(num);
  num++;
  counter.innerHTML = num;
}


function removePoint(navn) {
  counter = document.getElementById("point" + navn);
  num = counter.innerHTML;
  num = parseInt(num);
  num--;
  counter.innerHTML = num;
}

/*
function runPlassRNG(mengde) {
  mengde = parseInt(mengde);
  var result = [];
  scrambled = shuffle(idioter);
  input = scrambled.slice(0);
  while (a[0]) {
    result.push(a.splice(0, mengde));
  }
  console.log(result);
}
*/

function runPlassRNG() {
  seter = document.getElementsByClassName("Seter");
  scrambled = shuffle(idioter);
  for (var i = 0; i < seter.length; i++) {
    seter[i].children[0].innerHTML = idioter[i];
  }
}


function plassGrouping(mengde) {
  room = document.getElementsByClassName("Rom")[0];
  room.innerHTML = "";
  mengde = parseInt(mengde);
  elem = document.getElementsByClassName('plassRun')[0];
  antall = idioter.length;

  groupCount = antall / mengde;
  rest = antall % mengde;

  if (rest > 0) {
    // Hvis det ikke går opp så tar den siste gruppe med folk separat
    for (var i = 0; i<groupCount - 1; i++) {
      gruppe = document.createElement('div');
      gruppe.setAttribute("class", "Grupper");
      room.appendChild(gruppe);

      for (var j = 0; j<mengde; j++) {
        sete = document.createElement('div');
        span = document.createElement('span');
        sete.setAttribute("class", "Seter");
        span.innerHTML = "Tom plass";
        gruppe.appendChild(sete);
        sete.appendChild(span);
      }
    }
    gruppe = document.createElement('div');
    gruppe.setAttribute("class", "Grupper");
    room.appendChild(gruppe);

    for (var k = 0; k<rest; k++) {
      sete = document.createElement('div');
      span = document.createElement('span');
      sete.setAttribute("class", "Seter");
      span.innerHTML = "Tom plass";
      gruppe.appendChild(sete);
      sete.appendChild(span);
    }
  } else {
    // Hvis det går opp så gjør den det automatisk
    for (var i = 0; i<groupCount; i++) {
      gruppe = document.createElement('div');
      gruppe.setAttribute("class", "Grupper");
      room.appendChild(gruppe);

      for (var j = 0; j<mengde; j++) {
        sete = document.createElement('div');
        span = document.createElement('span');
        sete.setAttribute("class", "Seter");
        span.innerHTML = "Tom plass";
        gruppe.appendChild(sete);
        sete.appendChild(span);
      }
    }
  }

  elem.setAttribute("onclick", "runPlassRNG('" + mengde + "')");
}
