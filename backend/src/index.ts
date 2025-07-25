import express, {Request, Response} from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db";

import authRoutes from './routes/authRoutes'

dotenv.config()
const app = express()
const PORT = process.env.PORT_NUMBER

app.use(express.json())

app.use("/api/auth",authRoutes)

app.get("/",(req: Request, res: Response)=>{
    res.send("FROM GET ROUTE")
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
    })
})
