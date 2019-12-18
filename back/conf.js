const mysql = require("mysql");
const connexion = mysql.createConnection({
host: "localhost",
user: "root",
password: "toBeDetermined",
database: "tobeCompleted"
})

module.exports=connexion
