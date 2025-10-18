/*

JS Maneja Variables del siguiente modo:
var -> una variable de acceso local y global dependiendo de donde se declare (Notas mias: Var se puede sobreescribir tantas veces como sea necesario)
let -> es una variable "protegida", solo se puede hacer uso dentro de la funcion o bloque donde se declara 
const -> es una variable que no puede cambiar su valor, es decir una constante

var x = "hola";
if(true){
let x = "habia una vez"
console.log(x);
}


//Como usamos las funciones

function suma(n1,n2){
    return n1+n2;
}
console.log(`Esta suma es de: ${suma(5,3)}`)

//Las funciones flechas nos ayudan a poder realizar operaciones de una forma mucho mas sencilla de acuerdo a la siguiente estructura:
//"cadena" -> id,clase,metodo,nombre,atributo

const suma = (n1,n2) => n1+n2;
console.log(`Esta suma es de: ${suma(5,3)}`)

//Formas de recorrer e imprimir un arreglo
//For
for(let i = 0; i> razasDePerros.length; i++){
    console.log(razasDePerros[i]);
}

//for of
for(const raza of razasDePerros){
    console.log(raza);
}

//For in
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}


//foreach itera sobre los elementos del arreglo y no devuelve nada 
//Todos los for each son funciones flecha por defecto
razasDePerros.forEach(raza => console.log(raza))



//la estructura general del foreach es la siguiente:
//argumento.foreach((raza, indice, arreglo)=> {codigo a ejecutar})

razasDePerros.forEach((raza,indice,arreglooriginal) => console.log((indice +  " " + raza)))

//Funcion map: itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar
const razasDePerrosMayusculas = razasDePerros.map(raza=> raza.toUpperCase());
console.log(razasDePerrosMayusculas);

//find: nos permite realizar una busqueda de un elemento dentro del arreglo, si lo encuentra, lo retorna si no lanza un "undefined"
if(razasDePerros.find(raza=> raza === "Chihuahua")){
    console.log("Si se encontro la raza")
    console.log(razasDePerros)
}else{
    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}

const razasDePerros = [
    "Pastor Alemanl",
    "Labrador Retriever",
    "Bulldog",
    "Beagle",
   "Chihuahua",
    "Dalmata",
    "Salchicha",
    "Pug"
];                  


//Findindex : lo mismo que find pero regresa el indice del elemento, si no regresa un -1, esta funcion es particularmente util cuando necesitamos modificar o eliminar de un 
// arreglo original dentro de una copia del mismo
const indiceChihuahua = razasDePerros.findIndex(raza => raza === "Chihuahua");
if(indiceChihuahua > -1){
    console.log(razasDePerros[indiceChihuahua])
    razasDePerros[indiceChihuahua] += "Es una raza de perros chiquita y chillona"
    console.log(razasDePerros[indiceChihuahua])
    console.log(razasDePerros)
}

*/ 

//Problema 1:
function validarn(e){
    var teclado = (document.all) ? e.keycode : e.which
    if(teclado === 8) return true;
    var regex = /[0-9\d.]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);
}

function problema1(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var resultado=0;
    if(!isNaN(num1) && !isNaN(num2)){
    if(num1===num2){
      resultado = num1*num2  
    }else{
    num1>num2 ? resultado = num1-num2 : resultado = num1+num2
    }
    document.getElementById("output_p1").textContent = "El resultado es: " + resultado.toFixed(2)
    }else{
        alert("Por favor rellene los campos")
    }
}

function problema2(){
    var num1 = parseFloat(document.getElementById("n1_p2").value);
    var num2 = parseFloat(document.getElementById("n2_p2").value);
    var num3 = parseFloat(document.getElementById("n3_p2").value);
    if(!isNaN(num3) && !isNaN(num3) && !isNaN(num3)){
    var arreglonums = [num1,num2,num3];
    var resultado = Math.max(...arreglonums)
    document.getElementById("output_p2").textContent = "El numero mayor es: " + resultado.toFixed(2);
    }else{
        alert("Por favor rellene los campos")
    }
}

function validarne(e){
    var teclado = document.all ? e.keycode : e.which;
    if(teclado === 8) return true;
    var regex = /[0-9\d]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo)
}

function problema3(){
    var sueldobase = parseFloat(document.getElementById("sueldob").value)
    var horas = parseFloat(document.getElementById("horasb").value)
    var total=0;
    if(!isNaN(sueldobase) && !isNaN(horas)){
    if(horas-40>0){
        total= sueldobase*40
        if(horas-48>0){
            var horaspor3 = horas-48
            total = total + horaspor3*(sueldobase*3) + 8*(sueldobase*2);
        }
        if(horas-40 > 0 && horas-40<=8){
            total = total + (horas-40)*(sueldobase*2);
        }
    }else{
        total = horas*sueldobase;
    }
    document.getElementById("output_p3").textContent = "Su sueldo final es: " + total.toFixed(2)
    }else{
     alert("Por favor rellene los campos")   
    }
}

function problema4(){
    var nummeses = parseFloat(document.getElementById("nmeses").value)
    var sueldobase = parseFloat(document.getElementById("sueldobp4").value)
    if(!isNaN(nummeses) && !isNaN(sueldobase)){
    var tiempoempresa = nummeses/12;
    var utilidadanual =0;
    if(tiempoempresa<1){
        utilidadanual = sueldobase*0.05;
    }
    if(tiempoempresa>=1 && tiempoempresa<2){
        utilidadanual = sueldobase*0.07;
    }
    if(tiempoempresa>=2 && tiempoempresa<5){
        utilidadanual = sueldobase*0.1;
    }
    if(tiempoempresa>=5 && tiempoempresa<10){
        utilidadanual = sueldobase*0.15;
    }
    if(tiempoempresa>=10){
        utilidadanual = sueldobase*0.2;
    }
    document.getElementById("output_p4").textContent = "Su reparto de utilidad anual es: " + utilidadanual.toFixed(2)
    }else{
     alert("Por favor rellene los campos")   
    }
}
