const {Schema, model}=require('mongoose')

const SchemaProduct=new Schema({
    id_product:{type:Number, required: true},
    name:{type: String, required: true},
    description: {type: String, required:true},
    type_product: {type: Number, required: true},
    price: {type: Number, required: true},
    img:{type: String, required: true}
},{
    timestamps: true, //cuando fue creado y actualizado
    versionKey: false //cuando se crea un objeto no coloca el -v
})

module.exports=model('Product', SchemaProduct)