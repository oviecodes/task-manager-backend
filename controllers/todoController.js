

// const express = require('express')
const Todo = require('../models/todo')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.find()
        res.status(200).json({ tasks })
    } catch (e) {
        console.log(e)
        res.status(500).send('an error occurred')
    }
    
}

const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await Todo.findById(id)
        if (!task) {
            return res.status(404).json({ errMsg: 'Resource not found'})
        }
        return res.status(200).json({ tasks })
    } catch (e) {
        console.log(e)
        return res.status(500).send('an error occurred')
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await Todo.create({
        name: req.body.name,
        todos: [],
        done: false
        })
        if(!newTask) {
            return res.status(404).json({ errMsg: 'An error occurred' })
        }
        return res.status(200).json({ newTask })
    } catch (e) {
        console.log(e)
        return res.status(500).send('an error occurred')
    }
}

const updateTask = async (req, res) => {
    const id = req.params.id
    const tasks = await Todo.findById(id)
}

const deleteTask = async (req, res) => {

}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}

