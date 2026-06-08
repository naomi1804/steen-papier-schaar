//function werking van button press, human choice en computer choice
function buttonpress() {
    humanchoice = event.target.id;
    humanOutput.innerHTML = humanchoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerchoice = 'steen';
            break;
        case 2:
            computerchoice = 'papier';
            break;
        case 3:
            computerchoice = 'schaar';
            break;
    }
    
    computerOutput.innerHTML = computerchoice;
}

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

//button in keuze veranderen(als geklikt komt bij jou keuze)
//en computer choice
//humanchoice en computerchoice variable
let humanchoice = " ";
let computerchoice = " ";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuzen!";

//button click event in kortere versie
[steenBtn, papierBtn, schaarBtn].forEach(button => {
    button.addEventListener('click', function (event) {
        buttonpress(event);

        //resultaat win of niet
        if (humanchoice === computerchoice) {
            resultOutput.innerHTML = "Gelijkspel!";
        }
        else if (
            (humanchoice === "steen" && computerchoice === "schaar") ||
            (humanchoice === "papier" && computerchoice === "steen") ||
            (humanchoice === "schaar" && computerchoice === "papier")
        ) {
            resultOutput.innerHTML = "Jij wint! ";
        }
        else {
            resultOutput.innerHTML = "Computer wint! ";
        }
    });
});

