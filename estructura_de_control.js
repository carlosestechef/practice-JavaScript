// ESTRUCTURAS DE CONTROL
/* Ejercicio 1
- Pida un número (utilizando un prompt)
- Si es mayor a cero mostrar "Número positivo"
- Si es menor a cero mostrar "Número negativo"
- Si es igual a cero mostrar "Es cero"
- Si no cumple ninguna mostrar "No es un número"*/

let num = parseInt(prompt("Escribe un número entero cualquiera: "));
    if (num > 0) {
        alert ("Número positivo");
    } else if (num < 0) {           // else if se pueden repetir cuantas veces sea necesario
    alert ("Número negativo");
    } else if (num = 0) {
    alert ("Es cero");
    } else {
        alert ("No es un número")
    }
   