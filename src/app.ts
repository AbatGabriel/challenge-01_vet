import express  from "express"
const app = express()
const task = require("./routes/task")

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
            console.log("teste");
            
        })
    
    } catch (error) {
        console.log(error)
    }
}


start()