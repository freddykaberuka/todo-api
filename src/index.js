import express from 'express';
import taskRoute from './routers/task'
import userRoute from './routers/user'

const app = express();
app.get('/',(req,res)=>res.send('Manage your daily task'));
app.use('/task',taskRoute)
app.use('/user',userRoute)
export default app;