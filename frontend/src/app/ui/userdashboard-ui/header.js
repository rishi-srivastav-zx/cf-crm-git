"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { name: "Home", href: "/", hasDropdown: false },
        {
            name: "Colleges",
            hasDropdown: true,
            dropdownItems: [
                { name: "Web Development", href: "#" },
                { name: "Mobile Apps", href: "#" },
                { name: "UI/UX Design", href: "#" },
            ],
        },
        {
            name: "Courses",
            hasDropdown: true,
            dropdownItems: [
                {
                    name: "Agriculture Colleges in Dehradun",
                    href: "/agriculture-colleges",
                },
                { name: "Mobile Apps", href: "#" },
                { name: "UI/UX Design", href: "#" },
            ],
        },
        {
            name: "Top Universities",
            hasDropdown: true,
            dropdownItems: [
                {
                    name: "Graphic Era (Deemed to be University)",
                    href: "/graphic-era-page",
                },
            ],
        },
        { name: "News", href: "/news", hasDropdown: false },
        { name: "Exams", href: "/exams", hasDropdown: false },
        { name: "Blogs", href: "/blogs", hasDropdown: false },
        { name: "Login", href: "/login-page", hasDropdown: false },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = (index) =>
        setActiveDropdown(activeDropdown === index ? null : index);

    return (
        <div className="dark:bg-gray-800 bg-gray-50">
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border-b-2 border-orange-500 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                                    College
                                </span>
                            </h1>
                            <p className="text-orange-500 text-sm -mt-1 ml-1 font-medium">
                                Forum
                            </p>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <div key={item.name} className="relative">
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    toggleDropdown(index)
                                                }
                                                className="group flex items-center px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                                            >
                                                {item.name}
                                                <svg
                                                    className={`w-4 h-4 ml-1 transition-transform ${
                                                        activeDropdown === index
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {activeDropdown === index && (
                                                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                                                    {item.dropdownItems?.map(
                                                        (drop) => (
                                                            <Link
                                                                key={drop.name}
                                                                href={drop.href}
                                                                className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700"
                                                            >
                                                                {drop.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Hamburger */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-slate-300 hover:text-white focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden transition-all duration-300 ${
                            isMobileMenuOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        } overflow-hidden`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/50 rounded-lg mt-2 mb-4">
                            {navItems.map((item, index) => (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    toggleDropdown(
                                                        `mobile-${index}`
                                                    )
                                                }
                                                className="group w-full flex items-center px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                                            >
                                                <span className="flex-1 text-left">
                                                    {item.name}
                                                </span>
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${
                                                        activeDropdown ===
                                                        `mobile-${index}`
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {activeDropdown ===
                                                `mobile-${index}` && (
                                                <div className="ml-8 mt-2 space-y-1">
                                                    {item.dropdownItems?.map(
                                                        (drop) => (
                                                            <Link
                                                                key={drop.name}
                                                                href={drop.href}
                                                                className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                                                            >
                                                                {drop.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block w-full px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
