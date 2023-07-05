const metodo = require('./DB/seccion');
const exp = require('express');
const router = exp.Router();

// router.post('/Insertar', (req, res) =>)

router.post('/Horario', (req, res) => {
    metodo.asignarHorario(req.body.horario, req.body.seccion, res);
});

router.patch('/Horario', (req, res) => {
    metodo.Mseccion(req.body.seccionID,req.body.AhorarioID,req.body.BhorarioID, res);
});

router.delete('/Horario', (req, res) => {
    metodo.Eseccion(req.body.ID, res);
});

module.exports = router;