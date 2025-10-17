/**
 * @type {{szerzo: string, mu: string, szereplo: string, szereplo2?: string}[]}
 */

const arr = [
    {
        szerzo: "Katona József",
        mu: "Bánk bán",
        szereplo: "Gertrudis királyné"
    },
    {
        szerzo: "Mikszáth Kálmán",
        mu: "Beszterce ostroma",
        szereplo: "Pongrác István gróf",
        szereplo2: "Estella"
    },
    {
        szerzo: "Arany János",
        mu: "Toldi",
        szereplo: "Toldi Miklós"
    }
];

const fejlec = ["Szerző", "Mű", "Szereplők"];

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const trhead = document.createElement("tr");
thead.appendChild(trhead);

for (const elem of fejlec) {
    const th = document.createElement("th");
    th.innerText = elem;
    trhead.appendChild(th);
}

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (const elem of arr) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td1 = document.createElement("td");
    td1.innerText = elem.szerzo;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = elem.mu;
    tr.appendChild(td2);

    if (elem.szereplo2 === undefined) {
        const td3 = document.createElement("td");
        td3.colSpan = 2;
        td3.innerText = elem.szereplo;
        tr.appendChild(td3);
    } else {
        const td3 = document.createElement("td");
        td3.innerText = elem.szereplo;
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        td4.innerText = elem.szereplo2;
        tr.appendChild(td4);
    }
}