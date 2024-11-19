//DECLARO VARIABLES PARA ESTE PROCESO//

//1. Algoritmo que realiza la suma entre dos valores ingresados//
function suma () {

    // Declaro variables//

    let a;
    let b;
    let suma;

    //Solicito valores al usuario//
    a = parseInt(prompt ("Ingrese el primer valor: "));
    b = parseInt(prompt ("Ingrese el segundo valor: "));

    //Realizar la operación//

    s = a + b;

    //Mostrar el resultado//
    
    console.log (" El resultado de la suma es: " + s);
    alert ("El resultado de la suma es: " + s)

}

//Algoritmo que determina la suma, resta, multiplición y división entre dos valores ingresados por el usuario//

function opbasicas () {

    
    // Declaro variables//

    let a;
    let b;
    let s;
    let r;
    let m;
    let d;

    //Solicito valores al usuario//
    a = parseInt(prompt ("Ingrese el primer valor: "));
    b = parseInt(prompt ("Ingrese el segundo valor: "));

    //Realizar la operación//

    s = a + b;
    r = a - b;
    m = a * b;
    d = a / b;

    //Mostrar el resultado//
    
    console.log (" El resultado de la suma es: " + s);
    alert ("El resultado de la suma es: " + s);

    console.log (" El resultado de la resta es: " + r);
    alert ("El resultado de la resta es: " + r);

    console.log (" El resultado de la multiplicación es: " + m);
    alert ("El resultado de la multiplicación es: " + m);

    console.log (" El resultado de la division es: " + d);
    alert ("El resultado de la division es: " + d);

}

//3. Realizar un algoritmo que determine el cuadrado de un número ingresado por el usuario//

function Cuadrado () {

     // Declaro variables//

     let a;


    //Solicito valores al usuario//
    a = parseInt(prompt ("Ingrese el número al que desea sacarle el cuadrado: "));


    //Realizar la operación//
    a = a**2;

    //Mostrar resultado de la operación//

    console.log (" El resultado de su número elevado al cuadrado es: " + a);
    alert ("El resultado de su número elevado al cuadrado es:  " + a);


}

//4. Realizar un algoritmo que determine el área de un triangulo a partir de la base y altura ingresadas por el usuario//

function AreaTri () {

    // Declaro variables//
    let a;
    let b;
    let t;


    //Solicito valores al usuario//
    b = parseInt(prompt ("Ingrese el valor correspondiente a la base del triangulo: "));

    a = parseInt(prompt ("Ingrese el valor correspondiente a la altura  del triangulo: "));

    //Realizar la operación//

    t = b*a/2

    //Mostrar resultado de la operación//

    console.log ("El área del triangulo según los valores ingresados es: " + t);
    alert ("El área del triangulo según los valores ingresados es: " + t);


}

//5. Realizar un algoritmo que determine  los kilometros, pulgadas y metros de un valor dado en centimetros//

function Medidas() {

    // Declaro variables//
    let cm;
    let km;
    let mt;
    let pg;


    //Solicito valores al usuario//
    cm = parseInt(prompt ("Ingrese el valor en cm que desea convertir"));

    

    //Realizar la operación//

    km = cm/100000;
    mt = cm/100;
    pg = cm/2.54;


    //Mostrar resultado de la operación//

    console.log ("El valor ingresado convertido a kilometros es: " + km);
    alert ("El valor ingresado convertido a kilometros es: " + km);

    
    console.log ("El valor ingresado convertido a metros es: " + mt);
    alert ("El valor ingresado convertido a metros es: " + mt);

    console.log ("El valor ingresado convertido a pulgadas es: " + pg);
    alert ("El valor ingresado convertido a pulgadas es: " + pg);

}


//6. Realizar un algoritmo que determine el número mayor de dos numeros ingresados por el usuario//

function NumMayor () {

    // Declaro variables//

    let num1;
    let num2
    let numay;


   //Solicito valores al usuario//
   num1 = parseInt(prompt ("Ingrese el primer número: "));
   num2 = parseInt(prompt ("Ingrese el segundo número: "));


   //Realizar la operación//
   if (num1 > num2) {
    numay=num1;
   } else if (num2 > num1) {
    numay=num2;
   } else {
    numay= "Ambos números son iguales"
   }

   //Mostrar resultado de la operación//

   console.log (" El número mayor es " + numay);
   alert (" El número mayor es " + numay);

}



