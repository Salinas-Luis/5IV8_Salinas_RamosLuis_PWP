//PROBLEMA 1 JS
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
    var patron = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

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
    document.getElementById("cantidadm").value="";
}




//PROBLEMA 2 JS

function validars(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if(teclado == 8) return true;
    var regex = /[0-9\d.]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);
}

function calculartotal(){
    var sueldobase= parseFloat(document.getElementById("sueldob").value);
    var totalcomision =0;
    const ventas= [parseFloat(document.getElementById("venta1").value),parseFloat(document.getElementById("venta2").value),parseFloat(document.getElementById("venta3").value)];
    const ventasc = [];
    if(sueldobase>0 && ventas.every(e => e>0)){
    for (var i=0; i<ventas.length; i++){
        ventasc[i]=ventas[i]*0.1;
        totalcomision = ventasc[i] + totalcomision; //total de las 3 comisiones
    }
    var sueldototal = sueldobase + totalcomision;
    document.getElementById("output_texto").innerHTML= "Comision por ventas: " + "<br>" + " Venta 1: $" + ventasc[0] + "<br>" + " Venta 2: $" + ventasc[1] + "<br>" + " Venta 3: $" + ventasc[2] + "<br>" + " Sueldo total: $" + sueldototal;
    }
    sueldobase>0 ? "" : alert("Ingrese un sueldo mayor a 0");
    ventas.every(e => e>0) ? "" : alert("Verifique que todos los montos de venta sean mayor a 0");
}

function borrarp2(){
    document.getElementById("sueldob").value = "";
    document.getElementById("venta1").value = "";
    document.getElementById("venta2").value = "";
    document.getElementById("venta3").value = "";
    document.getElementById("output_texto").textContent = "Esperando datos...";
}

//PROBLEMA 3 JS

function calculardescuento(){
    var producto = document.getElementById("nombrep").value
    var precio = parseFloat(document.getElementById("preciop").value);
    if(precio>0){
    var descuento = precio*0.15;
    var preciototal = precio+descuento;
    document.getElementById("output_textop3").innerHTML = "Nombre de producto: " + producto + "<br>" + "Precio: $" + precio + "<br>" + "Descuento: $" + descuento + "<br>" + "Precio final: $" + preciototal;
    }else{
        alert("Ingrese un numero mayor a 0 por favor")
    }
}

function borrarp3(){
    document.getElementById("nombrep").value = "";
    document.getElementById("preciop").value = "";
    document.getElementById("output_textop3").textContent = "Esperando datos...";
}


//PROBLEMA 4 JS

function calcularcalificacion(){
    const parciales = [parseFloat(document.getElementById("ca1").value),parseFloat(document.getElementById("ca2").value),parseFloat(document.getElementById("ca3").value)]
    var caliexa = parseFloat(document.getElementById("caexamen"));
    var calitrabajo = parseFloat(document.getElementById("catrabajo"));
    var parcialesporcentaje=0;
    var exaporcentaje =0;
    var traporcentaje=0;

    if(caliexa>=0 && caliexa<=10 && calitrabajo>=0 && calitrabajo<=10 && parciales.every(e => e>=0 && e<=10)){
    parcialesporcentaje = (parciales[0]+parciales[1]+parciales[2]*55)/30;
    exaporcentaje= caliexa*30/10;
    traporcentaje= calitrabajo*15/10;
    alert(exaporcentaje);
    alert(traporcentaje);
    alert(parcialesporcentaje);
    }
}

    function borrarp4(){
    document.getElementById("ca1").value = "";
    document.getElementById("ca2").value = "";
    document.getElementById("ca3").value = "";
    document.getElementById("caexamen").value = "";
    document.getElementById("catrabajo").value = "";
    document.getElementById("output_textop4").textContent = "Esperando datos...";
    }


    //PROBLEMA 5 JS

    function calcularporcentaje(){
        var numhombres = parseFloat(document.getElementById("numh").value);
        var nummujeres = parseFloat(document.getElementById("numm").value);
        var totalpersonas=0;
        var porcentajehombres=0;
        var porcentajemujeres=0;
        if(numhombres>=0 && nummujeres>=0){
            totalpersonas=nummujeres+numhombres;
            porcentajehombres=(numhombres/totalpersonas)*100;
            porcentajemujeres=(nummujeres/totalpersonas)*100;
            document.getElementById("output_textop5").innerHTML= "Porcentaje de hombres: " + porcentajehombres + "%" + "<br>" + "Porcentaje Mujeres: "+ porcentajemujeres + "%"
        }else{
            if(numhombres<0){
                alert("Ingrese un numero mayor a 0 en los hombres")
            }
            if(nummujeres<0){
             alert("Ingrese un numero mayor a 0 en las mujeres")
            }
        }
    }
    function borrarp5(){
        document.getElementById("numh").value = "";
        document.getElementById("numm").value= "";
        document.getElementById("output_textop5").textContent = "Esperando datos...";
    }

    //PROBLEMA 6 JS

    function calcularedad(){
        const fechanacimiento = document.getElementById("fechanacimiento").value
        const fechanacimientobjeto = new Date(fechanacimiento);
        const mes = fechanacimientobjeto.getUTCMonth() + 1;
        const año = parseFloat(fechanacimientobjeto.getUTCFullYear());
        const dia = fechanacimientobjeto.getUTCDate();
        const fechaactual = new Date();
        const mesactual= fechaactual.getUTCMonth()+1;
        const añoactual= parseFloat(fechaactual.getUTCFullYear());
        const diaactual= fechaactual.getUTCDate();
        var edad=0;
        if((añoactual-año)<122 && año<añoactual){ //La maxima edad que ha logrado la humanidad son 122 años
            edad=añoactual-año;
            if(mesactual<mes || messactual===mes && diaactual < dia){
                edad=edad-1;
            }
            document.getElementById("output_textop6").innerHTML="La edad que tienes es: " + edad + " años"
        }else{
            if(año>añoactual){alert("Ingrese un año pasado, no posterior")}else{
                if((añoactual-año)>=122){alert("Ingrese una edad inferior a 122 años")}
            }
        }
    }

    function borrarp6(){
        document.getElementById("fechanacimiento").value="";
        document.getElementById("output_textop6").textContent = "Esperando datos...";
    }
/*Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses*/
/*EJ 2: Se deben ingresar 3 ventas, un sueldo base y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma total*/
/*EJ 3: Se debe ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, el precio, descuento, total a pagar*/
/*Se debe de ingresar calificacion 1, 2, 3, se aplican el promedio y su porcentaje, se ingresa trabajo final y se aplica % y examen final y se aplica el %, se debe de mostrar el total
de calificacion*/
/*Se debe de ingresar cantidad de hombres y mujeres y mostrar sus porcentajes correspondientes*/
/**/