import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ blog }) => {
    return (
        <div
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

            <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                    alt={`image of ${blog?.title}`}
                    src={blog?.image}
                    className="object-cover group-hover:scale-110 transition duration-500"
                    fill
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>{blog?.category}</span>
                    <span>{blog?.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                    {blog?.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                    {blog?.excerpt}
                </p>

                <Link href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-blue-400 hover:gap-2 transition-all">
                    Read Article →
                </Link>
            </div>

        </div>
    )
}

export default BlogCard