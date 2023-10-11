function Propdecent(){
    let num1= parseInt(prompt("Escriu un número:"));
    let num2= parseInt(prompt("Escriu un altre número: "));

    let a= Math.abs(num1 - 100);
    let b= Math.abs(num2 -100);

    if(a<b){
        console.log("El valor més proper és: "+ num1);
    } else if(a>b){
        console.log("El valor més proper és: "+ num2);
    }else{
        console.log("Els dos valors están a la mateixa distància de 100")
    }


}
 
//Demanar funció tres números hora minut segon mostrar l'hora  + 1 segon

function hours(){
    let hora= parseInt(prompt("Escriu una hora:"));
    let minut= parseInt(prompt("Escriu un minut: "));
    let segon= parseInt(prompt("Escriu un segon: "));

    let dataSegon= new Date(2002,11,1,0,0,1);
    let horaUsuari= new Date(2002, 11, 1, hora,minut,segon+dataSegon.getSeconds()); 
    
    console.log(horaUsuari.getHours()+":"+ horaUsuari.getMinutes()+":"+horaUsuari.getSeconds());


}
//Demanar 3 números any mes y dia i comrpovar que es tracta de una data vàlida
    
function dates(){
    let any= parseInt(prompt("Escriu un any:"));
    let mes= parseInt(prompt("Escriu un mes: "));
    let dia= parseInt(prompt("Escriu un dia: "));

    let dataUsuari= new Date();
    
    let anyo= dataUsuari.setFullYear(any);
    let mesos= dataUsuari.setMonth(mes);
    let dies= dataUsuari.setDate(dia);

    if((anyo==dataUsuari.getFullYear()) && (mesos==dataUsuari.getMonth())&&(dies==dataUsuari.getDate())){
        console.log("La data és válida");
    }else{
        console.log("La data no és válida")
    }

   


}
