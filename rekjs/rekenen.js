/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function oppervlakte (x){
  event.preventDefault();
  var hoogte = document.querySelector('#hoogte').value;
  var lengte = document.querySelector('#lengte').value;
  var oppervlakte = hoogte*lengte;
  console.log('De oppervlakte is: ' + hoogte * lengte + 'cm2');
  document.querySelector('h3').textContent = "De oppervlakte is: " + oppervlakte + "cm2";
}
document.querySelector('form').addEventListener('submit', oppervlakte);
