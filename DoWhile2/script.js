function scitaniidk(){

let cislo;
let soucet = 0;

do {
    cislo = parseInt(prompt("Zadejte číslo (0 pro ukončení):"));
    if(cislo !== 0) {
        soucet += cislo;
    }
} while (cislo !== 0);

document.getElementById("vysledek").textContent="Vysledek:" + soucet;

}