//7. Realizar un algoritmo que determine el número menor de tres números ingresados por el usuario//

function NumMenor () {

    // Declaro variables//

    let num1;
    let num2;
    let num3;
    let numen;


   //Solicito valores al usuario//
   num1 = parseInt(prompt ("Ingrese el primer número: "));
   num2 = parseInt(prompt ("Ingrese el segundo número: "));
   num3 = parseInt(prompt ("Ingrese el tercer número: "));


   //Realizar la operación//
   if ((num1<num2) && (num1<num3)){
        numen=num1;
        console.log (" El número menor es " + num1);

   } else if ((num2<num1) && (num2<num3)) {
        numen=num2;
        console.log (" El número menor es " + num2);

   } else if ((num3<num1) && (num3<num2)) {
        numen=num3;
        console.log (" El número menor es " + num3);

   } else {
        console.log ("los numeros ingresados son iguales");
   }


}

//8. Realizar un algoritmo que solicite al estudiante, su nombre, la materia y 8 calificaciones de la misma entre 1 y 10 
//determinar si el estudiante aprobo o Reprobo, teniendo en cuenta que se aprueba con 6.2 en adelante//

function EvEstudiante() {

    // Declaro variables //
    var nombre;
    var materia;
    var calificacion;
    var suma;
    var promedio;
    var resultado;
    var i;

    // Inicializo variables //
    suma = 0;
    i = 1;

    // Solicito valores al usuario //
    nombre = prompt("Ingrese el nombre del estudiante:");
    materia = prompt("Ingrese el nombre de la materia:");

    // Solicitar las 8 calificaciones //
    while (i <= 8) {
        calificacion = parseFloat(prompt("Ingrese la calificación " + i + " (entre 1 y 10):"));

        // Validar que la calificación esté entre 1 y 10 //
        if (calificacion >= 1 && calificacion <= 10) {
            suma = suma + calificacion;  // Sumar la calificación a la suma total
            i = i + 1; // Incrementar el contador
        } else {
            alert("Calificación inválida. Debe ser un número entre 1 y 10.");
        }
    }

    // Realizar la operación //
    promedio = suma / 8;

    // Determinar si el estudiante aprobó o reprobó //
    if (promedio >= 6.2) {
        resultado = "aprobó";
    } else {
        resultado = "reprobó";
    }

    // Mostrar resultado de la operación //
    console.log("Estudiante: " + nombre);
    console.log("Materia: " + materia);
    console.log("Promedio: " + promedio);
    console.log("Resultado: El estudiante " + resultado);
    
    alert("Estudiante: " + nombre + "\nMateria: " + materia + "\nPromedio: " + promedio + "\nResultado: El estudiante " + resultado);

}


//9. Realizar un algoritmo que determine si el numero ingresado por el usuario es par o impar//

function Nuimpar() {
    // Declaro variables //
    let numero;
    let resultado;

    // Solicito valores al usuario //
    numero = parseInt(prompt("Ingrese un número para determinar si es par o impar:"));

    // Realizar la operación //
    if (numero % 2 === 0) {
        resultado = "El número es par.";
    } else {
        resultado = "El número es impar.";
    }

    // Mostrar resultado de la operación //
    console.log(resultado);
    alert(resultado);
}


//10.Un individuo desea invertir su capital en un baco y requiere saber cuanto dinero ganara despues de n numero de años
//teniendo en cuenta que el banco paga un interes mensual del 0,7%//

