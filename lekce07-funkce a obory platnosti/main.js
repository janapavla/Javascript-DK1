/* Výplata
Vytvořte funkci salary se třemi parametry
wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.
Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.
užítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

const userWage = prompt("Zadej hrubou mzdu v korunách za hodinu")
const userHours = prompt("Zadej počet odpracovanných hodin denně")
const userDays = prompt("Zadej počet odpracovaných dní v měsíci")

const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

const hrubaMzda = salary(userWage, userHours, userDays)
document.body.innerHTML += "Vaše hrubá měsíční mzda je: " + hrubaMzda + " Kč."

const tax = prompt("Zadej procento zdanění")

const taxed = (hrubaMzda, taxPercentage) => {
    return Math.round(hrubaMzda * (100 - taxPercentage) / 100)
}

document.body.innerHTML += "<p>Vaše měsíční mzda po zdanění je: " + taxed(hrubaMzda, tax) + " Kč.</p>"


/* Kalkulačka
Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití
> calculate(2, '+', 3)
5
> calculate(3, '*', 7)
21
> calculate(10, '/', 4)
2.5 
*/

const userNumber1 = Number(prompt("Zadej první číslo."))
const userOperator = prompt("Zadej matematický operátor.")
const userNumber2 = Number(prompt("Zadej druhé číslo"))

const calculate = (number1, operation, number2) => {
    if (operation === "+") {
        return number1 + number2
    } 
    if (operation === "-") {
        return number1 - number2
    } 
    if (operation === "*") {
        return number1 * number2
    } 
    if (operation === "/") {
        return number1 / number2
    } 
}

document.body.innerHTML += "<p>Výsledek " + userNumber1 + " " + userOperator + " " + userNumber2 + " je: " + calculate(userNumber1, userOperator, userNumber2) + ".</p>"

/* Ceník
Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.*/

const selectPlan = (planNumber) => {
    if (planNumber == 1) {
        document.querySelector("#plan1").classList.add("plan--selected")
        document.querySelector("#plan2").classList.remove("plan--selected")                    
        document.querySelector("#plan3").classList.remove("plan--selected")
    } 
    if (planNumber == 2) {
        document.querySelector("#plan2").classList.add("plan--selected")
        document.querySelector("#plan1").classList.remove("plan--selected")                    
        document.querySelector("#plan3").classList.remove("plan--selected")
    }
    if (planNumber == 3) {
        document.querySelector("#plan3").classList.add("plan--selected")
        document.querySelector("#plan1").classList.remove("plan--selected")                    
        document.querySelector("#plan2").classList.remove("plan--selected")
    }
}