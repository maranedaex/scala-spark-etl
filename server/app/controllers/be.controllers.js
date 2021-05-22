const db = require("../models");
const Propuesta = db.propuesta;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, tutorials, totalPages, currentPage };
  };

exports.create = (req, res) => {
    //validate request
    if( !req.body.titulo){
        res.status(400).send({
            message: " Content solo is not empty"
        });
        return;
    }

    //Create a new Propuesta
    const propuesta = {
        id_proponente: req.body.propuestas.id_proponente, 
        titulo: req.body.propuestas.titulo, 
        estado: req.body.propuestas.estado,
        descripcion: req.body.propuestas.descripcion,
        categoria: req.body.propuestas.categoria, 
        organizacion: req.body.propuestas.organizacion,
        image: req.body.propuestas.image,
        email: req.body.email,
        published: req.body.published
    };

    //save Propuesta in DB
    Propuesta.create(propuesta)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message: 
               err.message || "Algun error se ha producido mientras crea una propuesta"
        });
    });
};

  exports.findAll = (req, res)  => {
      const { page, size, titulo } = req.query;
       var condition = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null;
      
       const { limit, offset } = getPagination(page, size);
      Propuesta.findAll({ where: condition, limit, offset  })
        .then( data => {
            const response = getPagingData(data, page, limit);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Algun error se ha producido mientras recibe propuesta"
            });
        });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Propuesta.findByPK(id)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: "Algun error se ha producido con id=" + id
          });
      });
   };

   exports.update = (req, res) => {
    const id = req.params.id;

    Propuesta.update(req.body, { 
        where: {id: id}
       })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "ha sido actualizado exitosamente !"
                });
            } else {
                res.send({
                    message: "No ha podido ser actualizado exitosamente id="
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: " Error actualizando con id=" +id
           });
        });
   };

   exports.delete = (req, res) => {
    const id = req.params.id;

    Propuesta.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ha sido eliminado exitosamente !"
                });
            } else {
                res.send({
                    message: "No ha podido ser eliminado exitosamente id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: " No ha podido ser eliminado con el id=" + id
            });
        });
   };


   exports.findAllPublished = (req,res) => { 
       const { page, size } = req.query;
       const { limit, offset } = getPagination(page, size);

       Propuesta.findAndCountAll({ where : { published: true }, limit, offset })
       .then(data => {
           const response = getPagingData(data, page, limit);
           res.send(data);  
       })
       .catch(err => {
           res.status(500).send({
               message:
                    err.message || " Algun error ha ocurrido mientras se rescataba Propuesta"
           });
       });
   };


// Routes
exports.createPropuesta =  (req, res) => {
    //validate request
    if( !req.body.titulo){
        res.status(400).send({
            message: " Content propuestas .. is not empty"
        });
        return;
    }
    console.log(req.headers);
    //Create a new Propuesta
    const propuesta = {
        id_proponente: req.body.propuestas.id_proponente, 
           titulo: req.body.propuestas.titulo, 
           estado: req.body.propuestas.estado,
           descripcion: req.body.propuestas.descripcion,
           categoria: req.body.propuestas.categoria, 
           organizacion: req.body.propuestas.organizacion,
           image: req.body.propuestas.image,
           email: req.body.email,
           published: req.body.published
    };

    //save Propuesta in DB
    Propuesta.create(propuesta)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message: 
               err.message || "Algun error se ha producido mientras creaba Propuesta"
        });
    });
};





