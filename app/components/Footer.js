import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 mt-20">

            <div className="px-8 py-12 grid md:grid-cols-3 gap-8">

                {/* <!-- Brand --> */}
                <div>
                    <h2 className="text-xl font-bold mb-3">NovaStart</h2>
                    <p className="text-gray-400 text-sm">
                        Building modern web experiences with speed and scalability.
                    </p>
                </div>

                {/* <!-- Links --> */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/blogs" className="hover:text-blue-400">Blogs</Link></li>
                    </ul>
                </div>

                {/* <!-- Newsletter --> */}
                <div>
                    <h3 className="font-semibold mb-3">Subscribe</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Get latest updates and articles.
                    </p>

                    <div className="flex">
                        <input type="email" placeholder="Your email"
                            className="w-full px-3 py-2 rounded-l bg-gray-900 border border-gray-700 focus:outline-none" />
                        <button className="px-4 bg-blue-600 rounded-r hover:bg-blue-500">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* <!-- Bottom --> */}
            <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
                © 2026 NovaStart. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer