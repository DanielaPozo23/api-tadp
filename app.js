const express = require('express')
const cors = require('cors')

//Importar rutas
const productosRoute=require("./routes/Producto.routes")
//config express
const app = express()



//Configuracion de cors
app.use(cors())

//Uso de las rutas
app.use('/api',productosRoute)

//exportar express
module.exports=app