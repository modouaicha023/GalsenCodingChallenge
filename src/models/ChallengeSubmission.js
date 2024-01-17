import mongoose from "mongoose";

const ChallengeSubmissionSchema = new mongoose.Schema(
    {
        challengerId: {
            type: String,
            required: true,
            unique: true,
        },
        challengeId: {
            type: String,
            required: true,
            unique: true,
        },
        githubRepoSolution: {
            type: String,
            required: true,
        },
        previewSolution: {
            type: String,
            required: false,
        },
    },
    { timestamps: true },
);
const ChallengeSubmission = mongoose.models?.ChallengeSubmission || mongoose.model('ChallengeSubmission', ChallengeSubmissionSchema);

export default ChallengeSubmission;