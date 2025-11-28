"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function LeaveManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [showApplyLeavePopup, setShowApplyLeavePopup] = useState(false);
    const [leaveType, setLeaveType] = useState("");
    const [leaveStatus, setLeaveStatus] = useState("");
    const [leaveDate, setLeaveDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [leaveReason, setLeaveReason] = useState("");

    const [leaveData, setLeaveData] = useState([
        {
            id: 1,
            memberName: "GRD COLLEGE ADMIN",
            leaveType: "HL",
            reason: "Emergency!!!!!!!!!",
            applyDate: "10-Oct-2024",
            leaveDate: "11-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 2,
            memberName: "SANJANA SHARMA",
            leaveType: "CL",
            reason: "Going To Home!",
            applyDate: "10-Oct-2024",
            leaveDate: "11-Oct-2024",
            status: "Approved",
        },
        {
            id: 3,
            memberName: "SANJANA SHARMA",
            leaveType: "HL",
            reason: "Going To Annual Function",
            applyDate: "10-Oct-2024",
            leaveDate: "11-Oct-2024 To 12-Oct-2024",
            status: "Approved",
        },
        {
            id: 4,
            memberName: "SANJANA SHARMA",
            leaveType: "NPL",
            reason: "Going Delhi!!!!",
            applyDate: "10-Oct-2024",
            leaveDate: "22-Oct-2024 To 26-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 5,
            memberName: "SANJANA SHARMA",
            leaveType: "SL",
            reason: "Going to market",
            applyDate: "13-Oct-2024",
            leaveDate: "13-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 6,
            memberName: "SANJANA SHARMA",
            leaveType: "NPL",
            reason: "test",
            applyDate: "14-Oct-2024",
            leaveDate: "15-Oct-2024 To 17-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 7,
            memberName: "SANJANA SHARMA",
            leaveType: "CL",
            reason: "shoping",
            applyDate: "14-Oct-2024",
            leaveDate: "24-Oct-2024 To 25-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 8,
            memberName: "SANJANA SHARMA",
            leaveType: "HL",
            reason: "travel to delhi",
            applyDate: "14-Oct-2024",
            leaveDate: "15-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 9,
            memberName: "SANJANA SHARMA",
            leaveType: "SL",
            reason: "emergency",
            applyDate: "14-Oct-2024",
            leaveDate: "15-Oct-2024",
            status: "Unapproved",
        },
        {
            id: 10,
            memberName: "SANJANA SHARMA",
            leaveType: "HL",
            reason: "tumhari",
            applyDate: "28-Oct-2024",
            leaveDate: "28-Oct-2024",
            status: "Unapproved",
        },
    ]);

    const filteredData = leaveData.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const todayAbsent = leaveData.filter((leave) => {
        const today = new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        return leave.applyDate === today;
    }).length;

    const tomorrowAbsent = 0;

    const handleApplyLeave = (e) => {
        e.preventDefault();

        const newLeave = {
            id: leaveData.length + 1,
            memberName: "CURRENT USER",
            leaveType: leaveType,
            reason: leaveReason,
            applyDate: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            leaveDate:
                fromDate === toDate ? fromDate : `${fromDate} To ${toDate}`,
            status: "Unapproved",
        };

        setLeaveData([newLeave, ...leaveData]);
        setShowApplyLeavePopup(false);

        // Reset form
        setLeaveType("");
        setFromDate("");
        setToDate("");
        setLeaveReason("");
    };

    const handleApprove = (id) => {
        setLeaveData(
            leaveData.map((leave) =>
                leave.id === id ? { ...leave, status: "Approved" } : leave
            )
        );
    };

    const handleUnapprove = (id) => {
        setLeaveData(
            leaveData.map((leave) =>
                leave.id === id ? { ...leave, status: "Unapproved" } : leave
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 ml-64">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    MANAGE LEAVE LISTING
                </h1>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Manage Leave Listing
                        </h2>
                        <button
                            onClick={() => setShowApplyLeavePopup(true)}
                            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                        >
                            Apply Leave
                        </button>
                    </div>
{/* 
                 Filters
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <select
                            value={leaveType}
                            onChange={(e) => setLeaveType(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">--Select Leave Type--</option>
                            <option value="HL">Half Leave (HL)</option>
                            <option value="CL">Casual Leave (CL)</option>
                            <option value="SL">Sick Leave (SL)</option>
                            <option value="NPL">Non-Paid Leave (NPL)</option>
                        </select>

                        <select
                            value={leaveStatus}
                            onChange={(e) => setLeaveStatus(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">--Select Leave Status--</option>
                            <option value="Approved">Approved</option>
                            <option value="Unapproved">Unapproved</option>
                        </select>

                        <select
                            value={leaveDate}
                            onChange={(e) => setLeaveDate(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">--Select Leave Date--</option>
                            <option value="today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                        </select>

                    </div>    */}

                    {/* Search and Entries */}
                    <div className="flex items-center justify-between mb-4">
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

                        <div className="flex items-center gap-2">
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
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Member Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Leave Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Reason
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Leave Apply Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Leave Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Leave Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredData.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {item.memberName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-indigo-600 font-medium">
                                            {item.leaveType}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.reason}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.applyDate}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.leaveDate}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded text-xs font-medium ${
                                                    item.status === "Approved"
                                                        ? "bg-blue-500 text-white"
                                                        : "bg-cyan-500 text-white"
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() =>
                                                        handleApprove(item.id)
                                                    }
                                                    className="px-4 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleUnapprove(item.id)
                                                    }
                                                    className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                                                >
                                                    Un-Approve
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

            {/* Apply Leave Popup */}
            {showApplyLeavePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-4">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Apply Leave
                            </h2>
                            <button
                                onClick={() => setShowApplyLeavePopup(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <form
                                onSubmit={handleApplyLeave}
                                className="space-y-4"
                            >
                                {/* Leave Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Leave Type{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={leaveType}
                                        onChange={(e) =>
                                            setLeaveType(e.target.value)
                                        }
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">
                                            --Select Leave Type--
                                        </option>
                                        <option value="HL">
                                            Half Leave (HL)
                                        </option>
                                        <option value="CL">
                                            Casual Leave (CL)
                                        </option>
                                        <option value="SL">
                                            Sick Leave (SL)
                                        </option>
                                        <option value="NPL">
                                            Non-Paid Leave (NPL)
                                        </option>
                                    </select>
                                </div>

                                {/* Date Range */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            From Date{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            value={fromDate}
                                            onChange={(e) =>
                                                setFromDate(e.target.value)
                                            }
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            To Date{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            value={toDate}
                                            onChange={(e) =>
                                                setToDate(e.target.value)
                                            }
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>

                                {/* Leave Reason */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mention Leave Reason{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={leaveReason}
                                        onChange={(e) =>
                                            setLeaveReason(e.target.value)
                                        }
                                        required
                                        rows={4}
                                        placeholder="Provide a brief reason for your leave"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    ></textarea>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowApplyLeavePopup(false)
                                        }
                                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
