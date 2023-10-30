//Taula de multiplicar

function creartaulademultiplicacions(){
    let num1= parseInt(prompt("Introdueix un número de files"));
    let num2= parseInt(prompt("Introdueix un número de columnes"));

    let taula=document.createElement("table");
    taula.border=1;
    let cuerpo=document.createElement("tbody");

    for(let i=1;i<num1;i++){
        let fila=document.createElement("tr")
        for(let n=1;n<num2;n++){
            let columna=document.createElement("td");
            let content=document.createTextNode(i*n);
            
            columna.appendChild(content); 
            fila.appendChild(columna);
        }  
    
    taula.appendChild(fila);
        
    }
    cuerpo.appendChild(taula);
    document.body.appendChild(taula);
}

//Taula colors
//td.style.backgroundColor="red"             td.style.backgroundColor="red";

    
function blanc(color){
    columna.style.backgroundColor=color;
    columna.style.width="20px";
    columna.style.height="20px";
}

function piramide(){
    let num1= parseInt(prompt("Introdueix un número de columnes de color de la darrera fila"));
    
    let taula=document.createElement("table");
    taula.border=1;
    
    let cuerpo=document.createElement("tbody");
    for(let n=0;n<=(num1/2)+1;n++){
            let fila=document.createElement("tr") 
            
        for(let i=0;i<num1-n;i++){
            let columna=document.createElement("td");
            columna.style.backgroundColor="white";
            columna.style.width="20px";
            columna.style.height="20px";
 
            
            fila.appendChild(columna);
        }
        for(let j=0;j<(2*n-i);j++){
            let columna=document.createElement("td");
            columna.style.backgroundColor="red";
            columna.style.width="20px";
            columna.style.height="20px";
            let content=document.createTextNode("");
                    
            columna.appendChild(content); 
            fila.appendChild(columna);
        }
        for(let i=0;i<num1-n;i++){
            let columna=document.createElement("td");
            columna.style.backgroundColor="white";
            columna.style.width="20px";
            columna.style.height="20px";
 
            fila.appendChild(columna);
        }
   
    
    taula.appendChild(fila);
        
    }
    cuerpo.appendChild(taula);
    document.body.appendChild(taula);
}