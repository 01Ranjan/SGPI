import express from "express"
import { AdminLoginOtp,AdminLogin } from "../controllers/Admin..controller.js"


const router=express.Router()

router.post("/sendloginotp",AdminLoginOtp)
router.post("/login",AdminLogin)



export default router