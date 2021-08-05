

const express = require('express')
const router = express.Router()

const { getAllTasks, getTask, createTask } = require('../controllers/todoController')


router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .put()
    .delete()


module.exports = router