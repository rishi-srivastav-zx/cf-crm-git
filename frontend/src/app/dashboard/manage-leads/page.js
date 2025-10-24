"use client";
import React, { useState } from "react";
import {
    Search,
    Upload,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
} from "lucide-react";

const StudentLeadsManager = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const leads = [
        {
            id: 1,
            name: "Akansha",
            phone: "+91 78956******",
            tech: ["C Tech", "B.Tech", "M.Sc"],
            status: "Not Yet Enrolled",
            addedDate: "19-Oct-2024, 08:49 AM (58 days ago)",
            college: "Uttaranchal University Dehradun",
            state: "Uttarakhand",
            city: "Kotdwara",
            source: "Social Media",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "21-10-2024",
            followUpExpiry: "350 days ago",
            collegeAssign: 2,
        },
        {
            id: 2,
            name: "Ankit Rawat",
            phone: "+91 97207******",
            tech: ["B.Sc (IT)"],
            status: "Not Yet Enrolled",
            addedDate: "02-Nov-2024, 12:36 PM (335 days ago)",
            college: "Alpine Group of Institutes",
            state: "Rajasthan",
            city: "Jaipur",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "08-11-2024",
            followUpExpiry: "332 days ago",
            collegeAssign: 2,
        },
        {
            id: 3,
            name: "Chirag",
            phone: "+91 93406******",
            tech: ["B.C.A", "B.Sc (IT)"],
            status: "Not Yet Enrolled",
            addedDate: "11-Oct-2024, 09:00 AM (361 days ago)",
            college: "Uttaranchal University Dehradun",
            state: "Uttarakhand",
            city: "Dehradun",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "18-10-2024",
            followUpExpiry: "353 days ago",
            collegeAssign: 1,
        },
        {
            id: 4,
            name: "Chirag Seth",
            phone: "+91 93406******",
            tech: ["M.C.A", "B.Tech"],
            status: "Hot",
            addedDate: "14-Oct-2024, 10:28 AM (357 days ago)",
            college: "GRD COLLEGE",
            state: "Madhya Pradesh",
            city: "Gwalior",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "N/A",
            collegeAssign: 1,
        },
        {
            id: 5,
            name: "College Forum",
            phone: "+91 06396******",
            tech: ["B.Tech"],
            status: "Not Yet Enrolled",
            addedDate: "01-Oct-2024, 11:30 AM (370 days ago)",
            college: "Alpine Group of Institution",
            state: "Uttarakhand",
            city: "Dehradun",
            source: "Self",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "17-10-2024",
            followUpExpiry: "354 days ago",
            collegeAssign: 2,
        },
        {
            id: 6,
            name: "Gyatri",
            phone: "+91 78956******",
            tech: ["B.Tech (ME)", "B.Sc", "M.Sc"],
            status: "Hot",
            addedDate: "04-Nov-2024, 12:09 PM (336 days ago)",
            college: "GRD COLLEGE",
            state: "Uttarakhand",
            city: "Dehradun",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "N/A",
            collegeAssign: 1,
        },
        {
            id: 7,
            name: "Hari Om G",
            phone: "+91 91934******",
            tech: ["B.Tech", "B.Sc", "M.Sc"],
            status: "Hot",
            addedDate: "16-Oct-2024, 07:10 AM (356 days ago)",
            college: "GRD COLLEGE",
            state: "Uttarakhand",
            city: "Pauri",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "N/A",
            collegeAssign: 1,
        },
        {
            id: 8,
            name: "Harisha",
            phone: "+91 89724******",
            tech: ["B.Sc - Data Science", "B.Sc", "M.Sc"],
            status: "Not Yet Enrolled",
            addedDate: "06-Oct-2024, 08:24 AM (366 days ago)",
            college: "UNIVERSITY OF PATANJALI",
            state: "Haryana",
            city: "Firozpur Jhirka",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "N/A",
            collegeAssign: 1,
        },
        {
            id: 9,
            name: "Harshit Chauhan",
            phone: "+91 82186******",
            tech: ["B.Sc (CS)", "B.Sc", "M.Sc"],
            status: "Hot",
            addedDate: "15-Oct-2024, 08:18 AM (357 days ago)",
            college: "GRD COLLEGE",
            state: "Rajasthan",
            city: "Ajmer",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "30-10-2024",
            followUpExpiry: "341 days ago",
            collegeAssign: 2,
        },
        {
            id: 10,
            name: "Harshit Chauhan Ggggg",
            phone: "+91 82186******",
            tech: ["B.Sc (CS)", "B.Sc", "M.Sc"],
            status: "Hot",
            addedDate: "15-Oct-2024, 07:49 AM (357 days ago)",
            college: "GRD COLLEGE",
            state: "Arunachal Pradesh",
            city: "Along",
            source: "College Forum",
            followUpStatus: "Follow Up (0)",
            lastFollowUp: "N/A",
            collegeAssign: 1,
        },
    ];

    const totalPages = Math.ceil(leads.length / entriesPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 ml-64">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Manage Student Leads
                    </h1>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-indigo-500/30 transition-all duration-200 font-medium">
                        <Upload className="w-4 h-4" />
                        Upload Leads
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
                        <select className="px-2 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-700">
                            <option>Select Country--</option>
                        </select>
                        <select className="px-2 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-700">
                            <option>Select State--</option>
                        </select>
                        <select className="px-2 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-700">
                            <option>Select City--</option>
                        </select>
                        <select className="px-2 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-700">
                            <option>Select Source Type--</option>
                        </select>
                        <select className="px-2 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-700">
                            <option>Select Courses--</option>
                        </select>
                        <button className="bg-emerald-500 w-20 hover:bg-emerald-600 text-white px-2 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-sm">
                            Filter
                        </button>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-indigo-700 transition-colors">
                            All Leads (1)
                        </span>
                        <span className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-slate-800 transition-colors">
                            Today Follow Up (0)
                        </span>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-600 transition-colors">
                            Today Visit (0)
                        </span>
                        <span className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors">
                            Total Delay (0)
                        </span>
                        <span className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-teal-600 transition-colors">
                            Total Admission(0)
                        </span>
                        <span className="px-4 py-2 bg-rose-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-rose-600 transition-colors">
                            Reject Student (0)
                        </span>
                        <span className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-indigo-600 transition-colors">
                            Reset
                        </span>
                        <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-700 text-sm">
                            <option>--Select Status--</option>
                        </select>
                    </div>
                </div>

                {/* Table Controls */}
                <div className="bg-white rounded-t-xl border border-slate-200 border-b-0 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-slate-700 font-medium">Show</span>
                        <select
                            value={entriesPerPage}
                            onChange={(e) =>
                                setEntriesPerPage(Number(e.target.value))
                            }
                            className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-700"
                        >
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span className="text-slate-700 font-medium">
                            leads
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-700 font-medium">
                            Search:
                        </span>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                                placeholder="Search leads..."
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-b-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        Student Details
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        College Name
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        State & City
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        Source
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        Propose Mail
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        Action
                                    </th>
                                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-700">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {leads.map((lead, index) => (
                                    <tr
                                        key={lead.id}
                                        className="hover:bg-slate-50 transition-colors duration-150"
                                    >
                                        <td className="px-4 py-5">
                                            <div className="space-y-2">
                                                <div className="font-semibold text-slate-800 text-base">
                                                    {index + 1}. {lead.name}
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {lead.tech.map((t, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {lead.status ===
                                                        "Not Yet Enrolled" && (
                                                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                                                            Not Yet Enrolled
                                                        </span>
                                                    )}
                                                    {lead.status === "Hot" && (
                                                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded font-medium">
                                                            Hot
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-slate-600 text-sm font-medium">
                                                    {lead.phone}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    <span className="font-medium">
                                                        Added By:
                                                    </span>{" "}
                                                    {lead.addedDate}
                                                </div>
                                                <div className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded font-medium">
                                                    College Assign:{" "}
                                                    {lead.collegeAssign}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="font-medium text-slate-800">
                                                {lead.college}
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="space-y-1">
                                                <div className="font-medium text-slate-800">
                                                    India
                                                </div>
                                                <div className="text-slate-600 text-sm font-medium">
                                                    {lead.state}
                                                </div>
                                                <div className="text-slate-600 text-sm">
                                                    {lead.city}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="text-slate-700 font-medium">
                                                {lead.source}
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="space-y-2">
                                                <button className="w-full px-3 py-1.5 bg-emerald-500 text-white text-sm rounded font-medium hover:bg-emerald-600 transition-colors">
                                                    {lead.followUpStatus}
                                                </button>
                                                <div className="text-xs text-slate-600">
                                                    Last Follow Up:{" "}
                                                    {lead.lastFollowUp}
                                                </div>
                                                {lead.followUpExpiry && (
                                                    <>
                                                        <button className="w-full px-3 py-1.5 bg-orange-500 text-white text-xs rounded font-medium hover:bg-orange-600 transition-colors">
                                                            Delayed
                                                        </button>
                                                        <div className="text-xs text-red-600 font-medium">
                                                            Last Followup data
                                                            expired :{" "}
                                                            {
                                                                lead.followUpExpiry
                                                            }
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="space-y-2">
                                                <button className="flex items-center justify-center w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
                                                    <Phone className="w-5 h-5 text-white" />
                                                </button>
                                                <button className="w-full px-3 py-2 bg-blue-500 text-white text-sm rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm">
                                                    Send Payment Link (10)
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-5">
                                            <div className="space-y-2">
                                                <button className="w-full px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                                                    Mark As Admission
                                                </button>
                                                <button className="w-full px-4 py-2 bg-red-500 text-white text-sm rounded-lg font-medium hover:bg-red-600 transition-colors shadow-sm">
                                                    Reject
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
                        <div className="text-sm text-slate-600">
                            Showing 1 to{" "}
                            {Math.min(entriesPerPage, leads.length)} of{" "}
                            {leads.length} leads
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() =>
                                    setCurrentPage(Math.max(1, currentPage - 1))
                                }
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                            >
                                Previous
                            </button>
                            {[1, 2, 3, 4].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                                        currentPage === page
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                            : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() =>
                                    setCurrentPage(
                                        Math.min(totalPages, currentPage + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLeadsManager;
