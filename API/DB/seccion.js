const sql = require('mssql');

async function asignarHorario(horario, seccion, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('horarioID',horario);
    await pool.input('seccionID',seccion);
    let result = await pool.execute('insertarSeccionHorario');
    
    res.status(200).json(result.recordset);
}

async function insertarSeccion(numero, periodo, profesor, codigoA, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('numero',numero);
    await pool.input('periodo',periodo);
    await pool.input('profesor',profesor);
    await pool.input('codigoA',codigoA);
    await pool.execute('insertarSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    })
}

async function editarHorario(seccionID, AhorarioID, BhorarioID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('seccionID',seccionID);
    await pool.input('AhorarioID',AhorarioID);
    await pool.input('BhorarioID',BhorarioID);
    let result = await pool.execute('editarHorarioSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    });
}

async function eliminarSeccion(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    let result = await pool.execute('eliminarSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    });
}

async function seccionesProfesor(profesor, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('profesor',profesor);
    let result = await pool.execute('seccionesProfesor');
    
    res.status(200).json(result.recordset);
}

async function estudianteSeccion(seccion, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('seccionID',seccion);
    let result = await pool.execute('estudiantesSeccion');
    
    res.status(200).json(result.recordset);
}

module.exports = {
    asignarHorario : asignarHorario,
    Iseccion : insertarSeccion,
    Mseccion : editarHorario,
    estudianteSeccion : estudianteSeccion,
    seccionesProfesor : seccionesProfesor,
    Eseccion : eliminarSeccion
}