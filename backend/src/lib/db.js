import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)

        if(!MONGO_URL) throw new Error("MONGO_URL is not set");


        console.log("mongodb connected" ,conn.connection.host);
    }catch (error){
        console.error("Error connecting to mongodb", error)
        process.exit(1); //1 status code means fail, 0 means success
    }
}