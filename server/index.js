const express = require("express");
const app = express("");
const cors = require("cors");
const pool = require("./db.js");


// middleware
app.use(cors());
app.use(express.json());

// Routes
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


app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000")
});