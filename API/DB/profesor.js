const sql = require('mssql');

async function asignaturasCursadas(usuario, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('usuario',usuario);

    let result = await pool.execute('asignaturasCursadasProfesor');

    res.status(200).json(result.recordset);
}

async function asignaturasCursando(profesor, periodo, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('usuario',profesor);
    await pool.input('periodo',periodo);

    let result = await pool.execute('asignaturasCursandoProfesor');

    res.status(200).json(result.recordset);
}

async function cantidadAsignaturas(profesor, periodo, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('profesor',profesor);
    await pool.input('periodo',periodo);

    let result = await pool.execute('cantidadAsignaturasProfesor');

    res.status(200).json(result.recordset);
}

async function asignarCalificacion( estudiante, seccionID, calificacion, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('estudiante',estudiante);
    await pool.input('seccionID', seccionID);
    await pool.input('calificacion', calificacion);

    let result = await pool.execute('asignarCalificacion');

    res.status(200).json({
        "name": "Calificacion Asignada."
    });
}

async function seccionesProfesor(profesor, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('profesor',profesor);

    let result = await pool.execute('seccionesProfesor');

    res.status(200).json(result.recordset);
}

module.exports = {
    AsignaturasTomadas : asignaturasCursadas,
    cantidadAsignaturas : cantidadAsignaturas,
    asignaturasCursando : asignaturasCursando,
    seccionesProfesor : seccionesProfesor,
    asignarCalificacion : asignarCalificacion 
}