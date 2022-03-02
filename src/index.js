import express from 'express';


const app = express();
app.get('/',(req,res)=>res.send('Manage your daily task'));

export default app;