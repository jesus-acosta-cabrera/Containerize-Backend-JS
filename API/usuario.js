const metodo = require('./DB/usuario');
const exp = require('express');
const router = exp.Router();

router.get('/IniciarSesion', (req, res) => {
    metodo.IniciarSesion(req.body.usuario, req.body.contrasena, res);
});

router.post('/IniciarSesion', (req, res) => {
    metodo.IniciarSesion(req.body.usuario, req.body.contrasena, res);
});

router.patch('/Pregunta/Modificar', (req, res) => {
    metodo.Mpregunta(req.body.preguntaID, req.body.usuario, req.body.respuesta, res);
});

router.post('/Pregunta/Insertar', (req, res) => {
    metodo.Ipregunta(req.body.preguntaID, req.body.usuario, req.body.respuesta, res);

})
router.delete('/Eliminar', (req, res) => {
    metodo.Eusuario(req.body.usuario, res);
});

router.delete('/Eliminar/Pregunta', (req, res) => {
    metodo.Epregunta(req.body.usuario, res);
})

module.exports = router;