

const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const todoRoute = require('./routes/todo')

//initialize app
const app = express()
const port =  process.env.PORT || 3000

//mongoose connection
mongoose.connect(
    'mongodb://localhost:27017/todo', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(() => {
    console.log(`connected to mongoose`)
})
.catch(e => {
    console.log(e)
})


//middleware
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/todos', todoRoute)


//Error handler
app.use((err, req, res, next) => {
   res.status(err.status).json(err)
})

//listen on port 3000
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})

