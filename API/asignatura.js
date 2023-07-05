const metodo = require('./DB/asignatura');
const exp = require('express');
const router = exp.Router();

router.post('/Iasignatura', (req, res) => {
    metodo.Iasignatura(req.body.codigo, req.body.nombre, req.body.credito, res);
});

router.patch('/Masignatura', (req, res) => {
    metodo.Masignatura(req.body.ID,req.body.codigo, req.body.nombre, req.body.credito, NULL, res);
});

router.delete('/Easignatura', (req, res) => {
    metodo.Easignatura(req.body.ID, res);
});

module.exports = router;