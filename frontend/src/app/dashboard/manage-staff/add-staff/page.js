"use client";
import { useState } from "react";
import { Upload, Calendar } from "lucide-react";

export default function AddStaffForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        staffType: "",
        college: "",
        dob: "",
        doj: "",
        gender: "",
        marital: "",
        password: "",
        confirmPassword: "",
        country: "",
        state: "",
        city: "",
        address: "",
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

      const handleBack = () => {
          window.history.back();
      };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6 ml-64">
            <div className="w-full mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Add Staff Details
                </h2>

                <button
                    onClick={handleBack}
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors ml-auto flex justify-end"
                >
                    Back
                </button>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Profile Photo */}
                    <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-2">
                            Profile Photo
                        </label>
                        <label className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-dashed border-blue-400 text-blue-600 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                            <Upload className="w-4 h-4" />
                            Choose File
                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>
                        {formData.photo && (
                            <p className="text-sm text-gray-500 mt-1 truncate">
                                {formData.photo.name}
                            </p>
                        )}
                    </div>

                    {/* Name */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Staff Type */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Staff Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="staffType"
                            value={formData.staffType}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="">-- Select Staff Type --</option>
                            <option value="counsellor">Counsellor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Choose College */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Choose College{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="">-- Select College --</option>
                            <option value="grd">GRD College</option>
                            <option value="alpine">Alpine Group</option>
                            <option value="uttaranchal">
                                Uttaranchal University
                            </option>
                        </select>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Mobile Number{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            DOB
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Gender
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Marital Status */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Marital Status
                        </label>
                        <select
                            name="marital"
                            value={formData.marital}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="">
                                -- Select Marital Status --
                            </option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                    </div>

                    {/* Date of Joining */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Date of Joining
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                name="doj"
                                value={formData.doj}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Confirm Password{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            Country
                        </label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="">-- Select Country --</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                        </select>
                    </div>

                    {/* State */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="font-medium text-gray-700 mb-2 block">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Address (Full width) */}
                    <div className="md:col-span-2">
                        <label className="font-medium text-gray-700 mb-2 block">
                            Address
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
