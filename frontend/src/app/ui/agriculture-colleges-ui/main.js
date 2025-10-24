'use client';

export default function() {
    return (
        <>
            {/* Tailwind CSS must be included in your project for this to work */}

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                {/* Header */}
                <header>
                    <h1 className="text-3xl font-extrabold text-center text-green-800 mb-4">
                        Best B.Sc Agriculture Colleges in Dehradun 2025
                    </h1>
                    <p className="text-center text-gray-700 max-w-4xl mx-auto">
                        Dehradun is a hub of educational excellence in
                        agriculture studies, offering top-notch colleges with
                        advanced programs in agricultural science, horticulture,
                        agribusiness, plant protection, dairy technology, food
                        processing, plant biotechnology, and more.
                    </p>
                </header>

                {/* Top Featured Colleges */}
                <section>
                    <h2 className="text-xl font-semibold text-green-700 mb-6">
                        Top Featured Colleges
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Doon IHSC (College of Agriculture Science and Technology)",
                                fee: "3.25 L - 6K",
                                img: "https://dummyimage.com/300x200/green/fff&text=Doon+IHSC",
                                link: "#",
                            },
                            {
                                name: "ICFT Summer of Horticulture",
                                fee: "4.5K - 7K",
                                img: "https://dummyimage.com/300x200/blue/fff&text=ICFT+Summer",
                                link: "#",
                            },
                            {
                                name: "Himgiri Zee University",
                                fee: "2 L - 1.1 L",
                                img: "https://dummyimage.com/300x200/red/fff&text=Himgiri+Zee",
                                link: "#",
                            },
                            {
                                name: "Alpine Group of Institutions",
                                fee: "2.5 L - 4.8K",
                                img: "https://dummyimage.com/300x200/orange/fff&text=Alpine+Group",
                                link: "#",
                            },
                        ].map((college, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow bg-white flex flex-col"
                            >
                                <img
                                    src={college.img}
                                    alt={`${college.name}`}
                                    className="w-full h-44 object-cover"
                                />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="font-semibold text-lg mb-1">
                                        {college.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        Total Fees:{" "}
                                        <span className="font-semibold">
                                            {college.fee}
                                        </span>
                                    </p>
                                    <div className="mt-auto space-x-2">
                                        <a
                                            href={college.link}
                                            className="inline-block px-3 py-1 text-green-700 font-medium border border-green-700 rounded hover:bg-green-700 hover:text-white transition"
                                        >
                                            View Details
                                        </a>
                                        <button className="inline-block px-4 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 transition">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Admission Section */}
                <section className="md:flex md:space-x-10 bg-cyan-100 rounded-lg p-6">
                    {/* Admission Info */}
                    <div className="md:w-2/3 flex flex-col justify-center rounded-lg overflow-hidden relative">
                        <img
                            src="https://www.collegeforum.in/wp-content/uploads/2023/04/bsc-agriculture-admission.png"
                            alt="Admission Open 2024-2025 B.Sc Agriculture"
                            className="rounded-lg object-cover w-full md:h-96"
                        />
                        <div className="absolute bottom-5 left-5 bg-green-900 bg-opacity-80 p-4 rounded-lg text-white max-w-xs">
                            <h3 className="text-2xl font-bold mb-1">
                                Admission Open
                            </h3>
                            <p className="font-semibold text-lg">2024-2025</p>
                            <p className="mt-1">
                                Get Admission in Leading Agriculture Colleges
                            </p>
                            <a
                                href="https://www.collegeforum.in"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-block bg-amber-400 text-green-900 font-bold px-5 py-2 rounded hover:bg-amber-500 transition"
                            >
                                More Details
                            </a>
                        </div>
                    </div>

                    {/* Admission Form */}
                    <div className="md:w-1/3 bg-white rounded-lg shadow p-6 mt-6 md:mt-0">
                        <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">
                            Admission Open
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone *"
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <select
                                name="course"
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select Course</option>
                                <option value="B.Sc Agriculture">
                                    B.Sc Agriculture
                                </option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Your Message (optional)"
                                className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-600"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-green-700 underline"
                                    >
                                        terms and conditions
                                    </a>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </section>

                {/* All Colleges Grid */}
                <section>
                    <h2 className="text-xl font-semibold text-green-700 mb-6 text-center">
                        All Colleges in Dehradun
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Dev Bhoomi Group of Institutions",
                                fee: "75 K - 70K",
                                img: "https://dummyimage.com/300x200/blue/fff&text=Dev+Bhoomi",
                                link: "#",
                            },
                            {
                                name: "DAV PG College",
                                fee: "70 K - 40K",
                                img: "https://dummyimage.com/300x200/teal/fff&text=DAV+PG",
                                link: "#",
                            },
                            {
                                name: "Shri Dev Bhoomi Institute of Education, Science & Technology",
                                fee: "85 K - 75K",
                                img: "https://dummyimage.com/300x200/green/fff&text=Shri+Dev+Bhoomi",
                                link: "#",
                            },
                            {
                                name: "Himgiri Zee Institute of Technology",
                                fee: "65 K - 60 K",
                                img: "https://dummyimage.com/300x200/red/fff&text=Himgiri+Zee",
                                link: "#",
                            },
                            {
                                name: "Uttarakhand University",
                                fee: "55 K - 50 K",
                                img: "https://dummyimage.com/300x200/gray/fff&text=Uttarakhand+Univ",
                                link: "#",
                            },
                            {
                                name: "Quantum University",
                                fee: "55 K - 40 K",
                                img: "https://dummyimage.com/300x200/purple/fff&text=Quantum",
                                link: "#",
                            },
                            {
                                name: "Doon IHSC (College of Horticulture & Animal Sciences)",
                                fee: "4.5 L - 8 K",
                                img: "https://dummyimage.com/300x200/indigo/fff&text=Doon+IHSC",
                                link: "#",
                            },
                            {
                                name: "Vruksha Institute",
                                fee: "75 K - 62 K",
                                img: "https://dummyimage.com/300x200/rose/fff&text=Vruksha+Institute",
                                link: "#",
                            },
                            {
                                name: "Seemta Group of Colleges",
                                fee: "3.4 L - 4.8 K",
                                img: "https://dummyimage.com/300x200/amber/fff&text=Seemta",
                                link: "#",
                            },
                            {
                                name: "LIT Institute of Technology",
                                fee: "4.8 L - 6.2 K",
                                img: "https://dummyimage.com/300x200/cyan/fff&text=LIT",
                                link: "#",
                            },
                            {
                                name: "SBS Institute of Management and Technology",
                                fee: "5.5 L - 5.8 K",
                                img: "https://dummyimage.com/300x200/brown/fff&text=SBS",
                                link: "#",
                            },
                            {
                                name: "Morni Group of Colleges",
                                fee: "2.5 L - 4.8 K",
                                img: "https://dummyimage.com/300x200/sky/fff&text=Morni",
                                link: "#",
                            },
                            {
                                name: "Doon Business School",
                                fee: "5 L - 3.4 K",
                                img: "https://dummyimage.com/300x200/lime/fff&text=Doon+BS",
                                link: "#",
                            },
                            {
                                name: "Combined PG Institute of Medical Science and Research (CPIMS)",
                                fee: "6.5 L - 4.5 K",
                                img: "https://dummyimage.com/300x200/violet/fff&text=CPIMS",
                                link: "#",
                            },
                            {
                                name: "Doon Institute of Medical Sciences (IMS)",
                                fee: "3 L - 4 K",
                                img: "https://dummyimage.com/300x200/olive/fff&text=IMS",
                                link: "#",
                            },
                            {
                                name: "Doon Group of Colleges",
                                fee: "3.5 L - 4 K",
                                img: "https://dummyimage.com/300x200/amber/fff&text=Doon+Group",
                                link: "#",
                            },
                            {
                                name: "Sanskar Bhagwan Singh University",
                                fee: "3.5 L - 6 K",
                                img: "https://dummyimage.com/300x200/pink/fff&text=Sanskar+BS",
                                link: "#",
                            },
                            {
                                name: "Sai Group of Institute (SGI)",
                                fee: "4 L - 4 K",
                                img: "https://dummyimage.com/300x200/gold/fff&text=SGI",
                                link: "#",
                            },
                            {
                                name: "DD College",
                                fee: "3.5 L - 3K",
                                img: "https://dummyimage.com/300x200/seagreen/fff&text=DD+College",
                                link: "#",
                            },
                            {
                                name: "University of Petroleum and Energy Studies - UPES, Dehradun",
                                fee: "45 L - 15 L",
                                img: "https://dummyimage.com/300x200/teal/fff&text=UPES",
                                link: "#",
                            },
                            {
                                name: "Uttarakhand College of Science & Technology (UCT), Haldwani",
                                fee: "3 L - 4 K",
                                img: "https://dummyimage.com/300x200/magenta/fff&text=UCT",
                                link: "#",
                            },
                            {
                                name: "UPES, School of Engineering, Dehradun",
                                fee: "4 L - 7.5 L",
                                img: "https://dummyimage.com/300x200/orange/fff&text=UPES+Engg",
                                link: "#",
                            },
                            {
                                name: "Doon Business School",
                                fee: "3.2 L - 2.7 L",
                                img: "https://dummyimage.com/300x200/bluegray/fff&text=Doon+BS",
                                link: "#",
                            },
                            {
                                name: "Institute of Media Management, Technology & Agribusiness, Dehradun",
                                fee: "3.5 L - 4 K",
                                img: "https://dummyimage.com/300x200/violet/fff&text=IMMT+Agri",
                                link: "#",
                            },
                            {
                                name: "Morniwala College of Education",
                                fee: "3 L - 1.2 L",
                                img: "https://dummyimage.com/300x200/blue/fff&text=Morniwala+CE",
                                link: "#",
                            },
                            {
                                name: "Himgiri Institute of Pharmacy and Research - DIPR, Dehradun",
                                fee: "3 L - 1.1 L",
                                img: "https://dummyimage.com/300x200/green/fff&text=DIPR",
                                link: "#",
                            },
                            {
                                name: "Shri Dev Bhoomi Institute of Education, Science & Technology",
                                fee: "3.9 L - 1.9 L",
                                img: "https://dummyimage.com/300x200/gray/fff&text=SDI",
                                link: "#",
                            },
                        ].map((college, i) => (
                            <div
                                key={i}
                                className="rounded-lg shadow-md overflow-hidden bg-white flex flex-col"
                            >
                                <img
                                    src={college.img}
                                    alt={college.name}
                                    className="w-full h-36 object-cover"
                                />
                                <div className="p-3 flex flex-col flex-grow">
                                    <h3 className="font-semibold text-sm md:text-base mb-1">
                                        {college.name}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Total Fees:{" "}
                                        <span className="font-semibold">
                                            {college.fee}
                                        </span>
                                    </p>
                                    <div className="mt-auto flex gap-2">
                                        <a
                                            href={college.link}
                                            className="px-3 py-1 text-green-700 border border-green-700 rounded text-xs text-center w-1/2 hover:bg-green-700 hover:text-white transition"
                                        >
                                            View Details
                                        </a>
                                        <button className="px-3 py-1 bg-amber-500 rounded text-white text-xs w-1/2 hover:bg-amber-600 transition">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Agriculture Course */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>About Agriculture Course</h2>
                    <p>
                        Agriculture courses cover a comprehensive range of
                        topics including agronomy, soil science, horticulture,
                        plant protection, food processing, and biotechnology.
                        Students can gain knowledge about modern farming
                        techniques, sustainable agriculture, agricultural
                        economics, and rural development.
                    </p>
                    <p>
                        Pursuing a B.Sc agriculture degree opens career
                        opportunities in government organizations, research
                        institutions, agricultural companies, and consultancy
                        roles. The curriculum emphasizes both theoretical
                        knowledge and practical field experience.
                    </p>
                </section>

                {/* Benefits */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>
                        Benefits of Studying in BSc Agriculture Colleges in
                        Dehradun
                    </h2>
                    <ul className="list-disc pl-6">
                        <li>
                            Access to expert faculty and advanced research
                            facilities.
                        </li>
                        <li>
                            Practical experience through well-equipped labs and
                            fieldwork.
                        </li>
                        <li>
                            Exposure to latest agricultural technologies and
                            sustainable practices.
                        </li>
                        <li>
                            Excellent placement opportunities in government and
                            private sectors.
                        </li>
                        <li>
                            Holistic development through seminars, workshops,
                            and internships.
                        </li>
                    </ul>
                </section>

                {/* Eligibility */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>
                        Eligibility Criteria for Agriculture Course in BSc
                        Agriculture Colleges in Dehradun
                    </h2>
                    <p>
                        Candidates must have completed 10+2 with science
                        subjects such as Physics, Chemistry, and
                        Biology/Agriculture or equivalent from a recognized
                        board.
                    </p>
                    <p>
                        Minimum cutoff marks vary by college but typically
                        should be at least 50-60% aggregate marks.
                    </p>
                </section>

                {/* Entrance Exams */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>
                        Entrance Exams for Agriculture Course in BSc Agriculture
                        Colleges in Dehradun
                    </h2>
                    <p>
                        Many colleges admit students based on their performance
                        in entrance exams like ICAR AIEEA, UG-AIEEA, or their
                        own college-level exams.
                    </p>
                    <p>
                        Good scores in these exams increase chances of admission
                        and scholarships.
                    </p>
                </section>

                {/* Some of the Best BSc Agriculture Colleges */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>
                        Some of The Best BSc Agriculture Colleges In Dehradun
                    </h2>
                    <p>
                        Choosing the right college is critical. Top colleges in
                        Dehradun include Doon IHSC, Himgiri Zee University,
                        Quantum University, and others known for their quality
                        curriculum and infrastructure.
                    </p>
                </section>

                {/* FAQ */}
                <section className="prose prose-green max-w-none px-0 py-6">
                    <h2>FAQs</h2>
                    <dl>
                        <dt className="font-semibold">
                            Q1: What are the eligibility criteria for BSc
                            Agriculture?
                        </dt>
                        <dd>
                            Candidates must have passed 10+2 with science
                            (Physics, Chemistry, Biology/Agri).
                        </dd>

                        <dt className="font-semibold mt-4">
                            Q2: What is the fee structure of BSc Agriculture
                            colleges in Dehradun?
                        </dt>
                        <dd>
                            Fees range from INR 50,000 to several lakhs
                            depending on the institution.
                        </dd>

                        <dt className="font-semibold mt-4">
                            Q3: Are online courses available for BSc
                            Agriculture?
                        </dt>
                        <dd>
                            Some universities offer online courses or distance
                            education in agriculture.
                        </dd>

                        <dt className="font-semibold mt-4">
                            Q4: What career options are available after BSc
                            Agriculture?
                        </dt>
                        <dd>
                            Graduates can become agronomists, researchers,
                            agricultural officers, teachers, consultants, and
                            entrepreneurs.
                        </dd>
                    </dl>
                </section>
            </div>
        </>
    );
}