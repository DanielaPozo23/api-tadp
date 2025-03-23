const mongoose=require('mongoose')

const Producto=mongoose.Schema({
    nombre:String,
    precio:Number,
    decripcion:String,
    cantidad:Number,
    imagep:String,
    createdAT:{type:Date, default:Date.now()}
})

module.exports=mongoose.model("producto",Producto)