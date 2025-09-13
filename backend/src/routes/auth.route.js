import express from "express";

const router = express.Router();


router.get("/signup",(req,res)=>{
    res.json({
        message: "signup endpoint"
    })
})
router.get("/signin",(req,res)=>{
    res.json({
        message:"signin endpoint"
    })
})
router.get("/logout",(req,res)=>{
    res.json({
        message:"logout endpoint"
    })
})


export default router;