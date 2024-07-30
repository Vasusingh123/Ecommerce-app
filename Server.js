import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';

dotenv.config();

connectDB();

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth",authRoutes)

app.get('/',(req,res)=>{
res.send("<h1>Welcome to Ecommerce WEb </h1>")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is  runing on ${process.env.MODE_DEV} mode on ${PORT} port`.bgCyan.white)
})
