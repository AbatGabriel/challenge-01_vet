import express, {Request, Response, NextFunction} from 'express'
import { json } from 'body-parser'

import todRouter from './routes/route_test'

const app = express()

app.use(json())

app.use('/todos', todRouter)

app.use((err: Error,req: Request,res: Response,next: NextFunction)=>{
    res.status(500).json({message:err.message})
})


app.listen(3000)


console.log('port 3000 conected...')