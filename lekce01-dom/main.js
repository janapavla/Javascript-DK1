// tady je místo pro náš program

// řekla jsem si, že ponesu následky a nedala jsem do html ani třídy ani id. Kromě "ctverecek", kde už v html class byla.

//JavaScriptem změnit barvu nadpisu.
// do html dám k h1 id. Kdybych nedala, JS mi upraví první nalezený h1 a další už ne. Přes id mi najde přesně ten s id.
let nadpis = document.querySelector ("#nadpis");
nadpis.style.color = "red";

//Zvětšit velikost písma odstavce a/nebo ho udělat tučně nebo kurzívou.
let paragraf = document.querySelector ("p");
paragraf.style.fontSize = "22px";
paragraf.style.fontWeight = "bold";

//Vyměnit obrázek kočky za psa. Koček je všude dost, nepotřebujeme tu další.
let obrazek = document.querySelector ("img");
obrazek.src = "pes.jpg";

/*function posunCtverecekDoprava(){
    let objekt = document.querySelector (".ctverecek")
    objekt.style.marginLeft = "50px"
}*/
// když chci spustit funkci, tak si ji musím vložit do HMTL k tomu elementu a můžu i říct, co bude spouštěcí událost

//Přesunout čtvereček na jiné místo nebo ho otočit.
let objekt = document.querySelector (".ctverecek");
objekt.style.marginLeft = "50px";