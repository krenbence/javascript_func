/**
*  @type {{col1:string,col2:string,col3:string}[]}
*/

const arr = [
    {
        col1: 'Sor 1 Adat 1',
        col2: 'Sor 1 Adat 2',
        col3: 'Sor 1 Adat 3',
    },
    {
        col1: 'Sor 2 Adat 1',
        col2: 'Sor 2 Adat 2',
    },
    {
        col1: 'Sor 3 Adat 1',
        col2: 'Sor 3 Adat 2',
        col3: 'Sor 3 Adat 3',
    },
    {
        col1: 'Sor 4 Adat 1',
        col2: 'Sor 4 Adat 2',
    },
    {
        col1: 'Sor 5 Adat 1',
        col2: 'Sor 5 Adat 2',
        col3: 'Sor 5 Adat 3',
    },
    {
        col1: 'Sor 6 Adat 1',
        col2: 'Sor 6 Adat 2',
    },
    {
        col1: 'Sor 7 Adat 1',
        col2: 'Sor 7 Adat 2',
        col3: 'Sor 7 Adat 3',
    }
];

const table = documnet.createElement("table")
document.body.appendChiled(table)

const thead = document.createElement("thead")
table.appenChild(thead)

const trHead = document.createElement("tr")
thead.appendChild(trHead)

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const elem of arr) {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = elem.col1

    const td3 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = elem.col2

    if(elem.col3 !== undefined){
        td1.rowSpan
        const tr 
    }
}