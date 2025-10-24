export default function NewsPage() {
    const recentStories = [
        {
            title: "Arm Wrestling Championship organised by Graphic Era Sports Department",
            img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "The 1st President's Cup Arm Wrestling Championship witnessed enthusiastic participation...",
            date: "Sep 1, 2023",
        },
        {
            title: "Live Updates for NEET UG 2024 Registration: Steps to apply",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "NEET UG 2024 registration will start soon. Candidates are advised to prepare required documents...",
            date: "Sep 2, 2023",
        },
        {
            title: "Admissions Open 2023 at Graphic Era University",
            img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80",
            desc: "Admissions are now open for undergraduate and postgraduate programs at Graphic Era...",
            date: "Sep 3, 2023",
        },
    ];

    const otherPosts = [
        {
            title: "Scholarship program launched for 2023",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            title: "Sports meet 2023 highlights",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            title: "Convocation Ceremony 2023",
            img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
    ];

    const popularStories = [
        {
            title: "Annual Cultural Fest 2023 Highlights",
            img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            desc: "The annual fest was filled with colors, dance, and music...",
        },
        {
            title: "Scholarship Announcements for 2023",
            img: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            desc: "Students can now apply for merit-based and need-based scholarships...",
        },
        {
            title: "Placement Drive 2023 at Graphic Era",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
            desc: "Hundreds of students placed across top companies during campus recruitment...",
        },
        {
            title: "International Conference at GEU",
            img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
            desc: "Academicians and researchers from across the globe gathered...",
        },
    ];

    return (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                    Recent Stories
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        {recentStories.map((story, idx) => (
                            <article
                                key={idx}
                                className="flex flex-col md:flex-row gap-6 border-b pb-6"
                            >
                                <img
                                    src={story.img}
                                    alt={story.title}
                                    className="w-full md:w-52 h-40 object-cover rounded-lg shadow"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg hover:text-orange-600 transition">
                                        {story.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {story.date}
                                    </p>
                                    <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                                        {story.desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className="space-y-8">
                        <div className="rounded-lg overflow-hidden shadow">
                            <img
                                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="University Campus Banner"
                                className="w-full object-cover"
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3">
                                Other Posts
                            </h4>
                            <div className="space-y-4">
                                {otherPosts.map((post, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 items-start"
                                    >
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <p className="text-sm text-gray-700 hover:text-orange-600 transition line-clamp-2">
                                            {post.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="mt-16 bg-gray-50 py-10 px-6 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Most Popular Stories</h2>
                    <a
                        href="#"
                        className="text-sm text-orange-600 hover:underline"
                    >
                        See More →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularStories.map((story, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={story.img}
                                alt={story.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="mt-4 font-semibold text-lg hover:text-orange-600 transition line-clamp-2">
                                {story.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                {story.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
