"use client";
import { useState } from "react";
import {
    Search,
    Plus,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    X,
    GraduationCap,
    Filter,
} from "lucide-react";

export default function DepartmentCourseManager() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [showAddDeptModal, setShowAddDeptModal] = useState(false);
    const [newDepartmentName, setNewDepartmentName] = useState("");

    const [departments, setDepartments] = useState([
        {
            id: 1,
            name: "Department Of Agriculture And Allied Science",
            totalCourses: 5,
        },
        { id: 2, name: "Department Of Science", totalCourses: 5 },
        {
            id: 3,
            name: "Department of Management & Commerce Studies",
            totalCourses: 34,
        },
        {
            id: 4,
            name: "Department Of Pharmaceutical Science",
            totalCourses: 0,
        },
        {
            id: 5,
            name: "Department of Engineering & Technology",
            totalCourses: 17,
        },
        { id: 6, name: "Department Of Education", totalCourses: 1 },
        {
            id: 7,
            name: "Department of Yogic Science & Naturopathy",
            totalCourses: 1,
        },
        { id: 8, name: "Pharmacy", totalCourses: 6 },
        { id: 9, name: "Department of Law", totalCourses: 4 },
        { id: 10, name: "Applied & Life Science Programs", totalCourses: 18 },
    ]);

    const filteredDepartments = departments.filter((dept) => {
        const matchesSearch = dept.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesDepartment =
            selectedDepartment === "" || dept.name === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const totalPages = Math.ceil(filteredDepartments.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const displayedDepartments = filteredDepartments.slice(
        startIndex,
        startIndex + entriesPerPage
    );

    const handleAddDepartment = () => {
        if (newDepartmentName.trim()) {
            const newDept = {
                id: departments.length + 1,
                name: newDepartmentName.trim(),
                totalCourses: 0,
            };
            setDepartments([...departments, newDept]);
            setNewDepartmentName("");
            setShowAddDeptModal(false);
        }
    };

    const getCourseCountColor = (count) => {
        if (count === 0) return "text-slate-400";
        if (count < 5) return "text-blue-600";
        if (count < 15) return "text-indigo-600";
        return "text-purple-600";
    };

    const getCourseCountBg = (count) => {
        if (count === 0) return "bg-slate-100";
        if (count < 5) return "bg-blue-50";
        if (count < 15) return "bg-indigo-50";
        return "bg-purple-50";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 ml-64">
            <div className="w-full mx-auto">
                {/* Page Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
                    <div className="flex items-center gap-3">
                        <GraduationCap size={36} />
                        <div>
                            <h1 className="text-2xl font-bold uppercase tracking-wide">
                                Manage Course & Department Listing
                            </h1>
                            <p className="text-indigo-100 mt-1">
                                Organize and manage your academic departments
                                and courses
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                    <BookOpen
                                        className="text-indigo-600"
                                        size={28}
                                    />
                                    Manage Department Listing
                                </h2>
                                <p className="text-slate-600 mt-1">
                                    View, filter, and manage all departments
                                </p>
                            </div>
                            <button
                                onClick={() => setShowAddDeptModal(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all duration-200 hover:scale-105"
                            >
                                <Plus size={15} />
                                Add Department
                            </button>
                        </div>
                    </div>

                    {/* Filter and Controls Section */}
                    <div className="p-6 bg-white border-b border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Department Filter */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Filter size={16} />
                                    Filter by Department
                                </label>
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) =>
                                        setSelectedDepartment(e.target.value)
                                    }
                                    className="w-55 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
                                >
                                    <option value="">
                                        --Select Department--
                                    </option>
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.name}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Search Box */}
                            <div className="ml-auto">
                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Search size={16} />
                                    Search Departments
                                </label>
                                <div className="relative">
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search department names..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="w-55 pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Entries Per Page */}
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
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Department Name
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Total Course
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayedDepartments.map((dept, index) => (
                                    <tr
                                        key={dept.id}
                                        className="hover:bg-indigo-50/50 transition-colors"
                                    >
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500 font-semibold">
                                                    {startIndex + index + 1}.
                                                </span>
                                                <span className="font-semibold text-slate-900">
                                                    {dept.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-center">
                                                <span
                                                    className={`${getCourseCountBg(
                                                        dept.totalCourses
                                                    )} ${getCourseCountColor(
                                                        dept.totalCourses
                                                    )} px-3 py-2 rounded-lg font-bold text-lg min-w-[60px] text-center`}
                                                >
                                                    {dept.totalCourses}
                                                </span>
                                            </div>
                                        </td>
                                        <td href="/dashboard/manage-course/add-course" className="px-2 py-5">
                                            <div className="flex justify-center">
                                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                                                    <Plus size={12} />
                                                    <a href="/dashboard/manage-course/add-course">
                                                    Add Course
                                                    </a>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="text-slate-600 text-sm font-medium">
                            Showing{" "}
                            <span className="font-bold text-slate-900">
                                {startIndex + 1}
                            </span>{" "}
                            to{" "}
                            <span className="font-bold text-slate-900">
                                {Math.min(
                                    startIndex + entriesPerPage,
                                    filteredDepartments.length
                                )}
                            </span>{" "}
                            of{" "}
                            <span className="font-bold text-slate-900">
                                {filteredDepartments.length}
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
                                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-all font-medium"
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>
                            <div className="flex gap-1">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
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
                                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-all font-medium"
                            >
                                Next
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Department Modal */}
            {showAddDeptModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <Plus size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Add New Department
                                        </h3>
                                        <p className="text-indigo-100 text-sm mt-1">
                                            Create a new department
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowAddDeptModal(false)}
                                    className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Department Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={newDepartmentName}
                                onChange={(e) =>
                                    setNewDepartmentName(e.target.value)
                                }
                                placeholder="Enter department name"
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                onKeyPress={(e) =>
                                    e.key === "Enter" && handleAddDepartment()
                                }
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-slate-50 p-6 rounded-b-2xl flex gap-3">
                            <button
                                onClick={() => {
                                    setShowAddDeptModal(false);
                                    setNewDepartmentName("");
                                }}
                                className="flex-1 px-6 py-3 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-100 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddDepartment}
                                disabled={!newDepartmentName.trim()}
                                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200"
                            >
                                Add Department
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
