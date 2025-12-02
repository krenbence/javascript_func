/**
 * @typedef {{place: string, what1: string, example1: string, what2?: string, example2?: string}} OkorArr
 */

/**
 * 
 * @param {"th"|"td"} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parentrow 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(celltype, cellcontent, parentrow){
    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    parentrow.appendChild(cell)
    return cell
}

const headarr = ["Ókori település", "Ágazat", "Példa"]

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */
function generateHeader(table, headerlist){ 
    const thead = document.createElement("thead")
    table.appendChild(thead)    
    const tr = document.createElement("tr")
    thead.appendChild(tr)
    for(const i of headerlist){
        createTableCell("th", i, tr)
    }
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
 * 
 * @param {HTMLTableSectionElemet} tablebody 
 * @param {OkorArr} writerRow 
 */
function renderTableRow(tablebody, writerRow){
    const tr = document.createElement("tr")
    tablebody.appendChild(tr)

    const td1 = createTableCell("td", writerRow.place, tr)
    createTableCell("td", writerRow.what1, tr)
    createTableCell("td", writerRow.example1, tr)

    if(writerRow.what2 && writerRow.example2){
        td1.rowSpan = "2"
        const tr2 = document.createElement("tr")
        tablebody.appendChild(tr2)

        createTableCell("td", writerRow.what2, tr2)
        createTableCell("td", writerRow.example2, tr2)
    }

}

/**
 * 
 * @param {OkorArr[]} tomb 
 */
function renderTableBody(tomb){
    const tbodyid = document.getElementById("tbodyid")
    tbodyid.innerText = ""
    for (const i of tomb){
        renderTableRow(tbodyid, i)
    }
}