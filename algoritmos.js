// ALGORITMOS
/* Construir una página HTML, que contenga un algoritmo en JavaScript, que solicite al 
internauta el ingreso de los siguientes datos:
 ➢ Nombre y Apellido
 ➢ Edad
 ➢ Nacionalidad
 Luego debe mostrar en la página el siguiente mensaje: “Gracias por ingresar la información solicitada, necesitamos por favor la corrobore
 Su nombre es: (colocar el nombre y el apellido)
 Su edad es: (colocar la edad)
 Su nacionalidad es: (colocar su nacionalidad)"
 */

let name = prompt ("Ingrese su nombre y apellido: ");
let age = parseInt(prompt("Ingrese su edad: "));
let nationality = prompt ("Ingrese su nacionalidad: ");

document.write ("Gracias por ingresar la información solicitada, necesitamos por favor corrobore." + "<br/> Su nombre completo es: " + name +"<br/> Su edad es: " + age + "<br/> Su nacionalidad es: " + nationality );

/* NOTA: 
para el salto de linea en document.write se utiliza <br/> porque se está haciendo referencia a un archivo HTML */