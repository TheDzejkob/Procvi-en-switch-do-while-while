function switchi() {
    const cislo = document.getElementById("cislo").value;
    switch(parseInt(cislo)){
        case 1 :    
            document.getElementById("vysledek").textContent="Leden";
            break;
        case 2 :
            document.getElementById("vysledek").textContent="Únor";
            break;
        case 3 :
            document.getElementById("vysledek").textContent="Březen";
            break;
        case 4 : 
            document.getElementById("vysledek").textContent="Duben";
            break;
        case 5 :
            document.getElementById("vysledek").textContent="Květen";
            break;
        case 6 :
            document.getElementById("vysledek").textContent="Červen";
            break;
        case 7 :
            document.getElementById("vysledek").textContent="Červenec";
            break;
        case 8 : 
            document.getElementById("vysledek").textContent="Srpen";
            break;
        case 9 :
            document.getElementById("vysledek").textContent="Září";
            break;
        case 10:
            document.getElementById("vysledek").textContent="Říjen";
            break;
        case 11:
            document.getElementById("vysledek").textContent="Listopad";
            break;
        case 12:
            document.getElementById("vysledek").textContent="Prosinec";
            break;
        default:
            document.getElementById("vysledek").textContent="Nesprávné číslo měsíce";
    }
}
