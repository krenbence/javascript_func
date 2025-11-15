function htmlEventListener(e){
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

}

/**
 * létrehozunk egy theadet
 * hozzacsat table
 * letrehozunk egy sort
 * hozzacsat thead
 * vegigiterlunk 2 parametert
 * letrehozzunk a fejlec cellakat
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */

/** 
 * @param {"th"|"td"} celltype
 * @param {string} cellcontent
 * @param {HTMLTableRowElement} parentrow
 * @returns {HTMLTableCellElement}
*/
function generateHeader(table,headerlist){
    const thead = document.createElement(thead)
    table.appendChild(thead)

    const tr = document.createElement("tr")
    thead.appendChild(tr)

    for (const a of headerlist) {
        createTableCell("th", a, tr)
    }
}

/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow
 */
function renderTableRaw(tablebody, writerRow) {
    const tr = document.createElement("tr")
    tablebody.appendChild(tr)
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    const td2 = document.createElement("td")
    tr.appendChild(td2)
    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td1.innerText = writerRow.nationality
    td2.innerText = writerRow.name
    td3.innerText = writerRow.title

    td1.addEventListener('click', function (e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const target = e.target
        target.classList.add("marked")
    })

    if (writerRow.name2 && writerRow.title2) {
        td1.rowSpan = "2"
        const tr = document.createElement("tr")
        tablebody.appendChild(tr)
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td1.rowSpan = "2"
        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td4.innerText = writerRow.name2
        td5.innerText = writerRow.title2
    }
}