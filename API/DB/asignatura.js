const sql = require('mssql');

async function insertarAsignatura(codigo, nombre,credito, area, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    await pool.input('nombre',nombre);
    await pool.input('credito',credito);
    await pool.input('areaID', area)
    let result = await pool.execute('insertarAsignatura');

    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function editarAsignatura(ID, codigo, nombre,credito, prerrequisito, res) {
    await sql.connect(process.env.Server, res)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    await pool.input('codigo',codigo);
    await pool.input('nombre',nombre);
    await pool.input('credito',credito);
    await pool.input('prerrequisitoID',prerrequisito);
    let result = await pool.execute('editarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignatura(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    let result = await pool.execute('eliminarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function asignarProfesor(profesor, codigo, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('profesor',profesor);
    await pool.input('codigoA',codigo);
    let result = await pool.execute('insertarProfesorAsignatura');

    await res.status(200).json({
        message: "Consulta realizada."
    });
}

module.exports = {
    Iasignatura : insertarAsignatura,
    Masignatura : editarAsignatura,
    asignarProfesor : asignarProfesor,
    Easignatura : eliminarAsignatura
}