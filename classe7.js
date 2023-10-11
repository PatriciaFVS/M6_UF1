function trucada(){
    let hora= parseInt(prompt("Introdueix les hores de trucada"));
    let minut= parseInt(prompt("Introdueix els minuts de trucada"));
    let segons= parseInt(prompt("Introdueix els minuts de trucada"));

    segonsHora= Math.floor(hora/3600);
    restasegonsHora= hora%3600;
    segonsminut= Math.floor(minut/60)
    totalSegons= segonsHora +restasegonsHora+segonsminut+segons;

    
}
