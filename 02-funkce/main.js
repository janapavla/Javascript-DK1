// tady je místo pro náš program


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


/**
 * Upozorní uživatele při spuštění.
 
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}
*/

//Vytvořte tlačítko, při jehož stisknutí se změní barva Čtvereček na zelenou.
function zmenaBarvyCtverecku() {
  let ctverecek = document.querySelector(".ctverecek")
  ctverecek.style.backgroundColor = "green"
}
//Upravte kód tak, aby se výsledek funkce <em>secti()</em> zobrazil v prvku s ID <strong>vysledek</strong> až po stiknutí nově přidaného tlačítka "Zobraz výsledek".
function secti(a, b) {
  let c = a + b;
  return c;
}

function zobrazVysledek(){
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

//Uprav funkci <em>upozorni()</em> tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu <strong>Čtvereček</strong>.
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  let ctverecek = document.querySelector(".ctverecek");
  ctverecek.style.lineHeight = "50px";
  ctverecek.textContent= "Gratulace, právě jsi spustila tuto funkci!"
}
