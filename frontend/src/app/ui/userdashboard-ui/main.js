"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';

export default function () {
    const [currentSlide, setCurrentSlide] = useState(0);

 
  const collegeImages = [
    {
      url: ('/images/doon-university-dehradun.webp'),
      title: 'Doon University Dehradun'
    },
    {
      url: '/images/shivalik.jpg',
      title: 'Shivalik'
    },
    {
      url: '/images/college-page.avif',
      title: 'College'
    },
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'State-of-the-art Facilities'
    }
  ];

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collegeImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [collegeImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collegeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + collegeImages.length) % collegeImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

    return (
        <div className="bg-gray-50">
            <div className="bg text-white py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4 floating-animation">
                            100+ Colleges in Dehradun
                        </h1>
                        <p className="text-xl opacity-100 mb-8">
                            Discover Your Perfect Educational Journey
                        </p>

                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="searchInput"
                                    placeholder="Search colleges, courses, or programs..."
                                    className="w-full px-6 py-4 pr-12 text-white-900 rounded-full shadow-lg border-1 search-focus text-lg"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
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
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-8 relative z-10">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/all-colleges"
                            className="category-card px-6 py-3 rounded-full text-white cursor-pointer"
                        >
                            <span className="font-semibold">
                                🎓 All Colleges
                            </span>
                        </a>
                        <a
                            href="/management"
                            className="category-card px-6 py-3 rounded-full text-white cursor-pointer"
                        >
                            <span className="font-semibold">💼 Management</span>
                        </a>
                        <a
                            href="/engineering"
                            className="category-card px-6 py-3 rounded-full text-white cursor-pointer"
                        >
                            <span className="font-semibold">
                                🔬 Engineering
                            </span>
                        </a>
                        <a
                            href="/pharmacy"
                            className="category-card px-6 py-3 rounded-full text-white cursor-pointer"
                        >
                            <span className="font-semibold">💊 Pharmacy</span>
                        </a>
                        <a
                            href="/paramedical"
                            className="category-card px-6 py-3 rounded-full text-white cursor-pointer"
                        >
                            <span className="font-semibold">
                                🏥 Paramedical
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <main className="container mx-auto  py-12 px-4">
                <section className="mb-16 slide-in">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Choose Your{" "}
                        <span className="text-blue-600">College Interest</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-green-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🌾</span>
                                </div>
                                <div
                                href='/#'
                                >
                                    <h3 className="font-bold text-gray-800">
                                        Agriculture
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        11 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-blue-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        B.Ed
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        13 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-purple-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🌿</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Ayurvedic
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        2 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-yellow-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        BBA
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        8 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-red-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🩺</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        B.Sc Nursing
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        6 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-indigo-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        MPT
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        3 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-pink-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💊</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Pharmacy
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        17 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-teal-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🔬</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Engineering
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        25 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border-l-4 border-teal-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">📺</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        BCA
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        25 Colleges
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r w-full from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-16 overflow-hidden relative">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {collegeImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide
                                        ? "opacity-30"
                                        : "opacity-0"
                                }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
                    </div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            GET CHANCE TO STUDY IN TOP MOST COLLEGE IN DEHRADUN
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of students who found their dream
                            college through our platform
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Register Here
                        </button>

                        <div className="mt-12">
                            <div className="relative max-w-2xl mx-auto">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
                                    {collegeImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                                                index === currentSlide
                                                    ? "translate-x-0"
                                                    : index < currentSlide
                                                    ? "-translate-x-full"
                                                    : "translate-x-full"
                                            }`}
                                        >
                                            <img
                                                src={image.url}
                                                alt={image.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                                                <h3 className="text-white text-lg font-semibold">
                                                    {image.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}

                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>

                                <div className="flex justify-center space-x-2 mt-4">
                                    {collegeImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                index === currentSlide
                                                    ? "bg-white"
                                                    : "bg-white/40 hover:bg-white/60"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="slide-in">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Top{" "}
                        <span className="text-blue-600">
                            Colleges and Universities
                        </span>{" "}
                        in Dehradun
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Uttaranchal PG College
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Medical Sciences & Hospital
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Uttaranchal (PG) College of Bio-Medical
                                    Sciences & Hospital About - Uttaranchal (PG)
                                    College of Bio-Medical Sciences & Hospital
                                    offers undergraduate programmes...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        DIT University
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Engineering & Technology
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    DIT University About - DIT University
                                    Dehradun is one of the top engineering
                                    colleges in Dehradun, DIT University...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        IMS Unison University
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Multi-disciplinary Education
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    IMS Unison University About - IMS Unison
                                    University is a premier Education Foundation
                                    to a private university...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Himalayan Institute
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Technology (HIT)
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Himalayan Institute of Technology (HIT)
                                    About - Himalayan Institute of Technology
                                    (HIT) Himalayan Institute established...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Shivalik College
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Dehradun
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Shivalik College Dehradun About - Shivalik
                                    College Dehradun The very thought of higher
                                    education is a very spirit organization...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Beehive Group
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        of Colleges
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Beehive Group of Colleges About - Beehive
                                    Group of Colleges Beehive Group of Colleges
                                    is the first step engineering...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Uttaranchal University
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Dehradun
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Uttaranchal University About - Uttaranchal
                                    University Uttaranchal University is one of
                                    the best engineering colleges of...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        <div className="college-card rounded-2xl overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg">
                                        Graphic Era
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        University, Dehradun
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">
                                    Graphic Era (Deemed to be University),
                                    Dehradun About - Graphic Era (Deemed to be
                                    University) Dehradun...
                                </p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <div className="admission-section">
                        <input
                            type="radio"
                            style={{
                                position: "absolute",
                                opacity: "0",
                                pointerEvents: "none",
                                scrollMargin: "0",
                            }}
                            id="bachelor-radio"
                            name="tab"
                            defaultChecked
                        />
                        <input
                            type="radio"
                            style={{
                                position: "absolute",
                                opacity: "0",
                                pointerEvents: "none",
                                scrollMargin: "0",
                            }}
                            id="diploma-radio"
                            name="tab"
                        />
                        <input
                            type="radio"
                            style={{
                                position: "absolute",
                                opacity: "0",
                                pointerEvents: "none",
                                scrollMargin: "0",
                            }}
                            id="postgrad-radio"
                            name="tab"
                        />

                        <div className="header">
                            <h2>
                                Admission Open
                                <span className="year">2025</span>
                            </h2>
                            <div className="divider"></div>
                        </div>

                        <div className="tab-container">
                            <label
                                htmlFor="bachelor-radio"
                                className="tab-button"
                            >
                                <span className="tab-icon">🎓</span>
                                Bachelor's
                            </label>
                            <label
                                htmlFor="diploma-radio"
                                className="tab-button"
                            >
                                <span className="tab-icon">📜</span>
                                Diploma
                            </label>
                            <label
                                htmlFor="postgrad-radio"
                                className="tab-button"
                            >
                                <span className="tab-icon">🎯</span>
                                Post Graduate & Other
                            </label>
                        </div>

                        <div
                            id="bachelor"
                            className="tab-content active bachelor-content"
                        >
                            <div className="program-grid">
                                <div className="program-item bachelor-item">
                                    <span>• B.Sc. Agriculture</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• B.Sc. Forestry</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>
                                        • B.Sc. Medical Radiology & Imaging
                                        Technology (BMRIT)
                                    </span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>
                                        • BSc Medical Lab Technology (B.Sc MLT)
                                    </span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• B.Sc. Nursing</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• B.Sc. Optometry</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>
                                        • Bachelor of Physiotherapy (BPT)
                                    </span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>
                                        • Bachelor of Pharmacy (B.Pharma)
                                    </span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• BBA</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• B.Ed</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• BCA</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• B.Com</span>
                                </div>
                                <div className="program-item bachelor-item">
                                    <span>• BSc Medical Microbiology</span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="diploma"
                            className="tab-content diploma-content"
                        >
                            <div className="program-grid">
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Medical Radiology</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>
                                        • Diploma in Medical Lab Technology
                                    </span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Optometry</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Pharmacy</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Nursing</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Physiotherapy</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>• Diploma in Engineering</span>
                                </div>
                                <div className="program-item diploma-item">
                                    <span>
                                        • Diploma in Computer Applications
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="postgrad"
                            className="tab-content postgrad-content"
                        >
                            <div className="program-grid">
                                <div className="program-item postgrad-item">
                                    <span>
                                        • MBA (Master of Business
                                        Administration)
                                    </span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• M.Sc. Programs</span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• M.Tech Engineering Programs</span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>
                                        • MCA (Master of Computer Applications)
                                    </span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• M.Com (Master of Commerce)</span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• Post Graduate Diplomas</span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• Ph.D Programs</span>
                                </div>
                                <div className="program-item postgrad-item">
                                    <span>• Certificate Courses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
