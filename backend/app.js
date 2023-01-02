import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'



const app=express();
dotenv.config();
const port=process.env.PORT || 9000;

// const MONGODB_URI='mongodb+srv://sarang:sarang@cluster0.c3nqzyp.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI)



app.get('/',(req,res)=>{
    res.status(200).send("connected...")
})

app.listen(port,()=>console.log(`listening on port ${port}`))