function dentydne(){

const cisloDne = document.getElementById("cisloo");

switch (cisloDne) {
    case 1:
        console.log("Pondělí");
        break;
    case 2:
        console.log("Úterý");
        break;
    case 3:
        console.log("Středa");
        break;
    case 4:
        console.log("Čtvrtek");
        break;
    case 5:
        console.log("Pátek");
        break;
    case 6:
        console.log("Sobota");
        break;
    case 7:
        console.log("Neděle");
        break;
    default:
        console.log("Chyba: Zadáno číslo mimo rozsah 1-7.");
}
}