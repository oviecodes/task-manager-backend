

const mongoose = require('mongoose')

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

const todo = mongoose.model('todo', todoSchema)