const metodo = require('./DB/seccion');
const exp = require('express');
const router = exp.Router();

// router.post('/Insertar', (req, res) =>)

router.post('/Horario/Asignar', (req, res) => {
    metodo.asignarHorario(req.body.horario, req.body.seccion, res);
});

router.patch('/Horario/Modificar', (req, res) => {
    metodo.Mseccion(req.body.seccionID,req.body.AhorarioID,req.body.BhorarioID, res);
});

router.delete('/Eliminar', (req, res) => {
    metodo.Eseccion(req.body.ID, res);
});

router.post('/Crear', (req, res ) => {
    metodo.Iseccion (req.body.numero, req.body.periodo, req.body.profesor, req.body.codigoA, res);
});

router.get('/Estudiantes', (req, res) => {
    metodo.estudianteSeccion(req.body.seccion, res);
});

router.get('/Profesores', (req, res) =>{
    metodo.seccionesProfesor(req.body.profesor, res);
})
module.exports = router;