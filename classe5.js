function convertirDies(){

let dia= parseInt(prompt("Escriu un dia: "));

let any= Math.floor(dia/365);
let restaAny= dia%365;

let mes=Math.floor(restaAny/30);


let dies=Math.floor(restaAny%30);

console.log(dia+ " dies són: "+ any +" anys, "+ mes+ " mesos i "+dies+" dies")


}