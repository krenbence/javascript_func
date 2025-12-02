/**
 * @typedef {{place: string, what1: string, example1: string, what2?: string, example2?: string}} OkorArr
 */

/**
 * @type {OkorArr[]}
 */
const arr = [
    {
     place: "Athén",
     what1: "politika",
     example1: "demokrácia",
     what2: "tudomány",
     example2: "filozófia"
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
     example2: "hoplita"
    },
]

generateTable("tbodyid", ["Ókor település", "Ágazat", "Példa"])
renderTableBody(arr)

