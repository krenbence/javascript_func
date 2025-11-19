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

generateTable("doby", ["Nemzetiseg", "Szerző", "Mű"])
renderTableBody(arr)

/**
 * @type {LabInpAdat[]}
 */
const formArr = [
    {
        label: "Nemzetiség:",
        input: "nemzetiseg",
    },
    {
        label: "Szerző:",
        input: "szerzo1",
    },
    {
        label: "Mű:",
        input: "mu1",
    },
    {
        label: "Másik Szerző:",
        input: "szerzo2",
    },
    {
        label: "Mű:",
        input: "mu2",
    },
]

/**
 * @type {HTMLFormElement}
 */
const jsform = generateForm("jsform", formArr)

/**
 * @type {HTMLFormElement}
 */
const htmlform = document.getElementById("htmlform")
htmlform.addEventListener("submit", addToHtmlTable)

jsform.addEventListener("submit", function (e) {
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

            arr.push(obj)
            console.log(arr)
            renderTableBody(arr)
        }
})