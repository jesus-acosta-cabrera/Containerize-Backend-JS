const metodo = require('./DB/asignatura');
const exp = require('express');
const router = exp.Router();

router.post('/Insertar', (req, res) => {
    metodo.Iasignatura(req.body.codigo, req.body.nombre, req.body.credito, req.body.area, res);
});

router.post('/Asignar/Profesor', (req, res) => {
    metodo.asignarProfesor(req.body.profesor, req.body.codigo, res);
});

router.patch('/Modificar', (req, res) => {
    metodo.Masignatura(req.body.ID,req.body.codigo, req.body.nombre, req.body.credito, NULL, res);
});

router.delete('/Eliminar', (req, res) => {
    metodo.Easignatura(req.body.ID, res);
});

module.exports = router;