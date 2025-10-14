function validarl(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[a-zA-z\s ]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function invertirpalabras(){
    var str = document.getElementById("p1_input").value;
    var arreglocadenas= str.split(" ");
    var cadenareversa= arreglocadenas.reverse();
    document.getElementById("p1_output").innerHTML = "El orden invertido de las palabras es: " + "<br>" + cadenareversa.join(" ")
}

function borrarp1(){
    document.getElementById("p1_input").value = "";
    document.getElementById("p1_output").textContent = "Esperando datos..."
}



function problema2(){
    //Primero necesitamos los valores
    var p2_x1 = document.querySelector("#p2_x1").value;
    var p2_x2 = document.querySelector("#p2_x2").value;
    var p2_x3 = document.querySelector("#p2_x3").value;
    var p2_x4 = document.querySelector("#p2_x4").value;
    var p2_x5 = document.querySelector("#p2_x5").value;

    var p2_y1 = document.querySelector("#p2_y1").value;
    var p2_y2 = document.querySelector("#p2_y2").value;
    var p2_y3 = document.querySelector("#p2_y3").value;
    var p2_y4 = document.querySelector("#p2_y4").value;
    var p2_y5 = document.querySelector("#p2_y5").value;

    //Creamos los vectores
    var v1=[p2_x1,p2_x2,p2_x3,p2_x4,p2_x5];
    var v2=[p2_y1,p2_y2,p2_y3,p2_y4,p2_y5];
    v1 = v1.sort(function(a,b){return b-a})
    v2 = v2.sort(function(a,b){return b-a})

    v2 = v2.reverse();

    var p2_producto = 0;
    for(var i=0; i<v1.length; i++){
        p2_producto += v1[i]*v2[i];            
    }
    document.querySelector("#p2_resultado").textContent= "El producto escalar minimo es: " + p2_producto;
}

function validarl2(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[A-Z,]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function calcularcu(){
    var abcOk = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","V","X","Y","Z","Ñ"];
    var palabrasingresadas= document.getElementById("p3_input").value;
    var arreglopalabras = palabrasingresadas.split(",");
    var letra1 = "";
    var letra2 = "";
    var palabraaprobar = "";
    var contador = 0;
    var arreglocontadorcaracteresunicos = [];
    if(palabrasingresadas.includes(" ")){
        alert("Por favor, no ingrese espacios")
    }else{
        for(var j=0;j<arreglopalabras.length;j++){
            palabraaprobar=arreglopalabras[j];
            for(var i=0;i<abcOk.length;i++){
            letra1=abcOk[i];
                for(var k=0; k<palabraaprobar.length; k++){
                letra2= palabraaprobar.charAt(k);
                if(letra1===letra2){
                    abcOk.splice(i,1);
                    contador= contador+1;
                    i--;
                    break;
                }
                }   
            }
            var abcOk = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","V","X","Y","Z","Ñ"];
            arreglocontadorcaracteresunicos.push(contador); 
            contador=0;
        }
        contador = Math.max(...arreglocontadorcaracteresunicos);
        contador = arreglocontadorcaracteresunicos.indexOf(contador);
        document.getElementById("p3_output").innerHTML = "La palabra que tiene mas caracteres unicos es: " + arreglopalabras[contador];
    }
}