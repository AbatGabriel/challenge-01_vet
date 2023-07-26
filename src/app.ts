import express  from "express"
const app = express()
const task = require("./routes/taskTutor")

const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())
//routes
app.use('/api/v1', task)

const port = 3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`servidor conectado a porta ${port}`);
            
        })
    
    } catch (error) {
        console.log(error)
    }
}


start()