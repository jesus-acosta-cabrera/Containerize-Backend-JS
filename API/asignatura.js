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
    metodo.Masignatura(req.body.codigo, req.body.nombre, req.body.credito, req.body.area, res);
});

router.delete('/Eliminar', (req, res) => {
    metodo.Easignatura(req.body.codigo, res);
});

router.delete('/Eliminar/Profesor', (req, res) => {
    metodo.EAsignaturaProfesor(req.body.codigo, res);
});

router.delete('/Eliminar/Seccion', (req, res) => {
    metodo.eliminarAsignaturaSeccion(req.body.codigo, res);
});

router.delete('/Eliminar/Horario', (req, res) => {
    metodo.eliminarAsignaturaHorario(req.body.codigo, res);
});
module.exports = router;