"use client";
import { useState, useEffect } from "react";
import {
    X,
    Edit2,
    Trash2,
    Plus,
    Search,
    AlertCircle,
    CheckCircle,
} from "lucide-react";

export default function CourseManagement() {
    const API_BASE_URL = "http://localhost:3001/api/admin"; 

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [notification, setNotification] = useState(null);
    const [newCourse, setNewCourse] = useState({
        fullName: "",
        shortName: "",
        duration: "",
        courseType: "",
        courseCategory: "",
    });

    
    useEffect(() => {
        fetchCourses();
    }, []);

    
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const showNotification = (message, type = "success") => {
        setNotification({ message, type });
    };

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/courses`);
            const data = await response.json();

            if (data.success) {
                setCourses(data.data);
            } else {
                showNotification(
                    data.message || "Failed to fetch courses",
                    "error"
                );
            }
        } catch (error) {
            showNotification("Error connecting to server", "error");
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        window.history.back();
    };

    const handleEdit = (course) => {
        setEditingCourse({
            ...course,
            fullName: course.fullCourseName,
            shortName: course.shortCourseName,
            duration: course.courseDuration.toString(),
        });
        setShowEditModal(true);
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this course?")) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/courses/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();

            if (data.success) {
                setCourses(courses.filter((course) => course._id !== id));
                showNotification("Course deleted successfully");
            } else {
                showNotification(
                    data.message || "Failed to delete course",
                    "error"
                );
            }
        } catch (error) {
            showNotification("Error deleting course", "error");
            console.error("Delete error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveEdit = async () => {
        if (
            !editingCourse.fullName ||
            !editingCourse.shortName ||
            !editingCourse.duration ||
            !editingCourse.courseType ||
            !editingCourse.courseCategory
        ) {
            showNotification("All fields are required", "error");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `${API_BASE_URL}/courses/${editingCourse._id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fullCourseName: editingCourse.fullName,
                        shortCourseName: editingCourse.shortName,
                        courseDuration: parseInt(editingCourse.duration),
                        courseType: editingCourse.courseType,
                        courseCategory: editingCourse.courseCategory,
                    }),
                }
            );
            const data = await response.json();

            if (data.success) {
                await fetchCourses();
                setShowEditModal(false);
                setEditingCourse(null);
                showNotification("Course updated successfully");
            } else {
                showNotification(
                    data.message || "Failed to update course",
                    "error"
                );
            }
        } catch (error) {
            showNotification("Error updating course", "error");
            console.error("Update error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCourse = async () => {
        if (
            !newCourse.fullName ||
            !newCourse.shortName ||
            !newCourse.duration ||
            !newCourse.courseType ||
            !newCourse.courseCategory
        ) {
            showNotification("All fields are required", "error");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/courses`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullCourseName: newCourse.fullName,
                    shortCourseName: newCourse.shortName,
                    courseDuration: parseInt(newCourse.duration),
                    courseType: newCourse.courseType,
                    courseCategory: newCourse.courseCategory,
                }),
            });
            const data = await response.json();

            if (data.success) {
                await fetchCourses();
                setNewCourse({
                    fullName: "",
                    shortName: "",
                    duration: "",
                    courseType: "",
                    courseCategory: "",
                });
                showNotification("Course added successfully");
            } else {
                showNotification(
                    data.message || "Failed to add course",
                    "error"
                );
            }
        } catch (error) {
            showNotification("Error adding course", "error");
            console.error("Add error:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter(
        (course) =>
            course.fullCourseName
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            course.shortCourseName
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

   
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredCourses.slice(
        indexOfFirstEntry,
        indexOfLastEntry
    );
    const totalPages = Math.ceil(filteredCourses.length / entriesPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ml-64">
            {/* Notification */}
            {notification && (
                <div
                    className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
                        notification.type === "success"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                    }`}
                >
                    {notification.type === "success" ? (
                        <CheckCircle size={20} />
                    ) : (
                        <AlertCircle size={20} />
                    )}
                    <span className="font-medium">{notification.message}</span>
                </div>
            )}

            {/* Header */}
            <div className="bg-white shadow-md border-b border-slate-200">
                <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Course Management System
                    </h1>
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="w-full mx-auto px-6 py-8">
                {/* Add Course Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-slate-200">
                    <h2 className="text-xl font-semibold text-slate-800 mb-6">
                        Add New Course
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Full Course Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Bachelor Of Science in Agriculture"
                                value={newCourse.fullName}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        fullName: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Short Course Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: B.Sc. Agriculture"
                                value={newCourse.shortName}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        shortName: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Course Duration (Years){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                placeholder="Ex: 3"
                                value={newCourse.duration}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        duration: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Course Type{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={newCourse.courseType}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        courseType: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">--Select Type--</option>
                                <option value="Undergraduate">
                                    Undergraduate
                                </option>
                                <option value="Postgraduate">
                                    Postgraduate
                                </option>
                                <option value="Diploma">Diploma</option>
                                <option value="Certificate">Certificate</option>
                                <option value="Professional">
                                    Professional
                                </option>
                                <option value="Doctoral">Doctoral</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Course Category{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={newCourse.courseCategory}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        courseCategory: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">--Select Category--</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="Management">Management</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={handleAddCourse}
                            disabled={loading}
                            className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Plus size={18} />
                            {loading ? "Adding..." : "Add Course"}
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-600">
                                    Show
                                </span>
                                <select
                                    value={entriesPerPage}
                                    onChange={(e) => {
                                        setEntriesPerPage(
                                            Number(e.target.value)
                                        );
                                        setCurrentPage(1);
                                    }}
                                    className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                </select>
                                <span className="text-sm text-slate-600">
                                    entries
                                </span>
                            </div>

                            <div className="relative">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                                    size={18}
                                />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                            </div>
                        ) : currentEntries.length === 0 ? (
                            <div className="text-center py-12 text-slate-500">
                                No courses found
                            </div>
                        ) : (
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Full Course Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Short Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Duration
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Course Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {currentEntries.map((course, index) => (
                                        <tr
                                            key={course._id}
                                            className="hover:bg-slate-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm text-slate-900">
                                                {indexOfFirstEntry + index + 1}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                                                {course.fullCourseName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600">
                                                {course.shortCourseName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600">
                                                {course.courseDuration}{" "}
                                                {course.courseDuration === 1
                                                    ? "Year"
                                                    : "Years"}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                    {course.courseType}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                                    {course.courseCategory}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(course)
                                                        }
                                                        className="px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-1 text-xs font-medium"
                                                    >
                                                        <Edit2 size={14} />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                course._id
                                                            )
                                                        }
                                                        className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-1 text-xs font-medium"
                                                    >
                                                        <Trash2 size={14} />
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                        <div className="text-sm text-slate-600">
                            Showing {indexOfFirstEntry + 1} to{" "}
                            {Math.min(indexOfLastEntry, filteredCourses.length)}{" "}
                            of {filteredCourses.length} entries
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() =>
                                    setCurrentPage(Math.max(1, currentPage - 1))
                                }
                                disabled={currentPage === 1}
                                className="px-3 py-1.5 border border-slate-300 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                                        currentPage === i + 1
                                            ? "bg-indigo-600 text-white"
                                            : "border border-slate-300 text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() =>
                                    setCurrentPage(
                                        Math.min(totalPages, currentPage + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="px-3 py-1.5 border border-slate-300 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && editingCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-slate-800">
                                Edit Course
                            </h3>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Full Course Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editingCourse.fullName}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                fullName: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Short Course Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editingCourse.shortName}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                shortName: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Course Duration (Years){" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={editingCourse.duration}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                duration: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Course Type{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={editingCourse.courseType}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                courseType: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                                    >
                                        <option value="Undergraduate">
                                            Undergraduate
                                        </option>
                                        <option value="Postgraduate">
                                            Postgraduate
                                        </option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Certificate">
                                            Certificate
                                        </option>
                                        <option value="Professional">
                                            Professional
                                        </option>
                                        <option value="Doctoral">
                                            Doctoral
                                        </option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Course Category{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={editingCourse.courseCategory}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                courseCategory: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                                    >
                                        <option value="Science">Science</option>
                                        <option value="Commerce">
                                            Commerce
                                        </option>
                                        <option value="Arts">Arts</option>
                                        <option value="Engineering">
                                            Engineering
                                        </option>
                                        <option value="Medical">Medical</option>
                                        <option value="Management">
                                            Management
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={handleSaveEdit}
                                    disabled={loading}
                                    className="flex-1 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </button>
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    disabled={loading}
                                    className="flex-1 px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
