function uhadnimore(){

let spravneHeslo = "tajneHeslo";
let zadaneHeslo;

do {
    zadaneHeslo = prompt("Zadejte heslo:");

    if (zadaneHeslo !== spravneHeslo) {
        alert("Nesprávné heslo! Zkuste to znovu.");
    }
} while (zadaneHeslo !== spravneHeslo);

alert("Správné heslo zadáno. Vítejte!");
}