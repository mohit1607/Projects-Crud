const express = require('express')
const connect = require('./db/conn')
const router = require('./routes/projects')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')
require('dotenv').config()
const app = express()  


//middlewares
app.use(express.json())

//routes
app.use('/api/v1/projects', router);
app.get('/', (req, res) => res.send('Server Running'))
//extra error middlewares
 app.use(errorHandlerMiddleware)
 app.use(notFound)

 const port =  process.env.PORT || 8000

const start = async () => {
    try{
        await app.listen(port, () => {
            connect().then(() => console.log(`Server is listening at port : ${port}`)).catch((err) => console.log(err))
       })
    }catch(e){
        console.log(e)
    }
}
start();