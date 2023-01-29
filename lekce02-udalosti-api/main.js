// tady je místo pro náš program

//z lekce
let nadpis = document.querySelector("h1")
nadpis.classList.add("csstrida")
// tu třídu musím napsat do .css

let ctverecek = document.querySelector("#ctverecek-1")
ctverecek.classList.remove("mujstyl")
//zase si saham do .css na tridu

function zmenBarvu() {
    ctverecek.classList.toggle("mujstyl")
}
// v .html jsem musela dopsat funkci
// proměnnou čtvereček už mám o pár řádků víš definovanou, takže to už sem nepíšu

let tlacitko = document.querySelector(".tlacitko")

function zavolejUdalost(udalost) {
    let prvek = udalost.target
    prvek.textContent = "Kliknuto"
    console.log(prvek)
    console.log(udalost)
}
//pro tlačítko potřebuju event
// proč je v html v rávorkách event? A tady teda parametr udalost? Filip říká, že si to muzeme pojmenovat jak chceme. 
//mně asi console nic nevyppisuje

//úkol z BR v rámci lekce
function ztucnitText() {
    let paragraf = document.querySelector("p")
    paragraf.style.fontWeight="bold"
}

function odtucnitText() {
    let paragraf = document.querySelector("p")
    paragraf.style.fontWeight="normal"
}

/* Domácí úkol 1: Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
*/

function cervenyPriKliknuti(){
    let paragraf = document.querySelector("p")
    paragraf.classList.toggle("cervene")
}

/* 
tlacitko.addEventListener("click", cervenyPriKliknuti)
*/
// Druhá možnost by byla smazat z html onclick="cervenyPriKliknuti()" a sem přidat řádek výše, tj. naslouchač událostí

/* Domácí úkol 2: přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
*/

function vetsiPriKliknuti(){
    let objekt = document.querySelector('#zvetsovany')
    let styl = getComputedStyle(objekt)
    let objektFontSize = parseInt(styl.fontSize)
    //  console.log(objektFontSize)
    objektFontSize = objektFontSize + 1
    //  console.log(objektFontSize)
    objekt.style.fontSize=objektFontSize + "px"
}

// API - z lekce
/* Domácí úkol 3: Dopracuj ovládání audio souboru
• pauznutí zvukové stopy
• nastavení zvuku na 0, 0.5 a 1 (hlasitost, tj. API volume)
• vrácení se na začátek
*/

let prehravac = document.querySelector(".mujPrehravac")
function spustAudio(){
    prehravac.play() //nic víc, tohle stačí, aby se audio pustilo. Tohle je to API.
}

function zastavAudio(){
    prehravac.pause()
}

function resetAudio(){
    prehravac.currentTime = 0
}

function ztisHlasitost(){
    prehravac.volume = 0
}

function prumernaHlasitost(){
    prehravac.volume = 0.5
}

function zvysHlasitost(){
    prehravac.volume = 1
}

