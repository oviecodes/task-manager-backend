

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true
    },
    todos: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

const todo = mongoose.model('todo', todoSchema)

module.exports = todo