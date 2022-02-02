const express = require("express");
const morgan= require('morgan')
const cors= require('cors')

const app=express()


app.use(morgan('dev'))

app.use(cors())
app.use(express.json()) //para que entienda json
app.use(express.urlencoded({extended:false})) //para que entinda los datos de un formulario html

app.use(require('./routes/product-routes'))

module.exports=app