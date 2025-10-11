function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarm(e){ //valida que los meses solo sean numeros enteros sin espacios 
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}



 //Funcion para calcular el interes
 //Delimitar numero de decimales

function interes(){
    var valor = document.getElementById("cantidadi").value;
    var nummeses = document.getElementById("cantidadm").value;
    var parseo = parseFloat(valor);

    if(nummeses>=1 && nummeses<=18 && parseo>0 ){ //valida que los meses esten entre 1 y 18
    for(var i=0; i<nummeses; i++){
        var interes = parseo*0.02.toFixed(2);
        var parseo= parseo+interes;
    }
    document.getElementById("saldoi").value = "$ " + parseo.toFixed(2);
    }
    parseo>0 ? "" : alert("Ingrese un numero mayor a 0");
    nummeses>=1 && nummeses<=18 ? "" : alert("Por favor, Ingrese entre 1 y 18 meses");
}

function borrari(){
    document.getElementById("cantidadi").value = "";
    document.getElementById("saldoi").value = "";
}

/*Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses*/
/*EJ 2: Se deben ingresar 3 ventas, un sueldo base y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma total*/
/*EJ 3: Se debe ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, el precio, descuento, total a pagar*/
/*Se debe de ingresar calificacion 1, 2, 3, se aplican el promedio y su porcentaje, se ingresa trabajo final y se aplica % y examen final y se aplica el %, se debe de mostrar el total
de calificacion*/
/*Se debe de ingresar cantidad de hombres y mujeres y mostrar sus porcentajes correspondientes*/
/**/