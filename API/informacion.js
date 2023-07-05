const metodo = require('./DB/informacion');
const exp = require('express');
const router = exp.Router();

router.get('/Indice/Calcular', (req, res ) => {
    metodo.Indice(req.body.estudiante, res);
});

router.get('/Usuario/Existe', (req, res) => {
    metodo.usuarioExiste(req.body.usuario, res);
});

router.get('/Codigo/Existe', (req, res) => {
    metodo.codigoExiste(req.body.codigo, res);
});

router.get('/Contrasena/Recuperar', (req, res) => {
    metodo.Rcontrasena(req.body.usuario, req.body.respuesta1, req.body.respuesta2, req.body.respuesta3, res);
});

router.get('/Carreras/Contar', (req, res) => {
    metodo.contarCarreras(res);
});

router.get('/Usuario/Contar', (req, res) => {
    metodo.contarUsuarios(res);
});

router.get('/Carreras/Mostrar', (req, res ) => {
    metodo.mostrarCarreras(res);
});

router.get('/Roles/Mostrar', (req, res ) => {
    metodo.mostrarRoles(res);
});

router.get('/Areas/Mostrar', (req, res ) => {
    metodo.mostrarAreas(res);
});

router.get('/Preguntas/Mostrar', (req, res ) => {
    metodo.mostrarPreguntas(res);
});

router.get('/Horarios/Mostrar', (req, res ) => {
    metodo.mostrarHorarios(res);
});

router.get('/Secciones/Mostrar', (req, res ) => {
    metodo.mostrarSecciones(req.body.codigo,res);
});

module.exports = router;