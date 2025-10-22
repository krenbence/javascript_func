function createElement(tag, text = "", attrs = {}) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

const arr = [
  { author: 'Balassi Bálint', era: 'reformáció', lover1: 'Losonczy Anna', lover2: 'Dobó Krisztina' },
  { author: 'Csokonai Vitéz Mihály', era: 'felvilágosodás', lover1: 'Vajda Juliána' },
  { author: 'Petőfi Sándor', era: 'magyar romantika', lover1: 'Mednyánszky Berta', lover2: 'Szendrey Júlia' },
  { author: 'Ady Endre', era: '20. század', lover1: 'Léda', lover2: 'Csinszka' }
];

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const trHead = document.createElement("tr");
thead.appendChild(trHead);

createcell("th", "Szerző neve", trHead);
createcell("th", "Korszak", trHead);
const th3 = createcell("th", "Szerelmek", trHead);
th3.colSpan = 2;

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (const elem of arr) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  createcell("td", elem.author, tr);
  createcell("td", elem.era, tr);
  if (typeof elem.lover2 === "undefined") {
    const td3 = createcell("td", elem.lover1, tr);
    td3.colSpan = 2;
  } else {
    createcell("td", elem.lover1, tr);
    const td4 = document.createElement("td");
    tr.appendChild(td4);
    td4.innerText = elem.lover2;
  }
}

const form = createElement("form", "", { form_js: "" });
const title = createElement("h2", "Javascript űrlap");
form.appendChild(title);
const label = createElement("label", "Név: ");
const input = createElement("input", "", { type: "text", name: "nev" });
label.appendChild(input);
form.appendChild(label);
document.body.appendChild(form);

function createcell(celltype, cellcontent, parentrow) {
  const cell = document.createElement(celltype);
  cell.innerText = cellcontent;
  parentrow.appendChild(cell);
  return cell;
}
