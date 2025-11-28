import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        mobile: {
            type: String,
            required: [true, "Mobile number is required"],
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        country: {
            type: String,
            required: [true, "Country is required"],
            default: "India",
        },
        state: {
            type: String,
            required: [true, "State is required"],
        },
        city: {
            type: String,
            required: false,
        },
        course: {
            type: String,
            required: [true, "Course is required"],
        },
        leadType: {
            type: String,
            required: [true, "Lead type is required"],
            enum: ["Warm", "Hot", "Cold"],
            default: "Warm",
        },
        sourceType: {
            type: String,
            required: [true, "Source type is required"],
        },
        college: {
            type: String,
            required: false,
        },
        followUp: {
            type: Number,
            default: 0,
        },
        lastFollowUp: {
            type: Date,
            required: false,
        },
        overdue: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            enum: ["active", "admitted", "rejected", "archived"],
            default: "active",
        },
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        whatsapp: {
            type: String,
            required: false,
        },
        loginTime: {
            type: String,
            required: false,
        },
        dateMissed: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

leadSchema.index({ name: "text", mobile: "text", email: "text" });
leadSchema.index({ leadType: 1, status: 1 });
leadSchema.index({ country: 1, state: 1, city: 1 });

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
