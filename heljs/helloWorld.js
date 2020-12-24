/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
console.log("Hello World!");
//document.querySelector('h1').textContent = 'Hello '+prompt ('Hoe heet jij?');
function verwerkFormulier(event) {
    event.preventDefault();
    console.log(document.querySelector('input').value);
    document.querySelector('h1').textContent = "Hello " + document.querySelector('input').value;
    document.querySelector('form').classList.add("trigger_form_animation");
    document.querySelector('h1').classList.add("trigger_h1_animation");
}
document.querySelector('form').addEventListener('submit', verwerkFormulier);