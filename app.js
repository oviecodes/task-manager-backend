

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port =  process.env.PORT || 3000




app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
