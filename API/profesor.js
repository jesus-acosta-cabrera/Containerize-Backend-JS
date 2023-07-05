const metodo = require('./DB/profesor');
const CRUD = require('./DB/usuario');
const exp = require('express');
const router = exp.Router();

router.get('/Asignaturas/Cursadas',(req, res) => {
    metodo.AsignaturasTomadas(req.body.usuario, res);
});

router.get('/Asignaturas/Cursando',(req, res) => {
    metodo.asignaturasCursando(req.body.profesor, req.body.periodo, res);
});

router.get('/Asignaturas/Cantidad',(req, res) => {
    metodo.cantidadAsignaturas(req.body.profesor, req.body.periodo, res);
});

router.patch('/Calificar',(req, res) => {
    metodo.asignarCalificacion(req.body.estudiante,req.body.seccionID,req.body.calificacion,res);
});
module.exports = router;