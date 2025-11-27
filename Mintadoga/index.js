/**
 * @typedef {{place: string, what1: string, example1: string, what2?: string, example2?: string}} CountryWriters
 */
/**
 * @type {CountryWriters[]}
 */
const arr = [
    {
        place: "Athén",
        what1: "politika",
        example1: "demokrácia",
        what2: "tudomány",
        example2: "filozófia",
    },
    {
        place: "Egyiptom",
        what1: "mezőgazdaság",
        example1: "csatornák",
    },
    {
        place: "Spárta",
        what1: "neveléstudomány",
        example1: "agogé",
        what2: "harcászat",
        example2: "hoplita",
    },
]

const div = document.createElement("div")
div.id = "jssection"
div.classList.add("hide")
document.body.appendChild(div)

const table = document.createElement("table")
div.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const th = document.createElement("tr")
thead.appendChild(th)

const headarr = ["Ókori település", "Ágazat", "példa"]

for (const i of headarr){
    const thd = document.createElement("th")
    th.appendChild(thd)
    thd.innerText = i
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const elem of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)
    
    const td = document.createElement("td")
    tr.appendChild(td)
    td.innerText = elem.place

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = elem.what1

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = elem.example1

    if(elem.what2 && elem.example2){
        td.rowSpan = "2"
        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)
        
        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = elem.what2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = elem.example2
    }
}



const checkbox = document.getElementById("tableselector")
const htmldiv = document.getElementById("htmlsection")
const jsdiv = document.getElementById("jssection")
if(checkbox.checked){
    htmldiv.classList.add("hide")
    jsdiv.classList.remove("hide")
}
else{
    htmldiv.classList.remove("hide")
    jsdiv.classList.add("hide")
}

checkbox.addEventListener("change", function (e) {
    const target = e.target

    if(target.checked){
        htmldiv.classList.add("hide")
    jsdiv.classList.remove("hide")
}
else{
    htmldiv.classList.remove("hide")
    jsdiv.classList.add("hide")
}
})