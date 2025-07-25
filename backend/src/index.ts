import express, {Request, Response} from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db";

dotenv.config()
const app = express()
const PORT = process.env.PORT_NUMBER

app.get("/",(req: Request, res: Response)=>{
    res.send("FROM GET ROUTE")
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
    })
})
