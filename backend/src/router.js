const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTasks);
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',
    tasksMiddleware.validateFieldStatus, 
    tasksMiddleware.validateFieldTitle, 
    tasksController.updateTask);


module.exports = router; 