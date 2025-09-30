/*
Javascrip es un lenguaje multiparadigma
Acepta la programacion funcional, estructurada, POO, y a eventos
Dentro de Js, no existe el typado de variables int, string, float, etc
Solo existen 3 tipos de variables de acuerdo al estandar ES6: VAR, LET, CONST
*/

function validar(formulario){
    //Quiero validad que el campo nombre acepte mas de 3 carateres
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    //Validacion para unicamente letras modo dificil
    var checkstr= formulario.nombre.value;
    alert(checkstr);
    var abcOk = "QWERTYUIOPÑLKJHGFDSAZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm";
    var allValido= true;
    //Tenemos que comparar la cadena de nombre vs el abecedario (Es mejor decir que se admite que lo que no se admite, porque lo que admite es menor en comparacion a lo que no se admite)
    for(var i=0; i < checkstr.length; i++){
        var caracteres = checkstr.charAt(i);
        for(var j = 0; j< abcOk.length; j++){
            if(caracteres == abcOk.charAt(j))
                break;
        }
        if(j == abcOk.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente letras en el nombre")
        formulario.nombre.focus();
        return false;
    }

    //Validacion para unicamente edad modo dificil
    var checkstr= formulario.edad.value;
    alert(checkstr);
    var abcOk = "1234567890";
    var allValido= true;
    //Tenemos que comparar la cadena de nombre vs el abecedario (Es mejor decir que se admite que lo que no se admite, porque lo que admite es menor en comparacion a lo que no se admite)
    for(var i=0; i < checkstr.length; i++){
        var caracteres = checkstr.charAt(i);
        for(var j = 0; j< abcOk.length; j++){
            if(caracteres == abcOk.charAt(j))
                break;
        }
        if(j == abcOk.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente digitos en el nombre")
        formulario.edad.focus();
        return false;
    }

    //vamos a crear una funcion de una expresion regular para validar el correo electronico que acepte texto.texto@texto.texto
    var regrex = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt = formulario.correo.value;
    alert("Email" + (b.test(txt)? "": " No ") + "valido")
    return b.test;
}
