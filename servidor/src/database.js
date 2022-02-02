const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/cerveceria',{
    useUnifiedTopology: true,
    useNewUrlParser: true

})
.then(db=> console.log('Db connected'))
.catch(err=> console.log(err))