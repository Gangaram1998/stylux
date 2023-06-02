const express=require("express")
const { connection } = require("mongoose")
const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send({
        message:"Api is running",
        status:0,
        error:false
    })
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }catch(err){
        console.log(err)
    }

    console.log("server is running at port 3001", process.env.PORT)
})