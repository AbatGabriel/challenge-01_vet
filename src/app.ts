import express  from "express"
const app = express()
const task = require("./routes/task")

//routes
app.use('/api/v1', task)

app.listen(3000)

console.log('port 3000 conected...')