import express from "express";
import {signup} from "../controller/auth.controller.js"

const router = express.Router();


router.post("/signup",signup);

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