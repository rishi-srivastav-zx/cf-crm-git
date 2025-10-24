"use client";
import { useState } from "react";
import "./graphic.css";

const courses = [
    {
        name: "B Tech (Mechanical Engg) (Automobile)",
        fees: "₹1,57,720",
        eligibility: "12th (PCM)",
        duration: "4 Yrs",
    },
    {
        name: "B Tech (Mechanical Engg) (Civil)",
        fees: "₹1,57,720",
        eligibility: "12th (PCM)",
        duration: "4 Yrs",
    },
    // Add remaining courses here, trimmed for brevity...
];

const highlights = [
    { icon: "⚽️", title: "Sports", desc: "Sports are available" },
    { icon: "📚", title: "Library", desc: "Library facility available" },
    { icon: "🏠", title: "Hostel", desc: "Hostel facility available" },
    { icon: "🔌", title: "Power Backup", desc: "24*7 power backup" },
    { icon: "🚍", title: "Transport", desc: "Transport facility available" },
    {
        icon: "🖥️",
        title: "Computer Lab",
        desc: "High tech computer labs & more",
    },
    {
        icon: "⚕️",
        title: "Medical Facilities",
        desc: "Medical facilities available 24*7 on campus",
    },
    {
        icon: "🍽️",
        title: "Cafeteria",
        desc: "In campus cafeteria at best rates",
    },
    { icon: "🏛️", title: "Auditorium", desc: "Auditorium is available" },
    { icon: "🛏️", title: "Hostel", desc: "Hostel facility is available" },
];

