const express = require("express");
const app = express("");
const cors = require("cors");
const pool = require("./db.js");


// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/investigador_guia/:Id", async(req, res) => {

    try{
        const { id } = req.params;

        const investigador = await pool.query
        ("select * from investigador_guia where id = $1", [id]);
        res.json(investigador.rows);

    } catch (err){
        console.log(err.message);
    }

});


app.listen(5000, () => {
    console.log("Servidor iniciado")
});