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

app.post("/addpropuesta",  cors(), function (req, res) {

    try {
       console.log('Inicio de back-end');
       console.info("POST /simple-cors");
       console.log(req.body);
       const newSite ={ 
           id_proponente: req.body.propuestas.id_proponente, 
           titulo: req.body.propuestas.titulo, 
           estado: req.body.propuestas.estado,
           descripcion: req.body.propuestas.descripcion,
           categoria: req.body.propuestas.categoria, 
           organizacion: req.body.propuestas.organizacion,
           image: req.body.propuestas.image
        };
        console.log(newSite);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
       pool.query('INSERT INTO propuesta (id_proponente, titulo, estado, descripcion, categoria, organizacion, image) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
       [newSite.id_proponente, newSite.titulo,newSite.estado, newSite.descripcion, newSite.categoria, newSite.organizacion, newSite.image], 
       (err, res) => {
           if (err) return console.log(err);
           console.log(JSON.stringify(res.id))
           //res.redirect('/propuestas');
       });

        res.json(req.body);
        
    } catch (error) {
        console.log(error)
    }

});


 



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


app.get("/postuladosByPropuestaId/:propuestaId", async(req, res) => {

    try{
        const { propuestaId } = req.params;

        const investigadores = await pool.query
        (`SELECT i.id AS investigador_id, i.nombre, i.apellido, i.fecha_creacion FROM postulaciones p 
        INNER JOIN investigador i ON p.id_investigador = i.id 
        WHERE p.id_propuesta = $1 AND p.seleccionado = false`, [propuestaId]);

        res.json(investigadores.rows);

    } catch (err){
        console.log(err);
    }

});


app.get("/asignadosByPropuestaId/:investigadorGuiaId/:propuestaId", async(req, res) => {

    try{
        console.log("asignadosByPropuestaId");

        const { propuestaId , investigadorGuiaId} = req.params;
        // console.log(propuestaId)
        // console.log(investigadorGuiaId)

        const investigadores = await pool.query
        (`SELECT i.id AS investigador_id, i.nombre, i.apellido, i.fecha_creacion, e.id AS equipo_id from equipos e
        inner join investigador i on e.id_investigador = i.id
        where e.id_propuesta = $1 and id_investigador_guia = $2`, [propuestaId, investigadorGuiaId]);

        res.json(investigadores.rows);

    } catch (err){
        console.log(err);
    }

});


app.put("/seleccionados/:propuestaId", async (req, res) => {

    try {
        const { propuestaId } = req.params;
        // const { jsonData } = req.body;

        let investigadoresPostulantes = req.body.map(p => p.postulanteId).join(",");
        let query = `UPDATE postulaciones SET seleccionado = true 
        WHERE id_investigador in (${investigadoresPostulantes}) AND id_propuesta = ${propuestaId}`;

        // console.log(query)

        const actualizarSeleccionados = await pool.query
        (query);

        res.json("Se actualizaron los postulantes como seleccionados.")

    } catch (error) {
        console.log(error)
    }

});

app.put("/actualizarSel/:propuestaId", async (req, res) => {

    try {
        console.log("actualizarSel");

        const { propuestaId } = req.params;
        // const { jsonData } = req.body;

        console.log(req.body);

        // let investigadoresPostulantes = req.body.equipo.map(p => p.investigador_id).join(",");
        
        req.body.equipo.forEach(async element => {

            if (element.seleccionado == undefined) {
                return;
            }

            let query = `UPDATE postulaciones SET seleccionado = ${element.seleccionado} 
            WHERE id_investigador in (${element.investigador_id}) AND id_propuesta = ${propuestaId}`;

            const actualizarSeleccionados = await pool.query(query);
            
        });

      
        res.json("Se actualizaron los postulantes como seleccionados.")

    } catch (error) {
        console.log(error)
    }

});

app.post("/insertarEquipo", async (req, res) => {

    try {

        // const { data } = req.body;

        console.log(req.body);
        
        req.body.equipo.forEach(async element => {

            if (element.seleccionado == undefined) {
                return;
            }

            const nuevaPropuesta = await pool.query(`
            INSERT INTO equipos (id_investigador, id_investigador_guia, id_propuesta) 
            VALUES (${element.investigador_id}, ${req.body.investigadorGuiaId}, ${req.body.propuestaId})`);
            
        });

        res.json("Se ha insertado registro en tabla equipos");
        
    } catch (error) {
        console.log(error)
    }

});

app.post("/eliminarEquipo", async (req, res) => {

    try {
        console.log("eliminarEquipo");
        // const { data } = req.body;

        console.log(req.body);
        
        req.body.equipo.forEach(async element => {

            const nuevaPropuesta = await pool.query(`
            DELETE FROM equipos 
            WHERE id = ${element.equipo_id}`);
            
        });

        res.json("Se ha insertado registro en tabla equipos");
        
    } catch (error) {
        console.log(error)
    }

});


app.listen(port, () => {
    console.log("Servidor iniciado en el puerto 5000")
});