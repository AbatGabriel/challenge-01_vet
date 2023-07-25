import {Schema,model} from "mongoose"

const taskSchema = new Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    }
)

export default model('Task',taskSchema)
