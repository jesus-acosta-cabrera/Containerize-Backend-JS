const metodo = require('./DB/usuario');
const exp = require('express');
const router = exp.Router();

router.get('/IniciarSesion', (req, res) => {
    metodo.IniciarSesion(req.body.usuario, req.body.contrasena, res);
});

router.patch('/usuario', (req, res) => {
    metodo.Iusuario( req.body.nombre, req.body.apellido,req.body.correo, req.body.contrasena, req.body.rolID, NULL, res);
});

router.patch('/IniciarSesion', (req, res) => {
    metodo.IniciarSesion(req.body.usuario, req.body.contrasena, res);
});

router.post('/Pregunta', (req, res) => {
    metodo.Ipregunta(req.body.preguntaID, req.body.usuario, req.body.respuesta, res);
});

router.patch('/Pregunta', (req, res) => {
    metodo.Mpregunta(req.body.preguntaID, req.body.usuario, req.body.respuesta, res);
});

module.exports = router;