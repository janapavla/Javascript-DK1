/* Cvičení: Práce s řetězci
1. Vlastnosti a metody
V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do konzole počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vyřízněte z názvu prvních pět písmen.
Vyřízněte z názvu posledních pět písmen.
*/

const title = "Noc na Karlštejně"

title.length
title.toUpperCase()
title.slice(0,5)
title.slice(title.length - 5, title.length) //slice(start, end)

/* 2. E-maily
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
Dále z e-mailu vyřízněte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
	userName: 'slavomir.ponuchalek',
	domain: 'yahoo.com',
}
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

const email = prompt("Zadej e-mail")
const atIndex = email.indexOf("@")
const jmenoPrijmeni = email.slice(0, atIndex)
const domena = email.slice(atIndex + 1, email.length)

const parsedEmail = {
	jmenoPrijmeni: jmenoPrijmeni,
	domena: domena
}

document.body.innerHTML += "<p>Jméno uživatele je: " + parsedEmail.jmenoPrijmeni + "</p>"

document.body.innerHTML += "<p>Zadaná emailová doména je: " + parsedEmail.domena + "</p>"

// tahák: https://www.interval.cz/clanky/javascript-kontrola-spravnosti-e-mailove-adresy-1/

/* 3. Doručování
Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
	<p>Pod Stájemi 67</p>
	<p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
*/

const ulice = prompt("Zadej ulici")
const cisloPopisne = prompt("Zadej číslo popisné")
const mesto = prompt("Zadej město")
const psc = Number(prompt("Zadej PSČ"))

document.body.innerHTML += `Děkujeme za Vaši objednávku, která za Vámi míří na adresu: 
<address>
	<p>${ulice} ${cisloPopisne}</p>
	<p>${psc} ${mesto}</p>
</address>` //interpolace

//document.body.innerHTML = "<p>Děkujeme za Vaši objednávku, která za Vámi míří na adresu: " + ulice + " " + cisloPopisne + " " + psc + " " + mesto + "</p>"