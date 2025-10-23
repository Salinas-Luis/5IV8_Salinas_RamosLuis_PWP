var instrucciones = [
    "Utiliza las flechas de navegacion para mover las piezas, ",
    "Para ordenar las piezas guíate por la imagen Objetivo"
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

//funcion para saber si gano
function checkwin(){
    for(var j=0; j<rompe.length; j++){
        for(var k=0; k<rompe[j].length; k++){
            var rompeActual = rompe[j][k];
            if(rompeActual !== rompeCorrecta[j][k]){
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
    var auxiliar = rompe[filaPos1][columnaPos1];
    rompe[filaPos1][columnaPos1] = rompe[filaPos2][columnaPos2];
    rompe[filaPos2][columnaPos2] = auxiliar;
}

//se encarga de saber donde esta la pieza vacia
function actualizarPosicionVacia(nuevaFila,nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna
}

//necesitamos tambien limitar las posiciones de rompecabezas

function posicionValida(fila,columna){
    return (fila >=0 && fila <=2 && columna >=0 && columna <=2)
}

//debemos crear una funcion que se encargue del movimiento detectando el evento de las flechas de navegacion. debemos crear una matriz de identificaciones de movimiento para eos, arriba: 38, abajo: 40, izquierda: 37, derecha:39
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    ABAJO: 40,
    DERECHA: 39
}
function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //Si se mueve
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;        
    }else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;        
    }else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;        
    }
    //Mando a llamar a que la posicion sea valida
    if(posicionValida(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)){
        intercambiarPosiciones(filaVacia,columnaVacia,nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)
        actualizarPosicionVacia(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)
        //tengo que guardar el ultimo movimiento
        actualizarUltimoMovimiento(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1,fila2, columna2){
    var pieza1 = rompe[fila1][columna1]
    var pieza2 = rompe[fila2][columna2]

    //intercambio ya debe ser en html
    intercambiarPosicionesRompe(fila1,columna1,fila2,columna2)
    intercambiarPosicionesDOM('pieza'+ pieza1,'pieza' + pieza2);

}
function intercambiarPosicionesDOM(idPieza1,idPieza2){
    var elementoPieza1  = document.getElementById(idPieza1);
    var elementoPieza2  = document.getElementById(idPieza2);

    var padre1 = elementoPieza1.parentNode;
    var padre2 = elementoPieza2.parentNode;
    var clonElemento1 = elementoPieza1.cloneNode(true);
    var clonElemento2 = elementoPieza2.cloneNode(true);

    //reemplazar los padres con sus clones
    padre1.replaceChild(clonElemento2,elementoPieza1)
    padre2.replaceChild(clonElemento1,elementoPieza2)
}

//  Debo de actualizar los movimientos en el DOM
function actualizarUltimoMovimiento(direccion){
    var ultimoMovimiento = document.getElementById("flecha");
    switch(direccion){
        case codigosDireccion.ARRIBA: 
            ultimoMovimiento.textContent = "↑";
            break;
            case codigosDireccion.IZQUIERDA: 
            ultimoMovimiento.textContent = "←";
            break;
            case codigosDireccion.DERECHA: 
            ultimoMovimiento.textContent = "→";
            break;
            case codigosDireccion.ABAJO: 
            ultimoMovimiento.textContent = "↓";
            break;        
    }
}

//poder mezclar todas las piezas
function mezclarPiezas(veces){
    if(veces <=0){
        alert("Asi no se puede");
        return;
    }
    var direcciones = [codigosDireccion.ABAJO,codigosDireccion.ARRIBA,codigosDireccion.IZQUIERDA,codigosDireccion.DERECHA]
    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);
    setTimeout(function(){
        mezclarPiezas(veces-1);
    }, 100);
}

//necesitamos saber que teclas se estan oprimiendo
function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.IZQUIERDA || evento.which === codigosDireccion.DERECHA ){
            moverEnDireccion(evento.which);
            //saber si gano
            var gano = checkwin();
            if(gano){
                setTimeout(function(){
                   mostrarCartelGanador(); 
                }, 500)
            }
            evento.preventDefault();
        }
    });
}

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}
iniciar();