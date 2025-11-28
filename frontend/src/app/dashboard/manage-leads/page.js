"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MessageSquare, Send, Phone, X, Upload } from "lucide-react";

const StudentLeadsManager = () => {
    const API_BASE = "http://localhost:3001/api/admin";
    
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
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingLead, setEditingLead] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalLeads, setTotalLeads] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        country: "India",
        state: "",
        city: "",
        course: "",
        leadType: "Warm",
        sourceType: "",
        college: "",
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

    const handleFeeSubmit = () => {
        console.log("Fee details submitted:", feeData);
        alert("Fee details sent successfully!");
        setIsFeeModalOpen(false);
    };

    // Fetch leads from backend
    const fetchLeads = async () => {
        try {
            setLoading(true);
            setError("");
            const params = {
                page: currentPage,
                limit: showEntries,
                search: searchQuery,
            };

            if (selectedCountry) params.country = selectedCountry;
            if (selectedState) params.state = selectedState;
            if (selectedCity) params.city = selectedCity;
            if (selectedSourceType) params.sourceType = selectedSourceType;
            if (selectedCourses) params.course = selectedCourses;
            if (selectedStatus) params.leadType = selectedStatus;

            const res = await axios.get(`${API_BASE}/leads`, { params });
            
            if (res.data.success) {
                const transformedLeads = res.data.data.map((lead) => ({
                    id: lead._id || lead.id,
                    name: lead.name,
                    tech: lead.course,
                    badges: [
                        lead.leadType?.toLowerCase() || "warm",
                        "Edit",
                        "Fee",
                    ],
                    phone: lead.mobile ? `+91 ${lead.mobile.slice(0, 5)}******` : "N/A",
                    addedBy: lead.createdAt
                        ? new Date(lead.createdAt).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                          })
                        : "N/A",
                    college: lead.college || "N/A",
                    location: `${lead.country || ""}\n${lead.state || ""}\n${lead.city || ""}`,
                    source: lead.sourceType || "N/A",
                    followUp: `Follow Up (${lead.followUp || 0})`,
                    lastFollowUp: lead.lastFollowUp
                        ? `Last Follow Up: ${new Date(lead.lastFollowUp).toLocaleDateString("en-IN")}`
                        : "Last Follow Up: ND",
                    overdue: lead.overdue || "N/A",
                    dateMissed: lead.dateMissed || null,
                    whatsapp: lead.whatsapp || null,
                    loginTime: lead.loginTime || null,
                    _raw: lead, // Store raw data for editing
                }));
                setLeads(transformedLeads);
                setTotalLeads(res.data.pagination?.total || transformedLeads.length);
            } else {
                setError(res.data.message || "Failed to fetch leads");
            }
        } catch (err) {
            console.error("Error fetching leads:", err);
            setError(err.response?.data?.message || "Error fetching leads");
            setLeads([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, showEntries, searchQuery, selectedCountry, selectedState, selectedCity, selectedSourceType, selectedCourses, selectedStatus]);

    const handleBadgeClick = (badge, lead) => {
        if (badge === "Edit") {
            if (lead && lead._raw) {
                setFormData({
                    name: lead._raw.name || "",
                    mobile: lead._raw.mobile || "",
                    email: lead._raw.email || "",
                    country: lead._raw.country || "India",
                    state: lead._raw.state || "",
                    city: lead._raw.city || "",
                    course: lead._raw.course || "",
                    leadType: lead._raw.leadType || "Warm",
                    sourceType: lead._raw.sourceType || "",
                    college: lead._raw.college || "",
                });
                setEditingLead(lead._raw._id || lead.id);
            }
            setIsOpen(true);
        } else if (badge === "Fee") {
            setIsFeeModalOpen(true);
        }
    };

    const handleSubmit = async () => {
        try {
            if (!formData.name || !formData.mobile || !formData.course || !formData.leadType || !formData.sourceType) {
                alert("Please fill in all required fields");
                return;
            }

            if (editingLead) {
                // Update existing lead
                const res = await axios.put(`${API_BASE}/leads/${editingLead}`, formData);
                if (res.data.success) {
                    alert("Lead updated successfully!");
                    setIsOpen(false);
                    setEditingLead(null);
                    fetchLeads();
                } else {
                    alert(res.data.message || "Failed to update lead");
                }
            } else {
                // Create new lead
                const res = await axios.post(`${API_BASE}/leads`, formData);
                if (res.data.success) {
                    alert("Lead created successfully!");
                    setIsOpen(false);
                    setFormData({
                        name: "",
                        mobile: "",
                        email: "",
                        country: "India",
                        state: "",
                        city: "",
                        course: "",
                        leadType: "Warm",
                        sourceType: "",
                        college: "",
                    });
                    fetchLeads();
                } else {
                    alert(res.data.message || "Failed to create lead");
                }
            }
        } catch (err) {
            console.error("Error submitting lead:", err);
            alert(err.response?.data?.message || "Error submitting lead");
        }
    };

    const handleBulkUpload = async (file) => {
        if (!file) {
            alert("Please select a file");
            return;
        }

        // Check if file is CSV or Excel
        const fileType = file.name.split(".").pop().toLowerCase();
        if (!["csv", "xlsx", "xls"].includes(fileType)) {
            alert("Please upload a CSV or Excel file");
            return;
        }

        try {
            // For now, we'll use a simple CSV parser
            // In production, you might want to use a library like papaparse
            const text = await file.text();
            const lines = text.split("\n");
            const headers = lines[0].split(",").map((h) => h.trim());

            const leadsToUpload = [];
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim()) {
                    const values = lines[i].split(",").map((v) => v.trim());
                    const lead = {};
                    headers.forEach((header, index) => {
                        lead[header.toLowerCase()] = values[index] || "";
                    });
                    
                    // Map CSV headers to our schema
                    if (lead.name && lead.mobile) {
                        leadsToUpload.push({
                            name: lead.name,
                            mobile: lead.mobile,
                            email: lead.email || "",
                            country: lead.country || "India",
                            state: lead.state || "",
                            city: lead.city || "",
                            course: lead.course || "",
                            leadType: lead.leadtype || lead.lead_type || "Warm",
                            sourceType: lead.sourcetype || lead.source_type || "",
                            college: lead.college || "",
                        });
                    }
                }
            }

            if (leadsToUpload.length === 0) {
                alert("No valid leads found in the file");
                return;
            }

            const res = await axios.post(`${API_BASE}/leads/bulk`, { leads: leadsToUpload });
            if (res.data.success) {
                alert(`${res.data.data?.length || 0} leads uploaded successfully!`);
                setIsUploadModalOpen(false);
                fetchLeads();
            } else {
                alert(res.data.message || "Failed to upload leads");
            }
        } catch (err) {
            console.error("Error uploading leads:", err);
            alert(err.response?.data?.message || "Error uploading leads");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 overflow-x-auto ml-64">
            <div className="min-w-max">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
                        Manage Student Leads
                    </h1>
                    <button 
                        onClick={() => {
                            setIsUploadModalOpen(true);
                            setEditingLead(null);
                            setFormData({
                                name: "",
                                mobile: "",
                                email: "",
                                country: "India",
                                state: "",
                                city: "",
                                course: "",
                                leadType: "Warm",
                                sourceType: "",
                                college: "",
                            });
                        }}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition whitespace-nowrap flex items-center gap-2"
                    >
                        <Upload size={18} />
                        Upload Leads
                    </button>
                    <button 
                        onClick={() => {
                            setIsOpen(true);
                            setEditingLead(null);
                            setFormData({
                                name: "",
                                mobile: "",
                                email: "",
                                country: "India",
                                state: "",
                                city: "",
                                course: "",
                                leadType: "Warm",
                                sourceType: "",
                                college: "",
                            });
                        }}
                        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition whitespace-nowrap"
                    >
                        Add New Lead
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
                        {loading ? (
                            <div className="p-8 text-center text-gray-500">
                                Loading leads...
                            </div>
                        ) : error ? (
                            <div className="p-8 text-center text-red-500">
                                {error}
                            </div>
                        ) : leads.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">
                                No leads found
                            </div>
                        ) : (
                            leads.map((lead, index) => (
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
                                                                    badge,
                                                                    lead
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
                                                                {editingLead ? "Edit Lead Detail" : "Add New Lead"}
                                                                {formData.name && `: ${formData.name}`}
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
                                                                    {editingLead ? "Update" : "Create"}
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
                            ))
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                        Showing {(currentPage - 1) * parseInt(showEntries) + 1} to {Math.min(currentPage * parseInt(showEntries), totalLeads)} of {totalLeads} leads
                    </p>
                    <div className="flex gap-1">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        {Array.from({ length: Math.ceil(totalLeads / parseInt(showEntries)) }, (_, i) => i + 1)
                            .slice(Math.max(0, currentPage - 2), currentPage + 3)
                            .map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`px-3 py-1 border border-gray-300 rounded text-sm ${
                                        currentPage === pageNum
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        <button 
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={currentPage >= Math.ceil(totalLeads / parseInt(showEntries))}
                            className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Upload Leads Modal */}
                {isUploadModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg w-full max-w-md shadow-2xl">
                            <div className="flex items-center justify-between px-5 py-3 border-b sticky top-0 bg-white">
                                <h2 className="text-base font-semibold text-gray-800">
                                    Upload Leads
                                </h2>
                                <button
                                    onClick={() => setIsUploadModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="px-5 py-4">
                                <p className="text-sm text-gray-700 mb-4">
                                    Upload a CSV or Excel file with the following columns:
                                    name, mobile, email, country, state, city, course, leadType, sourceType, college
                                </p>
                                <input
                                    type="file"
                                    accept=".csv,.xlsx,.xls"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            handleBulkUpload(e.target.files[0]);
                                        }
                                    }}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="flex justify-end gap-2 mt-4">
                                    <button
                                        onClick={() => setIsUploadModalOpen(false)}
                                        className="px-5 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentLeadsManager;
