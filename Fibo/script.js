function TOOL(){
    let vysledeLabel = document.getElementById("vysl");;
    var i = 10;
    var cis1 = 0;
    var cis2 = 1;
    var list = [];
    while(i > 0){
        var vysledek = cis1 + cis2;
        list.push(vysledek);
        cis1 = cis2;
        cis2 =vysledek;

        i -= 1;
    }
    vysledeLabel.textContent = list.join(', ');
}