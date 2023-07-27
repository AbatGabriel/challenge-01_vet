import {Schema,model} from "mongoose"

const taskTutorSchema = new Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    phone:{
        type:String,
        required:[true,'must provide phone number'],
        trim:true,
        maxlength:[14,'name can not be more than 14']
    },
    email:{
        type:String,
        required:[true,'must provide email'],
        trim:true,
    },
    date_of_birth:{
        type:String,
        required:[true,'must provide a date'],
        trim:true,
    },
    zip_code:{
        type:String,
        required:[true,'must provide zip-code'],
        trim:true,
        maxlength:[9,'name can not be more than 9 characters']
    },
    
    pets:[]
    }
)


export default model('TaskTutor',taskTutorSchema)