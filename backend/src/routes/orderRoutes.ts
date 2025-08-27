import express from "express"
import { createOrder } from "../controllers/orderController"
import { authMiddleware } from "../middlewares/authMiddleware"

const router = express.Router()

router.post("/",authMiddleware,createOrder)

export default router