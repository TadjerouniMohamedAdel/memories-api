const express = require('express')
const bodyParser=  require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

//Routers
const postRouter = require('./routes/posts.js')

//initialise exppress app
const app = express()


//config body parser
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))


// config cors (you shoud declare the cors befeore declaring your routes)
app.use(cors())

app.use('/posts',postRouter)

//mongo db config
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT  = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`server running at port ${PORT}`)))
        .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)