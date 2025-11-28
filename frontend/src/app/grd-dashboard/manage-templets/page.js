"use client";
import React, { useState } from "react";
import { FileText, X, Plus, Info } from "lucide-react";

export default function TemplateManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [showAddTemplatePopup, setShowAddTemplatePopup] = useState(false);
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);

    const templateData = [
        {
            id: 1,
            title: "College Broucher",
            type: "(Gmail)",
            description: "It focuses on identifying the true potential",
            attachment: true,
        },
        {
            id: 2,
            title: "Transport Facility",
            type: "(Gmail)",
            description: "Transport FacilityTransport Facility",
            attachment: true,
        },
        {
            id: 3,
            title: "Scholarship Broucher",
            type: "(Gmail)",
            description: "Scholarship BroucherScholarship Broucher",
            attachment: true,
        },
        {
            id: 4,
            title: "Welcome Message",
            type: "(Whatsapp)",
            description: "We are thrilled to welcome you to GRD Institu",
            attachment: false,
        },
        {
            id: 5,
            title: "Course Enrollment Confirmation",
            type: "(Whatsapp)",
            description: "Please Enroll Your Course.And Connect With Y",
            attachment: false,
        },
        {
            id: 6,
            title: "Upcoming Class Reminder",
            type: "(Whatsapp)",
            description: "This is a friendly reminder about your upcom",
            attachment: false,
        },
        {
            id: 7,
            title: "Online Payment Link",
            type: "(Whatsapp)",
            description: "www.googlepay.com",
            attachment: false,
        },
        {
            id: 8,
            title: "Demo Title",
            type: "(Gmail)",
            description: "Demo Description",
            attachment: true,
        },
    ];

    const filteredData = templateData.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handlePdfClick = (template) => {
        setSelectedPdf(template);
        setShowPdfViewer(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 ml-64">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    MANAGE TEMPLATE LISTING
                </h1>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Manage Template Listing
                        </h2>
                        <button
                            onClick={() => setShowAddTemplatePopup(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add Template
                        </button>
                    </div>

                    {/* Search */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm text-gray-600">
                                Search:
                            </span>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Show</span>
                            <select
                                value={entriesPerPage}
                                onChange={(e) =>
                                    setEntriesPerPage(Number(e.target.value))
                                }
                                className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                            <span className="text-sm text-gray-600">
                                entries
                            </span>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Attachment
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredData.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="text-sm">
                                                <span className="text-gray-500">
                                                    {index + 1}.{" "}
                                                </span>
                                                <span className="text-indigo-600">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="text-xs text-orange-500 mt-1">
                                                {item.type}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-gray-900">
                                                    {item.description}
                                                </span>
                                                <Info className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.attachment ? (
                                                <button
                                                    onClick={() =>
                                                        handlePdfClick(item)
                                                    }
                                                    className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 rounded hover:bg-orange-200 transition-colors"
                                                >
                                                    <FileText className="w-4 h-4 text-orange-600" />
                                                </button>
                                            ) : (
                                                <span className="text-sm text-gray-500">
                                                    N/A
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="px-4 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm">
                                                    Edit
                                                </button>
                                                <button className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                            Showing 1 to {filteredData.length} of{" "}
                            {filteredData.length} entries
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                                Previous
                            </button>
                            <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded">
                                1
                            </button>
                            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Template Popup */}
            {showAddTemplatePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Add Template Details
                            </h2>
                            <button
                                onClick={() => setShowAddTemplatePopup(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <form className="space-y-4">
                                {/* Template For */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Template For{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        <option>--Select--</option>
                                        <option>Gmail</option>
                                        <option>Whatsapp</option>
                                    </select>
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Title{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="border border-gray-300 rounded">
                                        {/* Toolbar */}
                                        <div className="bg-gray-50 px-3 py-2 border-b border-gray-300 flex items-center gap-2 flex-wrap">
                                            <select className="text-xs border border-gray-300 rounded px-2 py-1">
                                                <option>Font</option>
                                            </select>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <span className="font-bold text-sm">
                                                    B
                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <span className="italic text-sm">
                                                    I
                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <span className="underline text-sm">
                                                    U
                                                </span>
                                            </button>
                                            <select className="text-xs border border-gray-300 rounded px-2 py-1">
                                                <option>Size</option>
                                            </select>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <span className="text-sm">
                                                    A
                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                ≡
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                ☰
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                🔗
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                🖼️
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                📹
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                &lt;/&gt;
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                ?
                                            </button>
                                        </div>
                                        {/* Text Area */}
                                        <textarea
                                            className="w-full px-3 py-2 min-h-48 focus:outline-none"
                                            placeholder="Enter description..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowAddTemplatePopup(false)
                                        }
                                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Viewer Popup */}
            {showPdfViewer && selectedPdf && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl mx-4 h-5/6">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {selectedPdf.title} - Attachment
                            </h2>
                            <button
                                onClick={() => setShowPdfViewer(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 h-full overflow-auto">
                            <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
                                <div className="text-center">
                                    <FileText className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                                    <p className="text-gray-700 font-medium text-lg">
                                        {selectedPdf.title}
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        PDF Document Preview
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Template attachment would display here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
