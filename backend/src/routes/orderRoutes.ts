import express from "express"
import { createOrder, getOrders } from "../controllers/orderController"
import { authMiddleware } from "../middlewares/authMiddleware"

const router = express.Router()

router.get("/",authMiddleware,getOrders)
router.post("/",authMiddleware,createOrder)

export default router