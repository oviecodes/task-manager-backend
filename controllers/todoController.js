

// const express = require('express')
const Todo = require('../models/todo')


//get all tasks in the database
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.find()
        res.status(200).json(tasks)
    } catch (e) {
        console.log(e)
        res.status(500).send('an error occurred')
    }

}

//get a single task by id from the database
const getTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Todo.findById(id)
        return res.status(200).json(task)
    } catch (e) {
        res.status(404).json({ errMsg: 'resource not found' })
    }
}


//Create a new task in database
const createTask = async (req, res) => {
    if (req.body.name.length > 2) {
        try {
            const newTask = await Todo.create({
                name: req.body.name,
                todos: [],
                done: false
            })
            res.status(201).json(newTask)
        } catch (e) {
            console.log(e)
            res.status(500).send('an error occurred')
        }
    } else {
        res.status(404).json({ errMsg: 'Name must contain 3 or more characters' })
    }

}


//update a task based on it's id
const updateTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(task)
    } catch (e) {
        console.log(e)
        return res.status(500).send('an error occurred')
    }
}

//delete a task based on it's id
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        await Todo.findByIdAndDelete(id)
        res.status(200).json({ msg: 'Successfully deleted' })
    } catch (e) {
        console.log(e)
        return res.status(500).send('an error occurred')
    }
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}





