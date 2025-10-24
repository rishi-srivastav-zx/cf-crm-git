"use client";
import { useState, useEffect, useActionState } from "react";
import { logout } from "@/app/lib/actions";
import ShowBusy from "../components/busy";
import Link from "next/link";

export default function Header() {
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
            <div className="bg-gray-50 bg-white dark:bg-black">
                <nav className="navbar-gradient">
                    <div className="nav-container">
                        <div className="nav-left">
                            <div className="logo-container flex flex-col">
                                <span className="brand-name leading-none">
                                    collage
                                </span>
                                <span className="text-yellow-500 leading-none">
                                    Forum
                                </span>
                            </div>
                        </div>

                        <div className="nav-center">
                            <Link
                                href="/dashboard"
                               
                                className="nav-item"
                            >
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </Link>

                            <li href="#" className="nav-item">
                                <i className="fas fa-cube"></i>
                                <span>Interface</span>
                                <i className="fas fa-chevron-down chevron-icon"></i>

                                <div className="dropdown-menu">
                                    <Link
                                        href="/"
                                        prefetch={false}
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-tachometer-alt"></i>
                                        college-Forum-page
                                    </Link>
                                    <a
                                        href="#components"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-puzzle-piece"></i>
                                        Components
                                    </a>
                                    <a href="#forms" className="dropdown-item">
                                        <i className="fas fa-wpforms"></i>
                                        Forms
                                    </a>
                                    <Link
                                        prefetch={false}
                                        href="/dashboard/tables"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-table"></i>
                                        Tables
                                    </Link>
                                    <a href="#charts" className="dropdown-item">
                                        <i className="fas fa-chart-bar"></i>
                                        Charts
                                    </a>
                                </div>
                            </li>

                            <li href="#" className="nav-item">
                                <i className="fas fa-edit"></i>
                                <span>Add</span>
                                <i className="fas fa-chevron-down chevron-icon"></i>

                                <div className="dropdown-menu">
                                    <Link
                                        href="/dashboard/add-colleges"
                                        prefetch={false}
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-tachometer-alt"></i>
                                        Add colleges
                                    </Link>
                                    <Link
                                        href="/dashboard/add-news"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-puzzle-piece"></i>
                                        Add News
                                    </Link>
                                    <Link
                                        href="/dashboard/add-blogs"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-wpforms"></i>
                                        Add Blogs
                                    </Link>
                                    <Link
                                        prefetch={false}
                                        href="#"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-table"></i>
                                        Add Exam News
                                    </Link>
                                    <Link
                                        href="#charts"
                                        className="dropdown-item"
                                    >
                                        <i className="fas fa-chart-bar"></i>
                                        Add Courses
                                    </Link>
                                </div>
                            </li>

                            <a href="#" className="nav-item">
                                <i className="fas fa-question-circle"></i>
                                <span>Help</span>
                                <i className="fas fa-chevron-down chevron-icon"></i>
                            </a>
                        </div>

                        <div className="nav-right">
                            <button
                                onClick={() => darkMode()}
                                className="icon-button"
                            >
                                <i className="fas fa-moon"></i>
                            </button>

                            <button className="icon-button">
                                <i className="fas fa-bell"></i>
                                <span className="notification-badge">1</span>
                            </button>

                            <div className="flex justify-center items-center min-h-screen">
                                <div className="profile-container inline-block">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
                                            alt="Profile"
                                            className="profile-avatar"
                                        />
                                        <div className="status-indicator"></div>
                                    </div>

                                    <div className="profile-dropdown">
                                        <div className="dropdown-arrow"></div>

                                        <div className="profile-info">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face&auto=format"
                                                    alt="Profile"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2">
                                                        <h3 className="font-semibold text-gray-900">
                                                            Pavel Johnson
                                                        </h3>
                                                        <span className="badge">
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

                                        <div className="">
                                            <Link
                                                href="/edit-profile"
                                                className="dropdown-item"
                                            >
                                                <svg
                                                    className="w-5 h-5 mr-3 text-gray-500"
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
                                                    <div className="font-medium">
                                                        My Profile
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        View and edit profile
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link
                                                href="/settings-page"
                                                className="dropdown-item"
                                            >
                                                <svg
                                                    className="w-5 h-5 mr-3 text-gray-500"
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
                                                    <div className="font-medium">
                                                        Settings
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Preferences and privacy
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="dropdown-separator"></div>

                                        <div className="">
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <svg
                                                    className="w-5 h-5 mr-3 text-gray-500"
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
                                                    <div className="font-medium">
                                                        Privacy Settings
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Manage data and privacy
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="dropdown-separator"></div>

                                        <div className="">
                                            <form action={formAction}>
                                                <button
                                                    type="submit"
                                                    className="dropdown-item danger sign-out"
                                                >
                                                    <svg
                                                        className="w-5 h-5 mr-3"
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
                                                    <div>
                                                        <div className="font-medium">
                                                            Sign Out
                                                        </div>
                                                        <div className="text-xs opacity-75">
                                                            Log out of your
                                                            account
                                                        </div>
                                                    </div>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <ShowBusy busy={busy} msg={"Signing Out.."}></ShowBusy>
        </>
    );
}
