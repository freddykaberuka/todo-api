import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>res.send('this is for get task'));
router.get('/task');
router.post('/task');
router.delete('/task');
router.put('/task')

export default router