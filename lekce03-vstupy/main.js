// tady je místo pro náš program

let krestniJmeno = prompt("Zadejte křestní jméno")
let prijmeni = prompt("Zadejte příjmení")
let rokNarozeni = Number(prompt("Zadejte rok narození"))
let barva = prompt("Zadejte Vaši oblíbenou barvu")
let vek = 2023 - rokNarozeni
console.log (krestniJmeno + " " + prijmeni)
console.log (vek)
document.querySelector(".vystupProgramu").innerHTML += " " + krestniJmeno + " " + prijmeni + " " + vek
document.querySelector(".vystupProgramu").style.color = barva