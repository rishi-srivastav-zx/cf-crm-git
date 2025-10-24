"use client";
import  { useState } from "react";
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
    Link,
} from "lucide-react";

export default function CollegeListingManager() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

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
            <div className="max-w-7xl mx-auto">
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
                        <a href="/dashboard/manage-college/add-college" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all duration-200 hover:scale-105">
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
                                                <div className="flex items-center gap-2 text-slate-700">
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
                                                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-lg font-medium text-sm">
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
