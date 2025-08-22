//Variables
let numeroMaximoPosible = 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let NumeroDeUsuario = 0;
let intentos = 1;
//let palabraVeces = "veces"
let maximosIntentos = 5;
while(NumeroDeUsuario != numeroSecreto){
    
NumeroDeUsuario = parseInt (prompt(`ME INDICAS UN NUMERO entre 1 y ${numeroMaximoPosible} POR FAVOR:`));
console.log(typeof(NumeroDeUsuario));
/*
Este código realiza la comparación
*/
if (NumeroDeUsuario == numeroSecreto) {
    alert(`acertaste, el número es: ${NumeroDeUsuario}.Lo hiciste en: ${intentos} ${intentos == 1 ? "vez" : "veces"}`);}
        else {
    if (NumeroDeUsuario > numeroSecreto){
        alert("El numero secreto es menor");
    } else {
        alert("El numero secreto es mayor");
    }
    //incrementamos el contador cuando la persona no acierta 
    intentos ++;
}
    //palabraVeces = "veces";
    if (intentos > maximosIntentos) {
        alert (`Has completado el número máximo de intentos que es: ${maximosIntentos}`);
        break;}
}