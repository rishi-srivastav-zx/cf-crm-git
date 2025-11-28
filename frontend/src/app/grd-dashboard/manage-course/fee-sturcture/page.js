"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function FeeStructureForm() {
    const [discounts, setDiscounts] = useState([]);
    const [showStateSection, setShowStateSection] = useState(false);
    const [stateDiscounts, setStateDiscounts] = useState([]);
    const [formData, setFormData] = useState({
        session: "",
        registrationFee: "",
        firstYearFee: "",
        totalCourseFee: "",
        eligibilityCriteria: "",
        pdfFile: null,
    });
    const [stateFormData, setStateFormData] = useState({
        state: "",
        session: "",
        registrationFee: "",
        firstYearFee: "",
        totalCourseFee: "",
        eligibilityCriteria: "",
        pdfFile: null,
    });

    const addDiscount = () => {
        setDiscounts([
            ...discounts,
            {
                id: Date.now(),
                name: "",
                value: "",
                discountOn: "",
                gender: "",
                eligibility: "",
            },
        ]);
    };

    const addStateDiscount = () => {
        setStateDiscounts([
            ...stateDiscounts,
            {
                id: Date.now(),
                name: "",
                value: "",
                discountOn: "",
                gender: "",
                eligibility: "",
            },
        ]);
    };

    const removeDiscount = (id) => {
        setDiscounts(discounts.filter((d) => d.id !== id));
    };

    const removeStateDiscount = (id) => {
        setStateDiscounts(stateDiscounts.filter((d) => d.id !== id));
    };

    const updateDiscount = (id, field, value) => {
        setDiscounts(
            discounts.map((d) => (d.id === id ? { ...d, [field]: value } : d))
        );
    };

    const updateStateDiscount = (id, field, value) => {
        setStateDiscounts(
            stateDiscounts.map((d) =>
                d.id === id ? { ...d, [field]: value } : d
            )
        );
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, pdfFile: e.target.files[0] });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData, "Discounts:", discounts);
        alert("Form submitted successfully!");
    };

    
    const handleBack = () => {
        setFormData({
            session: "",
            registrationFee: "",
            firstYearFee: "",
            totalCourseFee: "",
            eligibilityCriteria: "",
            pdfFile: null,
        });
        setDiscounts([]);
        setShowStateSection(false);
        setStateFormData({
            state: "",
            session: "",
            registrationFee: "",
            firstYearFee: "",
            totalCourseFee: "",
            eligibilityCriteria: "",
            pdfFile: null,
        });
        setStateDiscounts([]);
        
         window.history.back();
    };

    const handleAddStateSection = () => {
        setShowStateSection(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 ml-64">
            <div className="w-full mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Add All India Fee Structure
                        </h1>
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Back
                        </button>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Session */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Session{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.session}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            session: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">--Select Session--</option>
                                    <option value="2024-2025">2024-2025</option>
                                    <option value="2025-2026">2025-2026</option>
                                    <option value="2026-2027">2026-2027</option>
                                </select>
                            </div>

                            {/* First Year Fee */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Year Fee (Uniform Fee + Security Fee){" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.firstYearFee}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstYearFee: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* Registration Fee */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Registration Fee{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.registrationFee}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            registrationFee: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* Total Course Fee */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Total Course Fee{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.totalCourseFee}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            totalCourseFee: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* Fee Structure PDF */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Fee Structure PDF
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleFileChange}
                                />
                            </div>

                            {/* Course Eligibility Criteria */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Course Eligibility Criteria{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter this course eligibility criteria"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.eligibilityCriteria}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            eligibilityCriteria: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        {/* Any Discount Section */}
                        <div className="mt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm font-medium text-gray-700">
                                    Any Discount
                                </span>
                                <button
                                    type="button"
                                    onClick={addDiscount}
                                    className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Discount Rows */}
                            {discounts.map((discount) => (
                                <div key={discount.id} className="mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Discount Name"
                                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={discount.name}
                                            onChange={(e) =>
                                                updateDiscount(
                                                    discount.id,
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter Only Numeric Value Eg: 25000"
                                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={discount.value}
                                            onChange={(e) =>
                                                updateDiscount(
                                                    discount.id,
                                                    "value",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <select
                                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={discount.discountOn}
                                            onChange={(e) =>
                                                updateDiscount(
                                                    discount.id,
                                                    "discountOn",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                --Select Discount On--
                                            </option>
                                            <option value="registration">
                                                Registration Fee
                                            </option>
                                            <option value="tuition">
                                                Tuition Fee
                                            </option>
                                            <option value="total">
                                                Total Fee
                                            </option>
                                        </select>
                                        <div className="flex gap-2">
                                            <select
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={discount.gender}
                                                onChange={(e) =>
                                                    updateDiscount(
                                                        discount.id,
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    --Select Gender--
                                                </option>
                                                <option value="male">
                                                    Male
                                                </option>
                                                <option value="female">
                                                    Female
                                                </option>
                                                <option value="other">
                                                    Other
                                                </option>
                                                <option value="all">All</option>
                                            </select>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeDiscount(discount.id)
                                                }
                                                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Enter Eligibility Criteria Eg: More Than 90% In 12 Class Will Get 10% Discount"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={discount.eligibility}
                                            onChange={(e) =>
                                                updateDiscount(
                                                    discount.id,
                                                    "eligibility",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-4 mt-8">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={handleAddStateSection}
                                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
                            >
                                Add State Fee Structure +
                            </button>
                        </div>
                    </div>

                    {/* State Fee Structure Section */}
                    {showStateSection && (
                        <div className="mt-12 pt-8 border-t-2 border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Add State Fee Structure
                            </h2>

                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* State */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            State{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={stateFormData.state}
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    state: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="">
                                                --Select State--
                                            </option>
                                            <option value="uttarakhand">
                                                Uttarakhand
                                            </option>
                                            <option value="delhi">Delhi</option>
                                            <option value="maharashtra">
                                                Maharashtra
                                            </option>
                                            <option value="karnataka">
                                                Karnataka
                                            </option>
                                            <option value="tamilnadu">
                                                Tamil Nadu
                                            </option>
                                        </select>
                                    </div>

                                    {/* Session */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Session{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={stateFormData.session}
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    session: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="">
                                                --Select Session--
                                            </option>
                                            <option value="2024-2025">
                                                2024-2025
                                            </option>
                                            <option value="2025-2026">
                                                2025-2026
                                            </option>
                                            <option value="2026-2027">
                                                2026-2027
                                            </option>
                                        </select>
                                    </div>

                                    {/* Registration Fee */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Registration Fee{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={
                                                stateFormData.registrationFee
                                            }
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    registrationFee:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* First Year Fee */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Year Fee (Uniform Fee +
                                            Security Fee){" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={stateFormData.firstYearFee}
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    firstYearFee:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* Total Course Fee */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Total Course Fee{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={stateFormData.totalCourseFee}
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    totalCourseFee:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* Course Eligibility Criteria */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Course Eligibility Criteria{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter this course eligibility criteria"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={
                                                stateFormData.eligibilityCriteria
                                            }
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    eligibilityCriteria:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* Fee Structure PDF */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Fee Structure PDF
                                        </label>
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) =>
                                                setStateFormData({
                                                    ...stateFormData,
                                                    pdfFile: e.target.files[0],
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Any Discount Section for State */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-sm font-medium text-gray-700">
                                            Any Discount
                                        </span>
                                        <button
                                            type="button"
                                            onClick={addStateDiscount}
                                            className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* State Discount Rows */}
                                    {stateDiscounts.map((discount) => (
                                        <div key={discount.id} className="mb-4">
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Discount Name"
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={discount.name}
                                                    onChange={(e) =>
                                                        updateStateDiscount(
                                                            discount.id,
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Enter Only Numeric Value Eg: 25000"
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={discount.value}
                                                    onChange={(e) =>
                                                        updateStateDiscount(
                                                            discount.id,
                                                            "value",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <select
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={discount.discountOn}
                                                    onChange={(e) =>
                                                        updateStateDiscount(
                                                            discount.id,
                                                            "discountOn",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        --Select Discount On--
                                                    </option>
                                                    <option value="registration">
                                                        Registration Fee
                                                    </option>
                                                    <option value="tuition">
                                                        Tuition Fee
                                                    </option>
                                                    <option value="total">
                                                        Total Fee
                                                    </option>
                                                </select>
                                                <div className="flex gap-2">
                                                    <select
                                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        value={discount.gender}
                                                        onChange={(e) =>
                                                            updateStateDiscount(
                                                                discount.id,
                                                                "gender",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            --Select Gender--
                                                        </option>
                                                        <option value="male">
                                                            Male
                                                        </option>
                                                        <option value="female">
                                                            Female
                                                        </option>
                                                        <option value="other">
                                                            Other
                                                        </option>
                                                        <option value="all">
                                                            All
                                                        </option>
                                                    </select>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeStateDiscount(
                                                                discount.id
                                                            )
                                                        }
                                                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Eligibility Criteria Eg: More Than 90% In 12 Class Will Get 10% Discount"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={discount.eligibility}
                                                    onChange={(e) =>
                                                        updateStateDiscount(
                                                            discount.id,
                                                            "eligibility",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* State Section Submit Button */}
                                <div className="flex gap-4 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            console.log(
                                                "State form submitted:",
                                                stateFormData,
                                                "State Discounts:",
                                                stateDiscounts
                                            );
                                            alert(
                                                "State Fee Structure submitted successfully!"
                                            );
                                        }}
                                        className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        Submit State Fee Structure
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}