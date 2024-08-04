/* Pedir primero el ingreso de un nombre mediante el uso de prompt(); luego pedir un apellido, también usando prompt(); por último mostrar usando un alert() el mensaje “Su apellido y nombre es: apellido, nombre”, reemplazando apellido por el apellido ingresado y nombre por el nombre ingresado.
3. Pedir un número mediante prompt(),  y a continuación usando un alert(), informar el resultado de elevarlo al cuadrado. */

let nombre = prompt ("Ingrese su nombre: ");    // variable let con un prompt que pide un dato al ususario en una ventana emergente 
let apellido = prompt ("Ingrese su apellido: ");
    alert ("Su apellido y nombre es: " + apellido + " " + nombre); // alert es un pop up que salta como ventana emergente cuando el usuario completa el prompt
let exponenciacion = parseInt(prompt ("Dame un numero para elevarlo al cuadrado: ")); // parseInt transforma al prompt en un entero
    alert ("El número ingresado es el siguiente: " + exponenciacion + " y elevado al cuadrado es: " + (exponenciacion ** 2)); // ** pone como exponente al número ingresado


// Algoritmos: es una serie de pasos ORDENADOS, PRECISOS y FINITOS
let entrada = prompt ("Ingresar una letra");
let salida = "Letra ingresada: " + " " + entrada;
alert(salida);