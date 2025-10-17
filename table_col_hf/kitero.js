const szam = 13 //globális változó

function valami1(){
    console.log("gomszab")
}
/** 
 * kiirja hogy gomszab
 * @returns {void}
 */

/**
 * ki logolja a szam változót
 */
function valami2(){
    console.log(szam)
}

/**
 * deklarálunk egy lokácis változót, és kilogoljuk
 */
function valami3(){
    const szam3 = 12
    console.log(szam3)
}

/**
 * 
 * @param {number} param1
 * @returns {number}
 */
function valami4(param1){
    const szam1 = 11
    const osszeg = szam1 + param1
    return osszeg
}


valami1()
valami2()
valami3()
const kiir = valami4(56)
console.log(kiir)