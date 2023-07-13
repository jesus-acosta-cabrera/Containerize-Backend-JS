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
    metodo.verificarHorario(req.body.dia, req.body.hora, req.body.estudiante, req.body.codigo, res);
});


router.post('/Estudiantes/Seleccionar', (req, res) => {
    for(let x = 0; x < req.body.length; x++){
        metodo.asignarSeccion(req.body[x].estudiante, req.body[x].seccion, res);
    }
    res.status(200).json({
        mensaje: "Transaccion Realizada!"
    });
});

router.delete('/Estudiantes/QuitarSeleccion', (req, res) => {
    for(let x = 0; x < req.body.length; x++){
        metodo.salirSeccion(req.body[x].estudiante, req.body[x].seccion, res);
    }
    res.status(200).json({
        mensaje: "Transaccion Realizada!"
    });
});

module.exports = router;