const express = require('express')
const routes = express.Router()

const {
    getAllTasks,
    createTasks,
    deleteTasks,
    getTasks,
    updateTasks
} = require('../controllers/tasks')


routes.route('/').get(getAllTasks).post(createTasks)

routes.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)



module.exports= routes