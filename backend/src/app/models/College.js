import mongoose from "mongoose";

// ============= COLLEGE SCHEMA =============
const collegeSchema = new mongoose.Schema({
    basicInformation: {
        collegeLogo: {
            type: String,
            required: false,
        },
        collegeCoverPhoto: {
            type: String,
            required: false,
        },
        collegeName: {
            type: String,
            required: true,
            minLength: 1,
        },
        establishYear: {
            type: Number,
            required: true,
            min: 1900,
            max: 2040,
        },
        websiteLink: {
            type: String,
            required: true,
            match: /^https:\/\/.+/,
        },
        affiliatedUniversity: {
            type: String,
        },
    },
    contactInformation: {
        collegeEmail: {
            type: String,
            required: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        phoneNumber: {
            type: String,
            match: /^\+?[1-9]\d{1,14}$/,
        },
        landlineNumber: {
            type: String,
            match: /^[0-9]{3,4}-[0-9]{6,7}$/,
        },
        naacGrade: {
            type: String,
            required: true,
            enum: ["A++", "A+", "A", "B++", "B+", "B", "C", "Not Accredited"],
        },
        principalDirectorName: {
            type: String,
            required: true,
            minLength: 1,
        },
        pinZipCode: {
            type: String,
            required: true,
            match: /^[0-9]{5,6}$/,
        },
    },
    locationDetails: {
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        package: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
            minLength: 10,
        },
    },
    additionalInformation: {
        collegeDescription: {
            type: String,
            required: true,
            minLength: 50,
        },
        collegeLocationUrl: {
            type: String,
            required: true,
            match: /^https:\/\/(maps\.google\.com\/.*|goo\.gl\/maps\/.*)/,
        },
        collegeForumLink: {
            type: String,
            required: true,
        },
    },
    seoSettings: {
        allowIndexing: {
            type: Boolean,
            default: true,
        },
        metaTitle: {
            type: String,
            maxLength: 60,
        },
        metaKeywords: {
            type: String,
            match: /^[a-zA-Z0-9, ]+$/,
        },
        metaDescription: {
            type: String,
            minLength: 50,
            maxLength: 160,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Update timestamp on save
collegeSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const College = mongoose.model("College", collegeSchema);

export default College;
