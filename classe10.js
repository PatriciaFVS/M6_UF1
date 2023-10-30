//Ampliar la taula anterior per que pinti un romb. Es demana el nº de caselles vermelles de la línea central i té la forma de romb
//Demanar un nom d'arxiu a l'usuari i tornar per consola l'extensió de l'arxiu
//Demanar uun text a l'usuari i dir si té el mateix nº de 'a' que de 'b'
//Demanar 2 cadenes i comprovar si tenen la mateixa longitud
//Demanar a l'usuari un text i un caràcter dir si el caràcter està continhut enu el tezt de 2 a 4 vegades
//Demanar un text a l'usuari (paraula) i un número eliminar el caràcter de la paraula 

/**
 * Demanar un text a l'usuari i mostrar:
 * 
 * a)Text en majúscules
 * b)en minúscules
 * c)Longitud total
 * d)Nombre de paraules
 * e) Les vocals que conté
 * f) El número de vocals
 * g)La frase en n línies on cada línia li falta una lletra de davant
 * 
 *  **/

/** El dia de nitbona Pepe vol saber quan falta per mitjanit Demana una hora en format hh mm i fica el número de minuts fins la mitjanit.Si l'hora és 00:00 diguis "bon any nou:
 * Ex: 23:45-->15minuts
 * 00:01--> 1439                    const
 *                                  let
 *                                  var
 * 21:30--> 150
 * **/
function tipusarxiu(){
    let nom= prompt("Introdueix un nom d'arxiu");
    let separat=nom.split('.');
    
    let ultimo= separat.pop()
    console.log("L'extensió de l'arxiu és: "+ ultimo)}

function textusuari(){
    let text= prompt("Introdueix un nom d'arxiu");
    let cont1=0;
    let cont2=0;
    for (let i=0;i<text.length;i++){
        if(text.charAt(i)=="a"){
            cont1++;
        }else if(text.charAt(i)=="b"){
            cont2++;
        }
    }
    if(cont1==cont2){
        console.log("Tenen el mateix número de a que de b")
    }else{
        console.log("Tenen difereent número de a que de b")
    }

}
function textlongitud(){
    let longitud= prompt("Introdueix un nom d'arxiu");
}

function textCaracter(){
    let text= prompt("Introdueix un text");
    let caracter= prompt("Introdueix un caracter");
    let cont1=0;
    for (let i=0;i<text.length;i++){
        if(text.charAt(i)==caracter){
            cont1++;
        }
    }
    if (cont1>=2 && cont1<=4){
        console.log("Està contingut de 2 a 4vegades")
    }else{
        console.log("No està contingut de 2 a 4vegades")
    }

}
function senseCaracter(){
    let text= prompt("Introdueix un text");
    let numero= parseInt(prompt("Introdueix la posicio a eliminar"));
    let elcar= text.substring(0,numero) +text.substring(numero+1);
    
    console.log(elcar)
    

}

function txtMultiple(){
    let text= prompt("Introdueix un text");
    let mayus=text.toUpperCase();
    let minus=text.toLowerCase();
    let longitud=text.length;
    numParaules=text.split(" ");
    let totalpara=numParaules.length;
    let expr =/[aàáäeèéëiìíïoòóöuùúû]/gi;
    


    document.write("El text introduït és: "+ text+
                    "<br>En majúscules és: "+ mayus+
                    "<br>En minúscules és : "+ minus+ 
                    "<br>La longitud de la cadena és de: "+ longitud +
                    "<br>El total de paraules és: "+ totalpara+
                    "<br> Les vocals que conté "+text.match(expr)+
                    "<br> El número de vocals: "+text.match(expr).length);
    


}