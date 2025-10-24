'use client';
import React, { useState, useEffect } from "react";
import {
    Users,
    Calendar,
    TrendingUp,
    Building2,
    Newspaper,
    FileText,
    UserPlus,
    Phone,
    XCircle,
    BookOpen,
    DollarSign,
} from "lucide-react";

export default function Dashboard() {
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const statsCards = [
        {
            title: "Total Leads",
            value: "28",
            bg: "bg-gradient-to-br from-emerald-400 via-teal-400 to-teal-500",
            icon: UserPlus,
        },
        {
            title: "Today Visit",
            value: "12",
            bg: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
            icon: TrendingUp,
        },
        {
            title: "Today Follow Up",
            value: "0 / 110",
            bg: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
            icon: Phone,
        },
        {
            title: "Total Registration",
            value: "1",
            bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-red-400",
            icon: FileText,
        },
        {
            title: "Total Reject",
            value: "8",
            bg: "bg-gradient-to-br from-orange-500 via-red-400 to-red-500",
            icon: XCircle,
        },
        {
            title: "Total Course",
            value: "22",
            bg: "bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600",
            icon: BookOpen,
        },
        {
            title: "Total Registration Amount",
            value: "2500",
            bg: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
            icon: DollarSign,
        },
        {
            title: "Counsellor On Leave",
            value: "0",
            bg: "bg-gradient-to-br from-teal-400 via-emerald-400 to-green-500",
            icon: Calendar,
        },
    ];

    const reportData = [
        { name: "Pending Applications", count: 145 },
        { name: "Approved Applications", count: 892 },
        { name: "Rejected Applications", count: 23 },
        { name: "Under Review", count: 67 },
    ];

    const counsellors = [
        {
            name: "Sarah Johnson",
            image: "https://i.pravatar.cc/150?img=1",
            mobile: "+91 98765 43210",
            totalLead: 234,
            totalAdmission: 189,
            totalReject: 45,
            performance: 81,
        },
        {
            name: "Michael Chen",
            image: "https://i.pravatar.cc/150?img=2",
            mobile: "+91 98765 43211",
            totalLead: 198,
            totalAdmission: 156,
            totalReject: 42,
            performance: 79,
        },
        {
            name: "Priya Sharma",
            image: "https://i.pravatar.cc/150?img=3",
            mobile: "+91 98765 43212",
            totalLead: 267,
            totalAdmission: 223,
            totalReject: 44,
            performance: 84,
        },
    ];

    return (
        <main className="bg-gray-50 min-h-screen ml-64 flex-1 pl-1">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Analytics Dashboard
                            </h1>
                            <p className="text-sm text-gray-600">
                                Welcome back, Pavel
                            </p>
                        </div>

                        {mounted && (
                            <div className="bg-white rounded-lg w-full sm:w-auto">
                                <p className="text-green-500 font-mono text-xs sm:text-sm font-bold tracking-wider break-words">
                                    {currentTime.toLocaleString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour12: true,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                    })}
                                </p>
                            </div>
                        )}

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors w-full sm:w-auto justify-center">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                ></path>
                            </svg>
                            <span>New college admin</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {statsCards.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${card.bg} text-white p-5 rounded-2xl shadow-lg relative overflow-hidden transform hover:scale-105 transition-all duration-200`}
                                >
                                    <div className="relative z-10">
                                        <h3 className="text-sm font-medium opacity-90 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-3xl font-bold">
                                            {card.value}
                                        </p>
                                    </div>
                                    <div className="absolute right-4 top-4 opacity-20">
                                        <IconComponent size={40} />
                                    </div>
                                    <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                                    <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Report Table and Progress Chart */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Report Table */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-4 sm:p-6 border-b border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">
                                    Report Table
                                </h3>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1">
                                        <option>Today</option>
                                        <option>Yesterday</option>
                                        <option>This Week</option>
                                        <option>This Month</option>
                                    </select>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors font-medium">
                                        Submit
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <div className="bg-blue-500 text-white px-4 sm:px-6 py-4 flex justify-between font-semibold min-w-max">
                                    <span>Name</span>
                                    <span>Count</span>
                                </div>
                                {reportData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`px-4 sm:px-6 py-4 flex justify-between items-center border-b border-gray-50 ${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        } hover:bg-blue-50 transition-colors min-w-max`}
                                    >
                                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                                            {item.name}
                                        </span>
                                        <span className="text-gray-600 bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                                            {item.count}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Chart */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-4 sm:p-6 border-b border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800">
                                    Progress Report Chart
                                </h3>
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border-2 border-dashed border-purple-200 flex items-center justify-center">
                                    <div className="text-purple-500 text-center p-4">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                            <Calendar className="w-8 h-8 opacity-60" />
                                        </div>
                                        <div className="font-bold text-lg mb-2">
                                            Progress Chart
                                        </div>
                                        <div className="text-sm opacity-70">
                                            No data available to display
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Counsellor Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {counsellors.map((counsellor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200 transform hover:-translate-y-1"
                            >
                                <div className="relative inline-block mb-4">
                                    <img
                                        src={counsellor.image}
                                        alt={counsellor.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-50 shadow-lg"
                                    />
                                </div>

                                <h4 className="font-bold text-gray-800 mb-4 text-base">
                                    {counsellor.name}
                                </h4>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">
                                            Mobile:
                                        </span>
                                        <span className="text-blue-600 font-bold text-xs sm:text-sm">
                                            {counsellor.mobile}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">
                                            Total Lead:
                                        </span>
                                        <span className="text-blue-600 font-bold">
                                            {counsellor.totalLead}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">
                                            Total Admission:
                                        </span>
                                        <span className="text-green-600 font-bold">
                                            {counsellor.totalAdmission}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">
                                            Total Reject:
                                        </span>
                                        <span className="text-red-600 font-bold">
                                            {counsellor.totalReject}
                                        </span>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-gray-100">
                                        <div className="bg-green-100 border border-green-300 rounded-lg px-3 py-2">
                                            <span className="text-green-700 font-bold text-sm">
                                                Performance:{" "}
                                                {counsellor.performance}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lead Follow Up Graph */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="p-4 sm:p-6 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-blue-600 mb-4">
                                Lead Follow Up Graph's
                            </h3>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1">
                                    <option>Today</option>
                                    <option>Yesterday</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors font-medium">
                                    Submit
                                </button>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6">
                            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border-2 border-dashed border-blue-200 flex items-center justify-center">
                                <div className="text-blue-500 text-center p-4">
                                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-40" />
                                    <div className="font-bold text-lg mb-2">
                                        Lead Follow Up Chart
                                    </div>
                                    <div className="text-sm opacity-70">
                                        No data available to display
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Total students
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 pt-4">
                                        75,782
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Active colleges
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 pt-4">
                                        782
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        News
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 pt-4">
                                        300
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Newspaper className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Blogs
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 pt-4">
                                        90
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6 text-pink-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity and Tasks */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 break-words">
                                            <strong>John Lewney</strong>{" "}
                                            commented on your "I'm not a witch."
                                            post.
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            5 minutes ago
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 break-words">
                                            It's <strong>Mallory Hume's</strong>{" "}
                                            birthday. Wish him well!
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            2 hours ago
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 break-words">
                                            <strong>Dunn Slane</strong> posted
                                            "Wait, what do you want?"
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            3 hours ago
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 break-words">
                                            <strong>Emmy Levet</strong> created
                                            a new project{" "}
                                            <em>Morning alarm clock</em>
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            5 hours ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Development Tasks
                                </h3>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {
                                        task: "Update user data model",
                                        date: "Dec 08, 2024",
                                        checked: true,
                                    },
                                    {
                                        task: "Verify the event flow",
                                        date: "Jan 10, 2024",
                                        checked: false,
                                    },
                                    {
                                        task: "Database backup and maintenance",
                                        date: "Jan 10, 2024",
                                        checked: false,
                                    },
                                    {
                                        task: "Identify fix implementation team",
                                        date: "Sep 01, 2024",
                                        checked: false,
                                    },
                                    {
                                        task: "Define users and workflow",
                                        date: "Jan 01, 2024",
                                        checked: false,
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg gap-2"
                                    >
                                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                readOnly
                                                className="w-4 h-4 text-blue-600 rounded flex-shrink-0"
                                            />
                                            <span
                                                className={`text-sm text-gray-700 break-words ${
                                                    item.checked
                                                        ? "line-through"
                                                        : ""
                                                }`}
                                            >
                                                {item.task}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500 whitespace-nowrap">
                                            {item.date}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance, Storage, Earnings */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Page Performance
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        label: "Load Time",
                                        value: "1.2s",
                                        percent: 85,
                                        color: "bg-green-600",
                                    },
                                    {
                                        label: "First Paint",
                                        value: "0.8s",
                                        percent: 90,
                                        color: "bg-blue-600",
                                    },
                                    {
                                        label: "Interactive",
                                        value: "1.8s",
                                        percent: 75,
                                        color: "bg-yellow-600",
                                    },
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600">
                                                {item.label}
                                            </span>
                                            <span className="font-medium">
                                                {item.value}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${item.color} h-2 rounded-full`}
                                                style={{
                                                    width: `${item.percent}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Storage Usage
                            </h3>
                            <div className="text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <svg
                                        className="w-32 h-32 transform -rotate-90"
                                        viewBox="0 0 42 42"
                                    >
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="15.915"
                                            fill="transparent"
                                            stroke="#e5e7eb"
                                            strokeWidth="3"
                                        ></circle>
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="15.915"
                                            fill="transparent"
                                            stroke="#3b82f6"
                                            strokeWidth="3"
                                            strokeDasharray="65 35"
                                        ></circle>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-xl font-bold text-gray-900">
                                            65%
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Used
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    4854.65 MB of 8 GB
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Today's Earnings
                            </h3>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900 mb-2">
                                    $1,245.80
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    +5.2% from yesterday
                                </p>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                                        style={{ width: "68%" }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    68% of daily goal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
