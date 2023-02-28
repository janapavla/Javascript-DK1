/*Parsování data
Bez použití knihovny dayjs 
<script src="https://unpkg.com/dayjs@latest/dayjs.min.js"></script>
napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data.*/

const parseDate = (date) => {
    return {
        day: Number(date.slice(0,2)),
        month: Number(date.slice(3,5)),
        year: Number(date.slice(6,10)),
    }
}

console.log(parseDate('28.02.2023'))

/* Formátování data
Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v následujícím formátu.

{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování.*/

const formatDate = (objekt) => {
    var {day, month, year} = objekt
    return String(day).padStart(2,"0") + "." + String(month).padStart(2,"0") + "." + String(year).padStart(4,"0")
}

console.log(formatDate({ day: 6, month: 4, year: 2021 }))

/* Python zaokrouhlování
Python funkce round: pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce Math.round naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. Někomu by se po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.*/

const round = (cislo) => {
    const celeCislo = Math.trunc(cislo)
    const desetinneCislo = cislo - celeCislo
    if (desetinneCislo === 0.5) 
    {
        if (celeCislo % 2 === 0)
        {
            return celeCislo
        }
        else 
        {
            return celeCislo + 1
        }
    }
    else 
    {
        return Math.round(cislo)
    }
}

console.log(round(22,22))