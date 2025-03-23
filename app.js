const express = require('express')
const cors = require('cors')
const bodyParser=require("body-parser")

//Importar rutas
const productosRoute=require("./routes/Producto.routes")

//config express
const app = express()

//Parsear la informacion
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Configurar carpeta de carga de files
app.use(express.static("uploads"));

//Configuracion de cors
app.use(cors())

//Uso de las rutas
app.use('/api',productosRoute)

//exportar express
module.exports=app