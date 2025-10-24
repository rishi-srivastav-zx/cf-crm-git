"use client";
import "../dashboard/dash.css";
import { useState, useEffect } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        darkMode: false,
        notifications: true,
        language: "en",
        profileVisibility: "public",
    });
    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Settings:", settings);
        // save settings to API or localStorage
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 light:bg-gray p-4 transition-colors">
            <div className="w-full max-w-lg bg-white light:bg-gray-900 shadow-xl rounded-2xl p-6 space-y-6 transition-colors">
                
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-black">
                        Settings
                    </h2>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-3 py-1 text-sm rounded-md bg-gray-400 hover:bg-gray-300 light:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>

               
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-black">
                            Notifications
                        </span>
                        <button
                            type="button"
                            onClick={() => handleToggle("notifications")}
                            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                                settings.notifications
                                    ? "bg-blue-600"
                                    : "bg-gray-300"
                            }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                                    settings.notifications
                                        ? "translate-x-6"
                                        : "translate-x-0"
                                }`}
                            />
                        </button>
                    </div>

                    
                    <div>
                        <label
                            htmlFor="language"
                            className="block text-sm font-medium text-gray-700 dark:text-black"
                        >
                            Language
                        </label>
                        <select
                            id="language"
                            name="language"
                            value={settings.language}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white light:bg-gray-800 text-gray-900 dark:text-black px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>

                    
                    <div>
                        <label
                            htmlFor="profileVisibility"
                            className="block text-sm font-medium text-gray-700 dark:text-black"
                        >
                            Profile Visibility
                        </label>
                        <select
                            id="profileVisibility"
                            name="profileVisibility"
                            value={settings.profileVisibility}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white light:bg-gray-800 text-gray-900 dark:text-black px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="public">Public</option>
                            <option value="friends">Friends Only</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 shadow-md"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </div>
    );
}
