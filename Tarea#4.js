//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar

var precio_base = 2000


//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

//Recargo de pareja
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
//Se recarga el 20% por cada hijo

//Recargo
var recargo =0
var recargo_total = 0  

// Precio final
var precio_final = 0 //Igual a recargo total + precio base
var cotizar = prompt("¿Desea hacer una cotización?") 
while(("SI") == cotizar.toUpperCase())
{
//Al responder si, se ejecuta
//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese un nombre y apellido")
var edad = prompt("Ingrese su edad actual en números (20,25,30, etc)");
var edad_numero = parseInt(edad)
//Convierte las edades a números
if (edad<18)
{
alert("Debe ser mayor de 18 años")
}
else if(edad>18 && edad<24)
  //Debe ser mayor de edad; si se cumple calcular recargo
  //Debe ser menor de 25 años 
{
  //Calcular recargo en base a la edad
  recargo = precio_base * edad_18 
  // edad*0.1 = 10%
  //Sumar recargos de edad
  recargo_total = recargo_total + recargo
}
else if(edad>25 || edad<49)
//Rango de edad entre 25 a 49 años
{
//Calcular recargo en base a la edad
 recargo = precio_base * edad_25
// edad*0.2 = 20%
//sumar recargos obtenidos
recargo_total = recargo_total + recargo
}
else (edad>=50)
//Personas mayores de 50 años
{
recargo = precio_base * edad_50
//edad*0.3 = 30%
//sumar recargos calculados
recargo_total= recargo_total + recargo
}
//Si el asegurado tien empleo entonces:
var empleo = prompt("¿Tiene usted empleo?")

if( "SI" == empleo.toUpperCase())
{
  var salario = prompt("¿De cuánto es su salario devengado?") 
  recargo = salario * 0.05
//sumar recargos
recargo_total = recargo_total + recargo
}
//Si el asegurado tiene propiedades
var propiedad = prompt("¿Tiene usted propiedades")

if("SI" == propiedad.toUpperCase())
{
var propiedad_numero=prompt("¿Cuántas propeidades posee?")
calcular_recargo=(propiedad_numero*35)
recargo = (precio_base * calcular_recargo)
recargo_total=recargo_total + recargo
}
var estado_civil = prompt("¿Está casado/a actualmente?")
if("SI" == estado_civil.toUpperCase())
{
var edad_conyuge = prompt("¿Qué edad tiene su conyuge?")

if(edad_conyuge>=18 && edad_conyuge<=24)
{
  //Cacular el recargo en base a la edad
  recargo = precio_base * casado_18// *0.1=10%
  //Sumar recargos
  recargo_total = recargo_total + recargo
}
else if(edad_conyuge>=25 && edad_conyuge<=49)
{
//Cacular el recargo en base a la edad
  recargo = precio_base * casado_25// *0.2=20%
  //Sumar recargos
  recargo_total = recargo_total + recargo
}
else (edad_conyuge>50)
{
  //Cacular el recargo en base a la edad
  recargo = precio_base * casado_50// *0.2=30%
  //Sumar recargos
  recargo_total = recargo_total + recargo
}
}
//Calculo de recargo por hijos
var hijos = prompt("¿Tiene usted hijos?")
if ("SI"== hijos.toUpperCase())
{
  var cantidad_hijos = prompt("¿Cuántos hijos tiene?")
  if(cantidad_hijos>=1 && cantidad_hijos>2)
{
  //Cacular el recargo en base a la cantidad de hijos
  recargo = precio_base * 0.2 //20%
  //Sumar recargos
  recargo_total = recargo_total + recargo
}
}
precio_final = recargo_total + precio_base
alert ("Para el asegurado" + nombre)
alert("el recargo total es" + recargo_total)
alert("el precio final es de:" + precio_final)
}
{
  cotizar= prompt("¿Desea hacer otra cotización?")
}
  alert("Diana Garcia_23004864")
