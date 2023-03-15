/* 1
Catering
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to
Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/

const justFood = (pocetOsob) => {
    return `Catering od Just Food pro ${pocetOsob} lidí za ${Math.round(pocetOsob * 100)} Kč`
}

const yourMama = (pocetOsob) => {
	return `Catering od Your Mama pro ${pocetOsob} lidí za ${Math.round(pocetOsob * 1500)} Kč`
}

const flavourHaven = (pocetOsob) => {
	return `Catering od Flavour Haven pro ${pocetOsob} lidí za ${Math.round(pocetOsob * 3000)} Kč`
}


const createEvent = (udalost, pocetOsob, cateringovaSpolecnost) => {
	return `Událost ${udalost} s ${cateringovaSpolecnost(pocetOsob)}`
}

document.querySelector("#catering").innerHTML = createEvent("Inaugurace prezidenta", 100, flavourHaven)


/* Kostka
Naklonujte si repozitář se stránkou, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Nápověda: Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.
*/

const kostka = document.querySelector(".dice")

let cislo = 1

const side = () => {
    cislo += 1
    if (cislo === 7) {
        cislo = 1
    }
    kostka.src = `img/side${cislo}.svg`    
}

document.addEventListener("keydown", side)


/* Minutka
Naklonujte si repozitář pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících úkolů.

Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.*/

const zvukZvoneni = document.querySelector("audio")
const budik = document.querySelector(".alarm")
const tlacitko = document.querySelector(".tlacitko")
const vstupUzivatel = Number(prompt("Kolik vteřin má uplynout, než minutka začne zvonit?"))*1000

const zvon = () => {
    budik.classList.add('alarm--ring')
    zvukZvoneni.play()
}

const spoustec = setTimeout(zvon, vstupUzivatel)

const nezvon = () => {
    budik.classList.remove('alarm--ring')
    zvukZvoneni.pause()
    clearTimeout(spoustec)
}

tlacitko.addEventListener('click', nezvon)
