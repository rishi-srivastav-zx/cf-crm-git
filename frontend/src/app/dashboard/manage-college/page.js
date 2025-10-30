"use client";
import { useState } from "react";
import {
    Search,
    Phone,
    Mail,
    Building2,
    Users,
    Plus,
    Eye,
    UserCheck,
    XCircle,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

export default function CollegeListingManager() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [showStaffPopup, setShowStaffPopup] = useState("");
    const [selectedCollege, setSelectedCollege] = useState(null);
    const getStaffByCollege = (collegeId) => {
        return allStaff.filter((staff) => staff.collegeId === collegeId);
    };

    const [showFollowUpPopup, setShowFollowUpPopup] = useState(false);
    const [selectedCollegeForFollowUp, setSelectedCollegeForFollowUp] =
        useState(null);
    const [followUpData, setFollowUpData] = useState({
        status: "",
        remarks: "",
        nextDate: "",
        nextTime: "",
    });
    const [remarksCount, setRemarksCount] = useState(0);

    // Add the click handler
    const handleFollowUpClick = (college) => {
        setSelectedCollegeForFollowUp(college);
        setShowFollowUpPopup(true);
        // Reset form
        setFollowUpData({
            status: "",
            remarks: "",
            nextDate: "",
            nextTime: "",
        });
        setRemarksCount(0);
    };

    // Handle form input changes
    const handleFollowUpChange = (field, value) => {
        if (field === "remarks") {
            if (value.length <= 50) {
                setFollowUpData((prev) => ({ ...prev, [field]: value }));
                setRemarksCount(value.length);
            }
        } else {
            setFollowUpData((prev) => ({ ...prev, [field]: value }));
        }
    };

    // Handle form submission
    const handleFollowUpSubmit = () => {
        // Validate required fields
        if (!followUpData.status) {
            alert("Please select a follow-up status");
            return;
        }
        if (!followUpData.nextDate) {
            alert("Please select next follow-up date");
            return;
        }
        if (!followUpData.nextTime) {
            alert("Please select next follow-up time");
            return;
        }

        // Submit the data
        console.log("Follow-up data:", {
            collegeId: selectedCollegeForFollowUp.id,
            collegeName: selectedCollegeForFollowUp.name,
            ...followUpData,
        });

        // Close popup
        setShowFollowUpPopup(false);

        // You can add API call here
        // await fetch('/api/follow-ups', { method: 'POST', body: JSON.stringify(data) });
    };

   const handleViewStaff = (college) => {
       const collegeStaff = getStaffByCollege(college.id);
       setSelectedCollege({
           ...college,
           staff: collegeStaff,
           staffMembers: collegeStaff.length,
       });
       setShowStaffPopup(true);
   };
   const allStaff = [
       {
           name: "SANJANA SHARMA",
           email: "grdcounsellor@gmail.com",
           mobile: "9863201456",
       },
       {
           name: "GRD COLLEGE ADMIN",
           email: "grdadmin@gmail.com",
           mobile: "8520146320",
       },
       {
           name: "SUNIDHI CHAUHAN",
           email: "sunidhichauhanccounsellor@gmail.com",
           mobile: "7418523741",
       },
       {
           name: "ARCHNA GAUTAM",
           email: "archnagautam@gmail.com",
           mobile: "8526321056",
       },
   ];
    const colleges = [
        {
            id: 1,
            name: "GRD COLLEGE",
            phone: "9632102365",
            email: "grd@gmail.com",
            logo: "https://via.placeholder.com/60/4F46E5/FFFFFF?text=GRD",
            staffMembers: 4,
            hasFollowUp: true,
        },
        {
            id: 2,
            name: "Alpine Group of Institution",
            phone: "8791791791",
            email: "admissions@alpinecollege.edu.in",
            logo: "https://via.placeholder.com/60/7C3AED/FFFFFF?text=AGI",
            staffMembers: 2,
            hasFollowUp: true,
        },
        {
            id: 3,
            name: "College Forum",
            phone: "6395218126",
            email: "collegeforum360@gmail.com",
            logo: "https://via.placeholder.com/60/2563EB/FFFFFF?text=CF",
            staffMembers: null,
            hasFollowUp: true,
        },
        {
            id: 4,
            name: "Uttaranchal University Dehradun",
            phone: "0135277030",
            email: "university@uumail.in",
            logo: "https://via.placeholder.com/60/059669/FFFFFF?text=UU",
            staffMembers: 4,
            hasFollowUp: true,
        },
        {
            id: 5,
            name: "UNIVERSITY OF PATANJALI",
            phone: "8954555111",
            email: "info@uop.edu.in",
            logo: "https://via.placeholder.com/60/DC2626/FFFFFF?text=UP",
            staffMembers: 2,
            hasFollowUp: true,
        },
        {
            id: 6,
            name: "Alpine Group of Institutes",
            phone: "9187919791",
            email: "admissions@alpinecollege.edu.in",
            logo: "https://via.placeholder.com/60/EA580C/FFFFFF?text=AGI",
            staffMembers: 4,
            hasFollowUp: true,
        },
        {
            id: 7,
            name: "Dev Bhoomi Uttarakhand University",
            phone: "7417111101",
            email: "info@dbuu.ac.in",
            logo: "https://via.placeholder.com/60/0891B2/FFFFFF?text=DBU",
            staffMembers: 1,
            hasFollowUp: true,
        },
    ];

    const filteredColleges = colleges.filter(
        (college) =>
            college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.phone.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredColleges.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const displayedColleges = filteredColleges.slice(
        startIndex,
        startIndex + entriesPerPage
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-2 ml-64">
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                <Building2
                                    className="text-indigo-600"
                                    size={32}
                                />
                                Manage College Listing
                            </h1>
                            <p className="text-slate-600 mt-1">
                                View and manage your college database
                            </p>
                        </div>
                        <a
                            href="/dashboard/manage-college/add-college"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all duration-200 hover:scale-105"
                        >
                            <Plus size={20} />
                            Add College
                        </a>
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                            <label className="text-slate-700 font-medium">
                                Show
                            </label>
                            <select
                                value={entriesPerPage}
                                onChange={(e) =>
                                    setEntriesPerPage(Number(e.target.value))
                                }
                                className="border border-slate-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                            <span className="text-slate-700 font-medium">
                                entries
                            </span>
                        </div>

                        <div className="relative flex-1 md:max-w-md">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search colleges, email, phone..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Sr No
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        College Detail
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Staff Member
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Follow Up
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayedColleges.map((college, index) => (
                                    <tr
                                        key={college.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-4 py-2 text-slate-900 font-medium">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={college.logo}
                                                    alt={college.name}
                                                    className="w-14 h-14 rounded-xl object-cover shadow-md"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-slate-900 mb-1">
                                                        {college.name}
                                                    </h3>
                                                    <div className="flex flex-col gap-1">
                                                        <a
                                                            href={`tel:${college.phone}`}
                                                            className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700"
                                                        >
                                                            <Phone size={14} />
                                                            {college.phone}
                                                        </a>
                                                        <a
                                                            href={`mailto:${college.email}`}
                                                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700"
                                                        >
                                                            <Mail size={14} />
                                                            {college.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            {college.staffMembers ? (
                                                <div
                                                    className="flex items-center gap-2 text-slate-700 cursor-pointer hover:bg-slate-50 rounded px-2 py-1 transition-colors"
                                                    onClick={() =>
                                                        handleViewStaff(
                                                            allStaff
                                                        )
                                                    }
                                                >
                                                    <Users
                                                        size={18}
                                                        className="text-indigo-600"
                                                    />
                                                    <span className="font-semibold">
                                                        {college.staffMembers}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400 font-medium">
                                                    N/A
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-4 py-2">
                                            {college.hasFollowUp && (
                                                <span
                                                    className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-lg font-medium text-sm cursor-pointer hover:bg-amber-200 transition-colors"
                                                    onClick={() =>
                                                        handleFollowUpClick(
                                                            college
                                                        )
                                                    }
                                                >
                                                    Follow Up
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex gap-2">
                                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all">
                                                    <Eye size={12} />
                                                    View
                                                </button>
                                                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all">
                                                    <UserCheck size={12} />
                                                    Lead
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all">
                                                    <XCircle size={12} />
                                                    Suspend
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Follow-Up Popup */}
                        {showFollowUpPopup && selectedCollegeForFollowUp && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 py-4 border-b">
                                        <h2 className="text-lg font-semibold text-slate-800">
                                            Follow Up for{" "}
                                            {selectedCollegeForFollowUp.name}
                                        </h2>
                                        <button
                                            onClick={() =>
                                                setShowFollowUpPopup(false)
                                            }
                                            className="text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Body */}
                                    <div className="px-6 py-4 space-y-4">
                                        {/* No entry message */}
                                        <div className="text-center py-2">
                                            <p className="text-slate-500 text-sm">
                                                No entry in the database.
                                            </p>
                                        </div>

                                        {/* Follow-Up Status */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Follow-Up Status{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <div className="space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followUpStatus"
                                                        value="Call Back Later"
                                                        checked={
                                                            followUpData.status ===
                                                            "Call Back Later"
                                                        }
                                                        onChange={(e) =>
                                                            handleFollowUpChange(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        Call Back Later
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followUpStatus"
                                                        value="Not Interested"
                                                        checked={
                                                            followUpData.status ===
                                                            "Not Interested"
                                                        }
                                                        onChange={(e) =>
                                                            handleFollowUpChange(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        Not Interested
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followUpStatus"
                                                        value="Wrong Information"
                                                        checked={
                                                            followUpData.status ===
                                                            "Wrong Information"
                                                        }
                                                        onChange={(e) =>
                                                            handleFollowUpChange(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        Wrong Information
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followUpStatus"
                                                        value="Not Picked Up"
                                                        checked={
                                                            followUpData.status ===
                                                            "Not Picked Up"
                                                        }
                                                        onChange={(e) =>
                                                            handleFollowUpChange(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        Not Picked Up
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followUpStatus"
                                                        value="Other"
                                                        checked={
                                                            followUpData.status ===
                                                            "Other"
                                                        }
                                                        onChange={(e) =>
                                                            handleFollowUpChange(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mr-2"
                                                    />
                                                    <span className="text-sm text-slate-700">
                                                        Other
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Remarks */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Remarks{" "}
                                                <span className="text-red-500">
                                                    (Maximum 50 Words)
                                                </span>
                                            </label>
                                            <textarea
                                                value={followUpData.remarks}
                                                onChange={(e) =>
                                                    handleFollowUpChange(
                                                        "remarks",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                                rows="4"
                                                maxLength="50"
                                            />
                                            <p className="text-xs text-slate-500 mt-1">
                                                {50 - remarksCount} characters
                                                remaining
                                            </p>
                                        </div>

                                        {/* Next Follow Up Date */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Next Follow Up Date{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="date"
                                                value={followUpData.nextDate}
                                                onChange={(e) =>
                                                    handleFollowUpChange(
                                                        "nextDate",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* Next Follow Up Time */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Next Follow Up Time{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="time"
                                                value={followUpData.nextTime}
                                                onChange={(e) =>
                                                    handleFollowUpChange(
                                                        "nextTime",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="px-6 py-4 border-t bg-slate-50 flex justify-end gap-2">
                                        <button
                                            onClick={() =>
                                                setShowFollowUpPopup(false)
                                            }
                                            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium text-sm"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={handleFollowUpSubmit}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {showStaffPopup && selectedCollege && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 py-4 border-b">
                                        <h2 className="text-xl font-semibold text-slate-800">
                                            Staff List
                                        </h2>
                                        <button
                                            onClick={() =>
                                                setShowStaffPopup(false)
                                            }
                                            className="text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    {/* Table */}
                                    <div className="overflow-auto max-h-96">
                                        <table className="w-full">
                                            <thead className="bg-slate-50 sticky top-0">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                                                        Name
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                                                        Email
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">
                                                        Mobile
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {selectedCollege.staff?.map(
                                                    (member, index) => (
                                                        <tr
                                                            key={index}
                                                            className="hover:bg-slate-50"
                                                        >
                                                            <td className="px-6 py-3 text-sm text-slate-800">
                                                                {member.name}
                                                            </td>
                                                            <td className="px-6 py-3 text-sm text-slate-600">
                                                                {member.email}
                                                            </td>
                                                            <td className="px-6 py-3 text-sm text-slate-600">
                                                                {member.mobile}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Footer */}
                                    <div className="px-6 py-4 border-t bg-slate-50 flex justify-end">
                                        <button
                                            onClick={() =>
                                                setShowStaffPopup(false)
                                            }
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-50 px-4 py-4 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="text-slate-600 text-sm">
                            Showing{" "}
                            <span className="font-semibold text-slate-900">
                                {startIndex + 1}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-slate-900">
                                {Math.min(
                                    startIndex + entriesPerPage,
                                    filteredColleges.length
                                )}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-slate-900">
                                {filteredColleges.length}
                            </span>{" "}
                            entries
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(1, prev - 1)
                                    )
                                }
                                disabled={currentPage === 1}
                                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>
                            <div className="flex gap-1">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                            currentPage === i + 1
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(totalPages, prev + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                            >
                                Next
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
