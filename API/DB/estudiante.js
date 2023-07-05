const sql = require('mssql');

async function asignarEstudianteSeccion(estudianteID, seccionID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionID',seccionID);
    let result = await pool.execute('insertarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

async function actualizarEstudianteSeccion(estudianteID, seccionAntesID, seccionDespuesID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionAID',seccionAntesID);
    await pool.input('seccionBID',seccionDespuesID);
    let result = await pool.execute('editarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

async function removerEstudianteSeccion(estudianteID, seccionID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionID',seccionID);
    let result = await pool.execute('eliminarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

async function asignaturasCursadas(usuario, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('usuario',usuario);

    let result = await pool.execute('asignaturasCursadasEstudiante');

    res.status(200).json(result.recordset);
}

async function asignaturasCursando(estudiante, periodo, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('usuario',estudiante);
    await pool.input('periodo',periodo);

    let result = await pool.execute('asignaturasCursandoEstudiante');

    res.status(200).json(result.recordset);
}

async function cantidadAsignaturas(estudiante, periodo, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('estudiante',estudiante);
    await pool.input('periodo',periodo);

    let result = await pool.execute('cantidadAsignaturasEstudiante');

    res.status(200).json(result.recordset);
}
module.exports = {
    asignarSeccion : asignarEstudianteSeccion,
    cambiarSeccion : actualizarEstudianteSeccion,
    salirSeccion : removerEstudianteSeccion,
    asignaturasCursando : asignaturasCursando,
    AsignaturasTomadas : asignaturasCursadas,
    cantidadAsignaturas : cantidadAsignaturas
}