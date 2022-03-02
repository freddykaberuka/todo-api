import express from 'express'
import taskController from '../controllers/taskController'
const router = express.Router()

router.get('/',taskController.viewTasks);
router.get('/:id',taskController.viewTask);
router.post('/add',taskController.addTask);
router.delete('/task');
router.patch('/:id',taskController.updateTask)

export default router