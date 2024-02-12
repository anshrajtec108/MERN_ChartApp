const mongoose =require('mongoose')
// import { DB_NAME } from "../constants.js"



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/ChatApp`)
        console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGO_DB connection FAILED", error)
        process.exit(1)
    }
}

module.exports=connectDB