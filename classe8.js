function creartaula(){
    let num1= parseInt(prompt("Introdueix un número de files"));
    let num2= parseInt(prompt("Introdueix un número de columnes"));

    let taula=document.createElement("table");
    taula.border=1;
    let cuerpo=document.createElement("tbody");

    for(let i=0;i<num1;i++){
        let fila=document.createElement("tr")
        for(let n=0;n<num2;n++){
            let columna=document.createElement("td");
            let content=document.createTextNode("Estàs a la fila n");
            
            columna.appendChild(content); 
            fila.appendChild(columna);
        }  
    
    taula.appendChild(fila);
        
    }
    cuerpo.appendChild(taula);
    document.body.appendChild(taula);
}