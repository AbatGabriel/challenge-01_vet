import { RequestHandler } from "express"


import TaskPet from "../models/taskPet"
import TaskTutor from "../models/taskTutor"


const createPet:RequestHandler = async (req,res) =>{
    try {
        const {tutorId:taskID} = req.params
        const findTutor = await TaskTutor.findOne({_id:taskID})

        const task = Object.assign({},req.body,req.params)
        const createPet = await TaskPet.create(task)
        //const task = await TaskPet.create(req.body)

        if(!findTutor){
            return res.status(404).json({msg:`No tutor with id : ${taskID}` })
        } 

        res.status(200).json({taskID,createPet})
        

    } catch (error) {
        res.status(500).json({msg: error})
    }
}


const deletePet:RequestHandler = async (req,res) =>{
    try {
        const {tutorId:taskID} = req.params
        const findTutor = await TaskTutor.findOne({_id:taskID})
        const {petId:taskpetId} = req.params
        const task = await TaskPet.findOneAndDelete({_id:taskpetId})

        if(!findTutor){
            return res.status(404).json({msg:`No tutor with id : ${taskID}` })
        }
        if(!task){
            return res.status(404).json({msg:`No pet with id : ${taskpetId}` })
        } 

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updatePet:RequestHandler = async (req,res) =>{
    try {
        const {tutorId:taskID} = req.params
        const findTutor = await TaskTutor.findOne({_id:taskID})
        const {petId:taskpetId} = req.params
        const task = await TaskPet.findOneAndUpdate({_id:taskpetId},req.body,{
            new:true,
            runValidators: true,
        })

        if(!findTutor){
            return res.status(404).json({msg:`No tutor with id : ${taskID}` })
        }
        if(!task){
            return res.status(404).json({msg:`No pet with id : ${taskpetId}` })
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