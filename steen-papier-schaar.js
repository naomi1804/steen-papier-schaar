 // const steen papier en schaar
const steenBtn = document.querySelector("#steen")
const papierBtn = document.querySelector("#papier")
const schaarBtn = document.querySelector("#schaar")
 
 // span elemts
const computerOutput = document.querySelector("#computer");
console.log(computerOutput);
computerOutput.innerHTML = "de computers keuze komt hier!";

const humanOutput = document.querySelector("#human");
humanOutput.innerHTML = "jouw keuze komt hier, maak je keuze!";

const resultOutput = document.querySelector("#result");
resultOutput.innerHTML = "het resultaat is hier te zien!";

// button click event
//steen
steenBtn.addEventListener("click", function(event) {
    console.log("klik event triggered: ", event);
});

//papier
papierBtn.addEventListener("click", function(event) {
    console.log("klik event triggered: ", event);
});

//schaar
schaarBtn.addEventListener("click", function(event) {
    console.log("klik event triggered: ", event);
});

//button in keuze veranderen(als geklikt komt bij jou keuze)
//en computer choice
//humanchoice en computerchoice variable
let humanchoice = " ";
let computerchoice = " ";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuzen!";

//steen
steenBtn.addEventListener('click', function(event) {
    humanchoice = event.target.id;
    humanOutput.innerHTML = humanchoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1 ) {
        computerchoice = 'steen';
    }
    if ( randomNumber === 2 ) {
        computerchoice = 'papier';
    }
    if ( randomNumber === 3 ) {
        computerchoice = 'schaar';
    }
    computerOutput.innerHTML = computerchoice;
});

//papier
papierBtn.addEventListener('click', function(event) {
    humanchoice = event.target.id;
    humanOutput.innerHTML = humanchoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1 ) {
        computerchoice = 'steen';
    }
    if ( randomNumber === 2 ) {
        computerchoice = 'papier';
    }
    if ( randomNumber === 3 ) {
        computerchoice = 'schaar';
    }
    computerOutput.innerHTML = computerchoice;
});

//schaar
schaarBtn.addEventListener('click', function(event) {
    humanchoice = event.target.id;
    humanOutput.innerHTML = humanchoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1 ) {
        computerchoice = 'steen';
    }
    if ( randomNumber === 2 ) {
        computerchoice = 'papier';
    }
    if ( randomNumber === 3 ) {
        computerchoice = 'schaar';
    }
    computerOutput.innerHTML = computerchoice;
});