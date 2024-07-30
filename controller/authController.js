import userModel from "../models/userModel.js";
import { hashpassword,comparepassword} from './../helper/authHelper.js';
import JWT from "jsonwebtoken";

export  const registercontroller =async(req,res)=>{
    try{
        console.log(req.body)
       const {name,email,password,phone,address}=req.body
       if(!name){
        res.send({
            message:"Name is requred",
        })
       }
       if(!email){
        res.send({
            message:"Email is requred",
        })
       }
       if(!password){
        res.send({
            message:"Password is requred",
        })
       }
       if(!address){
        res.send({
            message:"Address is requred",
        })
       }
       if(!phone){
        res.send({
            message:"Phone is requred",
        })
       }
       const existinguser= await userModel.findOne({email});
       if(existinguser)
        {
            return res.status(200).send({
                success:true,
                message:" User has Already registered  pls login",

            })
        }
        const hashedpassword=await hashpassword(password);
        
        const user=await new userModel({name,email,password:hashedpassword,address,phone}).save();

        res.status(201).send({
            success:true,
            message:"registered successfully",
            user
        })
    }
    catch(error)
    {
     console.log(error);
     return res.status(500).send({
        success: false,
        message: "registration failed",
        error
     })
    }
}

//login controller

export const logincontroller = async(req,res)=>{
    let success = false;
try {
    const {email,password}=req.body;
    if(!email || !password)
        {
            res.status(404).send({
                success,
                message:"Incorrect Email or Password"

            })
        }
        //check user 
        const user=await userModel.findOne({email})
        if(!user)
            {
              return   res.status(404).send({
                    success,
                    message:"email Not Registered"
                })
            }
        const match= await comparepassword( password   , user.password);
        if(!match)
            {
                res.status(400).send({
                    success,
                    message:"Invalid Password"
                })
            }
        // token 
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        success = true;
        res.status(200).send({
            success,
            message:"Login Successful",
            user:{
             name:user.name,
             phone:user.phone,
             address:user.address,
             email:user.email
            },
            token,
        });
} catch (error) {
    console.log(error)
    res.status(500).send({
        success,
        message:"login error ",
        error
    })
}
}

//test controller

export const testController = (req , res)=>{
res.send('protected route');
}