

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
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