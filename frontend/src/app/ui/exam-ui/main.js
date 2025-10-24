"use client";

export default function BlogPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
            {/* ================= Recent Stories ================= */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                    Recent Stories
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Stories List */}
                    <div className="lg:col-span-2 space-y-8">
                        {[
                            {
                                title: "The 1st President's Cup Arm Wrestling Championship organised by Graphic Era Sports Department",
                                img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                                desc: "The 1st President's Cup Arm Wrestling Championship organised by Graphic Era Sports Department with the participation of 100+ students...",
                                date: "Sep 1, 2023",
                            },
                            {
                                title: "Live Updates for NEET UG 2024 Registration: Steps to apply SOON to begin application process",
                                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                                desc: "NEET UG 2024 registration process will begin soon, candidates are advised to keep documents ready...",
                                date: "Sep 2, 2023",
                            },
                            {
                                title: "Graphic Era (Deemed to be University) Admissions Open 2023",
                                img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80",
                                desc: "Graphic Era has opened admissions for 2023 across various undergraduate and postgraduate programs...",
                                date: "Sep 3, 2023",
                            },
                        ].map((story, idx) => (
                            <article
                                key={idx}
                                className="flex flex-col md:flex-row gap-4 border-b pb-4"
                            >
                                <img
                                    src={story.img}
                                    alt={story.title}
                                    className="w-full md:w-40 h-32 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg hover:text-orange-600 transition">
                                        {story.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {story.date}
                                    </p>
                                    <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                                        {story.desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="space-y-6">
                        {/* Ad Box */}
                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                            <img
                                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="University Campus Banner"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Other Posts */}
                        <div>
                            <h4 className="text-lg font-semibold mb-3">
                                Other Posts
                            </h4>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "The 1st President's Cup Arm Wrestling...",
                                        img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                                    },
                                    {
                                        title: "Live Updates for NEET UG 2024...",
                                        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                                    },
                                    {
                                        title: "Admissions Open for 2023",
                                        img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80",
                                    },
                                ].map((post, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 items-start"
                                    >
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <p className="text-sm text-gray-700 hover:text-orange-600 transition">
                                            {post.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= Most Popular ================= */}
            <section className="mt-16 bg-gray-50 py-10 px-4 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Most Popular Stories</h2>
                    <a
                        href="#"
                        className="text-sm text-orange-600 hover:underline"
                    >
                        See More →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "The 1st President's Cup Arm Wrestling Championship organised...",
                            img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            desc: "The championship witnessed massive participation...",
                        },
                        {
                            title: "Live Updates for NEET UG 2024 Registration...",
                            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            desc: "NEET UG registration to begin soon with new process...",
                        },
                        {
                            title: "Graphic Era (Deemed to be University) Admissions Open 2023",
                            img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80",
                            desc: "Admissions open across all major disciplines...",
                        },
                    ].map((story, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={story.img}
                                alt={story.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="mt-4 font-semibold text-lg hover:text-orange-600 transition">
                                {story.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                {story.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
