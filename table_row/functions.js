/**
 * @typedef {{nationality: string, name: string, title: string, name2: string, title2: string}} CountryWriters
 * @typedef {{label: string, input: string}} LabInpAdat
 */
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
    span.classList.add("error")
    div.appendChild(span)
    breakLine(div)

}

function addToHtmlTable(e) {
        e.preventDefault()

        /**
         * @type {CountryWriters}
         */
        const obj = {}
        /**
         * @type {HTMLFormElement}
         */
        const target = e.target

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

        if(validateFields(nemz, szer1, mu1)){
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

            obj.nationality = nemzvol
            obj.name = szer1vol
            obj.title = mu1vol
            szer2vol = "" ? obj.name2 = undefined : obj.name2 = szer2vol
            mu2vol = "" ? obj.title2 = undefined : obj.title2 = szer2vol

            const tbadi = document.getElementById("default") 
            renderTableRow(tbadi, obj)
            console.log(obj)
        }
    }
/**
 * 
 * @param {string} id 
 * @param {LabInpAdat[]} tomb 
 * @returns 
 */
function generateForm(id, tomb) {
    const jsform = document.createElement("form")
    jsform.id=id
    document.body.appendChild(jsform)

    for (const i of tomb){
        createFormElement(jsform, i.label, i.input)
    }

    const gomb = document.createElement("button")
    gomb.innerText = "Hozzáadás"
    jsform.appendChild(gomb)
    return jsform
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
 * 
 * @param {HTMLInputElement} inputElement1 
 * @param {HTMLInputElement} inputElement2 
 * @param {HTMLInputElement} inputElement3 
 * @returns {boolean}
 */
function validateFields(inputElement1, inputElement2, inputElement3){
    let valid = true
    if(validateField(inputElement1, "kötelező") == false){valid = false}
    if(validateField(inputElement2, "kötelező") == false){valid = false}
    if(validateField(inputElement3, "kötelező") == false){valid = false}
    return valid
}

/**
 * 
 * @param {} htmlIputfield 
 * @param {string} hibaUzenet 
 * @returns 
 */
function validateField(htmlIputfield, hibaUzenet){
    let valid = true
    if(htmlIputfield.value == ""){
        const szulo = htmlIputfield.parentElement
        const szulO = szulo.querySelector(".error")
        szulO.innerText = hibaUzenet
        valid = false
    }
    else{
        const szulo = htmlIputfield.parentElement
        const szulO = szulo.querySelector(".error")
        szulO.innerText = ""
    }
    return valid
}

/**
 * 
 * @param {string} tbodyid 
 * @param {string[]} headertomb 
 */
function generateTable(tbodyid, headertomb){
    const table = document.createElement("table")
    document.body.appendChild(table)
    
    generateHeader(table, headertomb)

    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    tbody.id = tbodyid
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

/**
 * 
 * @param {CountryWriters[]} tomb 
 */
function renderTableBody(tomb) {
    const doby = document.getElementById("doby")
    doby.innerText = ""
    for (const i of tomb) {
        renderTableRow(doby, i)
    }
}