import { RequestHandler } from "express"


import TaskPet from "../models/taskPet"


const createPet:RequestHandler = async (req,res) =>{
    try {
        const task = await TaskPet.create(req.body)
        
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}



const deletePet:RequestHandler = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await TaskPet.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}` })
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updatePet:RequestHandler = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await TaskPet.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators: true,
        })

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}` })
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}



module.exports = {
    createPet,
    deletePet,
    updatePet
}