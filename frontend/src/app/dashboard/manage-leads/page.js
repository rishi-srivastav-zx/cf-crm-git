"use client";
import React, { useState } from "react";
import { MessageSquare, Send, Phone, X } from "lucide-react";

const StudentLeadsManager = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedSourceType, setSelectedSourceType] = useState("");
    const [selectedCourses, setSelectedCourses] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [showEntries, setShowEntries] = useState("10");
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "Akansha",
        mobile: "7895733414",
        email: "",
        country: "India",
        state: "Uttarakhand",
        city: "Kotdwara",
        course: "",
        leadType: "Warm",
        sourceType: "",
    });
    const [feeData, setFeeData] = useState({
        courseName: "B.Tech (CE)",
        session: "2023-2024",
        firstYearFee: "95000",
        registrationFee: "10000",
        totalCourseFee: "560000",
        sendByWhatsapp: false,
    });

    // Sample lead data with badges
    const lead = {
        badges: ["warm", "Edit", "Fee"],
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFeeChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFeeData({
            ...feeData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Lead updated successfully!");
        setIsOpen(false);
    };

    const handleFeeSubmit = () => {
        console.log("Fee details submitted:", feeData);
        alert("Fee details sent successfully!");
        setIsFeeModalOpen(false);
    };

    const handleBadgeClick = (badge) => {
        if (badge === "Edit") {
            setIsOpen(true);
        } else if (badge === "Fee") {
            setIsFeeModalOpen(true);
        }
    };

    const leads = [
        {
            id: 1,
            name: "Akansha",
            tech: "B.Tech (CSE)",
            badges: ["warm", "Edit", "Fee"],
            phone: "+91 78595******",
            addedBy: "15-Oct-2024, 08:48 AM (378 days ago)",
            college: "Uttaranchal University Dehradun",
            location: "India\nUttarakhand\nKotdwara",
            source: "Social Media",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 30-Apr-2025",
            overdue: "College Assign 1",
            dateMissed: "Last followup date expired : 378 days ago",
        },
        {
            id: 2,
            name: "Ankit Rawat",
            tech: "B.sc (IT)",
            badges: ["warm", "Edit", "No-fee-updated"],
            phone: "+91 97200******",
            addedBy: "4-Oct-2024 8:50:39 PM",
            college: "Alpine Group of Institutes",
            location: "India\nRajasthan\nJaipur",
            source: "College Forum",
            whatsapp: "6395218125",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 30-10-2024",
            overdue: "College Assign 1",
            loginTime: "Login Time: 08:13:46 PM",
        },
        {
            id: 3,
            name: "Chinmay",
            tech: "JEE",
            badges: ["warm", "Edit", "No-fee-updated"],
            phone: "+91 82400******",
            addedBy: "13-Oct-2024, 10:08 AM (376 days ago)",
            college: "Uttaranchal University Dehradun",
            location: "India\nUttarakhand\nDehradun",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 18-10-2024",
            overdue: "College Assign 1",
            dateMissed: "Last followup date expired : 372 days ago",
        },
        {
            id: 4,
            name: "Chirag Seth",
            tech: "B.C.A",
            badges: ["warm", "Edit", "Fee"],
            phone: "+91 88265******",
            addedBy: "14-Oct-2024, 10:28 AM (375 days ago)",
            college: "GRD COLLEGE",
            location: "India\nMadhya Pradesh\nGwalior",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 18-Oct",
            overdue: "College Assign 5",
        },
        {
            id: 5,
            name: "College Forum",
            tech: "B.Tech",
            badges: ["cold", "Edit", "No-fee-updated"],
            phone: "+91 06398******",
            addedBy: "19-Oct-2024, 10:25 AM (368 days ago)",
            college: "Alpine Group of Institution",
            location: "India\nUttarakhand\nDehradun",
            source: "Self",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 17-10-2024",
            overdue: "College Assign 3",
            dateMissed: "Last followup date expired : 372 days ago",
        },
        {
            id: 6,
            name: "Gyatri",
            tech: "B.Tech. (ME)",
            badges: ["warm", "Edit", "Fee"],
            phone: "+91 78695******",
            addedBy: "18-Nov-2024, 12:05 PM (314 days ago)",
            college: "GRD COLLEGE",
            location: "India\nUttarakhand\nDehradun",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: ND",
            overdue: "College Assign 1",
        },
        {
            id: 7,
            name: "Hari Om G",
            tech: "B.Tech. (ME)",
            badges: ["Cold", "Edit", "Fee"],
            phone: "+91 91902******",
            addedBy: "18-Oct-2024, 07:18 AM (371 days ago)",
            college: "GRD COLLEGE",
            location: "India\nUttarakhand\nPauri",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 17-Oct",
            overdue: "College Assign 5",
        },
        {
            id: 8,
            name: "Harisha",
            tech: "B.Sc. Data Science",
            badges: ["warm", "Edit", "No-fee-updated"],
            phone: "+91 89722******",
            addedBy: "19-Oct-2024, 06:24 AM (367 days ago)",
            college: "UNIVERSITY OF PATANJALI",
            location: "India\nHaryana\nFirozpur Jhirka",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: ND",
            overdue: "College Assign 1",
        },
        {
            id: 9,
            name: "Harshit Chauhan",
            tech: "B.sc (CS-A)",
            badges: ["cold", "Edit", "Fee"],
            phone: "+91 82198******",
            addedBy: "18-Oct-2024, 09:08 AM (374 days ago)",
            college: "GRD COLLEGE",
            location: "India\nRajasthan\nAjmer",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: 20-10-2024",
            overdue: "College Assign 6",
            dateMissed: "Last followup date expired : 369 days ago",
        },
        {
            id: 10,
            name: "Harshit Chauhan Ggggg",
            tech: "B.Pharma",
            badges: ["cold", "Edit", "Fee"],
            phone: "+91 82198******",
            addedBy: "18-Oct-2024, 04:48 AM (370 days ago)",
            college: "GRD COLLEGE",
            location: "India\nArunachal Pradesh\nAlong",
            source: "College Forum",
            followUp: "Follow Up (0)",
            lastFollowUp: "Last Follow Up: ND",
            overdue: "College Assign 1",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 overflow-x-auto ml-64">
            <div className="min-w-max">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
                        Manage Student Leads
                    </h1>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition whitespace-nowrap">
                        Upload Leads
                    </button>
                </div>

                {/* Filters Row */}
                <div className="flex gap-4 mb-4">
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52 flex-shrink-0">
                        <option>-- Select Country --</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52 flex-shrink-0">
                        <option>-- Select State --</option>
                        <option>-- Andhra Pradesh--</option>
                        <option>-- Arunachal Pradesh --</option>
                        <option>-- Assam --</option>
                        <option>-- Bihar--</option>
                        <option>-- Chhattisgarh--</option>
                        <option>-- Goa--</option>
                        <option>-- Gujarat--</option>
                        <option>-- Haryana--</option>
                        <option>-- Himachal Pradesh--</option>
                        <option>-- Jharkhand--</option>
                        <option>-- Karnataka --</option>
                        <option>-- Kerala--</option>
                        <option>-- Madhya Pradesh--</option>
                        <option>-- Maharashtra--</option>
                        <option>-- Manipur--</option>
                        <option>-- Meghalaya--</option>
                        <option>-- Mizoram --</option>
                        <option>-- Nagaland --</option>
                        <option>-- Odisha --</option>
                        <option>-- Punjab--</option>
                        <option>-- Rajasthan --</option>
                        <option>-- Sikkim --</option>
                        <option>-- Tamil Nadu --</option>
                        <option>-- Telangana --</option>
                        <option>-- Tripura --</option>
                        <option>-- Uttar Pradesh --</option>
                        <option>-- Uttarakhand --</option>
                        <option>-- West Bengal--</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52 flex-shrink-0">
                        <option>-- Select City --</option>
                        <option>mangalore</option>
                        <option>kochi</option>
                        <option>pune</option>
                        <option>nagpur</option>
                        <option>ahmedabad</option>
                        <option>vadodara</option>
                        <option>surat</option>
                        <option>mysore</option>
                        <option>thiruvananthapuram</option>
                        <option>bhubaneswar</option>
                        <option>amritsar</option>
                        <option>jaipur</option>
                        <option>chandigarh</option>
                        <option>coimbatore</option>
                        <option>warangal</option>
                        <option>imphal</option>
                        <option>aizawl</option>
                        <option>kohima</option>
                        <option>shillong</option>
                        <option>bishnupur</option>
                        <option>agra</option>
                        <option>haridwar</option>
                        <option>kanpur</option>
                        <option>surendranagar</option>
                        <option>jammu</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52 flex-shrink-0">
                        <option>-- Select Source Type --</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52 flex-shrink-0">
                        <option>-- Select Courses --</option>
                    </select>
                </div>

                {/* Action Buttons and Status Filter */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2 flex-shrink-0">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700 transition whitespace-nowrap">
                            All Leads (7)
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition whitespace-nowrap">
                            Today Follow Up (0)
                        </button>
                        <button className="bg-cyan-500 text-white px-4 py-2 rounded text-sm hover:bg-cyan-600 transition whitespace-nowrap">
                            Todays Visit (0)
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition whitespace-nowrap">
                            Today Delay (0)
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition whitespace-nowrap">
                            Total Admission(0)
                        </button>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition whitespace-nowrap">
                            Reject Student (0)
                        </button>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded text-sm hover:bg-teal-600 transition whitespace-nowrap">
                            Fresh
                        </button>
                    </div>
                    <select className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-shrink-0">
                        <option>-- Select Status--</option>
                        <option>-- Warm--</option>
                        <option>-- cold--</option>
                        <option>-- Hot--</option>
                    </select>
                </div>

                {/* Show Entries and Search */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 text-sm whitespace-nowrap">
                            Show
                        </span>
                        <select
                            value={showEntries}
                            onChange={(e) => setShowEntries(e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm flex-shrink-0"
                        >
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span className="text-gray-700 text-sm whitespace-nowrap">
                            leads Search:
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-shrink-0"
                        />
                    </div>
                </div>

                {/* Table Header */}
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                    <div className="bg-gray-100 border-b border-gray-200">
                        <div className="flex gap-4 px-4 py-3 text-sm font-semibold text-gray-700">
                            <div className="w-64 flex-shrink-0">
                                Student Details
                            </div>
                            <div className="w-64 flex-shrink-0">
                                College Name
                            </div>
                            <div className="w-40 flex-shrink-0">
                                State & City
                            </div>
                            <div className="w-40 flex-shrink-0">Source</div>
                            <div className="w-56 flex-shrink-0">
                                Propose Mail
                            </div>
                            <div className="w-48 flex-shrink-0">Action</div>
                            <div className="w-56 flex-shrink-0">Action</div>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-gray-200">
                        {leads.map((lead, index) => (
                            <div
                                key={lead.id}
                                className="flex gap-4 px-4 py-4 hover:bg-gray-50 items-start"
                            >
                                {/* Student Details */}
                                <div className="w-64 flex-shrink-0">
                                    <div className="flex items-start gap-2">
                                        <span className="text-gray-600 text-sm">
                                            {index + 1}.
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">
                                                {lead.name}
                                            </h3>
                                            <p className="text-xs text-gray-600">
                                                {lead.tech}
                                            </p>
                                            {/* Badges Section */}
                                            <div className="flex gap-1 mt-1 flex-wrap">
                                                {lead.badges.map((badge, idx) =>
                                                    badge === "Edit" ||
                                                    badge === "Fee" ? (
                                                        <button
                                                            key={idx}
                                                            onClick={() =>
                                                                handleBadgeClick(
                                                                    badge
                                                                )
                                                            }
                                                            className={`text-xs px-2 py-0.5 rounded text-white whitespace-nowrap cursor-pointer transition-colors ${
                                                                badge === "Edit"
                                                                    ? "bg-cyan-600 hover:bg-cyan-700"
                                                                    : "bg-teal-600 hover:bg-teal-700"
                                                            }`}
                                                        >
                                                            {badge}
                                                        </button>
                                                    ) : (
                                                        <span
                                                            key={idx}
                                                            className="text-xs px-2 py-0.5 rounded text-white whitespace-nowrap bg-indigo-600"
                                                        >
                                                            {badge}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            {/* Modal Popup */}
                                            {isOpen && (
                                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                                    <div className="bg-white rounded-lg w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
                                                        {/* Header */}
                                                        <div className="flex items-center justify-between px-5 py-3 border-b sticky top-0 bg-white">
                                                            <h2 className="text-base font-semibold text-gray-800">
                                                                Edit Lead Detail
                                                                :{" "}
                                                                {formData.name}
                                                            </h2>
                                                            <button
                                                                onClick={() =>
                                                                    setIsOpen(
                                                                        false
                                                                    )
                                                                }
                                                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                                            >
                                                                <X size={20} />
                                                            </button>
                                                        </div>

                                                        {/* Form */}
                                                        <div className="px-5 py-4">
                                                            {/* Name */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Name{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={
                                                                        formData.name
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            {/* Mobile No */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Mobile No{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="tel"
                                                                    name="mobile"
                                                                    value={
                                                                        formData.mobile
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            {/* Email */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={
                                                                        formData.email
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    placeholder=""
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            {/* Country */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Country{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <select
                                                                    name="country"
                                                                    value={
                                                                        formData.country
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                                                >
                                                                    <option value="India">
                                                                        India
                                                                    </option>
                                                                    <option value="USA">
                                                                        USA
                                                                    </option>
                                                                    <option value="UK">
                                                                        UK
                                                                    </option>
                                                                    <option value="Canada">
                                                                        Canada
                                                                    </option>
                                                                    <option value="Australia">
                                                                        Australia
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            {/* State */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    State{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <select
                                                                    name="state"
                                                                    value={
                                                                        formData.state
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                                                >
                                                                    <option value="Uttarakhand">
                                                                        Uttarakhand
                                                                    </option>
                                                                    <option value="Delhi">
                                                                        Delhi
                                                                    </option>
                                                                    <option value="Maharashtra">
                                                                        Maharashtra
                                                                    </option>
                                                                    <option value="Karnataka">
                                                                        Karnataka
                                                                    </option>
                                                                    <option value="Tamil Nadu">
                                                                        Tamil
                                                                        Nadu
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            {/* City */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    City
                                                                </label>
                                                                <select
                                                                    name="city"
                                                                    value={
                                                                        formData.city
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                                                >
                                                                    <option value="Kotdwara">
                                                                        Kotdwara
                                                                    </option>
                                                                    <option value="Dehradun">
                                                                        Dehradun
                                                                    </option>
                                                                    <option value="Haridwar">
                                                                        Haridwar
                                                                    </option>
                                                                    <option value="Rishikesh">
                                                                        Rishikesh
                                                                    </option>
                                                                    <option value="Roorkee">
                                                                        Roorkee
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            {/* Course */}
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Course{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="course"
                                                                    value={
                                                                        formData.course
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            {/* Lead Type and Source Type */}
                                                            <div className="grid grid-cols-2 gap-3 mb-4">
                                                                <div>
                                                                    <label className="block text-sm text-gray-700 mb-1">
                                                                        Lead
                                                                        Type{" "}
                                                                        <span className="text-red-500">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="leadType"
                                                                        value={
                                                                            formData.leadType
                                                                        }
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm text-gray-700 mb-1">
                                                                        Source
                                                                        Type{" "}
                                                                        <span className="text-red-500">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="sourceType"
                                                                        value={
                                                                            formData.sourceType
                                                                        }
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Buttons */}
                                                            <div className="flex justify-end gap-2 pt-2">
                                                                <button
                                                                    onClick={() =>
                                                                        setIsOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                    className="px-5 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    onClick={
                                                                        handleSubmit
                                                                    }
                                                                    className="px-5 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                                                                >
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Fee Details Modal */}
                                            {isFeeModalOpen && (
                                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                                    <div className="bg-white rounded-lg w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
                                                        <div className="flex items-center justify-between px-5 py-3 border-b sticky top-0 bg-white">
                                                            <h2 className="text-base font-semibold text-gray-800">
                                                                Course Name :{" "}
                                                                {
                                                                    feeData.courseName
                                                                }
                                                            </h2>
                                                            <button
                                                                onClick={() =>
                                                                    setIsFeeModalOpen(
                                                                        false
                                                                    )
                                                                }
                                                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                                            >
                                                                <X size={20} />
                                                            </button>
                                                        </div>

                                                        <div className="px-5 py-4">
                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Session{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="session"
                                                                    value={
                                                                        feeData.session
                                                                    }
                                                                    onChange={
                                                                        handleFeeChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    First Year
                                                                    Fee{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="firstYearFee"
                                                                    value={
                                                                        feeData.firstYearFee
                                                                    }
                                                                    onChange={
                                                                        handleFeeChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Registration
                                                                    Fee{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="registrationFee"
                                                                    value={
                                                                        feeData.registrationFee
                                                                    }
                                                                    onChange={
                                                                        handleFeeChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label className="block text-sm text-gray-700 mb-1">
                                                                    Total Course
                                                                    Fee{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="totalCourseFee"
                                                                    value={
                                                                        feeData.totalCourseFee
                                                                    }
                                                                    onChange={
                                                                        handleFeeChange
                                                                    }
                                                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                            </div>

                                                            <div className="mb-4">
                                                                <label className="block text-sm text-gray-700 mb-2">
                                                                    Payment Link
                                                                    Send Via{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <label className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="sendByWhatsapp"
                                                                        checked={
                                                                            feeData.sendByWhatsapp
                                                                        }
                                                                        onChange={
                                                                            handleFeeChange
                                                                        }
                                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                                    />
                                                                    <span className="text-sm text-gray-700">
                                                                        Send by
                                                                        Whatsapp
                                                                    </span>
                                                                </label>
                                                            </div>

                                                            <div className="flex justify-end gap-2 pt-2">
                                                                <button
                                                                    onClick={() =>
                                                                        setIsFeeModalOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                    className="px-5 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    onClick={
                                                                        handleFeeSubmit
                                                                    }
                                                                    className="px-5 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                                                                >
                                                                    Send Fee
                                                                    Details
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <p className="text-sm text-gray-700 mt-2">
                                                {lead.phone}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {lead.addedBy}
                                            </p>
                                            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded text-white bg-cyan-600 whitespace-nowrap">
                                                {lead.overdue}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* College Name */}
                                <div className="w-64 flex-shrink-0">
                                    <p className="text-sm text-gray-800">
                                        {lead.college}
                                    </p>
                                </div>

                                {/* State & City */}
                                <div className="w-40 flex-shrink-0">
                                    <p className="text-sm text-gray-700 whitespace-pre-line">
                                        {lead.location}
                                    </p>
                                </div>

                                {/* Source */}
                                <div className="w-40 flex-shrink-0">
                                    <p className="text-sm text-gray-700">
                                        {lead.source}
                                    </p>
                                </div>

                                {/* Propose Mail */}
                                <div className="w-55 flex-shrink-0">
                                    <button className="bg-green-500 text-white text-xs py-1 rounded hover:bg-green-600 transition mb-2 w-25 whitespace-nowrap">
                                        {lead.followUp}
                                    </button>
                                    <p className="text-xs text-gray-700 mb-1">
                                        {lead.lastFollowUp} ⏰
                                    </p>
                                    {lead.dateMissed && (
                                        <p className="text-xs bg-red-500 text-white px-2 py-0.5 rounded mt-1 inline-block">
                                            {lead.dateMissed}
                                        </p>
                                    )}
                                </div>

                                {/* Action 1 */}
                                <div className="w-48 flex-shrink-0">
                                    <div className="flex flex-col gap-2">
                                        <MessageSquare className="w-8 h-8 text-green-600 bg-white border border-gray-300 rounded p-1.5" />
                                        <button className="bg-blue-500 w-40 text-white text-xs  py-1.5 rounded hover:bg-blue-600 transition whitespace-nowrap">
                                            Send Payment Link (50)
                                        </button>
                                    </div>
                                </div>

                                {/* Action 2 */}
                                <div className="w-56 flex-shrink-0">
                                    <div className="flex gap-2">
                                        <button className="bg-indigo-600 text-white text-xs px-4 py-1.5 rounded hover:bg-indigo-700 transition whitespace-nowrap">
                                            Mark As Admission
                                        </button>
                                        <button className="bg-red-500 text-white text-xs px-4 py-1.5 rounded hover:bg-red-600 transition whitespace-nowrap">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                        Showing 1 to 10 of 22 leads
                    </p>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">
                            1
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
                            2
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
                            3
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
                            4
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLeadsManager;
