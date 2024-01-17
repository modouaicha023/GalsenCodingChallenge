import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        author: {
            type: String,
            required: false,
            default: "GCC",
        },
        image: {
            type: [String],
            required: true,
        },
        features: {
            type: [String],
            required: true,
        },
        guidelines: {
            type: [String],
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true },
);
const Challenge = mongoose.models?.Challenge || mongoose.model('Challenge', ChallengeSchema);

export default Challenge;