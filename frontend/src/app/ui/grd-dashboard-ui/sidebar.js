"use client";
import { useState, useEffect, useActionState } from "react";
import { logout } from "@/app/lib/actions";
import ShowBusy from "../components/busy";
import Link from "next/link";

export default function Sidebar() {
    const [busy, setBusy] = useState(false);
    const [errorMessage, formAction, isPending] = useActionState(
        logout,
        undefined
    );

    useEffect(() => {
        setBusy(isPending);
    }, [isPending]);

    return (
        <>
            <div className="bg-gray-50 dark:bg-black ">
                <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-950 shadow-2xl flex flex-col z-50">
                    {/* Logo Section */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white leading-none">
                                collage
                            </span>
                            <span className="text-yellow-500 text-2xl font-bold leading-none">
                                Forum
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <Link
                            href="/dashboard"
                            prefetch={false}
                            className="flex items-center px-6 py-3.5 text-white hover:bg-white/10 hover:pl-8 transition-all duration-300 group"
                        >
                            <i className="fas fa-home w-5 mr-3 text-base"></i>
                            <span className="font-medium text-[15px]">
                                Home
                            </span>
                        </Link>

                        <Link
                            href="/grd-dashboard/manage-course"
                            prefetch={false}
                            className="flex items-center px-6 py-3.5 text-white hover:bg-white/10 hover:pl-8 transition-all duration-300 group"
                        >
                            <i className="fas fa-university w-5 mr-3 text-base"></i>
                            <span className="font-medium text-[15px]">
                                Manage Course
                            </span>
                        </Link>

                        <Link
                            href="/grd-dashboard/manage-templets"
                            prefetch={false}
                            className="flex items-center px-6 py-3.5 text-white hover:bg-white/10 hover:pl-8 transition-all duration-300 group"
                        >
                            <i className="fa fa-users w-5 mr-3 text-base"></i>
                            <span className="font-medium text-[15px]">
                                Manage Templets
                            </span>
                        </Link>

                        <Link
                            href="/grd-dashboard/manage-leave"
                            prefetch={false}
                            className="flex items-center px-6 py-3.5 text-white hover:bg-white/10 hover:pl-8 transition-all duration-300 group"
                        >
                            <i className="fa fa-users w-5 mr-3 text-base"></i>
                            <span className="font-medium text-[15px]">
                                Manage Leave
                            </span>
                        </Link>

                        <div className="group">
                            <div className="flex items-center justify-between px-6 py-3.5 text-white hover:bg-white/10 hover:pl-8 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center">
                                    <i className="fas fa-cube w-5 mr-3 text-base"></i>
                                    <span className="font-medium text-[15px]">
                                        Interface
                                    </span>
                                </div>
                                <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>
                            </div>

                            <div className="hidden group-hover:block bg-black/20 py-2">
                                <Link
                                    href="/"
                                    prefetch={false}
                                    className="flex items-center px-6 pl-12 py-3 text-white/90 hover:bg-white/10 hover:pl-14 hover:text-white transition-all duration-300"
                                >
                                    <i className="fas fa-tachometer-alt w-4 mr-3 text-sm"></i>
                                    <span className="text-sm">
                                        college-Forum-page
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Bottom Section */}
                    <div className="p-4 border-t border-white/10 flex items-center gap-3">
                        <button
                            onClick={() => darkMode()}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <i className="fas fa-moon"></i>
                        </button>

                        <button className="relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5">
                            <i className="fas fa-bell"></i>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                1
                            </span>
                        </button>

                        <div className="ml-auto relative group/profile">
                            <div className="relative cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300 hover:scale-105"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-purple-700 rounded-full"></div>
                            </div>

                            <div className="absolute bottom-full left-0 mb-4 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 transform translate-y-2 group-hover/profile:translate-y-0 z-50">
                                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45"></div>

                                <div className="p-4 bg-gray-50 rounded-t-xl">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face&auto=format"
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2">
                                                <h3 className="font-semibold text-gray-900 text-sm">
                                                    Pavel Johnson
                                                </h3>
                                                <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                                                    Admin
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                exe@example.com
                                            </p>
                                            <div className="flex items-center space-x-1 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-gray-500">
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <Link
                                        href="/edit-profile"
                                        className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <div className="font-medium text-sm text-gray-900">
                                                My Profile
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                View and edit profile
                                            </div>
                                        </div>
                                    </Link>

                                    <Link
                                        href="/settings-page"
                                        className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <div className="font-medium text-sm text-gray-900">
                                                Settings
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Preferences and privacy
                                            </div>
                                        </div>
                                    </Link>

                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <div className="font-medium text-sm text-gray-900">
                                                Privacy Settings
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Manage data and privacy
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                <div className="p-2">
                                    <form action={formAction}>
                                        <button
                                            type="submit"
                                            className="w-full flex items-center space-x-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                ></path>
                                            </svg>
                                            <div className="text-left">
                                                <div className="font-medium text-sm">
                                                    Sign Out
                                                </div>
                                                <div className="text-xs opacity-75">
                                                    Log out of your account
                                                </div>
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <ShowBusy busy={busy} msg={"Signing Out.."}></ShowBusy>
        </>
    );
}
