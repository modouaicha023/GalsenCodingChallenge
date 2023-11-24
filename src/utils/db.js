import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connections[0].readyState) return;
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB !!");
    }
    catch (error) {
        throw new Error("Error connectiong Mongoose");
    }
}

export default connect;