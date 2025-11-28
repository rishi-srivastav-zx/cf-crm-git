"use client";
import React, { useState } from "react";
import { Search, FileText, AlertCircle, X } from "lucide-react";

export default function FeeManagementTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [showDiscountPopup, setShowDiscountPopup] = useState(false);
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    const [selectedDiscount, setSelectedDiscount] = useState(null);

    const feeData = [
        {
            id: 1,
            session: "2023-2024",
            type: "All India Fee",
            firstYearFee: 150000,
            registrationFee: 2500,
            totalCourseFee: 950000,
            feeAttachment: true,
            discount: {
                name: "INDIRA GANDHI DISCOUNT",
                amount: 10000,
                on: "Registration Fee",
                gender: "Both (Male And Female)",
                eligibility: "DEMO",
            },
        },
        {
            id: 2,
            session: "2023-2024",
            type: "State Fee",
            firstYearFee: 200000,
            registrationFee: 6500,
            totalCourseFee: 1000000,
            feeAttachment: true,
            discount: {
                name: "MERIT SCHOLARSHIP",
                amount: 15000,
                on: "First Year Fee",
                gender: "Both (Male And Female)",
                eligibility: "Top 10% Students",
            },
        },
    ];

    const filteredData = feeData.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleDiscountClick = (discount) => {
        setSelectedDiscount(discount);
        setShowDiscountPopup(true);
    };

    const handlePdfClick = () => {
        setShowPdfViewer(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
                {/* Header Controls */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Show</span>
                            <select
                                value={entriesPerPage}
                                onChange={(e) =>
                                    setEntriesPerPage(Number(e.target.value))
                                }
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Search:</span>
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Session
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    First Year Fee
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Registration Fee
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Total Course Fee
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Fee Attachment
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Discount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {item.session}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {item.type}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.firstYearFee.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.registrationFee.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.totalCourseFee.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.feeAttachment && (
                                            <button
                                                onClick={handlePdfClick}
                                                className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 rounded hover:bg-orange-200 transition-colors"
                                            >
                                                <FileText className="w-4 h-4 text-orange-600" />
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.discount && (
                                            <button
                                                onClick={() =>
                                                    handleDiscountClick(
                                                        item.discount
                                                    )
                                                }
                                                className="inline-flex items-center justify-center w-8 h-8 bg-pink-100 rounded hover:bg-pink-200 transition-colors"
                                            >
                                                <AlertCircle className="w-4 h-4 text-pink-600" />
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex gap-2">
                                            <button className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                                Edit
                                            </button>
                                            <button className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
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
                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Showing 1 to {filteredData.length} of{" "}
                        {filteredData.length} entries
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            Previous
                        </button>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
                            1
                        </button>
                        <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Discount Details Popup */}
            {showDiscountPopup && selectedDiscount && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Discount Details
                            </h2>
                            <button
                                onClick={() => setShowDiscountPopup(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <table className="w-full">
                                <thead className="bg-gray-600">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                                            Discount Name
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                                            Discount Amount
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                                            Discount On
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                                            Gender
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                                            Eligibility
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {selectedDiscount.name}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {selectedDiscount.amount}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {selectedDiscount.on}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {selectedDiscount.gender}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {selectedDiscount.eligibility}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Viewer Popup */}
            {showPdfViewer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl mx-4 h-5/6">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Fee Attachment
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
                                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600">
                                        PDF Document Preview
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Fee structure document would display
                                        here
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
