const { Router }= require('express')

const router= Router()

const productController= require('../controllers/controller_product')


router.get('/products', productController.getProducts)
router.post('/products', productController.createProduct)
router.put('/products/:id', productController.editProduct)
router.get('/products/:id', productController.getProduct)
router.delete('/products/:id', productController.deleteProduct)

module.exports=router