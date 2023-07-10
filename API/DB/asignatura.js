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

async function editarAsignatura(codigo, nombre, credito, area, res) {
    await sql.connect(process.env.Server, res)

    let pool = new sql.Request();
    await pool.input('area',area);
    await pool.input('codigo',codigo);
    await pool.input('nombre',nombre);
    await pool.input('credito',credito);
    let result = await pool.execute('editarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignatura(codigo, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    let result = await pool.execute('eliminarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignaturaProfesor(codigo, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    let result = await pool.execute('eliminarAsignaturaProfesor');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignaturaSeccion(codigo, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    let result = await pool.execute('eliminarAsignaturaSeccion');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignaturaHorario(codigo, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    let result = await pool.execute('eliminarAsignaturaHorario');
    
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
    Easignatura : eliminarAsignatura,
    EAsignaturaProfesor : eliminarAsignaturaProfesor,
    eliminarAsignaturaSeccion : eliminarAsignaturaSeccion,
    eliminarAsignaturaHorario : eliminarAsignaturaHorario
}