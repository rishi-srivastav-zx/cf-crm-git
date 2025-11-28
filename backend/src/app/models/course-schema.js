import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        fullCourseName: {
            type: String,
            required: [true, "Full course name is required"],
            trim: true,
            minlength: [3, "Course name must be at least 3 characters"],
            maxlength: [200, "Course name cannot exceed 200 characters"],
        },

        shortCourseName: {
            type: String,
            required: [true, "Short course name is required"],
            trim: true,
            maxlength: [50, "Short name cannot exceed 50 characters"],
        },

        courseDuration: {
            type: Number,
            required: [true, "Course duration is required"],
            min: [1, "Duration must be at least 1 year"],
            max: [10, "Duration cannot exceed 10 years"],
        },

        courseType: {
            type: String,
            required: [true, "Course type is required"],
            enum: {
                values: [
                    "Undergraduate",
                    "Postgraduate",
                    "Diploma",
                    "Certificate",
                    "Professional",
                    "Doctoral",
                ],
                message: "{VALUE} is not a valid course type",
            },
        },

        courseCategory: {
            type: String,
            required: [true, "Course category is required"],
            enum: {
                values: [
                    "Science",
                    "Arts",
                    "Commerce",
                    "Engineering",
                    "Medical",
                    "Management",
                ],
                message: "{VALUE} is not a valid course category",
            },
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
        collection: "courses",
    }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
