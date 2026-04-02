import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 sticky backdrop-blur top-0 z-50 ">

            {/* <!-- Logo --> */}
            <h1 className="text-xl font-bold tracking-wide">
                NovaStart
            </h1>

            {/* <!-- Links --> */}
            <div className="flex items-center space-x-8 text-sm">
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
                <Link href="/about" className="hover:text-blue-400 transition">About</Link>
                <Link href="/blogs" className="hover:text-blue-400 transition">Blogs</Link>
            </div>
        </nav>
    )
}

export default Navbar