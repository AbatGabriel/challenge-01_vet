import {Schema,model} from "mongoose"

const taskPetSchema = new Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    species:{
        type:String,
        required:[true,'must provide specie'],
        trim:true,
        maxlength:[14,'name can not be more than 14']
    },
    carry:{
        type:String,
        required:[true,'must provide a carry'],
        trim:true,
    },
    weight:{
        type:Number,
        required:[true,'must provide a weight'],
        trim:true,
    },
    date_of_birth:{
        type:String,
        required:[true,'must provide a date'],
        trim:true,
    }
    }
)


export default model('TaskPet',taskPetSchema)