'use client';
import React, { useState } from "react";
import {
    Trash2,
    Edit3,
    Calendar,
    User,
    Save,
    X,
    Image,
    Upload,
} from "lucide-react";

export default function NewsManagementPage() {
    const [newsList, setNewsList] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        content: "",
        image: null,
        imagePreview: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData((prev) => ({
                    ...prev,
                    image: file,
                    imagePreview: e.target.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setFormData((prev) => ({
            ...prev,
            image: null,
            imagePreview: "",
        }));
    };

    const handleSubmit = () => {
        if (
            formData.title.trim() &&
            formData.summary.trim() &&
            formData.content.trim()
        ) {
            if (editingId) {
                // Update existing article
                setNewsList((prev) =>
                    prev.map((item) =>
                        item.id === editingId
                            ? {
                                  ...item,
                                  ...formData,
                                  updatedAt: new Date().toLocaleDateString(),
                              }
                            : item
                    )
                );
                setEditingId(null);
            } else {
                // Create new article
                const newArticle = {
                    id: Date.now(),
                    ...formData,
                    createdAt: new Date().toLocaleDateString(),
                    author: "Admin",
                };
                setNewsList((prev) => [newArticle, ...prev]);
            }
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            summary: "",
            content: "",
            image: null,
            imagePreview: "",
        });
    };

    const handleEdit = (article) => {
        setFormData({
            title: article.title,
            summary: article.summary,
            content: article.content,
            image: article.image,
            imagePreview: article.imagePreview,
        });
        setEditingId(article.id);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setNewsList((prev) => prev.filter((item) => item.id !== id));
        if (editingId === id) {
            handleCancelEdit();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6  ml-64">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        News Management
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Create and manage your news articles
                    </p>
                </div>

                {/* Add/Edit News Form */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                <Edit3 className="w-4 h-4 text-white" />
                            </div>
                            {editingId ? "Edit Article" : "Add News Article"}
                        </h2>
                        {editingId && (
                            <button
                                onClick={handleCancelEdit}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                Cancel
                            </button>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Image Upload Section */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Image className="w-4 h-4" />
                                Featured Image
                            </label>

                            {formData.imagePreview ? (
                                <div className="relative">
                                    <div className="w-full h-48 sm:h-64 bg-gray-100 rounded-xl overflow-hidden">
                                        <img
                                            src={formData.imagePreview}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <label className="w-full h-48 sm:h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200">
                                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                    <p className="text-gray-600 font-medium">
                                        Click to upload image
                                    </p>
                                    <p className="text-gray-400 text-sm mt-1">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Article Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter compelling news title..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Summary
                                </label>
                                <input
                                    type="text"
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleInputChange}
                                    placeholder="Brief summary of the article..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Article Content
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                rows="6"
                                placeholder="Write your full article content here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            {editingId ? (
                                <Save className="w-4 h-4" />
                            ) : (
                                <Edit3 className="w-4 h-4" />
                            )}
                            {editingId ? "Update Article" : "Publish Article"}
                        </button>
                    </div>
                </div>

                {/* News List */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Published Articles ({newsList.length})
                    </h2>

                    {newsList.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Edit3 className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 text-lg">
                                No articles published yet
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Create your first article using the form above
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {newsList.map((article) => (
                                <div
                                    key={article.id}
                                    className={`group bg-white/60 backdrop-blur-sm rounded-xl border-2 p-6 hover:shadow-lg hover:bg-white/80 transition-all duration-200 ${
                                        editingId === article.id
                                            ? "border-blue-400 ring-2 ring-blue-100"
                                            : "border-gray-200"
                                    }`}
                                >
                                    {/* Article Image */}
                                    {article.imagePreview && (
                                        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={article.imagePreview}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-4">
                                            {article.title}
                                        </h3>
                                        <div className="flex gap-2 flex-shrink-0">
                                            <button
                                                onClick={() =>
                                                    handleEdit(article)
                                                }
                                                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                                title="Edit article"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(article.id)
                                                }
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                                                title="Delete article"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {article.summary}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {article.updatedAt ||
                                                        article.createdAt}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                                            Read more
                                        </button>
                                    </div>

                                    {article.updatedAt && (
                                        <div className="mt-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full inline-block">
                                            Updated on {article.updatedAt}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
