"use client";
import { useState } from "react";
import {
    Search,
    Users,
    Plus,
    Eye,
    XCircle,
    Phone,
    Mail,
    Building2,
    ChevronLeft,
    ChevronRight,
    UserCircle,
} from "lucide-react";

export default function StaffListingManager() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [staff, setStaff ] = useState([])

    const staffMembers = [
        {
            id: 1,
            name: "SANJANA SHARMA",
            role: "Counsellor",
            phone: "9863201456",
            email: "grdcounsellor@gmail.com",
            college: "GRD COLLEGE",
            collegePhone: "9632102365",
            collegeEmail: "grd@gmail.com",
            photo: "https://via.placeholder.com/80/4F46E5/FFFFFF?text=SS",
        },
        {
            id: 2,
            name: "rgtre",
            role: "Counsellor",
            phone: "1231231234",
            email: "adminn@gmail.com",
            college: "Alpine Group of Institution",
            collegePhone: "8791791791",
            collegeEmail: "admissions@alpinecollege.edu.in",
            photo: "https://via.placeholder.com/80/7C3AED/FFFFFF?text=RG",
        },
        {
            id: 3,
            name: "Saurabh Shukla",
            role: "Counsellor",
            phone: "6395218126",
            email: "suyalvikas123@gmail.com",
            college: "Alpine Group of Institution",
            collegePhone: "8791791791",
            collegeEmail: "admissions@alpinecollege.edu.in",
            photo: "https://via.placeholder.com/80/2563EB/FFFFFF?text=SS",
        },
        {
            id: 4,
            name: "Dr. Dayal",
            role: "Counsellor",
            phone: "8082169785",
            email: "university@uumail.in",
            college: "Uttaranchal University Dehradun",
            collegePhone: "0135277030",
            collegeEmail: "university@uumail.in",
            photo: "https://via.placeholder.com/80/059669/FFFFFF?text=DD",
        },
        {
            id: 5,
            name: "GRD COLLEGE ADMIN",
            role: "Admin",
            phone: "8520146320",
            email: "grdadmin@gmail.com",
            college: "GRD COLLEGE",
            collegePhone: "9632102365",
            collegeEmail: "grd@gmail.com",
            photo: "https://via.placeholder.com/80/DC2626/FFFFFF?text=GA",
        },
        {
            id: 6,
            name: "Rahul",
            role: "Admin",
            phone: "09140214580",
            email: "rahul360@gmail.com",
            college: "Uttaranchal University Dehradun",
            collegePhone: "0135277030",
            collegeEmail: "university@uumail.in",
            photo: "https://via.placeholder.com/80/EA580C/FFFFFF?text=R",
        },
        {
            id: 7,
            name: "MEGHA",
            role: "Admin",
            phone: "7415553111",
            email: "meghadmin@gmail.com",
            college: "UNIVERSITY OF PATANJALI",
            collegePhone: "8954555111",
            collegeEmail: "info@uop.edu.in",
            photo: "https://via.placeholder.com/80/0891B2/FFFFFF?text=M",
        },
        {
            id: 8,
            name: "RAJAT",
            role: "Counsellor",
            phone: "9652014563",
            email: "rajatcounsellor@gmail.com",
            college: "UNIVERSITY OF PATANJALI",
            collegePhone: "8954555111",
            collegeEmail: "info@uop.edu.in",
            photo: "https://via.placeholder.com/80/8B5CF6/FFFFFF?text=R",
        },
        {
            id: 9,
            name: "Uttaranchal University Dehradun",
            role: "Admin",
            phone: "0639528126",
            email: "uuadmin@gmail.com",
            college: "Uttaranchal University Dehradun",
            collegePhone: "0135277030",
            collegeEmail: "university@uumail.in",
            photo: "https://via.placeholder.com/80/EC4899/FFFFFF?text=UU",
        },
        {
            id: 10,
            name: "Raghav",
            role: "Admin",
            phone: "09140214580",
            email: "adminuu@gmail.com",
            college: "Uttaranchal University Dehradun",
            collegePhone: "0135277030",
            collegeEmail: "university@uumail.in",
            photo: "https://via.placeholder.com/80/F59E0B/FFFFFF?text=R",
        },
    ];

     const handleDelete = (id) => {
         // Remove from array
         setStaff(staff.filter((staffMembers) => staffMembers.id !== id));
     };

    const filteredStaff = staffMembers.filter(
        (staff) =>
            staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.phone.includes(searchTerm) ||
            staff.college.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredStaff.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const displayedStaff = filteredStaff.slice(
        startIndex,
        startIndex + entriesPerPage
    );

    const getRoleBadgeColor = (role) => {
        if (role === "Admin")
            return "bg-purple-100 text-purple-700 border-purple-200";
        if (role === "Counsellor")
            return "bg-blue-100 text-blue-700 border-blue-200";
        return "bg-gray-100 text-gray-700 border-gray-200";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4  ml-64">
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                <Users className="text-indigo-600" size={32} />
                                Manage Staff Listing
                            </h1>
                            <p className="text-slate-600 mt-1">
                                View and manage staff members across all
                                colleges
                            </p>
                        </div>
                        <a href="/dashboard/manage-staff/add-staff" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all duration-200 hover:scale-105">
                            <Plus size={15} />
                            Add Staff
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
                                placeholder="Search staff, email, phone, college..."
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
                                        Profile Photo
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Staff Details
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        College Details
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayedStaff.map((staff, index) => (
                                    <tr
                                        key={staff.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-3 py-2 text-slate-900 font-medium">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="px-3 py-2">
                                            <div className="relative">
                                                <img
                                                    src={staff.photo}
                                                    alt={staff.name}
                                                    className="w-15 h-15 rounded-xl object-cover shadow-md border-2 border-white"
                                                />
                                              
                                            </div>
                                        </td>
                                        <td className="px-3 py-2">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-slate-900 text-base">
                                                        {staff.name}
                                                    </h3>
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeColor(
                                                            staff.role
                                                        )}`}
                                                    >
                                                        {staff.role}
                                                    </span>
                                                </div>
                                                <div className="space-y-1">
                                                    <a
                                                        href={`tel:${staff.phone}`}
                                                        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                                    >
                                                        <Phone size={14} />
                                                        {staff.phone}
                                                    </a>
                                                    <a
                                                        href={`mailto:${staff.email}`}
                                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700"
                                                    >
                                                        <Mail size={14} />
                                                        {staff.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-2">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Building2
                                                        size={16}
                                                        className="text-indigo-600"
                                                    />
                                                    <h4 className="font-semibold text-slate-900">
                                                        {staff.college}
                                                    </h4>
                                                </div>
                                                <div className="space-y-1 pl-6">
                                                    <a
                                                        href={`tel:${staff.collegePhone}`}
                                                        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                                    >
                                                        <Phone size={14} />
                                                        {staff.collegePhone}
                                                    </a>
                                                    <a
                                                        href={`mailto:${staff.collegeEmail}`}
                                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700"
                                                    >
                                                        <Mail size={14} />
                                                        {staff.collegeEmail}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-2">
                                            <div className="flex gap-2">
                                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded-lg font-medium text-sm flex items-center gap-1 transition-all">
                                                    <Eye size={12} />
                                                    View
                                                </button>
                                                <button 
                                                  onClick={ () => handleDelete(staffMembers.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg font-medium text-sm flex items-center gap-1 transition-all">
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
                    <div className="bg-slate-50 px-3 py-2 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="text-slate-600 text-sm">
                            Showing{" "}
                            <span className="font-semibold text-slate-900">
                                {startIndex + 1}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-slate-900">
                                {Math.min(
                                    startIndex + entriesPerPage,
                                    filteredStaff.length
                                )}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-slate-900">
                                {filteredStaff.length}
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
                                className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
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
