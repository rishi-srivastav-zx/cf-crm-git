"use client";
import { useState, useEffect } from "react";
import axios from "axios";
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
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 🔹 API base URL (adjust as needed, e.g. http://localhost:5000/api)
    const API_BASE = "http://localhost:3001/api/admin";

    // 🔹 Fetch departments from backend
    const fetchDepartments = async () => {
        try {
            setLoading(true);
            setError("");
            const res = await axios.get(`${API_BASE}/departments`, {
                params: {
                    search: searchTerm,
                    page: currentPage,
                    limit: entriesPerPage,
                },
            });
            if (res.data.success) {
                setDepartments(res.data.data || []);
            } else {
                setError(res.data.error || "Failed to fetch departments");
            }
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching departments");
        } finally {
            setLoading(false);
        }
    };

    // 🔹 Add new department
    const handleAddDepartment = async () => {
        if (!newDepartmentName.trim()) return;

        try {
            setLoading(true);
            const res = await axios.post(`${API_BASE}/departments`, {
                name: newDepartmentName.trim(),
            });

            if (res.data.success) {
                setDepartments((prev) => [...prev, res.data.data]);
                setNewDepartmentName("");
                setShowAddDeptModal(false);
            } else {
                alert(res.data.error || "Failed to add department");
            }
        } catch (err) {
            alert(err.response?.data?.error || "Error adding department");
        } finally {
            setLoading(false);
        }
    };

    // 🔹 Fetch departments when page loads or dependencies change
    useEffect(() => {
        fetchDepartments();
    }, [searchTerm, currentPage, entriesPerPage]);

    // 🔹 Filtered and paginated list (frontend fallback)
    const filteredDepartments = departments.filter((dept) => {
        const matchesSearch = dept.name
            ?.toLowerCase()
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

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200 flex justify-between items-center">
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

                    {/* Search and Filter */}
                    <div className="p-6 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-700 mb-1 flex items-center gap-2">
                                    <Filter size={16} />
                                    Filter by Department
                                </label>
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) =>
                                        setSelectedDepartment(e.target.value)
                                    }
                                    className="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
                                >
                                    <option value="">
                                        --Select Department--
                                    </option>
                                    {departments.map((dept) => (
                                        <option
                                            key={dept._id}
                                            value={dept.name}
                                        >
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-700 mb-1 flex items-center gap-2">
                                    <Search size={16} />
                                    Search Departments
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search department names..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-3 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Loading / Error */}
                    {loading ? (
                        <div className="p-6 text-center text-indigo-600 font-semibold">
                            Loading departments...
                        </div>
                    ) : error ? (
                        <div className="p-6 text-center text-red-500 font-semibold">
                            {error}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase">
                                            Department Name
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-bold text-slate-700 uppercase">
                                            Total Courses
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-bold text-slate-700 uppercase">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedDepartments.map((dept, index) => (
                                        <tr
                                            key={dept._id}
                                            className="hover:bg-indigo-50/50"
                                        >
                                            <td className="px-6 py-4 font-semibold text-slate-900">
                                                {startIndex + index + 1}.{" "}
                                                {dept.name}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <span
                                                    className={`${getCourseCountBg(
                                                        dept.totalCourses || 0
                                                    )} ${getCourseCountColor(
                                                        dept.totalCourses || 0
                                                    )} px-3 py-2 rounded-lg font-bold text-lg`}
                                                >
                                                    {dept.totalCourses || 0}
                                                </span>
                                            </td>
                                            <td className="text-center px-4 py-4">
                                                <a
                                                    href="/dashboard/manage-course/add-course"
                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md"
                                                >
                                                    Add Course
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Department Modal */}
            {showAddDeptModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
                            <h3 className="text-xl font-bold">
                                Add New Department
                            </h3>
                            <button
                                onClick={() => setShowAddDeptModal(false)}
                                className="hover:bg-white/20 p-2 rounded-lg transition"
                            >
                                <X size={24} />
                            </button>
                        </div>
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
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            />
                        </div>
                        <div className="bg-slate-50 p-6 flex gap-3 rounded-b-2xl">
                            <button
                                onClick={() => setShowAddDeptModal(false)}
                                className="flex-1 px-6 py-3 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-100 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddDepartment}
                                disabled={!newDepartmentName.trim() || loading}
                                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50 transition"
                            >
                                {loading ? "Adding..." : "Add Department"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
