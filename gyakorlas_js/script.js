/**
 * @type {{nev: string, jegy: number, tantargy: string}[]}
 */

const diakok = [
    {
        nev: "Anna",
        jegy: 5,
        tantargy: "matek"
    },
    {
        nev: "Béla",
        jegy: 3,
        tantargy: "irodalom"
    },
    {
        nev: "Csilla",
        jegy: 4,
        tantargy: "fizika"
    }
]

const t = ["Név", "Jegy", "Tantárgy"]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const trhead = document.createElement("tr")
thead.appendChild(trhead)

for (const elem of t){
    const th = document.createElement("th")
    trhead.appendChild(th)
    th.innerText = elem
}