let nombreUsuario = prompt("Ingrese su nombre por favor: ")
let apellidoUsuario = prompt("Ingrese su apellido por favor: ")
const limiteCaracteres = 20

if((nombreUsuario != "") && (apellidoUsuario !="") && (nombreUsuario.length <= limiteCaracteres) && (apellidoUsuario.length <= limiteCaracteres)){
    alert(`Hola ${nombreUsuario} ${apellidoUsuario}, bienvenido a la página`)
}else{
    alert(`Por favor, ingrese un nombre o apellido valido con menos de ${limiteCaracteres} caracteres`)
    
}




while(true){
let operación= prompt("Que operación desea hacer (+ - * /)")

if(operación === "+"|| operación === "-" || operación === "*" || operación === "/"){

    let numero1= Number(prompt("Ingrese el numero que usted desee: "))
    let numero2= Number(prompt("Ingrese otro numero que usted desee: "))

switch (operación) {
    case "+":
        alert("El resultado es: " + sumar(numero1, numero2));
    break;
    
    case "-":
      alert("El resultado es: " + restar(numero1, numero2));
    break;

    case "*":
      alert("El resultado es: " + multiplicar(numero1, numero2));
    break;

    case "/":
      alert("El resultado es: " + dividir(numero1, numero2));
    break;

    default:
        
    break;
}
} else{
    alert("Operación no válida. Por favor, elija una operación válida (+ - * /).");
}

let continuar = prompt("¿Desea realizar otra operación? (Sí/No)").toLowerCase();
    if (continuar !== "sí" && continuar !== "si") {
        break; // Salir del bucle si el usuario no quiere continuar
    }
}

 function sumar(numero1,numero2){
    return numero1 + numero2
    
 }
 function restar(numero1,numero2){
   return numero1 - numero2
 }
 function multiplicar(numero1,numero2){
   return numero1 * numero2
 }
 function dividir(numero1,numero2){
   return numero1 / numero2
 }