import express from "express"
import { AdminLoginOtp,AdminLogin, AddSubAdmin } from "../controllers/Admin..controller.js"
import { protect } from "../middlewares/admin.auth.middleware.js"
import multer from "multer"

const upload= multer()


const router=express.Router()

router.post("/sendloginotp",AdminLoginOtp)
router.post("/login",AdminLogin)
router.post("/addsubadmin",protect, upload.single("idPhotos"),AddSubAdmin)



export default router