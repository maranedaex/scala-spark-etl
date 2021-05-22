const db = require("../models");
const Propuesta = db.propuestas;
const Op = db.Sequelize.Op;

// Create and Save a new Propuesta
exports.create = (req, res) => {
  // Validate request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Propuesta
  const propuesta = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    id_proponente: req.body.id_proponente, 
    estado: req.body.estado,
    categoria: req.body.categoria, 
    organizacion: req.body.organizacion,
    image: req.body.image,
    email: req.body.email,
    published: req.body.published ? req.body.published : false
  };

  // Save Propuesta in the database
  Propuesta.create(propuesta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Propuesta."
      });
    });
};

// Retrieve all Propuestas from the database.
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;

  Propuesta.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Propuestas."
      });
    });
};

// Find a single Propuesta with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Propuesta.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Propuesta with id=" + id
      });
    });
};

// Update a Propuesta by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Propuesta.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Propuesta was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Propuesta with id=${id}. Maybe Propuesta was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Propuesta with id=" + id
      });
    });
};

// Delete a Propuesta with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Propuesta.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Propuesta was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Propuesta with id=${id}. Maybe Propuesta was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Propuesta with id=" + id
      });
    });
};

// Delete all Propuestas from the database.
exports.deleteAll = (req, res) => {
  Propuesta.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Propuestas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all propuestas."
      });
    });
};

// find all published Propuesta
exports.findAllPublished = (req, res) => {
  Propuesta.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Propuestas."
      });
    });
};
