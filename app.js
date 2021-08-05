

const express = require('express')
const mongoose = require('mongoose')

const todoRoute = require('./routes/todo')

const app = express()
const port =  process.env.PORT || 3000

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


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/todos', todoRoute)


app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})

