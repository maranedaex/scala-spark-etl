module.exports = {
   HOST: "159.65.230.54",
   USER: "root",
   PASSWORD: "pingeso",
   PORT: 1425,
   DB: "pingeso",
   dialect: "postgres",
   pool:{
       max: 5,
       min: 0,
       acquire: 30000,
       idle:10000
   }
}