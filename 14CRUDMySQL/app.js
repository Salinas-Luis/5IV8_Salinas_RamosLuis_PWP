/* 
Vamos a crear un cliente servidor para un crud
Para esto tenemos que probar si el modulo de mysql esta verificado, si no, utilizaremos mysql2
*/

const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express();
const port = 3000

//Configuración de mysql
const bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'estudiantescecyt9'
})

bd.connect((error) => {
    if(error){
        console.log('Error de conexion en la base de datos' + error)
    }else{
        console.log('Conexion exitosa a la base de datos')
    }
});

//Tenemos que configurar nuestro middleware (el que se encarga de intercambiar la informacion), el cual estaremos usando rutas y codificación de la informacion por json

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//Tenemos que congifurar las vistas que se van a ejecutar
app.set('view engine', 'ejs');
//Donde se encuentra el directorio de dichas vistas
app.set('views', __dirname + '/views');

//Para la carga de imagenes, css, multimedia, etc. Es necesario configurar una carpeta public, en la cual todos los recursos del proyecto se podran consumir
app.use(express.static(__dirname + '/css'))

//Vamos a crear el crud de estudiantes, a partir de rutas.


//Ruta get para mostrar el formulario y la lista de estudiantes:
app.get('/',(req,res) =>{
    //Necesito obtener la lista de estudiantes:
    const querry = 'select * from estudiantes;'
    bd.query(querry,(error,resultados) =>{
        if(error){
            console.log('Error al obtener los estudiantes:' + error);
        }
        res.render('index',{estudiantes: resultados});
    })
})

//Primera ruta: para crear un estudiante, primera pregunta ¿qué necesito?
app.post('/estudiantes', (req,res) => {
    //Obtener los parametros del formulario
    const {nombre, edad, correo} = req.body;
    const query = `insert into estudiantes (nombre, edad, carrera) values ('${nombre}','${edad}','${carrera}')`;
});


app.listen(port, () => {
    console.log('Servidor corriendo')
})