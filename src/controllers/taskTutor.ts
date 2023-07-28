import { RequestHandler } from "express"


import TaskTutor from "../models/taskTutor"


const getAllTutors:RequestHandler = async (req,res) =>{
    try {
        const tutors = await TaskTutor.aggregate([
            {
                $lookup: {
                    from: "taskpets",
                    localField: "_id",
                    foreignField: "tutorId",
                    as: "pets",
                },
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    phone: 1,
                    email: 1,
                    date_of_birth: 1,
                    zip_code: 1,
                    pets: 1,
                },
            },
        ])
        const tasks = await tutors
        res.status(200).json({sucess:true,tasks })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTutor:RequestHandler = async (req,res) =>{
    try {
        const task = await TaskTutor.create(req.body)
        
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}



const deleteTutor:RequestHandler = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await TaskTutor.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}` })
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTutor:RequestHandler = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await TaskTutor.findOneAndUpdate({_id:taskID},req.body,{
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
    getAllTutors,
    createTutor,
    deleteTutor,
    updateTutor
}

