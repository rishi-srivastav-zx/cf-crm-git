export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 ml-64">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>© 2025 Rishi Srivastav. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-700">
                                Documentation
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                Support
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                API
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
