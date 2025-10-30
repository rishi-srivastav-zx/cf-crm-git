"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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

        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null; // ensures client-only render

    const statsCards = [
        {
            title: "Total Leads",
            value: "28",
            bg: "bg-gradient-to-br from-emerald-400 via-teal-400 to-teal-500",
            icon: UserPlus,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Today Visit",
            value: "12",
            bg: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
            icon: TrendingUp,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Today Follow Up",
            value: "0 / 110",
            bg: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
            icon: Phone,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Total Registration",
            value: "1",
            bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-red-400",
            icon: FileText,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Total Reject",
            value: "8",
            bg: "bg-gradient-to-br from-orange-500 via-red-400 to-red-500",
            icon: XCircle,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Total Course",
            value: "22",
            bg: "bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600",
            icon: BookOpen,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Total Registration Amount",
            value: "2500",
            bg: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
            icon: DollarSign,
            link: "/dashboard/manage-leads",
        },
        {
            title: "Counsellor On Leave",
            value: "0",
            bg: "bg-gradient-to-br from-teal-400 via-emerald-400 to-green-500",
            icon: Calendar,
            link: "/dashboard/manage-leads",
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
                <div className="w-full mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Analytics Dashboard
                            </h1>
                            <p className="text-sm text-gray-600">
                                Welcome back
                            </p>
                        </div>
                        <div className="bg-white rounded-lg w-full sm:w-auto">
                            <p className="text-black font-mono text-xs sm:text-sm font-bold tracking-wider break-words">
                                {`${currentTime
                                    .getDate()
                                    .toString()
                                    .padStart(
                                        2,
                                        "0"
                                    )}-${currentTime.toLocaleString("en-US", {
                                    month: "short",
                                })}-${currentTime.getFullYear()} ${currentTime.toLocaleString(
                                    "en-US",
                                    {
                                        hour: "numeric",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: true,
                                    }
                                )}`}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
                <div className="w-full mx-auto space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {statsCards.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <Link
                                    key={index}
                                    href={
                                        card.link || "/dashboard/manage-leads"
                                    } // 👈 dynamic link or fallback
                                    className={`${card.bg} text-white p-5 rounded-2xl shadow-lg relative overflow-hidden transform hover:scale-105 transition-all duration-200 block`}
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
                                </Link>
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
                </div>
            </div>
        </main>
    );
}
