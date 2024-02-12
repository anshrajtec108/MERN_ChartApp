const express =require("express")
const dotenv=require('dotenv');
const connectDB = require("./config/db");
// const { defult: connectDB } = require("./config/db");
const userRouter = require('./routers/userRouter.js')
dotenv.config()
connectDB()
const app= express();
app.use('/api/user',userRouter)
const port=process.env.PORT || 5000
app.listen(port, console.log(`Server is Started on ${port}`))