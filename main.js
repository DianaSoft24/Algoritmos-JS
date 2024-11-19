//TIPOS DE DATOS: Primitivos//

let nombre = "Diana"; //Declaramos e inicializamos la variable nombre//
let edad = 27;
let MayorEdad = true;
let vacio = null;
let xyz;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof MayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);


//TIPOS DE DATOS: Compuestos o Complejos//

let frutas = ["Pera", "Manzana", "Sandia"]; //Sera de tipo objeto o arreglo//
console.log(typeof frutas);

let autos = {
    marca :"Mazda",
    modelo : 2024,
    color : "Azul",
    placa : "25f5tJU",
    tipo : "camioneta",
    UnicoDueño: true 

}

console.log(typeof autos);

console.log ("Hola " + nombre + "Tienes " + edad + " Años");


//ESTRUCTURAS CONDICIONALES//


console.log ("*************************************************************************")

let calificacion = 25;

if (calificacion >= 90) {
    console.log ("Muy buen trabajo " + nombre + "tu nota fue " + calificacion);
}

else if (calificacion >=70) {
    console.log ("Aprobaste " + nombre + " tu nota es " + calificacion);
}

else if  (calificacion>=50) {
    console.log ("Reprobaste, " + nombre + "  tu nota fue " + calificacion)
}

else {
    console.log ("Tremendo pendejo, " + nombre + " tu nota fue " + calificacion)
}

console.log ("*************************************************************************")

//SWITCH CASE//

let dia = "diana";
switch (dia) {

    case "Lunes":
        console.log ("Empezando semana")
        break;


    case "Martes":
        console.log ("Primer dia de tortura")
        break;

    case "Miercoles":
        console.log ("Segundo dia de tortura")
        break;

    case "Jueves":
        console.log ("Juerneeeesss")
        break;

    case "Viernes":
        console.log ("Que no me esperen en la casa")
        break;

    case "Sabado":
        console.log ("A huevo descansito")
        break;

    case "Jueves":
        console.log ("No es un dia de la semana")
        break;

    default:
        console.log ("No es un dia de la semana")
        break;
}


console.log ("*************************************************************************")

//ESTRUCTURAS DE BUCLE//

//While//
let numero = 1;

while (numero <= 10 ){ 
    console.log ("Ahora el número es: " + numero);
    numero = numero+1;

}

console.log ("*************************************************************************")

//let i = 10;//

for (let i = 100; i >= 0; i = i-5) {
    console.log ("Este es el número " + i)
    
}

console.log ("*************************************************************************")

//FUNCIONES//

function suma(valor1, valor2) {
    return valor1+valor2;

}

let resultado = suma(8,24);

console.log = ("El resultado es " + resultado);