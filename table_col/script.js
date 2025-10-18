// console.log("gomszab a kedvenc tanárom")
// const a = "szia"
// /**
//  * @type{string}
//  */
// console.log(a)

// const b = ["a","b","c"]
// console.log(b)
// for(let i=0;i<b.length;i++){
//     console.log(b[i])
// }
// console.log(b[1])

// /** 
//  * while()
//  * 
//  * do
//  * while()
// */
// for(const key in b){
 
// }

// for(const key in b){
//     console.log(`${key}:${b[key]}$`)
// }

// /**@type{{name:string, age:number}} */

// const y ={
//     name:'bence',
//     age:17
// }

/**
 * @type {{author: string, era: string, lover1: string, lover2?: string}[]}
 */
const arr = [
    {
        author: 'Balassi Bálint',
        era: 'reformáció',
        lover1: 'Losonczy Anna',
        lover2: 'Dobó Krisztina'
    },
    {
        author: 'Csokonai Vitéz Mihály',
        era: 'felvilágosodás',
        lover1: 'Vajda Juliána'
    },
    {
        author: 'Petőfi Sándor',
        era: 'magyar romantika',
        lover1: 'Mednyánszky Berta',
        lover2: 'Szendrey Júlia'
    },
    {
        author: 'Ady Endre',
        era: '20. század',
        lover1: 'Léda',
        lover2: 'Csinszka'
    }
]


const table = document.createElement("table")
document.body.appendChild(table)


const thead = document.createElement("thead")
table.appendChild(thead)

const trHead = document.createElement("tr")
thead.appendChild(trHead)

createcell("th", "Szerző neve", trHead)

createcell("th", "korszak", trHead)

 const th3 = createcell("th", "Szerelmek", trHead)

th3.colSpan = 2


const tbody = document.createElement("tbody")
table.appendChild(tbody)


for (const elem of arr) {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    createcell("td", elem.author, tr)

    createcell("td", elem.era, tr)

    if (typeof elem.lover2 === "undefined") {
        const td3 = createcell("td", elem.lover1, tr)
        td3.colSpan = 2
    } else {
        createcell("td", elem.lover1, tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = elem.lover2
    }
}

/**
 * létrehozunk egy táblázat cellát a bemeneti paraméterek alapján és hozzá fűzzük
 * @param {string} celltype td, vagy th
 * @param {string} cellcontent a cella tartalma 
 * @param {HTMLTableRowElement} parentrow sor amihez hozzá appendeljük
 * 
 * @returns {HTMLTableCellElement} a létrehozott cellával térünk vissza hogy később tudjuk módosítani annak a tulajdonságát
 */
function createcell(celltype, cellcontent, parentrow){
    const valami = document.createElement(celltype)
    valami.innerText = cellcontent
    parentrow.appendChild(valami)
    return valami
}