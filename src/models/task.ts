import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
     id:Number,
     name:String
    }
)

module.exports = mongoose.model('Task',taskSchema)
