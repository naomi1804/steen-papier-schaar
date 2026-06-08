# steen-papier-schaar

hoe werkt het?
kies voor steen, papier of schaar door op de knop te klikken
de computer kiest een random keuze en deze komt op het scherm te staan!



stappen plan maken:
Leuk — dit is precies het moment waarop je project van “werkt” naar “echte game” gaat. De belangrijkste tip: bouw in lagen. Eerst logica, dan UI, dan extra features.

Hier is een goede volgorde (met waarom erbij), plus extra ideeën.

🧠 Stap-voor-stap roadmap Steen Papier Schaar
🥇 Stap 1 — Game-logica perfect maken (BELANGRIJKSTE)

Zorg dat dit 100% klopt vóór je extra’s doet:

winnaar bepalen
gelijkspel
correcte output (win/lose/draw)
resultOutput.innerHTML = "Jij wint / computer wint / gelijkspel";

👉 Waarom eerst?
Omdat alles (scores, streaks, animaties) hiervan afhangt.

🥈 Stap 2 — Score systeem (highscore + streak)

Voeg simpele variabelen toe:

wins
losses
draws
streak (bijv. aantal wins achter elkaar)
let wins = 0;
let losses = 0;
let draws = 0;
let streak = 0;

Update ze in je buttonpress().

👉 Voeg ook HTML toe:

score bord
🥉 Stap 3 — Resultaat UI verbeteren

Maak het duidelijker:

kleur bij winst (groen)
kleur bij verlies (rood)
gelijkspel (grijs/geel)
resultOutput.style.color = "green";
🏅 Stap 4 — Images toevoegen (buttons upgraden)

Vervang tekstknoppen door afbeeldingen:

<button id="steen"><img src="steen.png"></button>

👉 Of CSS background images (mooier)

🎯 Stap 5 — Animaties (simpel beginnen)

Begin klein:

fade in resultaat
shake effect bij computer keuze

CSS voorbeeld:

.shake {
  animation: shake 0.4s;
}

JS:

computerOutput.classList.add("shake");
⏱️ Stap 6 — Countdown (voor extra spanning)

Voor de keuze verschijnt:

3
2
1
Go!

Gebruik setTimeout():

resultOutput.innerHTML = "3...";
setTimeout(() => {
  resultOutput.innerHTML = "2...";
}, 500);
🔊 Stap 7 — Geluid toevoegen

Bij klik:

win geluid
lose geluid
click geluid
let winSound = new Audio("win.mp3");
winSound.play();
🧩 Stap 8 — Personalisatie (naam speler)

Laat gebruiker naam invullen:

<input id="nameInput" placeholder="Jouw naam">

Gebruik:

let name = nameInput.value;

👉 Toon:
“Jasper wint!”

🏆 Stap 9 — Highscore (lokale opslag)

Gebruik localStorage:

localStorage.setItem("highscore", wins);

Haal terug:

let highscore = localStorage.getItem("highscore");
💡 EXTRA IDEEËN (eigen toevoegingen)
⭐ Eigen toevoeging 1 — “Combo bonus”

Als je 3x achter elkaar wint:

👉 bonus message:
“🔥 On fire!”

⭐ Eigen toevoeging 2 — Moeilijkheidslevels
easy: random
medium: soms cheat computer
hard: computer probeert te counteren
⭐ Eigen toevoeging 3 — “Random events”

Soms:

“Computer is afgeleid 😴 → je wint automatisch”
“Double points ronde”
⭐ Eigen toevoeging 4 — statistieken scherm

Laat zien:

win %
total games
longest streak
⭐ Eigen toevoeging 5 — Easter egg

Als iemand 10x achter elkaar wint:

👉 “JE HEBT HET SPEL GEHACKT 😱”

🧭 Beste volgorde (kort samengevat)
✅ Win logic fixen
✅ Score + streak
✅ UI verbeteren (kleur + resultaat)
🎨 Images
✨ Animaties
⏱ Countdown
🔊 Geluid
👤 Naam personalisatie
🏆 Highscore storage
💡 Extra features
Als je wil verder gaan

Ik kan je ook helpen met:

🔥 volledige “pro versie” structuur van je JS
🎮 mooie UI layout (game design)
🧠 AI computer die slimmer wordt
💾 localStorage highscore systeem stap voor stap

Zeg maar wat je volgende stap is 👍