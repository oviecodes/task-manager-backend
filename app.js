

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port =  process.env.PORT || 3000

mongoose.connect(
    'mongodb://localhost:27017/todo', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(() => {
    console.log(`connected to mongoose`)
})
.catch(e => {
    console.log(e)
})


app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})

