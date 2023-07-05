const metodo = require('./DB/estudiante');
const CRUD = require('./DB/usuario');
const exp = require('express');
const router = exp.Router();

router.patch('/aCalificacion', (req, res) => {
    metodo.asignarCalificacion(req.body.calificacion);
});

router.post('/aSeccion', (req, res) => {
    metodo.asignarSeccion(req.body.estudiante, req.body.seccion);
});

router.patch('/cSeccion', (req, res) => {
    metodo.cambiarSeccion(req.body.estudiante, req.body.seccionA, req.body.seccionB);
});

router.delete('/sSeccion', (req, res) => {
    metodo.salirSeccion(req.body.estudiante, req.body.seccion);
});

router.post('/Insertar', (req, res) => {
    CRUD.Iusuario(req.body.nombre, req.body.usuario, req.body.apellido,req.body.correo, req.body.contrasena, req.body.rolID, req.body.carreraID, res);
});

router.patch('/Actualizar', (req, res) => {
    CRUD.Musuario(req.body.ID,req.body.nombre, req.body.apellido,req.body.correo, req.body.contrasena,res);
});

router.delete('/Eliminar', (req, res) => {
    CRUD.Eusuario(req.body.ID,res);
});

router.get('/Asignaturas/Cursadas', (req, res) => {
    metodo.AsignaturasTomadas(req.body.usuario, res);
});

router.get('/Asignaturas/Cursando',(req, res) => {
    metodo.asignaturasCursando(req.body.estudiante, req.body.periodo, res);
});

router.get('/Asignaturas/Cantidad', (req, res) => {
    metodo.cantidadAsignaturas(req.body.estudiante, req.body.periodo, res);
});

module.exports = router;