import express, {Request, Response} from "express";
import dotenv from "dotenv"
import cors from "cors";
import { connectDB } from "./config/db";

import authRoutes from './routes/authRoutes'
import addressRoutes from './routes/addressRoutes'
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'

dotenv.config()
const app = express()
const PORT = process.env.PORT_NUMBER

app.use(cors({
    origin:["http://localhost:5173","https://zepto-clone-tau.vercel.app/"],
    credentials: true,
}))
app.use(express.json())

app.use("/api/products",productRoutes)
app.use("/api/auth",authRoutes)
app.use("/api",addressRoutes)
app.use("/api/order",orderRoutes)


app.get("/",(req: Request, res: Response)=>{
    res.send("FROM GET ROUTE")
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
    })
})
