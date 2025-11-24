const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

require('dotenv').config({path: './.env'});

const app = express();
const port = 3000;

const bd = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
});

/*
Base de datos:
create database inspecciones;
use inspecciones;
CREATE TABLE rondas_inspeccion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha_hora DATETIME NOT NULL,
    area_sector VARCHAR(100) NOT NULL,
    punto_control VARCHAR(255) NOT NULL,
    estado ENUM('OK', 'FALLO') NOT NULL,
    observaciones TEXT,
    seguimiento_req BOOLEAN DEFAULT 0,
    inspector VARCHAR(100) NOT NULL
);
*/
bd.connect((error) => {
    if (error) {
        console.log('Error de conexion a la base de datos: ' + error);
    } else {
        console.log('Conexion exitosa a la base de datos');
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/css'));

app.get('/', (req, res)=>{
    const querry = 'SELECT * FROM rondas_inspeccion ORDER BY fecha_hora DESC'; 
    
    bd.query(querry, (error, resultados)=>{
        if(error){
            console.error('Error al obtener las rondas:', error);
            return res.status(500).send('Error al obtener las rondas');
        }
        res.render('index', { rondas: resultados }); 
    });
});

app.post('/inspecciones', (req, res) => {
    const { area_sector, punto_control, estado, observaciones, seguimiento_req, inspector } = req.body;

    const querry = `INSERT INTO rondas_inspeccion 
                    (fecha_hora, area_sector, punto_control, estado, observaciones, seguimiento_req, inspector) 
                    VALUES (NOW(), ?, ?, ?, ?, ?, ?);`; 

    const valores = [area_sector, punto_control, estado, observaciones, seguimiento_req, inspector];

    bd.query(querry, valores, (error, resultados) => {
        if (error) {
            console.error('Error al registrar la ronda:', error);
            return res.status(500).send('Error al registrar la ronda');
        }
        res.redirect('/');
    });
});

app.get('/inspecciones/delete/:id', (req, res) => {
    const rondaId = req.params.id;
    const querry = 'DELETE FROM rondas_inspeccion WHERE id = ?;';

    bd.query(querry, [rondaId], (error, resultados) => {
        if (error) {
            console.error('Error al eliminar la ronda de inspección:', error);
            return res.status(500).send('Error al eliminar la ronda de inspección.');
        }
        console.log(`Ronda de inspección ID ${rondaId} eliminada correctamente.`);

        res.redirect('/');
    });
});

app.get('/inspecciones/edit/:id', (req, res) =>{ 
    const rondaId = req.params.id;
    const querry = 'SELECT * FROM rondas_inspeccion WHERE id = ?;'; 
    
    bd.query(querry, [rondaId], (error, resultados) =>{
        if(error){
            console.error('Error al obtener la ronda:', error);
            return res.status(500).send('Error al obtener la ronda para edición');
        } 
        
        if (resultados.length === 0) {
            return res.status(404).send('Ronda no encontrada');
        }
        
        res.render('edit', { ronda: resultados[0] }); 
    });
});

app.post('/inspecciones/update/:id', (req, res) => {
    const rondaId = req.params.id;
    const { area_sector, punto_control, estado, observaciones, seguimiento_req, inspector } = req.body;
    
    const seguimiento = seguimiento_req ? 1 : 0;
    
    if (!area_sector || !punto_control || !estado || !inspector) {
        console.error('Error de Validación: Campos requeridos faltantes en actualización.');
        return res.status(400).send('Error: Faltan campos obligatorios.'); 
    }
    
    const querry = `UPDATE rondas_inspeccion 
                    SET area_sector = ?, punto_control = ?, estado = ?, 
                        observaciones = ?, seguimiento_req = ?, inspector = ?
                    WHERE id = ?;`;
                    
    const valores = [
        area_sector, 
        punto_control, 
        estado, 
        observaciones, 
        seguimiento, 
        inspector,
        rondaId 
    ];

    bd.query(querry, valores, (error, resultados) => {
        if (error) {
            console.error('Error al actualizar la ronda:', error);
            return res.status(500).send('Error al actualizar la ronda.');
        }
        
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});