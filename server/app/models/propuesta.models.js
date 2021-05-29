module.exports = (sequelize, Sequelize) => {
    const Propuesta = sequelize.define("propuesta", {
      titulo: {
        type: Sequelize.STRING
      },
      id_proponente: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      organizacion: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Propuesta;
  };