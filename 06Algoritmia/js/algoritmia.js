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
    //Prof
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
    alert(arreglopalabras)
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
        alert(arreglocontadorcaracteresunicos)
        contador = Math.max(...arreglocontadorcaracteresunicos);
        contador = arreglocontadorcaracteresunicos.indexOf(contador);
        document.getElementById("p3_output").innerHTML = "La palabra que tiene mas caracteres unicos es: " + arreglopalabras[contador];
    }
}