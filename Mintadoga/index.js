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

const jsdiv = document.createElement("div")
jsdiv.id = "jssection"
jsdiv.classList.add("hide")
document.body.appendChild(jsdiv)

const table = document.createElement("table")
jsdiv.appendChild(table)

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
tbody.id = "jsbody"
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
const div = document.getElementById("jssection")
if(checkbox.checked){
    htmldiv.classList.add("hide")
    div.classList.remove("hide")
}
else{
    htmldiv.classList.remove("hide")
    div.classList.add("hide")
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
// jsform létrehozás
const jsform = document.createElement("form")
jsdiv.appendChild(jsform)
jsform.id = "jsform"

// első div+feltöltése labe, input, span
const divform1 = document.createElement("div")
jsform.appendChild(divform1)

const label1 = document.createElement("label")
label1.innerText = "Ókori település"
divform1.appendChild(label1)
const br1 = document.createElement("br")
divform1.appendChild(br1)

const input1 = document.createElement("input")
input1.type = "text"
input1.id = "elso"
input1.name = "telepules"
divform1.appendChild(input1)

const span1 = document.createElement("span")
span1.classList.add("error")
divform1.appendChild(span1)

// második div+feltöltése labe, input, span
const divform2 = document.createElement("div")
jsform.appendChild(divform2)

const label2 = document.createElement("label")
label2.innerText = "Ágazat"
divform2.appendChild(label2)
const br2 = document.createElement("br")
divform2.appendChild(br2)

const input2 = document.createElement("input")
input2.type = "text"
input2.id = "masodik"
input2.name = "agazat1"
divform2.appendChild(input2)

const span2 = document.createElement("span")
span2.classList.add("error")
divform2.appendChild(span2)

// harmadik div+feltöltése labe, input, span
const divform3 = document.createElement("div")
jsform.appendChild(divform3)

const label3 = document.createElement("label")
label3.innerText = "Példa1"
divform3.appendChild(label3)
const br3 = document.createElement("br")
divform3.appendChild(br3)

const input3 = document.createElement("input")
input3.type = "text"
input3.id = "harmadik"
input3.name = "pelda1"
divform3.appendChild(input3)

const span3 = document.createElement("span")
span3.classList.add("error")
divform3.appendChild(span3)

// negyedik div+feltöltése labe, input, span
const divform4 = document.createElement("div")
jsform.appendChild(divform4)

const label4 = document.createElement("label")
label4.innerText = "Ágazat2"
divform4.appendChild(label4)
const br4 = document.createElement("br")
divform4.appendChild(br4)

const input4 = document.createElement("input")
input4.type = "text"
input4.id = "negyedik"
input4.name = "agazat2"
divform4.appendChild(input4)

const span4 = document.createElement("span")
span4.classList.add("error")
divform4.appendChild(span4)

// ötödik div+feltöltése labe, input, span
const divform5 = document.createElement("div")
jsform.appendChild(divform5)

const label5 = document.createElement("label")
label5.innerText = "Példa2"
divform5.appendChild(label5)
const br5 = document.createElement("br")
divform5.appendChild(br5)

const input5 = document.createElement("input")
input5.type = "text"
input5.id = "otodik"
input5.name = "pelda2"
divform5.appendChild(input5)

const span5 = document.createElement("span")
span5.classList.add("error")
divform5.appendChild(span5)

//gomb(os)
const gomb = document.createElement("button")
gomb.innerText = "Hozzáadás"
jsform.appendChild(gomb)

const jsformid = document.getElementById("jsform")

jsformid.addEventListener("submit", function (e) {
    e.preventDefault()
    
        /**
         * @type {HTMLFormElement}
         */
        const target = e.target

        /**
         * @type {HTMLInputElement}
         */
        const elso = target.querySelector("#elso")
        /**
         * @type {HTMLInputElement}
         */
        const masodik = target.querySelector("#masodik")
        /**
         * @type {HTMLInputElement}
         */
        const harmadik = target.querySelector("#harmadik")
        /**
         * @type {HTMLInputElement}
         */
        const negyedik = target.querySelector("#negyedik")
        /**
         * @type {HTMLInputElement}
         */
        const otodik = target.querySelector("#otodik")

        if(validateFields(elso,masodik,harmadik) && (validateFields2(negyedik,otodik))){
            /**
             * @type {string}
             */
            const elsoval = elso.value
            /**
             * @type {string}
             */
            const masodikval = masodik.value
            /**
             * @type {string}
             */
            const harmadikval = harmadik.value
            /**
             * @type {string}
             */
            const negyedikval = negyedik.value
            /**
             * @type {string}
             */
            const otodikval = otodik.value

            /**
            * @type {CountryWriters}
            */
            const obj = {}

        obj.place = elsoval
        obj.what1 = masodikval
        obj.example1 = harmadikval
        obj.example2 = negyedikval
        obj.what2 = otodikval

        arr.push(obj)
        const jsbody = document.getElementById("jsbody")
        jsbody.innerHTML = ""
        for (const elem of arr){
    const tr = document.createElement("tr")
    jsbody.appendChild(tr)
    
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
        jsbody.appendChild(tr2)
        
        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = elem.what2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = elem.example2
    }
}
        }else if(validateFields(elso,masodik,harmadik)){
           /**
             * @type {string}
             */
            const elsoval = elso.value
            /**
             * @type {string}
             */
            const masodikval = masodik.value
            /**
             * @type {string}
             */
            const harmadikval = harmadik.value
            /**
             * @type {string}
             */
            const negyedikval = negyedik.value
            /**
             * @type {string}
             */
            const otodikval = otodik.value

            /**
            * @type {CountryWriters}
            */
            const obj = {}

        obj.place = elsoval
        obj.what1 = masodikval
        obj.example1 = harmadikval
        obj.example2 = negyedikval
        obj.what2 = otodikval

        arr.push(obj)
        const jsbody = document.getElementById("jsbody")
        jsbody.innerHTML = ""
        for (const elem of arr){
    const tr = document.createElement("tr")
    jsbody.appendChild(tr)
    
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
        jsbody.appendChild(tr2)
        
        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = elem.what2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = elem.example2
    }
}
        }
})

