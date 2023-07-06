const sql = require('mssql');

async function calcularIndice (estudiante, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('estudiante',estudiante);

    let result = await pool.execute('calcularIndice');

    await res.status(200).json(result.recordset);
}

async function usuarioExiste (usuario, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('usuario',usuario);

    let result = await pool.execute('usuarioExiste');

    await res.status(200).json(result.recordset);
}

async function codigoExiste (codigo, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('codigo',codigo);

    let result = await pool.execute('codigoExiste');

    await res.status(200).json(result.recordset);
}

async function contarCarreras (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('contarCarreras');

    await res.status(200).json(result.recordset);
}

async function mostrarCarreras (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarCarreras');

    await res.status(200).json(result.recordset);
}

async function mostrarProfesores (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarProfesores');

    await res.status(200).json(result.recordset);
}

async function mostrarRoles (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarRoles');

    await res.status(200).json(result.recordset);
}

async function mostrarPreguntas (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarPreguntas');

    await res.status(200).json(result.recordset);
}

async function mostrarAreas (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarAreas');

    await res.status(200).json(result.recordset);
}

async function mostrarRoles (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarRoles');

    await res.status(200).json(result.recordset);
}

async function mostrarHorarios (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarHorarios');

    await res.status(200).json(result.recordset);
}

async function contarUsuarios (res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('contarUsuarios');

    await res.status(200).json(result.recordset);
}

async function recuperarContrasena(usuario, respuesta1, respuesta2, respuesta3, res){
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('usuario',usuario);
    await pool.input('respuesta1',respuesta1);
    await pool.input('respuesta2',respuesta2);
    await pool.input('respuesta3',respuesta3);

    let result = await pool.execute('recuperarContrasena');
    
    res.status(200).json(result.recordset);
}

async function mostrarSecciones(codigo ,res){
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('codigo',codigo);

    let result = await pool.execute('mostrarSeccionAsignatura');
    
    res.status(200).json(result.recordset);
}

async function mostrarPreguntas(usuario, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('usuario', usuario);

    let result = await pool.execute('obtenerPreguntas');

    res.status(200).json(result.recordset);
}

async function mostrarProfesoresAsignaturas(res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarProfesoresAsignatura');

    res.status(200).json(result.recordset);
}

async function mostrarUsuarios(res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    let result = await pool.execute('mostrarUsuarios');

    res.status(200).json(result.recordset);
}

module.exports = {
    Indice : calcularIndice,
    usuarioExiste : usuarioExiste,
    codigoExiste : codigoExiste,
    Rcontrasena : recuperarContrasena,
    contarCarreras : contarCarreras,
    contarUsuarios : contarUsuarios,
    mostrarCarreras : mostrarCarreras,
    mostrarPreguntas : mostrarPreguntas,
    mostrarHorarios : mostrarHorarios,
    mostrarSecciones : mostrarSecciones,
    mostrarAreas : mostrarAreas,
    mostrarPreguntas : mostrarPreguntas,
    mostrarProfesoresAsignaturas : mostrarProfesoresAsignaturas,
    mostrarProfesores : mostrarProfesores,
    mostrarUsuarios : mostrarUsuarios,
    mostrarRoles : mostrarRoles
}