const sql = require('mssql');

async function iniciarSesion(usuario, contrasena, res){
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('usuario',usuario);
    await pool.input('contrasena',contrasena);

    let result = await pool.execute('iniciarSesion');
    
    res.status(200).json(result.recordset);
}

async function insertarUsuario(nombre, usuario, apellido, correo, contrasena, rolID, carreraID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('usuario', usuario);
    await pool.input('nombre',nombre);
    await pool.input('apellido',apellido);
    await pool.input('correo',correo);
    await pool.input('contrasena',contrasena);
    await pool.input('rolID',rolID);
    await pool.input('carreraID',carreraID);

    let result = await pool.execute('insertarUsuario');
    
    res.status(200).json({
        message: "Consulta Realizada."
    });
}

async function editarUsuario(usuario, nombre, apellido, correo, contrasena, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('usuario',usuario);
    await pool.input('nombre',nombre);
    await pool.input('apellido',apellido);
    await pool.input('correo',correo);
    await pool.input('contrasena',contrasena);

    let result = await pool.execute('editarUsuario');
    
    res.status(200).json({
        message: "Consulta Realizada."
    });
}

async function eliminarUsuario(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    let result = await pool.input('ID',ID).execute('eliminarUsuario');
    
    res.status(200).json({
        message: "Consulta Realizada."
    });
}

async function insertarPregunta(preguntaID, usuario, respuesta, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('preguntaID',preguntaID);
    await pool.input('usuario',usuario);
    await pool.input('respuesta',respuesta);

    let result = await pool.execute('insertarPreguntaUsuario');

    res.status(200).json({
        message: "Consulta Realizada."
    });
    
}

async function editarPregunta (pID, usuario, respuesta, res){
    await sql.connect(process.env.Server);


    let pool = new sql.Request();
    
    await pool.input('preguntaID',pID);
    await pool.input('usuario',usuario);
    await pool.input('respuesta',respuesta);

    let result = await pool.execute('editarPreguntaUsuario');

    res.status(200).json({
        message: "Consulta Realizada."
    });
}

module.exports = {
    IniciarSesion : iniciarSesion,
    Iusuario : insertarUsuario,
    Musuario : editarUsuario,
    Eusuario : eliminarUsuario,
    Ipregunta : insertarPregunta,
    Mpregunta : editarPregunta
}