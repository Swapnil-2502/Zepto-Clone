import express, { RequestHandler } from "express"
import { authMiddleware } from "../middlewares/authMiddleware"
import { addAddress, deleteAddress, getAllAddresses, updateAddress } from "../controllers/addressController"

const router = express.Router()

router.use(authMiddleware as RequestHandler)

router.get("/user/addresses", getAllAddresses)
router.post("/user/addresses", addAddress )
router.put("/user/addresses/:addressId", updateAddress)
router.delete("/user/addresses/:addressId", deleteAddress)

export default router