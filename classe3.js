/* Exercici 1

let num1= prompt("Escriu un número per calcular la potència");
let num2= prompt("Escriu un número per utilitzar-lo com a potència");
let varNum= num1;

console.time();
console.log("Potència pow: " + Math.pow(num1,num2));
console.timeEnd();

console.time();
for(let i=1;i<num2;i++){
    varNum*=num1;
}
console.log("Potència bucle: " + varNum);
console.timeEnd();
*/

//Demanar 3 números amb un button Calcular: mitja, mitjana, major, menor

function mitjana(){
let num1= parseInt(prompt("Escriu un número:"));
let num2= parseInt(prompt("Escriu un altre número "));
let num3= parseInt(prompt("Escriu un altre número "));

let des = [num1,num2,num3];

let ordenat= des.sort;

console.log("Mitja: "+ (num1+num2+num3)/3);
console.log("Mitjana: " + ordenat[1]);
console.log("Major: "+ ordenat[2]);
console.log("Menor: "+ ordenat[0]);}