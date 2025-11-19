/**
 * @typedef {{nationality: string, name: string, title: string, name2: string, title2: string}} CountryWriters
 */
/**
 * @type {CountryWriters[]}
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
document.body.appendChild(table)

const tbody = document.createElement("tbody")
table.appendChild(tbody)
tbody.id = "doby"

/**
 * @type {{fejlec:string}[]}
 */
generateHeader(tbody, ["Nemzetiség", "Szerző", "Mű"])

renderTableBody(arr)

const jsform = document.createElement("form")
jsform.id = "jsform"
document.body.appendChild(jsform)

const button = document.createElement("button")
jsform.appendChild(button)
button.innerText = "hozzáadás"

createFormElement(jsform, "Nemzetiseg:", "nemzetiseg")
createFormElement(jsform, "Szerző:", "szerzo1")
createFormElement(jsform, "Mű:", "mu1")
createFormElement(jsform, "Másik Szerző:", "szerzo2")
createFormElement(jsform, "Mű:", "mu2")

/**
 * @type {HTMLFormElement}
 */
const htmlform = document.getElementById("htmlform")
htmlform.addEventListener("submit", htmlEventListener)

jsform.addEventListener("submit", function (e) {
    e.preventDefault()
    /**
     * @type {CountryWriters}
     */
    const bj = {}

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target

    /**
     * @type {HTMLInputElement}
     */
    const nemz = target.querySelector("#nemzetiseg")
    /**
     * @type {string}
     */
    const nemS = nemz.value
    bj.nationality = nemS

    /**
     * @type {HTMLInputElement}
     */
    const szer1 = target.querySelector("#szerzo1")
    /**
     * @type {string}
     */
    const sze1S = szer1.value
    bj.name = sze1S

    /**
     * @type {HTMLInputElement}
     */
    const mu1 = target.querySelector("#mu1")
    /**
     * @type {string}
     */
    const mu1S = mu1.value
    bj.title = mu1S

    /**
     * @type {HTMLInputElement}
     */
    const szer2 = target.querySelector("#szerzo2")
    /**
     * @type {string}
     */
    const sze2S = szer2.value
    bj.name2 = sze2S

    /**
     * @type {HTMLInputElement}
     */
    const mu2 = target.querySelector("#mu2")
    /**
     * @type {string}
     */
    const mu2S = mu2.value
    bj.title2 = mu2S

    /**
    * @type {CountryWriters}
    */
    const obj = {

    }
    obj.nationality = nemzvol
    obj.name = szer1vol
    obj.title = mu1vol
    obj.name2 = szer2vol
    obj.title2 = mu2vol

    const doby = getElementById("doby")
    doby.innerHTML = ""
    arr.push(obj)
    renderTableBody(arr)
})