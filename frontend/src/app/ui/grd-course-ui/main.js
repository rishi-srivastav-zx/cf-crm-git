"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DepartmentListing() {
    const [currentView, setCurrentView] = useState("listing");
    const [selectedDept, setSelectedDept] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    

    const departments = [
        { name: "Department Of Agriculture And Allied Science", count: 5 },
        { name: "Department Of Science", count: 5 },
        { name: "Department of Management & Commerce Studies", count: 34 },
        { name: "Department Of Pharmaceutical Science", count: 0 },
        { name: "Department of Engineering & Technology", count: 17 },
        { name: "Department Of Education", count: 1 },
        { name: "Department of Yogic Science & Naturopathy", count: 1 },
        { name: "Pharmacy", count: 6 },
        { name: "Department of Law", count: 4 },
        { name: "Applied & Life Science Programs", count: 18 },
        { name: "Department of Liberal Arts", count: 8 },
        { name: "Department of Paramedical", count: 7 },
        { name: "Department of Hotel and Hospitality", count: 6 },
        { name: "Department of Computer Applications Programs", count: 27 },
        { name: "Department of Aeronautics", count: 3 },
    ];

    const courses = [
        {
            name: "B.Sc. (Hons.) Agriculture",
            duration: "3 Year",
            education: "Under Graduate",
            hasDetails: true,
        },
        {
            name: "M.Sc. Ag. (Plant Pathology)",
            duration: "2 Year",
            education: "Post Graduate",
            hasDetails: false,
        },
        {
            name: "M.Sc. Ag. (Agronomy)",
            duration: "2 Year",
            education: "Post Graduate",
            hasDetails: false,
        },
        {
            name: "Master in Plant breeding and genetics",
            duration: "2 Year",
            education: "Post Graduate",
            hasDetails: false,
        },
        {
            name: "Bachelor of science Agriculture Hons",
            duration: "4 Year",
            education: "Under Graduate",
            hasDetails: false,
        },
    ];

    const handleDeptClick = (dept) => {
        setSelectedDept(dept);
        setCurrentView("courses");
    };

    const handleBack = () => {
        if (currentView === "courses") {
            setCurrentView("listing");
            setSelectedDept(null);
        }
    };

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (currentView === "courses") {
        return (
            <div className="min-h-screen bg-gray-50 ml-64">
                <div className="bg-white border-b border-gray-200 px-8 py-4">
                    <div className="flex justify-between items-center w-full mx-auto">
                        <h1 className="text-lg font-semibold text-gray-800">
                            ADD COURSE IN {selectedDept?.name.toUpperCase()}
                        </h1>
                        <button
                            onClick={handleBack}
                            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors text-sm"
                        >
                            Back
                        </button>
                    </div>
                </div>

                <div className="w-full mx-auto p-8">
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-base font-medium text-gray-700">
                                Manage Course Listing
                            </h2>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">
                                        Show
                                    </span>
                                    <select
                                        value={entriesPerPage}
                                        onChange={(e) =>
                                            setEntriesPerPage(
                                                Number(e.target.value)
                                            )
                                        }
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    >
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </select>
                                    <span className="text-sm text-gray-600">
                                        entries
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">
                                        Search:
                                    </span>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                                        placeholder="Search courses..."
                                    />
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 border-b border-gray-200">
                                                Course Name
                                                <span className="ml-2 text-gray-400">
                                                    ↕
                                                </span>
                                            </th>
                                            <th className="px-6 py-3 border-b border-gray-200"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCourses.map(
                                            (course, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-200 hover:bg-gray-50"
                                                >
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-gray-800 mb-1">
                                                            {course.name}
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            Duration:{" "}
                                                            {course.duration} |
                                                            Education:{" "}
                                                            {course.education}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        {course.hasDetails ? (
                                                            <Link href="/grd-dashboard/manage-course/fee-details" className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700 transition-colors">
                                                                Edit Fee
                                                                Details
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                                href="/grd-dashboard/manage-course/fee-sturcture"
                                                                className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors"
                                                            >
                                                                Add Fee
                                                            </Link>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <div className="text-sm text-gray-600">
                                    Showing 1 to {filteredCourses.length} of{" "}
                                    {filteredCourses.length} entries
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">
                                        1
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 ml-64">
            <div className="w-full mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        ALL DEPARTMENT LISTING
                    </h1>
                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                        Back
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept, index) => (
                        <button
                            key={index}
                            onClick={() => handleDeptClick(dept)}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center border border-gray-200 hover:border-gray-300 cursor-pointer"
                        >
                            <h2 className="text-sm font-semibold text-gray-800">
                                {dept.name} ({dept.count})
                            </h2>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
