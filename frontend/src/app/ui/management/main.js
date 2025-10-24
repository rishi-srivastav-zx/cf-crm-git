import "./mg.css";

export default function () {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                {/* <!-- Main Content --> */}
                <main className="max-w-7xl mx-auto px-4 py-8">
                    {/* <!-- Page Title --> */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Management
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the best colleges and universities. Find
                            your perfect match from our comprehensive list of
                            top-rated educational institutions.
                        </p>
                    </div>

                    {/* <!-- Search and Filter Bar --> */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search colleges..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>All Categories</option>
                                <option>Engineering</option>
                                <option>Medical</option>
                                <option>Business</option>
                                <option>Arts & Science</option>
                            </select>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>All Locations</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Chennai</option>
                            </select>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                <i className="fas fa-search mr-2"></i>Search
                            </button>
                        </div>
                    </div>

                    {/* <!-- College Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="College Campus"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    St. Xavier's College
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Mumbai, Maharashtra
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.5/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        Arts & Science
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                        NAAC A+
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹45,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="Engineering College"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    IIT Delhi
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    New Delhi, Delhi
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (5.0/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                                        Engineering
                                    </span>
                                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                                        Top Ranked
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹2,50,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="Medical College"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    AIIMS Delhi
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    New Delhi, Delhi
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.9/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                                        Medical
                                    </span>
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                                        Government
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹1,500/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="Business School"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    ISB Hyderabad
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Hyderabad, Telangana
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.8/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                        Business
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                        MBA
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹35,60,00/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="University Campus"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Jamia Millia Islamia
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    New Delhi, Delhi
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.2/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        Multi-discipline
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                        Central University
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹25,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="College Building"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Christ University
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Bangalore, Karnataka
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.3/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                                        Private University
                                    </span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        Multi-discipline
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹1,85,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="College Campus"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Loyola College
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Chennai, Tamil Nadu
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.4/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        Arts & Science
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                        Autonomous
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹65,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- College Card 8 --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                                alt="Modern Campus"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    VIT Vellore
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Vellore, Tamil Nadu
                                </p>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600">
                                        (4.1/5)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                                        Engineering
                                    </span>
                                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                        Private
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        ₹1,98,000/year
                                    </span>
                                    <button className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="college-section">
                        <div className="left-panel">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=1200&fit=crop"
                                alt="College Campus"
                            />
                        </div>

                        <div className="right-panel">
                            <h1 className="form-title">
                                Request For Call Back
                            </h1>
                            <form id="callbackForm">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Full Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select required>
                                        <option value="">Enter Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="required-label">
                                        Enter Course Name in which you are
                                        interested?{" "}
                                        <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="like BPT, Btech, Nursing, MPT, BCA, MCA"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Enter Your Query"></textarea>
                                </div>
                                <div className="recaptcha-container">
                                    <div className="recaptcha-left">
                                        <div className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                id="notRobot"
                                                required
                                            />
                                        </div>
                                        <label
                                            htmlFor="notRobot"
                                            className="recaptcha-text"
                                        >
                                            I'm not a robot
                                        </label>
                                    </div>
                                    <div className="recaptcha-right">
                                        <div className="recaptcha-logo">
                                            <div className="recaptcha-icon">r</div>
                                            <div>
                                                <div className="recaptcha-brand">
                                                    reCAPTCHA
                                                </div>
                                            </div>
                                        </div>
                                        <div className="recaptcha-links">
                                            <a href="#">Privacy</a> -{" "}
                                            <a href="#">Terms</a>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Load More Button --> */}
                    <div className="text-center mt-12">
                        <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                            <i className="fas fa-plus mr-2"></i>Load More
                            Colleges
                        </button>
                    </div>

                    {/* <!-- Statistics Section --> */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8 mt-12 mb-10">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Why Choose Us?
                            </h2>
                            <p className="text-lg opacity-90">
                                Your trusted partner in finding the perfect
                                college
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">
                                    500+
                                </div>
                                <div className="text-lg opacity-90">
                                    Colleges Listed
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">
                                    50,000+
                                </div>
                                <div className="text-lg opacity-90">
                                    Students Helped
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">
                                    100+
                                </div>
                                <div className="text-lg opacity-90">
                                    Cities Covered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">
                                    95%
                                </div>
                                <div className="text-lg opacity-90">
                                    Success Rate
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="hero">
                            <h1>🏨 Hotel Management Course</h1>
                            <p>
                                Your Gateway to a Dynamic Career in Hospitality
                                Excellence
                            </p>
                        </div>

                        <div className="content">
                            <div className="section">
                                <h2 className="section-title">About the Course</h2>
                                <p>
                                    Hotel Management is a comprehensive program
                                    that equips students with essential skills
                                    for success in the thriving hospitality
                                    industry. This dynamic course covers
                                    leadership, business administration,
                                    customer service, and operational management
                                    in the digital era.
                                </p>

                                <p>
                                    Students gain hands-on experience in
                                    critical areas including Food Production,
                                    Food & Beverage Service, Housekeeping,
                                    Catering Management, and Front Office
                                    Operations. The curriculum combines
                                    theoretical knowledge with practical
                                    training, preparing graduates for rewarding
                                    careers in hotels, resorts, cruise ships,
                                    and restaurants worldwide.
                                </p>

                                <div className="highlight-box">
                                    <h3>🎯 Why Choose Hotel Management?</h3>
                                    <p>
                                        The hospitality industry is experiencing
                                        unprecedented growth, creating abundant
                                        opportunities for skilled professionals.
                                        With internships, real-world training,
                                        and industry connections, graduates are
                                        positioned to excel in this exciting
                                        field that combines creativity, service
                                        excellence, and business acumen.
                                    </p>
                                </div>
                            </div>

                            <div className="section">
                                <h2 className="section-title">
                                    Top Hotel Management Colleges in Dehradun
                                </h2>
                                <p>
                                    Dehradun, nestled in the picturesque
                                    Himalayan foothills, is home to premier
                                    hospitality institutions. These colleges
                                    offer world-class facilities, experienced
                                    faculty, and strong industry partnerships.
                                </p>

                                <div className="colleges-grid">
                                    <div className="college-card">
                                        <h4>
                                            🏛️ Doon Institute of Hotel
                                            Management
                                        </h4>
                                        <p>
                                            A leading institution with
                                            state-of-the-art facilities and
                                            exceptional placement records.
                                            Located near Tons River, it's
                                            recognized as one of the best hotel
                                            management institutes in
                                            Uttarakhand.
                                        </p>
                                    </div>
                                    <div className="college-card">
                                        <h4>🎓 Uttaranchal University</h4>
                                        <p>
                                            Offers a comprehensive Bachelor's
                                            degree in hotel management with
                                            modern infrastructure, industry
                                            exposure, and robust placement
                                            support.
                                        </p>
                                    </div>
                                    <div className="college-card">
                                        <h4>💼 Himgiri Zee University</h4>
                                        <p>
                                            Features specialized programs
                                            combining hospitality management
                                            with tourism studies, preparing
                                            students for diverse career paths.
                                        </p>
                                    </div>
                                    <div className="college-card">
                                        <h4>
                                            🌟 Himalayan Institute of Technology
                                        </h4>
                                        <p>
                                            A well-known institution offering
                                            courses in hotel management,
                                            catering technology, and tourism
                                            management with excellent faculty
                                            and facilities.
                                        </p>
                                    </div>
                                    <div className="college-card">
                                        <h4>
                                            🏆 IITT College of Hotel Management
                                        </h4>
                                        <p>
                                            Provides industry-focused programs
                                            with a group of institutions
                                            offering courses in hotel
                                            management, catering technology, and
                                            tourism management.
                                        </p>
                                    </div>
                                    <div className="college-card">
                                        <h4>
                                            📚 Dev Bhoomi Uttarakhand University
                                        </h4>
                                        <p>
                                            Offers comprehensive courses in
                                            hotel management and catering
                                            technology with modern facilities
                                            and experienced faculty.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <h2 className="section-title">
                                    Benefits of Studying in Dehradun
                                </h2>

                                <div className="benefits-grid">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🏫</div>
                                        <h4>Renowned Institutions</h4>
                                        <p>
                                            Access to top-tier hotel management
                                            institutes like IHM and Doon
                                            Institute, ensuring quality
                                            education and industry recognition.
                                        </p>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🌄</div>
                                        <h4>Strategic Location</h4>
                                        <p>
                                            Proximity to major tourist
                                            destinations and hill stations
                                            provides abundant internship and
                                            practical training opportunities.
                                        </p>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">💰</div>
                                        <h4>Cost Effective</h4>
                                        <p>
                                            Affordable living costs compared to
                                            metros like Delhi and Mumbai, making
                                            quality education accessible to more
                                            students.
                                        </p>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🚀</div>
                                        <h4>Career Opportunities</h4>
                                        <p>
                                            High demand for hospitality
                                            professionals ensures excellent job
                                            prospects with competitive salaries
                                            and growth potential.
                                        </p>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🎨</div>
                                        <h4>Cultural Experience</h4>
                                        <p>
                                            Rich cultural heritage and diverse
                                            tourist influx provide real-world
                                            exposure to international
                                            hospitality standards.
                                        </p>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🌐</div>
                                        <h4>Industry Connections</h4>
                                        <p>
                                            Strong ties with hotels, resorts,
                                            and restaurants facilitate
                                            internships, placements, and
                                            networking opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <h2 className="section-title">
                                    Eligibility Criteria
                                </h2>
                                <p>
                                    Entry requirements vary by program and
                                    institution, but general criteria include:
                                </p>

                                <ul>
                                    <li>
                                        <strong>
                                            Educational Qualification:
                                        </strong>{" "}
                                        Candidates must have completed 10+2
                                        (12th grade) from a recognized board
                                        with a minimum of 50% aggregate marks in
                                        relevant subjects.
                                    </li>
                                    <li>
                                        <strong>Subject Requirements:</strong>{" "}
                                        Most programs require English, with some
                                        preferring backgrounds in mathematics or
                                        hospitality studies.
                                    </li>
                                    <li>
                                        <strong>Entrance Exams:</strong> Many
                                        institutions conduct entrance exams like
                                        NCHMCT JEE to select candidates. Some
                                        may also consider national or
                                        state-level entrance tests.
                                    </li>
                                    <li>
                                        <strong>Medical Fitness:</strong>{" "}
                                        Candidates must be physically and
                                        mentally fit for work in the demanding
                                        hospitality industry.
                                    </li>
                                    <li>
                                        <strong>Age Limit:</strong> Generally,
                                        candidates should be between 17-22 years
                                        at the time of admission.
                                    </li>
                                </ul>
                            </div>

                            <div className="section">
                                <h2 className="section-title">
                                    Department Structure
                                </h2>
                                <p>
                                    Hotel management encompasses various
                                    specialized departments, each crucial to
                                    seamless operations:
                                </p>

                                <ul>
                                    <li>
                                        <strong>Front Office:</strong> Guest
                                        check-ins/check-outs, reservations,
                                        concierge services, and front desk
                                        operations.
                                    </li>
                                    <li>
                                        <strong>Housekeeping:</strong> Room
                                        maintenance, cleanliness, laundry
                                        services, and guest comfort management.
                                    </li>
                                    <li>
                                        <strong>Food & Beverage:</strong>{" "}
                                        Restaurant operations, menu planning,
                                        kitchen management, and dining service
                                        coordination.
                                    </li>
                                    <li>
                                        <strong>Sales & Marketing:</strong>{" "}
                                        Brand promotion, special event
                                        management, advertising, and revenue
                                        generation strategies.
                                    </li>
                                    <li>
                                        <strong>Accounting:</strong> Financial
                                        management, payroll, accounts handling,
                                        and budget oversight.
                                    </li>
                                    <li>
                                        <strong>Maintenance:</strong> Facility
                                        upkeep, technical services, and
                                        infrastructure management.
                                    </li>
                                    <li>
                                        <strong>Human Resources:</strong> Staff
                                        recruitment, training, employee
                                        relations, and performance management.
                                    </li>
                                    <li>
                                        <strong>Security:</strong> Guest safety,
                                        property protection, and emergency
                                        response coordination.
                                    </li>
                                </ul>
                            </div>

                            <div className="section">
                                <h2 className="section-title">
                                    Frequently Asked Questions
                                </h2>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        Q1. What skills are essential for hotel
                                        management?
                                    </div>
                                    <div className="faq-answer">
                                        Key skills include excellent
                                        communication, leadership abilities,
                                        problem-solving, customer service
                                        orientation, organizational skills,
                                        financial acumen, adaptability, and
                                        cultural awareness.
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        Q2. What courses are available in hotel
                                        management?
                                    </div>
                                    <div className="faq-answer">
                                        Programs include diploma courses,
                                        undergraduate courses (BHM, BBA in
                                        Hospitality), postgraduate courses (MBA
                                        in Hospitality, MHM), and specialized
                                        certifications in various hospitality
                                        domains.
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        Q3. Is hotel management a good career
                                        option?
                                    </div>
                                    <div className="faq-answer">
                                        Absolutely! The hospitality industry
                                        offers diverse opportunities worldwide,
                                        competitive salaries, international
                                        exposure, and excellent growth prospects
                                        for passionate professionals.
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        Q4. What are the career prospects after
                                        hotel management?
                                    </div>
                                    <div className="faq-answer">
                                        Graduates can pursue careers in luxury
                                        hotels, resorts, restaurants, cruise
                                        ships, airlines, event management
                                        companies, catering services, and even
                                        start their own hospitality ventures.
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        Q5. Can I work internationally with a
                                        hotel management degree?
                                    </div>
                                    <div className="faq-answer">
                                        Yes! Hotel management degrees are
                                        globally recognized, opening doors to
                                        international careers in hospitality
                                        hubs worldwide, from Dubai to Singapore
                                        to Europe.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <h2>Ready to Start Your Hospitality Journey?</h2>
                            <p>
                                Join thousands of successful graduates who
                                launched their careers through our partner
                                institutions
                            </p>
                            <a href="#" className="cta-button">
                                Apply Now
                            </a>
                        </div>
                    </div>

                    <div
                        className="whatsapp-float"
                    >
                        💬
                    </div>
                </main>
            </div>
        </>
    );
}
