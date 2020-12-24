/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
function playSound() {
  var audio = new Audio('./audio/dobbelen.mp4');
  audio.play();
}
document.querySelector("img").addEventListener("click", playSound);

function werp() {
  var aantalOgen = Math.floor(Math.random() * 6);
  var ogen = aantalOgen;
  console.log(ogen);
  var plaatjesArray = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];
  var dobbelsteenAfbeelding = plaatjesArray[ogen];
  console.log(dobbelsteenAfbeelding);
  var src = "./afbeeldingen/";
  var extra = dobbelsteenAfbeelding;
  document.querySelector("img").src = src + extra;
  if (aantalOgen == 0 || aantalOgen == 2 || aantalOgen == 4) {
    document.querySelector('p').textContent = "Jammer, oneven. Je hebt verloren!";
  }
  else if (aantalOgen == 1 || aantalOgen == 3) {
    document.querySelector('p').textContent = "Even, je hebt gewonnen";
  }
  else if (aantalOgen == 5){
    document.querySelector('p').textContent = "Feest! dubbel uitbetaald!11!!!!";
  }
}
document.querySelector("img").addEventListener("click", werp);
document.querySelector('form').classList.add("throw");
