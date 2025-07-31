import express, { RequestHandler } from 'express'
import { updateEmail, updateName, verifyOTP } from '../controllers/authController'
import { authMiddleware } from '../middlewares/authMiddleware'


const router = express.Router()

// router.use(authMiddleware as RequestHandler)

router.post("/verify-otp",verifyOTP)
router.put("/add-name",authMiddleware,updateName)
router.put("/add-email",authMiddleware,updateEmail)

export default router