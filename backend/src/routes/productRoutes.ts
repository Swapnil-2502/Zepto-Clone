import express from 'express'
import { createProduct, getProducts, updateProduct } from '../controllers/productController'

const router = express.Router()

router.get("/", getProducts)
router.post("/",createProduct)
router.put("/:id",updateProduct)

export default router