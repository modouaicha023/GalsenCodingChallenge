import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState === 1)
        return mongoose.connection.asPromise();
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB !!");
    }
    catch (error) {
        throw new Error("Error connectiong Mongoose");
    }
}

export default connect;