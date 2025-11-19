/**
 * @param {HTMLElement}
 */
function breakLine(parentelement) {
    const br = document.createElement("br")
    parentelement.appendChild(br)
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} szoveg 
 * @param {string} id 
 */
function createFormElement(form, szoveg, id) {
    const div = document.createElement("div")
    form.appendChild(div)
    const label = document.createElement("label")
    label.htmlFor = id
    label.innerText = szoveg
    div.appendChild(label)
    breakLine(div)

    const input = document.createElement("input")
    input.type = "text"
    input.id = id
    input.name = id
    div.appendChild(input)
    breakLine(div)
    const span = document.createElement("span")
    div.appendChild(span)
    breakLine(div)

}

function htmlEventListener(e) {
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
        * @type {CountryWriters}
        */
        const obj = {

        }
        obj.nationality = nemzvol
        obj.name = szer1vol
        obj.title = mu1vol
        obj.name2 = szer2vol
        obj.title2 = mu2vol

        const tbadi = document.getElementById("default") 
        tbadi.innerHTML = ""
        renderTableRow(tbadi, obj)
    }

/** 
 * @param {"th"|"td"} celltype
 * @param {string} cellcontent
 * @param {HTMLTableRowElement} parentrow
 * @returns {HTMLTableCellElement}
*/
function createTableCell(celltype, cellcontent, parentrow) {
    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    parentrow.appendChild(cell)
    return cell
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
function generateHeader(table,headerlist){
    
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tr = document.createElement("tr")
    thead.appendChild(tr)

    for (const i of headerlist) {
        createTableCell("th", i, tr)
    }
}

/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tablebody, writerRow) {
    const tr = document.createElement("tr")
    tablebody.appendChild(tr)

    const td1 = createTableCell("td", writerRow.nationality, tr)

    createTableCell("td", writerRow.name, tr)

    createTableCell("td", writerRow.title, tr)

    td1.addEventListener('click', function (e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const target = e.target
        target.classList.add("marked")
        const ancestor = target.parentElement.parentElement
        const ance = ancestor.querySelector("marked")
        if(ance) {
            target.classList.remove("marked")
        }
    })

    if (writerRow.name2 && writerRow.title2) {
        td1.rowSpan = "2"
        const tr2 = document.createElement("tr")
        doby.appendChild(tr2)

        createTableCell("td", writerRow.name2, tr2)

        createTableCell("td", writerRow.title2, tr2)
    }
}

function renderTableBody(tomb) {
    const doby = document.getElementById("doby")
    doby.innerText = ""
    for (const i of tomb) {
        renderTableRow(doby, i)
    }
}