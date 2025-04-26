const Producto = require("../models/producto.models");
const image=require("../utils/image");
const fs = require("fs");

async function createProducto(req, res) {
  const productos = new Producto(req.body);
  //console.log(productos);
   try {
     if(req.files.imagep){
      const imagePath=image.getFilePath(req.files.imagep);
      productos.imagep=imagePath;
     }
 
    const datos = await productos.save();
    res.status(200).send(datos);
  } catch (error) {
    console.log(error);
    
   // res.status(500).send({ msg: "Error al guardar los datos" });
  } 
}

async function getProducto(req, res) {
  try {
    const buscarProductos= await Producto.find();
    res.status(200).send(buscarProductos);
  } catch (error) {
    res.status(500).send({msg:"Error al obtener la información"})
  }


}

const path = require("path"); // Asegúrate de tener esto arriba

async function delProducto(req, res) {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).send({ msg: "Producto no encontrado" });
    }

    if (producto.imagep) {
      const imagePath = path.join(__dirname, "..", producto.imagep);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log(`Archivo eliminado: ${imagePath}`);
      } else {
        console.log(`Archivo no encontrado: ${imagePath}`);
      }
    }

    await Producto.findByIdAndDelete(id);
    res.status(200).send({ msg: "Producto eliminado" });
  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar el producto" });
    console.log(error);
  }
}


async function updateProducto(req, res) {
  const {id}=req.params;
  const updateproducto=req.body;

  try {
    await Producto.findByIdAndUpdate({_id:id},updateproducto);
    res.status(200).send({msg:"Datos actualizados correctamente"})
  } catch (error) {
   res.status(400).send({msg:"Error al actualizar"}) 
  }
}
module.exports = {
  createProducto,
  getProducto,
  delProducto,
  updateProducto,
};