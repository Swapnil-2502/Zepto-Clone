import express from 'express'
import { createProduct, getProductById, getProducts, updateProduct } from '../controllers/productController'

const router = express.Router()

router.get("/", getProducts)
router.get("/:productId", getProductById)
router.post("/",createProduct)
router.put("/:id",updateProduct)

export default router