function CalcularGanancia() {
    // Declaro variables //
    let capitalInicial;
    let años;
    let meses;
    let tasaInteresMensual;
    let gananciaTotal;
    let totalInvertido;

    // Inicializo variables //
    tasaInteresMensual = 0.007; // 0.7% en decimal

    // Solicito valores al usuario //
    capitalInicial = parseFloat(prompt("Ingrese el capital inicial que desea invertir:"));
    años = parseInt(prompt("Ingrese el número de años que desea invertir:"));

    // Calcular el total de meses de inversión //
    meses = años * 12;

    // Calcular el total invertido utilizando un bucle simple para calcular el interés compuesto //
    totalInvertido = capitalInicial; // Comenzamos con el capital inicial

    for (let i = 0; i < meses; i++) {
        totalInvertido += totalInvertido * tasaInteresMensual;
    }

    // Calcular la ganancia total //
    gananciaTotal = totalInvertido - capitalInicial;

    // Calcular el total (inversión + ganancia) //
    let totalConGanancia = capitalInicial + gananciaTotal;

    // Mostrar resultado de la operación //
    console.log("Ganancia total después de " + años + " años es: " + gananciaTotal);
    console.log("Total de la inversión inicial más la ganancia es: " + totalConGanancia);
    alert("Ganancia total después de " + años + " años es: " + gananciaTotal +
          "\nTotal de la inversión inicial más la ganancia es: " + totalConGanancia);
}


//11.Realizar un algoritmo que solicite al usuario un rango entre 2 valores y muestre los numeros que hay entre ellos//

function MostrarRango() {
    // Declaro variables //
    let numInicio;
    let numFin;
    let resultado = "";

    // Solicito valores al usuario //
    numInicio = parseInt(prompt("Ingrese el número de inicio del rango:"));
    numFin = parseInt(prompt("Ingrese el número de fin del rango:"));

    // Verifico que el rango es correcto //
    if (numInicio < numFin) {
        // Realizo la operación y muestro los números en el rango //
        for (let i = numInicio + 1; i < numFin; i++) {
            resultado += i + "\n"; // Acumulo los números en la variable resultado
        }
        // Mostrar los números en un alert //
        alert("Los números entre " + numInicio + " y " + numFin + " son:\n" + resultado);
    } else {
        alert("El número de inicio debe ser menor que el número de fin.");
    }
}




//12. MOSTRAR TABLA DE MULTIPLICAR//

function calcularDiasEntreFechas() {
    // Pedir las fechas al usuario
    let fecha1 = prompt("Ingresa la primera fecha en formato DD/MM/AAAA:");
    let fecha2 = prompt("Ingresa la segunda fecha en formato DD/MM/AAAA:");

    // Dividir las fechas en partes (día, mes, año)
    let partesFecha1 = fecha1.split("/"); // Dividir usando "/"
    let partesFecha2 = fecha2.split("/");

    // Crear las fechas en formato Date (año, mes-1, día)
    let fechaInicio = new Date(partesFecha1[2], partesFecha1[1] - 1, partesFecha1[0]);
    let fechaFin = new Date(partesFecha2[2], partesFecha2[1] - 1, partesFecha2[0]);

    // Verificar si las fechas son válidas
    if (isNaN(fechaInicio) || isNaN(fechaFin)) {
        alert("Una de las fechas es inválida. Por favor ingresa las fechas en formato DD/MM/AAAA.");
        return; // Salimos de la función
    }

    // Calcular la diferencia en milisegundos
    let diferenciaMilisegundos = Math.abs(fechaFin - fechaInicio);

    // Convertir la diferencia a días
    let diasDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24);


    alert("La diferencia entre las fechas es de " + diasDiferencia + " días.");
}




//13. CALCULADORA DE EDAD//

function CalculadoraEdad() {
    // Declaro variables //
    let nombre;
    let fechaNacimiento;
    let edad;

    // Solicito el nombre al usuario //
    nombre = prompt("¿Cuál es tu nombre?");

    // Solicito la fecha de nacimiento al usuario //
    fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (formato: YYYY-MM-DD)");

    // Convertir la fecha de nacimiento a un objeto Date //
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();

    // Calcular la edad //
    edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

    // Verificar si ya cumplió años este año //
    if (
        fechaActual.getMonth() < fechaNacimientoDate.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoDate.getMonth() && fechaActual.getDate() < fechaNacimientoDate.getDate())
    ) {
        edad--; // Restar un año si aún no ha cumplido años
    }

    // Mostrar el resultado de la operación //
    alert(nombre + ", tu edad es: " + edad + " años.");
}





