const express = require("express")
const bodyParser = require("body-parser")
const dotenv =require("dotenv")
const mongoose =require("mongoose")
const userRouter = require("./routes/userRoutes")
dotenv.config()
const app =express()

const PORT = process.env.PORT|| 8001
const DB_URI = 'mongodb://localhost:27017/Todo'
app.use(bodyParser.json())


// db connection
mongoose.connect(DB_URI).then(()=>{
console.log("db connected")
}).catch((err)=>console.log("error",err))

// Routes
app.use("/api/user",userRouter)


//server listen

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})