import express, { RequestHandler } from 'express'
import { updateNameEmail, updateName, verifyOTP } from '../controllers/authController'
import { authMiddleware } from '../middlewares/authMiddleware'


const router = express.Router()

// router.use(authMiddleware as RequestHandler)

router.post("/verify-otp",verifyOTP)
router.put("/add-name",authMiddleware,updateName)
router.put("/update-name-email",authMiddleware,updateNameEmail)

export default router