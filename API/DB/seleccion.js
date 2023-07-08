const sql = require('mssql');

async function mostrarSecciones(periodo,res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('periodo',periodo);
    let result = await pool.execute('mostrarSecciones');
    
    res.status(200).json(result.recordset);
}

async function mostrarSeccionesSeleccionadas(periodo, estudiante, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('periodo',periodo);
    await pool.input('estudiante',estudiante);
    let result = await pool.execute('mostrarSeccionesSeleccionadas');
    
    res.status(200).json(result.recordset);
}

async function verificarHorario(dia, hora, estudiante, codigo, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('hDia',dia);
    await pool.input('hHora',hora);
    await pool.input('estudiante',estudiante);
    await pool.input('codigoA',codigo);
    
    let result = await pool.execute('verificarHorario');
    
    res.status(200).json(result.recordset);
}

async function asignarSeccion(estudiante, seccion, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('estudiante',estudiante);
    await pool.input('seccionID',seccion);
    
    await pool.execute('insertarEstudianteSeccion');
}

async function salirSeccion(estudiante, seccion, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('estudiante',estudiante);
    await pool.input('seccionID',seccion);
    
    await pool.execute('eliminarEstudianteSeccion');
}

module.exports = {
    mostrarSecciones : mostrarSecciones,
    mostrarSeccionesSeleccionadas : mostrarSeccionesSeleccionadas,
    verificarHorario : verificarHorario,
    asignarSeccion : asignarSeccion,
    salirSeccion : salirSeccion
}