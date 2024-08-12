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

// Ejercicio 2
/* Hacer un programa que:
- Pregunte si quiere recibir notificaciones por mail (utilizando prompt)
- Si dice que si:
    _ Pida email (utilizando prompt)
    _ Pida su edad (utilizando pormpt)
    _ Si la edad es mayor o igual a 18: Mostrar mail
    _ Si No: Mostrar que "No tiene la edad suficiente" */

    let notifice = prompt("¿Deseas recibir notificaciones al Gmail?") 
        if (notifice = "si") {
            prompt ("Por favor, ingrese su email");
        }

        let age= prompt ("Ingrese su edad:");
            if (age >= 18){
                alert("Mostrar mail");
        } else {
            alert("No tiene la edad suficiente")
        };