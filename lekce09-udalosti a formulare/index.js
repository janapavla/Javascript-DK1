/* 1 Auto
Založte si HTML stránku s JavaScriptem.
Stáhněte si připravený obrázek auta. Vložte na stránku prvek img s tímto obrázkem.
Když uživatel stiskne šipku doprava, nastavte obrázku s autem CSS vlastnost margin-left, aby se auto pohnulo kousek doprava.
Při stisknutí šipky doleva nastavte obrázku s autem margin-left zpět na nulu.
*/

const obrazek = document.querySelector("#auto")
const handleKey = (event) => {
    if (event.key === "ArrowRight") {
        obrazek.classList.add("auto")
    } else if (event.key === "ArrowLeft") {
        obrazek.classList.remove("auto")
    }
}
document.addEventListener("keydown", handleKey)


/* 2 Přihlášení
Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka ověří, zda má uživatel přístup do systému. Postupujte podle instrukcí níže.
Vytvořte stránku s formulářem, který bude mít jedno textové pole pro e-mail (typ email), jedno pole pro heslo (typ password) a tlačíto „Přihlásit“.
Na začátek souboru index.js vložte následující objekt představující jednoho uživatele. Budeme se tvářit, že jsme jej získali například z databáze.
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}
Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správné jméno a heslo. Pokud údaje souhlasí, nahraďte formulář na stránce nějakou zprávou, například „Přihlášený uživatel: Bartoloměj“.
Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte ve formuláři výraznou zprávu „Neplatné přihlašovací údaje“. Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte.
Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně heslo nebo e-mail. Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už existuje. Zároveň je dobré špatné heslo z políčka vymazat, aby jej mohl uživatel rovnou zkusit napsat znovu.
*/

const user = {
    email: "bartolomej.rozumbrada@gmail.com",
    password: "vimzenicnevim",
    name: "Bartoloměj",
}

const handleSubmit = (event) => {
    event.preventDefault() //zakazujeme přednačtení stránky, jinak by se nezobrazil formulář, ale hned hláška

const emailInput = document.querySelector("#email-input")
const passwordInput = document.querySelector("#password-input")
const container = document.querySelector(".container")

if (emailInput.value === user.email &&
    passwordInput.value === user.password
    ) {
    container.innerHTML = `Přihlášený uživatel: ${user.name}`
} else {
    container.innerHTML = "Neplatné přihlašovací údaje"
    }
}   
// ověříme,jestli uživatel do polí zadal to, co je v const user

document.querySelector("#form").addEventListener("submit", handleSubmit)

/* 3 Newsletter, kontrola
úkol z lekce: 
Podle postupu níže vyrobte stránku podobnou té na obrázku.
Založte HTML stránku s JavaScriptem.
Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.
Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.
Texty můžete vymyslet vlastní nebo využít následující:
Jednou za týden posíláme newsletter ze světa frontendu a UX.
Zadejte svůj e-mail a zůstaňte v obraze.
Odebírat
Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.
Pokud máte čas a chuť, nastylujte stránku dle svého citu. Obrázek výše může posloužit jako inspirace.

Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.
V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.*/

const formularNewsletter = document.querySelector("#newsletter-form")
const formularInput = document.querySelector("#newsletter-input")

const odebirat = (event) => {
	event.preventDefault()
    const input = document.querySelector("#newsletter-input")
	const email = input.value
    formularNewsletter.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese: ${email}.`
}


const kontrola = (event) => {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formularInput.value.match(validRegex)) {
        formularInput.classList.remove("alert")
	} else {
		formularInput.classList.add("alert")
	}
}

formularNewsletter.addEventListener("submit", odebirat)
formularInput.addEventListener("input", kontrola)

// https://www.w3resource.com/javascript/form/email-validation.php