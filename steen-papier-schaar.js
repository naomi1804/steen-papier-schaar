 // span elemts
const computerOutput = document.querySelector("#computer");
console.log(computerOutput);
computerOutput.innerHTML = "de computers keuze komt hier!";

const humanOutput = document.querySelector("#human");
humanOutput.innerHTML = "jouw keuze komt hier, maak je keuze!";

const resultOutput = document.querySelector("#result");
resultOutput.innerHTML = "het resultaat is hier te zien!";

// button click event
const steenBtn = document.querySelector("#steen")
steenBtn.addEventListener("click", function(event) {
    console.log("klik event triggered: ", event);
    alert("Klik event triggered");
});