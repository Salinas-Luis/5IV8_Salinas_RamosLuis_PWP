function validar(e){
    var teclado = document.all ? e.keycode : e.which;
    if(teclado === 8) return true;
    var regex = /[a-zA-z\s ]/;
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo)
}