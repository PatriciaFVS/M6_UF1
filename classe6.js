function convertirBase(){
  let num;
  do{
    num= parseInt(prompt("Introdueix un nº"));

  }while (isNaN(num));

  let n2=passaABinari(num);
  //let n8=
}




function passaABinari(){
    let num= parseInt(prompt("Introdueix un número per passar-ho a binari"));
    let numDividit;
    let binari="";
    if(num==0){
      console.log("0")
    }
    while(num!=0){
      num=Math.floor(num/2)
      numDividit=num%2;
      binari=binari+numDividit
    }
    console.log(binari)

}

function passaAOctal(){
  let num= parseInt(prompt("Introdueix un número per passar-ho a binari"));
  
  let octal="";
  if(num==0){
    console.log("0")
  }
  while(num!=0){
    num=Math.floor(num/8)
    numDividit=num%8;
    octal=octal+numDividit
  }
  console.log(octal)

}

function passaAHexadecimal(){
  let num= parseInt(prompt("Introdueix un número per passar-ho a binari"));
  let residuo;
  let hexadecimal = ["0","1","2","3","4","5","6","7","8","9", "A", "B", "C", "D", "E", "F"];
  let Resultado="";
  if(num==0){
    console.log("0")
  }
  while(num!=0){
    
    residuo=num%16;
    num=Math.floor(num/16);
    Resultado =  Resultado + hexadecimal[residuo] ;
    
    
  }
  console.log(Resultado)

}