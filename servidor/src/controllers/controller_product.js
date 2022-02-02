
const productController={}
const product= require('../models/product')

productController.getProducts=async (req,res)=>{
    const getProduct= await product.find()
    res.json(getProduct)
},
productController.getProduct=async (req,res)=>{
   const productId= await product.findById({_id: req.params.id})
    res.send(productId)
},
productController.createProduct=async (req,res)=>{
   const newProduct= new product(req.body)//crea el nuevo objeto
   await newProduct.save()

   res.send('Producto creado')

},
productController.deleteProduct= async (req,res)=>{
    await product.findByIdAndDelete(req.params.id)
    res.send('Producto borrado')

},
productController.editProduct= async (req,res)=>{
    await product.findByIdAndUpdate(req.params.id, req.body)
    res.send('Producto actualizado')
}


module.exports= productController