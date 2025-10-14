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
*/ 
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


