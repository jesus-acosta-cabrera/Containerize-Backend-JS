const metodo = require('./DB/seleccion');
const exp = require('express');
const router = exp.Router();

//
router.post('/Secciones/Mostrar', (req, res) => {
    metodo.mostrarSecciones(req.body.periodo, req.body.carrera, req.body.estudiante, res);
});

//
router.post('/Secciones/Seleccionadas', (req, res) => {
    metodo.mostrarSeccionesSeleccionadas(req.body.periodo, req.body.estudiante, res);
});
//
router.post('/Horario/Verificar', (req, res) => {
    metodo.verificarHorario(req.body.horarioV, req.body.horarioN, res);
});


router.post('/Estudiantes/Seleccionar', (req, res) => {
    metodo.asignarSeccion(req.body.estudiante, req.body.seccion, res);
    res.status(200).json({
        mensaje: "Transaccion Realizada!"
    });
});

router.delete('/Estudiantes/QuitarSeleccion', (req, res) => {
    metodo.salirSeccion(req.body.estudiante, req.body.seccion, res);
    res.status(200).json({
        mensaje: "Transaccion Realizada!"
    });
});

module.exports = router;