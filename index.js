const mongoose = require("mongoose");
const app = require("./app");
const {
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    IP_SERVER,
    DB_PORT
} = require("./constantes");

const port = process.env.PORT || 4000;

// Conexión a MongoDB
const uri = `mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(uri)
    .then(() => console.log(`Conectado a la base de datos en el puerto ${DB_PORT}`))
    .catch(err => console.error("Error al conectar a la base de datos:", err));

app.listen(port, () => {
    console.log("****************");
    console.log("***** API REST *****");
    console.log("****************");
    console.log(`Servidor en ejecución: http://${IP_SERVER}:${port}/api`);
});
