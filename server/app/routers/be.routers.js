module.exports = app =>{
    const propuesta = require("../controllers/be.controllers.js");
    
    var router = require("express").Router();


    router.post("/", propuesta.create);

      // Retrieve all published 
    router.get("/published", propuesta.findAllPublished);

    router.post("/addpropuesta",  propuesta.createPropuesta); 

    router.get("/propuestas", propuesta.findAllPublished);

    router.get("/propuesta/:id",propuesta.findOne);

    router.put("/propuesta/:id", propuesta.update);

    router.delete("/propuesta/:id", propuesta.delete);

    app.use("/api/propuesta", router);
};