export default function GraphicEraPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        message: "",
        recaptcha: false,
    });

    const [accordionOpen, setAccordionOpen] = useState(null);

    const toggleAccordion = (index) => {
        setAccordionOpen(accordionOpen === index ? null : index);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <section className="max-w-7xl mx-auto p-4 mb-25">
                {/* <!-- Header Section --> */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                    {/* <!-- Title and Actions --> */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Graphic Era (Deemed to be University) Dehradun
                            </h1>

                            {/* <!-- Rating and Info Row --> */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                                        4.7
                                    </div>
                                    <i className="fas fa-star text-yellow-400"></i>
                                </div>

                                <div className="flex items-center gap-1">
                                    <span className="text-gray-500">
                                        150 Review
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                        <i className="fas fa-check-circle"></i>
                                        <span className="font-semibold">
                                            AG Verified
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <i className="fas fa-map-marker-alt text-gray-400"></i>
                                    <span>
                                        566/6, Bell Road,Clement Town,Dehradun
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <i className="fas fa-route text-gray-400"></i>
                                    <span>9 km</span>
                                    <button className="text-blue-600 hover:text-blue-800 ml-1 text-xs">
                                        (VIEW MAP)
                                    </button>
                                </div>

                                <div className="flex items-center gap-1">
                                    <i className="fas fa-eye text-gray-400"></i>
                                    <span>1145 views</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Action Buttons --> */}
                        <div className="flex gap-2">
                            <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2">
                                <i className="fas fa-phone"></i>
                                <span className="font-semibold">
                                    SHOW NUMBER
                                </span>
                            </button>

                            <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                                <i className="fas fa-star"></i>
                                <span>RATE US</span>
                            </button>

                            <button className="border border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Image Gallery --> */}

                <div className="p-4 max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96">
                        {/* Main Large Image */}
                        <div className="lg:col-span-2 relative group overflow-hidden rounded-lg bg-gray-200">
                            <img
                                src="/graphic-era.jpg"
                                alt="Graphic-Era"
                                className="w-auto h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Navigation Arrows */}
                            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Right Side Grid */}
                        <div className="grid grid-rows-2 gap-4 h-full">
                            {/* Top Row - Two Images */}
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full">
                                    <img
                                        src="/images/graphic-campus.webp"
                                        alt="Graphic-Campus"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full">
                                    <img
                                        src="/images/Graphic-Era-University.webp"
                                        alt="University Hall"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Bottom Row - Two Images */}
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full">
                                    <img
                                        src="/images/graphic-graduated.jpg"
                                        alt="Graduation Ceremony"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg group cursor-pointer bg-gray-200 h-full">
                                    <img
                                        src="/images/Graphic-students.png"
                                        alt="Students"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Overlay for More Images */}
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white group-hover:bg-opacity-70 transition-all">
                                        <span className="text-2xl font-bold">
                                            +10
                                        </span>
                                        <span className="text-sm">Images</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-8 py-8 gap-8">
                <main className="flex-1 space-y-6">
                    <section>
                        <h2 className="text-[1.375rem] font-semibold text-blue-900 mb-3">
                            About – Graphic Era (Deemed to be University)
                            Dehradun
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Graphic Era University is located in Dehradun,
                            Uttarakhand, India. It is one of the top-ranked
                            private universities offering a wide range of
                            undergraduate and postgraduate courses with a strong
                            focus on research and quality education. Founded in
                            1993, the university has grown into an important
                            education hub in the Northern region of India. The
                            campus is equipped with modern infrastructure
                            facilities, including ICT-enabled classrooms and
                            laboratories, Wi-Fi, smart library, transportation,
                            hostels, and medical facilities.
                            <br />
                            <br />
                            It offers various programs with a good emphasis on
                            industry interaction and placements. The experienced
                            faculty and dedicated staff contribute to the
                            creation of an excellent academic environment for
                            students.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                            Courses, Fees & Eligibility
                        </h3>
                        <div className="overflow-x-auto border rounded-md shadow-sm">
                            <table className="min-w-full text-sm md:text-base">
                                <thead className="bg-blue-200 text-blue-900">
                                    <tr>
                                        <th className="py-2 px-3 text-left">
                                            Course
                                        </th>
                                        <th className="py-2 px-3 text-left">
                                            Fees (per Yr)
                                        </th>
                                        <th className="py-2 px-3 text-left">
                                            Eligibility
                                        </th>
                                        <th className="py-2 px-3 text-left">
                                            Duration
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, idx) => (
                                        <tr
                                            key={idx}
                                            className={`${
                                                idx % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-50"
                                            } border-b border-gray-200`}
                                        >
                                            <td className="py-2 px-3 font-medium">
                                                {course.name}
                                            </td>
                                            <td className="py-2 px-3">
                                                {course.fees}
                                            </td>
                                            <td className="py-2 px-3">
                                                {course.eligibility}
                                            </td>
                                            <td className="py-2 px-3">
                                                {course.duration}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-2 mt-4">
                        {[
                            "Course Application",
                            "Documents/Syllabus",
                            "Ranking",
                            "Infrastructure Facilities",
                            "Research and Social Service",
                            "Admission",
                            "Life at GEU",
                            "Related Sciences",
                        ].map((title, idx) => (
                            <div
                                key={idx}
                                className="border border-blue-300 rounded"
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full flex justify-between items-center px-4 py-2 text-blue-900 font-semibold focus:outline-none"
                                >
                                    {title}
                                    <span>
                                        {accordionOpen === idx ? "-" : "+"}
                                    </span>
                                </button>
                                {accordionOpen === idx && (
                                    <div className="px-4 py-3 border-t border-blue-300 text-gray-600 text-sm">
                                        <p>
                                            Details about {title} will be shown
                                            here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>

                    <section className="mt-12">
                        <h2 className="text-center text-blue-900 font-extrabold text-2xl uppercase mb-6">
                            College Highlights
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-gray-700">
                            {highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-blue-300 rounded p-4 bg-white shadow hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-2">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-blue-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-12">
                        <h3 className="text-center text-blue-900 font-bold text-xl mb-6">
                            News & Videos
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <img
                                className="rounded shadow-md cursor-pointer"
                                alt="News 1"
                                src="https://www.graphicerae.edu.in/assets/images/news/2022/08.jpg"
                            />
                            <img
                                className="rounded shadow-md cursor-pointer"
                                alt="News 2"
                                src="https://www.graphicerae.edu.in/assets/images/news/2020/09.jpg"
                            />
                            <img
                                className="rounded shadow-md cursor-pointer"
                                alt="News 3"
                                src="https://www.graphicerae.edu.in/assets/images/news/2021/01.jpg"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                            <iframe
                                className="w-full aspect-video rounded shadow"
                                src="https://www.youtube.com/embed/zEze3-UXqfs"
                                title="Graphic Era University Video"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                            {[1, 2, 3].map((num) => (
                                <img
                                    key={num}
                                    src={`https://via.placeholder.com/300x169?text=Campus+Video+${num}`}
                                    alt={`Campus Video ${num}`}
                                    className="rounded shadow cursor-pointer"
                                />
                            ))}
                        </div>
                    </section>
                </main>

                <aside className="w-full md:w-96 space-y-6">
                    <div className="bg-white rounded shadow p-6">
                        <h3 className="font-bold text-blue-900 mb-4 text-center text-lg">
                            Main Highlights
                        </h3>
                        <ul className="text-gray-700 text-sm space-y-2">
                            <li>
                                <strong>Courses:</strong> Engineering, Computer
                                Applications, Management, Hotel Management,
                                Pharmacy
                            </li>
                            <li>
                                <strong>Affiliation:</strong> UGC, Deemed-to-be,
                                NBA Accredited, NAAC A+ Certified, AICTE
                                Approved
                            </li>
                            <li>
                                <strong>Location:</strong> Dehradun, Uttarakhand
                            </li>
                            <li>
                                <strong>Establishment:</strong> 1993
                            </li>
                        </ul>
                        <div className="mt-6 flex flex-col gap-3">
                            <button className="text-white bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded font-semibold flex items-center justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Apply Now
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded font-semibold flex items-center justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Download College Info
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded shadow p-6 sticky top-6">
                        <h3 className="font-bold text-blue-900 mb-4">
                            Admission Open | Enquire Now
                        </h3>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                value={formData.name}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={formData.email}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                                value={formData.phone}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                onChange={handleInputChange}
                                value={formData.state}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                onChange={handleInputChange}
                                value={formData.message}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="recaptcha"
                                    checked={formData.recaptcha}
                                    onChange={handleInputChange}
                                    className="form-checkbox"
                                />
                                <span className="text-xs text-gray-600">
                                    I am not a robot
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded"
                                disabled={!formData.recaptcha}
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="bg-red-600 text-white p-4 rounded shadow text-center">
                        <h4 className="font-bold mb-2">
                            Admission Open for Uttarakhand’s Top Education Brand
                        </h4>
                        <p className="mb-4 text-lg font-semibold">
                            ₹32.16 Lacs
                        </p>
                        <button className="bg-white text-red-600 font-bold px-4 py-2 rounded hover:bg-gray-100 transition">
                            Apply Now
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
