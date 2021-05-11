const express = require("express");
const app = express("");
const cors = require("cors");
const pool = require("./db.js");

const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

 

// Routes

app.post('/propuesta', (request, response, next) => {
    const { id_proponente, estado, descripcion } = request.body;
   console.log(id_proponente + " " + estado + " " + descripcion);
    pool.query(
     'INSERT INTO propuesta (id_proponente, estado, descripcion) VALUES ($1, $2, $3)',
     [id_proponente, estado, descripcion],
     (err, res) => {
      if (err) return next(err);
      console.log(JSON.stringify(res.id))
      response.redirect('/propuestas');
     }
    );
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

app.get("/propuesta/:Id", async(req, res) => {

const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, email } = body
      pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })
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

app.post("/propuesta", async(req, res) => {

    try{
        const { id_proponente, estado, descripcion} = request.body

        pool.query('INSERT INTO propuesta (id_proponente, estado, descripcion) VALUES ($1, $2, $3)', [id_proponente, estado, descripcion], (error, results) => {
            if (error) {
            throw error
            }
            response.status(201).send(`Propuesta added with ID: ${result.insertId}`)
        })
    } catch (err){
        console.log(err.message);
    }

});


app.listen(port, () => {
    console.log("Servidor iniciado en el puerto 5000")
});