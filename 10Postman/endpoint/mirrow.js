const mirrow= (req,res) => {
    const methods = [{
        method: 'POST',
        hasBody : true,
        purpouse: "El metodo post se utiliza para enviar una entidad a un recurso, especifico, causando a menudo un cambio en el estado o efectos secundarios en el servidor"
    },{
        method: 'PUT', //update
        hasBody : true,
        purpouse: "El metodo put reemplaza todas las representaciones actuales del recurso de destino con carga util de la peticion"       
    },{
        method: 'PATCH', //update pero no a todo, a una parte
        hasBody : true,
        purpouse: "El metodo patch es utilizado para aplicar modificacioes parciales a un recurso"       
    },{
        method: 'HEAD', 
        hasBody : false,
        purpouse: "El metodo get pide una respuesta identica a la de una peticion get pero sin el cuerpo de la respuesta"       
    },{
        method: 'Get',
        hasBody: false,
        purpouse: "El metodo GET solicita una representacion de un recurso especifico. Las peticiones que usan el metodo GET solo deben recuperar datos",
    },{
        method: 'DELETE',
        hasBody: false,
        purpouse: "El metodo delete elimina el recurso especificado"
    }]; 
    const requestMethod = methods.find(m => m.method === req.method) || {
        method: req.method,
        hasBody: false,
        purpouse: "Metodo no soportado"
        };
        requestMethod.purpouse= requestMethod.hasBody ? "Tiene cuerpo" : "No tiene cuerpo";
        if(requestMethod.hasBody){
            req.body; //Js debe de parsear mediante un JSON el objeto necesario 
            res.json({...req.body, ruta_consumida: req.route.path, ...requestMethod});
        } else{
            res.json({ruta_consumida: req.originalUrl, ...requestMethod})
        }
};
module.export = mirrow;