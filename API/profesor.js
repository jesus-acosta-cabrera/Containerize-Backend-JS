const metodo = require('./DB/profesor');
const CRUD = require('./DB/usuario');
const exp = require('express');
const router = exp.Router();

router.post('/Insertar', (req, res) => {
    CRUD.Iusuario(req.body.nombre, req.body.usuario, req.body.apellido,req.body.correo, req.body.contrasena, req.body.rolID, NULL, res);
});

router.patch('/Actualizar', (req, res) => {
    CRUD.Musuario(req.body.usuario,req.body.nombre, req.body.apellido,req.body.correo, req.body.contrasena,res);
});

router.delete('/Eliminar', (req, res) => {
    CRUD.Eusuario(req.body.ID,res);
});

router.get('/Asignaturas/Cursadas',(req, res) => {
    metodo.AsignaturasTomadas(req.body.usuario, res);
});

router.post('/Asignaturas/Cursando',(req, res) => {
    metodo.asignaturasCursando(req.body.profesor, req.body.periodo, res);
});

router.post('/Asignaturas/Cantidad',(req, res) => {
    metodo.cantidadAsignaturas(req.body.profesor, req.body.periodo, res);
});

router.patch('/Calificar',(req, res) => {
    metodo.asignarCalificacion(req.body.estudiante,req.body.seccionID,req.body.calificacion,res);
});

router.post('/Secciones', (req, res) => {
    metodo.seccionesProfesor(req.body.profesor, res);
});

router.post('/Asignaturas/Estudiantes', (req, res) => {
    metodo.mostrarEstudiantesAsignaturas(req.body.profesor, req.body.periodo, res);
})
module.exports = router;