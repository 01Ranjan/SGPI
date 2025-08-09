import express from express

const router=express.Router()

router.get("/login",AdminLogin)



export default router