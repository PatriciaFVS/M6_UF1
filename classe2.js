
    
//Exercici 1
    
    function fibonacci (n){
        let a1=1;
        let a2=1;
        console.log(a1);
        console.log(a2);
        for(let i=1;i<n;i++) {
        let result=a1+a2;
        a1=a2;
        a2=result;
        console.log(result)}
    }

    let varNum= prompt("Escriu un número");
    fibonacci(varNum);

    /*Exercici 1
    console.log(`Taula del ${varNum}`);
    for (let v=0;v<=10;v++){
       console.log(`${varNum} x ${v} = ` +varNum*v)
    }
    */
   