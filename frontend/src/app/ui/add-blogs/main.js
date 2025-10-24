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
    Tag,
    BookOpen,
    Eye,
    Heart,
} from "lucide-react";

export default function BlogManagementPage() {
    const [blogList, setBlogList] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        tags: "",
        author: "",
        readTime: "",
        image: null,
        imagePreview: "",
        status: "published",
    });

    const categories = [
        "Technology",
        "Travel",
        "Food",
        "Lifestyle",
        "Business",
        "Health",
        "Education",
        "Entertainment",
    ];

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
            formData.excerpt.trim() &&
            formData.content.trim()
        ) {
            const tagsArray = formData.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag);

            if (editingId) {
                // Update existing blog
                setBlogList((prev) =>
                    prev.map((item) =>
                        item.id === editingId
                            ? {
                                  ...item,
                                  ...formData,
                                  tags: tagsArray,
                                  updatedAt: new Date().toLocaleDateString(),
                                  views: item.views,
                                  likes: item.likes,
                              }
                            : item
                    )
                );
                setEditingId(null);
            } else {
                // Create new blog
                const newBlog = {
                    id: Date.now(),
                    ...formData,
                    tags: tagsArray,
                    createdAt: new Date().toLocaleDateString(),
                    author: formData.author || "Anonymous",
                    views: Math.floor(Math.random() * 1000),
                    likes: Math.floor(Math.random() * 100),
                };
                setBlogList((prev) => [newBlog, ...prev]);
            }
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            excerpt: "",
            content: "",
            category: "",
            tags: "",
            author: "",
            readTime: "",
            image: null,
            imagePreview: "",
            status: "published",
        });
    };

    const handleEdit = (blog) => {
        setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            category: blog.category,
            tags: blog.tags.join(", "),
            author: blog.author,
            readTime: blog.readTime,
            image: blog.image,
            imagePreview: blog.imagePreview,
            status: blog.status,
        });
        setEditingId(blog.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setBlogList((prev) => prev.filter((item) => item.id !== id));
        if (editingId === id) {
            handleCancelEdit();
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "published":
                return "bg-green-100 text-green-700";
            case "draft":
                return "bg-yellow-100 text-yellow-700";
            case "archived":
                return "bg-gray-100 text-gray-700";
            default:
                return "bg-blue-100 text-blue-700";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 p-4 sm:p-6  ml-64">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Blog Management
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Create, edit and manage your blog posts
                    </p>
                </div>

                {/* Add/Edit Blog Form */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            {editingId
                                ? "Edit Blog Post"
                                : "Create New Blog Post"}
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
                                Cover Image
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
                                <label className="w-full h-48 sm:h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-200">
                                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                    <p className="text-gray-600 font-medium">
                                        Click to upload cover image
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

                        {/* Blog Title and Basic Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Blog Title *
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter an engaging blog title..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Author Name
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleInputChange}
                                    placeholder="Your name..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        {/* Category, Tags, and Read Time */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                >
                                    <option value="">Select category...</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Read Time (minutes)
                                </label>
                                <input
                                    type="number"
                                    name="readTime"
                                    value={formData.readTime}
                                    onChange={handleInputChange}
                                    placeholder="5"
                                    min="1"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                >
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                Tags (comma-separated)
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleInputChange}
                                placeholder="react, javascript, web development, tutorial"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            />
                        </div>

                        {/* Blog Excerpt */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Blog Excerpt *
                            </label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Write a compelling excerpt that will appear in blog previews..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Blog Content *
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                rows="8"
                                placeholder="Write your full blog content here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            {editingId ? (
                                <Save className="w-4 h-4" />
                            ) : (
                                <BookOpen className="w-4 h-4" />
                            )}
                            {editingId
                                ? "Update Blog Post"
                                : "Publish Blog Post"}
                        </button>
                    </div>
                </div>

                {/* Blog List */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Published Blogs ({blogList.length})
                    </h2>

                    {blogList.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 text-lg">
                                No blog posts yet
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Create your first blog post using the form above
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {blogList.map((blog) => (
                                <div
                                    key={blog.id}
                                    className={`group bg-white/60 backdrop-blur-sm rounded-xl border-2 p-6 hover:shadow-lg hover:bg-white/80 transition-all duration-200 ${
                                        editingId === blog.id
                                            ? "border-purple-400 ring-2 ring-purple-100"
                                            : "border-gray-200"
                                    }`}
                                >
                                    {/* Blog Image */}
                                    {blog.imagePreview && (
                                        <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={blog.imagePreview}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                    )}

                                    {/* Status and Category */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                                blog.status
                                            )}`}
                                        >
                                            {blog.status
                                                .charAt(0)
                                                .toUpperCase() +
                                                blog.status.slice(1)}
                                        </span>
                                        {blog.category && (
                                            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                                                {blog.category}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2 flex-1 pr-4">
                                            {blog.title}
                                        </h3>
                                        <div className="flex gap-1 flex-shrink-0">
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-all duration-200"
                                                title="Edit blog"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(blog.id)
                                                }
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                                                title="Delete blog"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    {blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {blog.tags
                                                .slice(0, 3)
                                                .map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            {blog.tags.length > 3 && (
                                                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                                    +{blog.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Blog Stats */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                <span>{blog.views}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Heart className="w-3 h-3" />
                                                <span>{blog.likes}</span>
                                            </div>
                                            {blog.readTime && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>
                                                        {blog.readTime} min read
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            <span>{blog.author}</span>
                                        </div>
                                        <span>
                                            {blog.updatedAt || blog.createdAt}
                                        </span>
                                    </div>

                                    {blog.updatedAt && (
                                        <div className="mt-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full inline-block">
                                            Updated on {blog.updatedAt}
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
