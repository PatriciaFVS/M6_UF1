/** Obtenir la data acutal i mostrar
 * 
 * 1. Avui és dd del mm del aaaa
 * 2. Han passat n setmanes de l'any
 * 3. El % de dies transcorreguts és nn,nn%
 * 4. Queden un nn.nn% de dies a l'any
 * 5. Ara son les hh:mm:ss
 * 
 */

function datescosetes(){
    let lamevadata=new Date();
    let datainici= new Date(2023,0,1);
    let datamitjanit= new Date(lamevadata.getFullYear(),lamevadata.getMonth(),lamevadata.getDate(),0,0,0);

//1

    console.log("Avui és "+ lamevadata.getDate()+" del "+lamevadata.getMonth()+ " del "+ lamevadata.getFullYear());
//2
    let setmanes= Math.floor((lamevadata.getTime()-datainici.getTime())/(24*3600*1000*7));
    console.log("Han passat "+ setmanes+ " setmanes de l'any")
//3
    let dies=(lamevadata.getTime()-datainici.getTime())/(24*3600*1000);

    let percentdies= (dies*100/365).toFixed(2);
    console.log("El percentatge de dies transcorregut és "+ percentdies+ " %")

//4
    let restpercent=100-percentdies
    console.log("Queden un  "+ restpercent.toFixed(2)+ " % de dies a l'any")
//5
    console.log("Ara són les: "+lamevadata.getHours()+":"+lamevadata.getMinutes()+":"+lamevadata.getSeconds());
//6
    let horas=(lamevadata.getTime()-datamitjanit.getTime())
    let milisec=24*60*60*1000;
    let resultat=(horas*100/milisec).toFixed(2);
    
    console.log("El percentatge de dia que ha passat és: "+ resultat+ "%");

//7
    console.log("Queda un percentatge de "+ (100-resultat).toFixed(2)+"% del dia")
}

//Els codis de barres a Europa poden tenir 8 o 13 digits (EAN8, EAN13) la xifra més a la dreta està calculada segons una fòrmula on el sdígits en posició imparell
// es multipliquen *3 i els parells per *1 El dígit final és la diferéncia entre el um calculat i el proper múltiple de 10
//function addLeftZeroPadding_(ccode, num)
// function checkDigitControl(Codi)




