

// const express = require('express')
const Todo = require('../models/todo')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.find()
        res.status(200).json(tasks)
    } catch (e) {
        console.log(e)
        res.status(500).send('an error occurred')
    }
    
}

const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Todo.findById(id)
        if (!task) {
            return res.status(404).json({ errMsg: 'Resource not found'})
        }
        return res.status(200).json(task)
    } catch (e) {
        console.log(e)
        return res.status(500).send('an error occurred')
    }
}

const createTask = async (req, res) => {
    if (req.body.name.length > 2) {
        try {
            const newTask = await Todo.create({
                name: req.body.name,
                todos: [],
                done: false
            })
            if(!newTask) {
                return res.status(404).json({ errMsg: 'An error occurred' })
            }
            return res.status(201).json(newTask)
        } catch (e) {
            console.log(e)
            return res.status(500).send('an error occurred')
        }
    } else {
        return res.status(204).json({ errMsg: 'Name must contain 3 or more characters' })
    }
    
}

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

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Todo.findByIdAndDelete(id)
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

