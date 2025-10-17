var instrucciones = [
    "Utiliza las flechas de navegacion para mover las piezas, ",
    "Para ordenar las piezas guiate por la imagen Objetivo"
]

//Vamos a guardar dentro de una variable los movimientos del rompecabezas
var movimientos = [

]

//Vamos  crear una matriz para saber las posiciones del rompecabezas

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//vamos a tener que crear una matriz donde tengamos las posiciones correctas

var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//Necesito saber las coordenadas de la pieza vacia 

var filaVacia = 2;
var columnaVacia = 2;

//Necesitamos ahora si una funcion que se encargue de mostrar las instrucciones

function mostrarInstrucciones(instrucciones){
    for(var i=0; i<instrucciones.length; i++){
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
}

//esta funcion se encarga de crear el componente li y agregar la lista de dichas instrucciones

function mostrarInstruccionesLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//Mandamos traer a la funcion 
mostrarInstrucciones(instrucciones);

function iniciar(){
    //Mezclar las piezas 
    //Capturar el ultimo movimiento
}

//funcion para saber si gano
function checkwin(){
    for(var j=0; j<rompe.length; j++){
        for(var k=0; k<rompe[i].length; k++){
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//mostrar en html si se gano
function mostrarCartelGanador(){
    if(checkwin()){
        alert("Ganaste");
    }
    return false;
}

/* Necesitamos una funcion que se encargue de poder intercmbiar las posiciones de la pieza vacia vs cualquiera, para esto tenemos que hacer el uso de: 
    arreglo[][]  = posicion[][]
    //intercambiar
    posicion[][]  = arreglo[][]
*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1,filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1,columnaPos1]
    var pos2 = rompe[filaPos2,columnaPos2]

    //intercambio
    rompe[filaPos1,columnaPos1] = pos2;
    rompe[filaPos2,columnaPos2] = pos1
}
