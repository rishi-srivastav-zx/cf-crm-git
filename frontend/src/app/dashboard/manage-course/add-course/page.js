"use client";
import { useState } from "react";
import { X, Edit2, Trash2, Plus, Search } from "lucide-react";


export default function CourseManagement() {
     const handleBack = () => {
         window.history.back();
     };
    
    const [courses, setCourses] = useState([
        {
            id: 1,
            fullName: "B.Sc. (Hons.) Agriculture",
            shortName: "B.sc (Hons)",
            duration: "3 Year",
            courseType: "Degree",
            type: "Under Graduate",
        },
        {
            id: 2,
            fullName: "M.Sc. Ag. (Plant Pathology)",
            shortName: "M.Sc. Ag. (Plant Pathology)",
            duration: "2 Year",
            courseType: "Degree",
            type: "Post Graduate",
        },
        {
            id: 3,
            fullName: "M.Sc. Ag. (Agronomy)",
            shortName: "M.Sc. Ag. (Agronomy)",
            duration: "2 Year",
            courseType: "Degree",
            type: "Post Graduate",
        },
        {
            id: 4,
            fullName: "Master in Plant breeding and genetics",
            shortName: "M.sc plant breeding and genetics",
            duration: "2 Year",
            courseType: "Degree",
            type: "Post Graduate",
        },
        {
            id: 5,
            fullName: "Bachelor of science Agriculture Hons",
            shortName: "B.sc Agriculture (Hons)",
            duration: "4 Year",
            courseType: "Degree",
            type: "Under Graduate",
        },
    ]);

    const [showEditModal, setShowEditModal] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [newCourse, setNewCourse] = useState({
        fullName: "",
        shortName: "",
        duration: "",
        courseType: "",
        type: "",
    });

    const handleEdit = (course) => {
        setEditingCourse({ ...course });
        setShowEditModal(true);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this course?")) {
            setCourses(courses.filter((course) => course.id !== id));
        }
    };

    const handleSaveEdit = () => {
        setCourses(
            courses.map((course) =>
                course.id === editingCourse.id ? editingCourse : course
            )
        );
        setShowEditModal(false);
        setEditingCourse(null);
    };

    const handleAddCourse = () => {
        if (
            newCourse.fullName &&
            newCourse.shortName &&
            newCourse.duration &&
            newCourse.courseType &&
            newCourse.type
        ) {
            setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
            setNewCourse({
                fullName: "",
                shortName: "",
                duration: "",
                courseType: "",
                type: "",
            });
        }
    };

    const filteredCourses = courses.filter(
        (course) =>
            course.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ml-64">
            {/* Header */}
            <div className="bg-white shadow-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Department of Agriculture and Allied Science
                    </h1>
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
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
                                placeholder="Ex: Bachelor Of Science"
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
                                placeholder="Ex: B.sc (Arg)"
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
                                Course Duration (In Year){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: 3 Year"
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
                                <option value="Degree">Degree</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Certificate">Certificate</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Course Type{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={newCourse.type}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        type: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">--Select Type--</option>
                                <option value="Under Graduate">
                                    Under Graduate
                                </option>
                                <option value="Post Graduate">
                                    Post Graduate
                                </option>
                                <option value="Doctoral">Doctoral</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={handleAddCourse}
                            className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
                        >
                            <Plus size={18} />
                            Add More Course
                        </button>
                        <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    {/* Table Controls */}
                    <div className="p-6 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-600">
                                    Show
                                </span>
                                <select
                                    value={entriesPerPage}
                                    onChange={(e) =>
                                        setEntriesPerPage(
                                            Number(e.target.value)
                                        )
                                    }
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
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
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
                                        Type
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredCourses.map((course, index) => (
                                    <tr
                                        key={course.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-sm text-slate-900">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                                            {course.fullName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {course.shortName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {course.duration}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                {course.courseType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                    course.type ===
                                                    "Under Graduate"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-purple-100 text-purple-700"
                                                }`}
                                            >
                                                {course.type}
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
                                                        handleDelete(course.id)
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
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                        <div className="text-sm text-slate-600">
                            Showing 1 to {filteredCourses.length} of{" "}
                            {filteredCourses.length} entries
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 border border-slate-300 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                Previous
                            </button>
                            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium">
                                1
                            </button>
                            <button className="px-3 py-1.5 border border-slate-300 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
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
                                        Course Duration{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
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
                                        <option value="Degree">Degree</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Certificate">
                                            Certificate
                                        </option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Type{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={editingCourse.type}
                                        onChange={(e) =>
                                            setEditingCourse({
                                                ...editingCourse,
                                                type: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                                    >
                                        <option value="Under Graduate">
                                            Under Graduate
                                        </option>
                                        <option value="Post Graduate">
                                            Post Graduate
                                        </option>
                                        <option value="Doctoral">
                                            Doctoral
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={handleSaveEdit}
                                    className="flex-1 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    className="flex-1 px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
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