'use client';
import '../dashboard/dash.css';
import { useState } from "react";

export default function ProfileEditPage() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john@example.com",
        bio: "Software engineer passionate about building apps.",
        avatar: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "avatar" && files.length > 0) {
            setProfile((prev) => ({
                ...prev,
                avatar: URL.createObjectURL(files[0]),
            }));
        } else {
            setProfile((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleRemoveAvatar = () => {
        setProfile((prev) => ({ ...prev, avatar: null }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", profile);
        // here you would send to API
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 space-y-6">
               
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Edit Profile
                    </h2>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        Back
                    </button>
                </div>

               
                <form onSubmit={handleSubmit} className="space-y-4">
                   
                    <div className="flex flex-col items-center space-y-3">
                        {profile.avatar ? (
                            <>
                                <img
                                    src={profile.avatar}
                                    alt="Profile Preview"
                                    className="w-24 h-24 rounded-full object-cover shadow"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveAvatar}
                                    className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
                                >
                                    Remove
                                </button>
                            </>
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                                No Image
                            </div>
                        )}
                        <input
                            id="avatar"
                            name="avatar"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="text-sm text-gray-600"
                            style={{marginLeft: "125px"}}
                        />
                    </div>

                   
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                   
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    
                    <div>
                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 shadow-md"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
