import { json } from 'body-parser'
import models from '../models'

function addTask(req,res){
    const task={
        item: req.body.item,
        category: req.body.category
    }
    models.Tasks.create(task).then(result=>{
        res.status(201).json({
            message:'task added successfully'
        })
    }).catch(error=>{
        res.status(500).json({message: 'something went wrong'})
    })
}
function viewTasks(req,res){
    models.Tasks.findAll().then(data=>{
        res.status(200).json({
            message:'list of Tasks',
            data
        })
    }).catch(error =>{
        res.status(500).json({
            message:"something went wrong",
            error
        })
    })
}
function viewTask(req,res){
    const id = req.params.id;
    models.Tasks.findByPk(id).then(result=>{
        result ? res.status(200).json({message:'view task detail',result})
        : res.status(404).json({message:'page not found'})
    }).catch(err=>{
        res.status(500).json({message:'something went wrong',err})
    })
}

function updateTask(req,res){
    const id = req.params.id
    const dataToUpdate ={
        item:req.body.item,
        category:req.body.category
    }
    models.Tasks.update(dataToUpdate,{where:{id:id}}).then(result=>{
        res.status(201).json({message:'task is updated',result})
    }).catch(err=>{
        res.status(500).json({message:'something went wrong',err})
    })
}

module.exports = {
    addTask : addTask,
    viewTasks : viewTasks,
    viewTask : viewTask,
    updateTask : updateTask
}