const htmlformid = document.getElementById("htmlform")

htmlformid.addEventListener("submit", function (e) {
    e.preventDefault()
        
        /**
         * @type {HTMLFormElement}
         */
        const target = e.target

        /**
         * @type {HTMLInputElement}
         */
        const elso = target.querySelector("#elso")
        /**
         * @type {HTMLInputElement}
         */
        const masodik = target.querySelector("#masodik")
        /**
         * @type {HTMLInputElement}
         */
        const harmadik = target.querySelector("#harmadik")
        /**
         * @type {HTMLInputElement}
         */
        const negyedik = target.querySelector("#negyedik")

        if(validateFields(elso, masodik, harmadik)){
            /**
             * @type {string}
             */
            const elsoval = elso.value
            /**
             * @type {string}
             */
            const masodikval = masodik.value
            /**
             * @type {string}
             */
            const harmadikval = harmadik.value
            /**
             * @type {string}
             */
            const negyedikval = negyedik.value

            /**
            * @type {CountryWriters}
            */
            const obj = {}

            obj.place = elsoval
            obj.what1 = masodikval
            obj.example1 = harmadikval
            obj.example2 = negyedikval
            //negyedikval = "" ? obj.example2 = undefined : obj.example2 = negyedikval

            const tbodi = document.getElementById("tbodi")
            const tr3 = document.createElement("tr")
            tbodi.appendChild(tr3)
            
            const tdh1 = document.createElement("td")
            tr3.appendChild(tdh1)
            tdh1.innerText = elsoval

            const tdh2 = document.createElement("td")
            tr3.appendChild(tdh2)
            tdh2.innerText = masodikval

            const tdh3 = document.createElement("td")
            tr3.appendChild(tdh3)
            tdh3.innerText = harmadikval

            if(negyedikval){
                const tdh4 = document.createElement("td")
                tr3.appendChild(tdh4)
                tdh4.innerText = negyedikval
            } else{
                tdh3.colSpan = "2"
            }
            htmlformid.reset()
        }
})

/**
 * 
 * @param {HTMLInputElement} inputElement1 
 * @param {HTMLInputElement} inputElement2 
 * @param {HTMLInputElement} inputElement3 
 * @returns {boolean}
 */
function validateFields(inputElement1, inputElement2, inputElement3){
    let valid = true
    if(validateField(inputElement1, "kötelező kitölteni") == false){valid = false}
    if(validateField(inputElement2, "kötelező kitölteni") == false){valid = false}
    if(validateField(inputElement3, "kötelező kitölteni") == false){valid = false}
    return valid
}

/**
 * 
 * @param {HTMLInputElement} inputElement1 
 * @param {HTMLInputElement} inputElement2 
 * @returns {boolean}
 */
function validateFields2(inputElement1, inputElement2){
    let valid = true
    if(validateField(inputElement1, "kötelező kitölteni") == false){valid = false}
    if(validateField(inputElement2, "kötelező kitölteni") == false){valid = false}
    return valid
}

/**
 * 
 * @param {HTMLInputElement} htmlIputfield 
 * @param {string} hibaUzenet 
 * @returns {boolean}
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