import express from "express"
import { AdminLoginOtp,AdminLogin, AddSubAdmin, sendotp } from "../controllers/Admin..controller.js"
import { protect } from "../middlewares/admin.auth.middleware.js"
import multer from "multer"

const upload= multer()


const router=express.Router()

router.post("/sendloginotp",AdminLoginOtp)
router.post("/sendotp",protect,sendotp)
router.post("/login",AdminLogin)
router.post("/addsubadmin",upload.single("idPhotos"),protect,AddSubAdmin)




export default router