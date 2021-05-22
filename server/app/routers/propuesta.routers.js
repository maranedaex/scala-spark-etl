module.exports = app => {
  const propuestas = require("../controllers/propuesta.controllers.js");

  var router = require("express").Router();

  // Create a new Propuestas
  router.post("/", propuestas.create);

  // Retrieve all Propuestas
  router.get("/", propuestas.findAll);

  // Retrieve all published Propuestas
  router.get("/published", propuestas.findAllPublished);

  // Retrieve a single Propuestas with id
  router.get("/:id", propuestas.findOne);

  // Update a Tutorial with id
  router.put("/:id", propuestas.update);

  // Delete a Propuestas with id
  router.delete("/:id", propuestas.delete);

  // Delete all Propuestas
  router.delete("/", propuestas.deleteAll);

  app.use("/api/propuestas", router);
};
