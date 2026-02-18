// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async() => {
//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
//     }
//     catch (error){
//         console.log("MONGODB connection error ", error);
//         process.exit(1)
//     }
// }


// export default connectDB


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("ENV URI:", process.env.MONGODB_URI);  // 👈 add this line

    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;