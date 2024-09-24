const task = require('../models/schema')


const createTask = async (req,res) =>{
    try {const create = await task.create(req.body)
    res.status(201).json({create })}
    catch(error){
        console.log("error")

    }
}

async function getTask(req, res) {
    try {
        const taskID = req.params.taskID
        const find = await task.findOne({ _id: taskID })
        if (!taskID) {
            return res.json({ msg: 'task not found' })

        }


        res.status(200).json({ find })

    }

    catch (error) {
        console.log(" error")
    }



}

const getallTasks = (req,res) =>{
    res.send(" ");
}

const updateTask = (req,res) =>{
    res.send("  ");
}

const deleteTask = (req,res) =>{
    res.send("  ");
}


module.exports = {createTask,getTask,getallTasks,updateTask,deleteTask};