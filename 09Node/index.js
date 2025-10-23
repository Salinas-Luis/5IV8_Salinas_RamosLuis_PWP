const { response } = require('express');
var http = require('http');

//Vamos a crear nuestro propio servidor
var servidor = http.createServer(function(req,res){
    //req: request es una solicitud que viene por parte de la arquitectura cliente servidor, todos los clientes (navegadores, usuarios, aplicaciones, servicios), etc, son los 
    //que realizan una peticion por parte del protocolo 
    /*res: response es la respuesta que le da el servidor al cliente*/
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'}); 
    res.write('<h1>Hola mundo desde Node.js</h1>');
    res.write('<h1>A mimir</h1>');
    res.write('<h1>A mimir xd</h1>')
    console.log('Hola si entro al servidor');
    res.end();
});

//es necesario tener un puesto de comunicacion para el servidor
servidor.listen(3000);
console.log('Servidor ejecutandose en htpp://localhost:3000')