"use client";

import axios from "axios";
import { useState } from "react";
import {
    Upload,
    Building2,
    Globe,
    Mail,
    Phone,
    MapPin,
    User,
    FileText,
    Link,
    Search,
    Save,
    X,
    AlertCircle,
    CheckCircle,
} from "lucide-react";

export default function AddCollegeForm() {

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [collegeLogo, setCollegeLogo] = useState(null);
    const [collegeLogoPreview, setCollegeLogoPreview] = useState(null);
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [coverPhotoPreview, setCoverPhotoPreview] = useState(null);

    const [formData, setFormData] = useState({
        collegeName: "",
        establishYear: "",
        websiteLink: "",
        affiliatedUniversity: "",
        collegeEmail: "",
        phoneNumber: "",
        landlineNumber: "",
        naacGrade: "",
        principalName: "",
        pinCode: "",
        country: "",
        state: "",
        city: "",
        package: "",
        address: "",
        collegeDescription: "",
        collegeLocationUrl: "",
        collegeForumLink: "",
        allowIndexing: "yes",
        metaTitle: "",
        metaKeywords: "",
        metaDescription: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const requiredFields = {
        collegeName: "College Name",
        establishYear: "Establishment Year",
        affiliatedUniversity: "Affiliated University",
        collegeEmail: "College Email",
        phoneNumber: "Phone Number",
        country: "Country",
        state: "State",
        city: "City",
        package: "Package",
        address: "Address",
        collegeDescription: "College Description",
    };

    const validateForm = () => {
        const newErrors = {};

        for (const [field, label] of Object.entries(requiredFields)) {
            if (!formData[field] || formData[field].trim() === "") {
                newErrors[field] = `${label} is required`;
            }
        }

        if (formData.collegeEmail) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.collegeEmail)) {
                newErrors.collegeEmail = "Please enter a valid email address";
            }
        }

        if (formData.phoneNumber) {
            if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[\s-]/g, ""))) {
                newErrors.phoneNumber = "Phone number must be 10 digits";
            }
        }

        return newErrors;
    };

    const handleSubmit = async () => {
        const validationErrors = validateForm();
        setErrors(validationErrors);

        const allTouched = {};
        Object.keys(formData).forEach((key) => {
            allTouched[key] = true;
        });
        setTouched(allTouched);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3001/api/admin/colleges",
                formData
            );
            console.log("✅ Backend Response:", response.data);

            // Show success popup
            setShowSuccessPopup(true);

             const timeoutId = setTimeout(() => {
                 window.location.href = "/dashboard/manage-college";
             }, 2500);

             
             window.navigationTimeout = timeoutId;

        } catch (error) {
            console.error("❌ Error:", error);
            alert(
                `Error submitting form: ${
                    error.response?.data?.message || error.message
                }`
            );
        }
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });

        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined,
            });
        }
    };

    const handleBlur = (field) => {
        setTouched({
            ...touched,
            [field]: true,
        });

        const validationErrors = validateForm();
        if (validationErrors[field]) {
            setErrors({
                ...errors,
                [field]: validationErrors[field],
            });
        }
    };

    const showError = (field) => {
        return touched[field] && errors[field];
    };
     const handleBack = () => {
         window.history.back();
     };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 ml-64">
            {/* Success Popup Modal */}
            {showSuccessPopup && (
                <div className="fixed inset-0 backdrop-blur-xl bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[scale-in_0.3s_ease-out]">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-green-100 rounded-full p-4 mb-4">
                                <CheckCircle
                                    className="text-green-600"
                                    size={48}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                Success!
                            </h3>
                            <p className="text-slate-600 mb-6">
                                College details have been submitted
                                successfully.
                            </p>
                            <button
                                onClick={() => {
                                    clearTimeout(window.navigationTimeout); // Clear auto-navigation
                                    window.location.href =
                                        "/dashboard/manage-college";
                                }}
                                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                            >
                                Go to College List
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-indigo-100 p-3 rounded-xl">
                            <Building2 className="text-indigo-600" size={28} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">
                                Add College Details
                            </h1>
                            <p className="text-slate-600 mt-1">
                                Fill in the information to add a new college to
                                the system
                            </p>
                        </div>

                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors ml-auto"
                        >
                            Back
                        </button>
                    </div>
                </div>

                {/* Basic Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <FileText className="text-indigo-600" size={24} />
                        Basic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* College Logo */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                College Logo{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="collegeLogo"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setCollegeLogo(file);
                                            setCollegeLogoPreview(
                                                URL.createObjectURL(file)
                                            );
                                        }
                                    }}
                                />
                                {!collegeLogoPreview ? (
                                    <label
                                        htmlFor="collegeLogo"
                                        className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer group"
                                    >
                                        <Upload
                                            className="text-slate-400 group-hover:text-indigo-600"
                                            size={20}
                                        />
                                        <span className="text-slate-600 group-hover:text-indigo-600 font-medium">
                                            Choose Logo File
                                        </span>
                                    </label>
                                ) : (
                                    <div className="relative group">
                                        <img
                                            src={collegeLogoPreview}
                                            alt="College Logo Preview"
                                            className="w-full h-48 object-contain rounded-xl border-2 border-slate-200"
                                        />
                                        <div className="absolute inset-0   transition-all rounded-xl flex items-center justify-center gap-2 bg-[rgba(0,0,0,0.25)]">
                                            <label
                                                htmlFor="collegeLogo"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-slate-50 font-medium text-slate-700"
                                            >
                                                Change
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setCollegeLogo(null);
                                                    setCollegeLogoPreview(null);
                                                }}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* College Cover Photo */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                College Cover Photo{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="coverPhoto"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setCoverPhoto(file);
                                            setCoverPhotoPreview(
                                                URL.createObjectURL(file)
                                            );
                                        }
                                    }}
                                />
                                {!coverPhotoPreview ? (
                                    <label
                                        htmlFor="coverPhoto"
                                        className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer group"
                                    >
                                        <Upload
                                            className="text-slate-400 group-hover:text-indigo-600"
                                            size={20}
                                        />
                                        <span className="text-slate-600 group-hover:text-indigo-600 font-medium">
                                            Choose Cover Photo
                                        </span>
                                    </label>
                                ) : (
                                    <div className="relative group">
                                        <img
                                            src={coverPhotoPreview}
                                            alt="Cover Photo Preview"
                                            className="w-full h-48 object-cover rounded-xl border-2 border-slate-200"
                                        />
                                        <div className="absolute inset-0  transition-all rounded-xl flex items-center justify-center gap-2 bg-[rgba(0,0,0,0.25)]">
                                            <label
                                                htmlFor="coverPhoto"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-slate-50 font-medium text-slate-700"
                                            >
                                                Change
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setCoverPhoto(null);
                                                    setCoverPhotoPreview(null);
                                                }}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* College Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                College Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.collegeName}
                                onChange={(e) =>
                                    handleChange("collegeName", e.target.value)
                                }
                                onBlur={() => handleBlur("collegeName")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                                    showError("collegeName")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                                placeholder="Enter college name"
                            />
                            {showError("collegeName") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.collegeName}</span>
                                </div>
                            )}
                        </div>

                        {/* Establish Year */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Establish Year{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.establishYear}
                                onChange={(e) =>
                                    handleChange(
                                        "establishYear",
                                        e.target.value
                                    )
                                }
                                onBlur={() => handleBlur("establishYear")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                                    showError("establishYear")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                                placeholder="e.g., 1990"
                            />
                            {showError("establishYear") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.establishYear}</span>
                                </div>
                            )}
                        </div>

                        {/* Website Link */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Website Link{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Globe
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="url"
                                    value={formData.websiteLink}
                                    onChange={(e) =>
                                        handleChange(
                                            "websiteLink",
                                            e.target.value
                                        )
                                    }
                                    onBlur={() => handleBlur("websiteLink")}
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>

                        {/* Affiliated University */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Affiliated University (if applicable)
                            </label>
                            <input
                                type="text"
                                value={formData.affiliatedUniversity}
                                onChange={(e) =>
                                    handleChange(
                                        "affiliatedUniversity",
                                        e.target.value
                                    )
                                }
                                onBlur={() =>
                                    handleBlur("affiliatedUniversity")
                                }
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                                    showError("affiliatedUniversity")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                                placeholder="Enter affiliated university"
                            />
                            {showError("affiliatedUniversity") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.affiliatedUniversity}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Phone className="text-indigo-600" size={24} />
                        Contact Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* College Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                College Email{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="email"
                                    value={formData.collegeEmail}
                                    onChange={(e) =>
                                        handleChange(
                                            "collegeEmail",
                                            e.target.value
                                        )
                                    }
                                    onBlur={() => handleBlur("collegeEmail")}
                                    className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                                        showError("collegeEmail")
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-slate-300 focus:border-indigo-500"
                                    }`}
                                    placeholder="contact@college.edu"
                                />
                            </div>
                            {showError("collegeEmail") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.collegeEmail}</span>
                                </div>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Phone Number 1{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Phone
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) =>
                                        handleChange(
                                            "phoneNumber",
                                            e.target.value
                                        )
                                    }
                                    onBlur={() => handleBlur("phoneNumber")}
                                    className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                                        showError("phoneNumber")
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-slate-300 focus:border-indigo-500"
                                    }`}
                                    placeholder="+91 1234567890"
                                />
                            </div>
                            {showError("phoneNumber") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.phoneNumber}</span>
                                </div>
                            )}
                        </div>

                        {/* LandLine Number */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                LandLine Number{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Phone
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="tel"
                                    value={formData.landlineNumber}
                                    onChange={(e) =>
                                        handleChange(
                                            "landlineNumber",
                                            e.target.value
                                        )
                                    }
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="0123-456789"
                                />
                            </div>
                        </div>

                        {/* NAAC Grade */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                NAAC Grade{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.naacGrade}
                                onChange={(e) =>
                                    handleChange("naacGrade", e.target.value)
                                }
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                            >
                                <option value="">--Select Grade--</option>
                                <option value="A++">A++</option>
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="B++">B++</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>

                        {/* Principal Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Principal/Director Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <User
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    value={formData.principalName}
                                    onChange={(e) =>
                                        handleChange(
                                            "principalName",
                                            e.target.value
                                        )
                                    }
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="Enter principal/director name"
                                />
                            </div>
                        </div>

                        {/* Pin/Zip Code */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Pin/Zip Code{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <MapPin
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    value={formData.pinCode}
                                    onChange={(e) =>
                                        handleChange("pinCode", e.target.value)
                                    }
                                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="Enter pin code"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Details */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <MapPin className="text-indigo-600" size={24} />
                        Location Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Country */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.country}
                                onChange={(e) =>
                                    handleChange("country", e.target.value)
                                }
                                onBlur={() => handleBlur("country")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white ${
                                    showError("country")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                            >
                                <option value="">--Select Country--</option>
                                <option value="india">India</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="canada">Canada</option>
                            </select>
                            {showError("country") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.country}</span>
                                </div>
                            )}
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                State <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.state}
                                onChange={(e) =>
                                    handleChange("state", e.target.value)
                                }
                                onBlur={() => handleBlur("state")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white ${
                                    showError("state")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                            >
                                <option value="">--Select State--</option>
                                <option value="uttarakhand">Uttarakhand</option>
                                <option value="delhi">Delhi</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="karnataka">Karnataka</option>
                            </select>
                            {showError("state") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.state}</span>
                                </div>
                            )}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                City <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.city}
                                onChange={(e) =>
                                    handleChange("city", e.target.value)
                                }
                                onBlur={() => handleBlur("city")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white ${
                                    showError("city")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                            >
                                <option value="">--Select City--</option>
                                <option value="dehradun">Dehradun</option>
                                <option value="haridwar">Haridwar</option>
                                <option value="nainital">Nainital</option>
                            </select>
                            {showError("city") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.city}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Package */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Package <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.package}
                                onChange={(e) =>
                                    handleChange("package", e.target.value)
                                }
                                onBlur={() => handleBlur("package")}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white ${
                                    showError("package")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                            >
                                <option value="">--Select Package--</option>
                                <option value="basic">Basic</option>
                                <option value="standard">Standard</option>
                                <option value="premium">Premium</option>
                                <option value="enterprise">Enterprise</option>
                            </select>
                            {showError("package") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.package}</span>
                                </div>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.address}
                                onChange={(e) =>
                                    handleChange("address", e.target.value)
                                }
                                onBlur={() => handleBlur("address")}
                                rows={4}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none ${
                                    showError("address")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                                placeholder="Enter complete address"
                            />
                            {showError("address") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <FileText className="text-indigo-600" size={24} />
                        Additional Information
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        {/* College Description */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Write Something About College{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.collegeDescription}
                                onChange={(e) =>
                                    handleChange(
                                        "collegeDescription",
                                        e.target.value
                                    )
                                }
                                onBlur={() => handleBlur("collegeDescription")}
                                rows={6}
                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none ${
                                    showError("collegeDescription")
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-300 focus:border-indigo-500"
                                }`}
                                placeholder="Enter detailed description about the college, its facilities, achievements, etc."
                            />
                            {showError("collegeDescription") && (
                                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                    <AlertCircle size={14} />
                                    <span>{errors.collegeDescription}</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* College Location URL */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    College Location URL{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <MapPin
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                        size={20}
                                    />
                                    <input
                                        type="url"
                                        value={formData.collegeLocationUrl}
                                        onChange={(e) =>
                                            handleChange(
                                                "collegeLocationUrl",
                                                e.target.value
                                            )
                                        }
                                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="Google Maps URL"
                                    />
                                </div>
                            </div>

                            {/* College Forum Link */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    College Forum Link{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Link
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                        size={20}
                                    />
                                    <input
                                        type="url"
                                        value={formData.collegeForumLink}
                                        onChange={(e) =>
                                            handleChange(
                                                "collegeForumLink",
                                                e.target.value
                                            )
                                        }
                                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="Forum URL"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Settings */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Search className="text-indigo-600" size={24} />
                        SEO Settings
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Allow Indexing */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Allow Indexing{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={
                                            formData.allowIndexing === "yes"
                                        }
                                        onChange={(e) =>
                                            handleChange(
                                                "allowIndexing",
                                                e.target.value
                                            )
                                        }
                                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="text-slate-700 font-medium">
                                        Yes
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={
                                            formData.allowIndexing === "no"
                                        }
                                        onChange={(e) =>
                                            handleChange(
                                                "allowIndexing",
                                                e.target.value
                                            )
                                        }
                                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="text-slate-700 font-medium">
                                        No
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Meta Title */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Meta Title{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.metaTitle}
                                onChange={(e) =>
                                    handleChange("metaTitle", e.target.value)
                                }
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="Enter meta title for SEO"
                            />
                        </div>

                        {/* Meta Keywords */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Meta Keywords{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.metaKeywords}
                                onChange={(e) =>
                                    handleChange("metaKeywords", e.target.value)
                                }
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="Enter keywords separated by commas"
                            />
                        </div>

                        {/* Meta Description */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Meta Descriptions{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.metaDescription}
                                onChange={(e) =>
                                    handleChange(
                                        "metaDescription",
                                        e.target.value
                                    )
                                }
                                rows={4}
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                                placeholder="Enter meta description for SEO (150-160 characters recommended)"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all duration-200 hover:scale-105"
                    >
                        <Save size={20} />
                        Submit
                    </button>
                    <button
                        onClick={() => {
                            setFormData({
                                collegeName: "",
                                establishYear: "",
                                websiteLink: "",
                                affiliatedUniversity: "",
                                collegeEmail: "",
                                phoneNumber: "",
                                landlineNumber: "",
                                naacGrade: "",
                                principalName: "",
                                pinCode: "",
                                country: "",
                                state: "",
                                city: "",
                                package: "",
                                address: "",
                                collegeDescription: "",
                                collegeLocationUrl: "",
                                collegeForumLink: "",
                                allowIndexing: "yes",
                                metaTitle: "",
                                metaKeywords: "",
                                metaDescription: "",
                            });
                            setErrors({});
                            setTouched({});
                        }}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200"
                    >
                        <X size={20} />
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
