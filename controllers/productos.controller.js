async function createProducto(req,res) {
    res.status(200).send({msg:"Crear Productos"})
    
}

async function getProducto(req,res){
    res.json("ver productos")
}

async function delProducto(req,res) {
    res.status(200).send({msg:"Eliminar Productos"})
}
async function updateProducto(req,res){
    res.status(200).send({msg:"Actualizar Productos"})
}
module.exports={
    createProducto,
    getProducto,
    delProducto,
    updateProducto,
}