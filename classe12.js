//Demanar a l'usuari {any1[2000-2050] any2[2000-2050]} i dir el primer any entre les dues que comença en dimecres
//Dir si una paraula introduida és pentavocàlica (Conté les 5 vocals)

function empiezaelanyo(){
    let any1= parseInt(prompt("Introdueix un any: "));
    let any2= parseInt(prompt("Introdueix un altre any: "));

    for(i=any1;i<=any2;i++){
        let datanova=new Date (i,0,1);
        let resultatany= datanova.getDay();
        if(resultatany===3){
            document.write("L'any en aquest rang que comença per dimcres es: "+ i)
            break;
        }
    }
  
}

function parpentavocalica(){
    let paraula= prompt("Introdueix una paraula per veure si es pentavocàlica");
    let expr =/[aàáäeèéëiìíïoòóöuùúû]/gi

    for (i=)

}


