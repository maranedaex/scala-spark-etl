const express = require("express");
const app = express("");
const cors = require("cors");
const pool = require("./db.js");

const port = 5000;
 

// middleware   
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

 // Routes

app.post("/addpropuesta",(request, response, next) => {

    console.log(request.body)
    const { id_proponente, titulo, estado, descripcion, categoria, image} = request.body
    console.log(`${id_proponente}-${titulo}-${estado}-${descripcion}-${categoria}`);

    pool.query('INSERT INTO propuesta (id_proponente, titulo, estado, descripcion, categoria, image) VALUES ($1, $2, $3, $4, $5, $6)', 
    [id_proponente, titulo, estado, descripcion, categoria, image], 
    (err, res) => {
        if (err) return next(err);
        console.log(JSON.stringify(res.id))
        response.redirect('/propuestas');
    });

});

app.post("/uppropuesta",(request, response, next) => {

 
const {id, id_proponente, estado} = request.body
console.log(`${id}-${id_proponente}-${estado}`);

pool.query('UPDATE propuesta SET estado = $3 where id = $1  and id_proponente = $2', 
[id, id_proponente, estado], 
(err, res) => {
    if (err) return next(err);
    console.log(JSON.stringify(res.id))
    response.redirect('/propuestas');
});

});



app.get("/propuestas", async(req, res) => {

try{
    const propuestas = await pool.query
    ("SELECT * FROM propuesta");
    res.json(propuestas.rows);

} catch (err){
    console.log(err.message);
}

});

app.get("/propuesta/:Id", async(req, res) => {

try{
    const { Id } = req.params;

    const propuesta = await pool.query
    ("select * from propuesta where id_proponente = $1", [Id]);
    res.json(propuesta.rows);

} catch (err){
    console.log(err.message);
}

});

app.get("/investigadores", async(req, res) => {

    try{
        const investigadores = await pool.query
        ("select id, nombre from investigador_guia");
        res.json(investigadores.rows);

    } catch (err){
        console.log(err.message);
    }

});


app.get("/investigador_guia/:Id", async(req, res) => {

    try{
        const { Id } = req.params;

        const investigador = await pool.query
        ("select * from investigador_guia where Id = $1", [Id]);
        res.json(investigador.rows);

    } catch (err){
        console.log(err.message);
    }

});




app.listen(port, () => {
    console.log("Servidor iniciado en el puerto 5000")
});