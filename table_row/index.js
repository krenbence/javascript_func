/**
 * @type {{nationality: string, name: string, title: string, name2: string, title2: string}[]}
 */

const arr = [
    {
        nationality: "Orosz",
        name: "Gogol",
        title: "A köpönyeg",
        name2: "Csehov",
        title2: "A csinovnyik halála",
    },
    {
        nationality: "Cseh",
        name: "Franz kafka",
        title: "Az átváltozás",
    },
    {
        nationality: "Magyar",
        name: "Örkény István",
        title: "Egyperces Novella",
        name2: "József Attila",
        title2: "Klárisok",
    },
    {
        nationality: "Svájc",
        name: "Friederich Dürrenmatt",
        title: "Az átváltozás",
    },
]
const table = document.createElement("table")
const thead = document.createElement("thead")
const tr = document.createElement("tr")
const tbody = document.createElement("tbody")

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

/**
 * @type {{fejlec:string}[]}
 */
const fejlec = ["Nemzetiseg", "Szerző", "Mű"]

    for(const i of fejlec){
        const th = document.createElement("th")
        tr.appendChild(th)
        th.innerText = i
    }
    for(const i of arr){
        const tr = document.createElement("tr")
        tdoby.appendChild(tr)
        const td1 = document.createElement("td")
        tr.appendChild(td1)
        const td2 = document.createElement("td")
        tr.appendChild(td2)
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td1.innerText = i.nationality
        td2.innerText = i.name
        td3.innerText = i.title

        td1.addEventListener('click', function (e){
            /**
             * @type {HTMLTableCellElement}
             */
            const target = e.target
            target.classList.add("marked")
        })

        if (i.name2 && i.title2){
            td1.rowSpan = "2"
            const tr = document.createElement("tr")
            tdoby.appendChild(tr)
            const td4 = document.createElement("td")
            tr.appendChild(td4)
            td1.rowSpan = "2"
            const td5 = document.createElement("td")
            tr.appendChild(td5)
            td4.innerText = i.name2
            td5.innerText = i.title2
    }
}

/**
 * @type {HTMLFormElement}
 */
const htmlform = document.getElementById("htmlform")
addEventListener("submit",
    function (e){
        e.preventDefault()
        /**
         * @type {HTMLFormElement}
         */
        const targetdefault = e.target
        /**
         * @type {HTMLFormElement}
         */
        const nemz = targetdefault.querySelector("#nemzetiseg")
        /**
         * @type {HTMLFormElement}
         */
        const szer1 = targetdefault.querySelector("#szerzo1")
        /**
         * @type {HTMLFormElement}
         */
        const mu1 = targetdefault.querySelector("#mu1")
        /**
         * @type {HTMLFormElement}
         */
        const szer2 = targetdefault.querySelector("#szerzo2")
        /**
         * @type {HTMLFormElement}
         */
        const mu2 = targetdefault.querySelector("#mu2")
        /**
         * @type {string}
         */
        const nemzvol = nemz.value
        /**
         * @type {string}
         */
        const szer1vol = szer1.value
        /**
         * @type {string}
         */
        const mu1vol = mu1.value
        /**
         * @type {string}
         */
        const szer2vol = szer2.value
        /**
         * @type {string}
         */
        const mu2vol = mu2.value

        /**
        * @type {{nationality: string, name: string, title: string, name2: string, title2: string}}
        */
       const obj = {

       }
       obj.nationality = nemzvol
       obj.name = szer1vol
       obj.title = mu1vol
       obj.name2 = szer2vol
       obj.title2 = mu2vol

       const tbadi = document.getElementById("tbodi")
       const tr = this.document.createElement("tr")
       tbadi.appendChild(tr)
       const td1 = document.createElement("td")
        tr.appendChild(td1)
        const td2 = document.createElement("td")
        tr.appendChild(td2)
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td1.innerText = obj.nationality
        td2.innerText = obj.name
        td3.innerText = obj.title

        td1.addEventListener('click', function (e){
            /**
             * @type {HTMLTableCellElement}
             */
            const target = e.target
            target.classList.add("marked")
        })

        if(obj.name2 && obj.title2){
            td1.rowSpan = "2"
            const tr = this.document.createElement("tr")
            tbadi.appendChild(tr)
            const td4 = document.createElement("td")
            tr.appendChild(td4)
            td1.rowSpan = "2"
            const td5 = this.document.createElement("td")
            tr.appendChild(td5)
            td4.innerText = obj.name2
            td5.innerText = obj.title2
        }
    }
)