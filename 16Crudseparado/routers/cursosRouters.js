//este es el middleware

const { Router } = require('express');

//definir la ruta del consumo del endpoint

const cursosController = require('../controllers/cursosControl');

const cursosRouter = Router();

//definir cada endpoint

cursosRouter.get('/', cursosController.getCursos);

cursosRouter.get('/:id', cursosController.getCursosByid);

//cursosRouter.post('/registrar-curso', cursosController.createCurso);

//cursosRouter.put('/:id', cursosController.updateCurso);

//cursosRouter.delete('/:id', cursosController.deleteCurso);

module.exports = cursosRouter;