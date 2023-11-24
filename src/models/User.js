import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
        },
        twitterUsername: {
            type: String,
            required: false,
        },
        githubUsername: {
            type: String,
            required: false,
        },
        linkedinUsername: {
            type: String,
            required: false,
        },
    },

    { timestamps: true },
);
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;