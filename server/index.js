const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const app=express();
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");
/* Declaring the cors and express json*/
app.use(cors());
app.use(express.json());

/*This is admin router*/
app.use("/admin",adminRouter)

/*This is user router*/
app.use("/user",userRouter);


app.get('/',(req,res)=>{
       res.json({message:'Hi Munuri Gangadhar'});
})

/*Connecting to mongodb*/
async function main(){
    await mongoose.connect('mongodb://localhost:27017/courses');
    console.log('database connnected');  
}
main().catch(err=>console.log(err));


app.listen(3000,()=>{
    console.log('Server is Created at 3000');
})