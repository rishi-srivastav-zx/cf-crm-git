import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Department name is required"],
            trim: true,
            unique: true,
            minlength: [
                3,
                "Department name must be at least 3 characters long",
            ],
            maxlength: [200, "Department name cannot exceed 200 characters"],
            lowercase: true, // optional normalization
        },
        totalCourses: {
            type: Number,
            default: 0,
            min: [0, "Total courses cannot be negative"],
        },
        description: {
            type: String,
            trim: true,
            maxlength: [1000, "Description cannot exceed 1000 characters"],
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

departmentSchema.index({ name: "text" });
departmentSchema.index({ status: 1 });

departmentSchema.virtual("courses", {
    ref: "Course",
    localField: "_id",
    foreignField: "department",
});

departmentSchema.methods.updateCourseCount = async function () {
    const Course = mongoose.model("Course");
    const count = await Course.countDocuments({ department: this._id });
    await this.updateOne({ totalCourses: count });
};

const Department = mongoose.model("Department", departmentSchema);
export default Department;
