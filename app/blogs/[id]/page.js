import blogs from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = ({ params }) => {
    const { id } = params;
    const blog = blogs.find(b => b.id == id);

    return (
        <>
            {/* <!-- Hero Image --> */}
            <div className="relative w-full h-[350px] overflow-hidden">
                <Image
                    alt={`image of ${blog?.title}`}
                    src={blog?.image}
                    className="object-cover group-hover:scale-110 transition duration-500"
                    fill
                />
            </div>

            {/* <!-- Content --> */}
            <article className="max-w-4xl mx-auto px-6 py-16">

                {/* <!-- Meta --> */}
                <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                    <span>{blog?.category}</span>
                    <span>{blog?.readTime}</span>
                </div>

                {/* <!-- Title --> */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {blog?.title}
                </h1>

                {/* <!-- Author --> */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div>
                        <p className="text-sm">{blog?.author}</p>
                        <p className="text-xs text-gray-500">{blog?.date}</p>
                    </div>
                </div>

                {/* <!-- Content --> */}
                <div className="space-y-6 text-gray-300 leading-relaxed">

                    <p>
                        {blog?.content}
                    </p>
                </div>

                {/* <!-- Back --> */}
                <Link href="/blogs" className="inline-block mt-12 text-blue-400 hover:underline">
                    ← Back to Blog
                </Link>

            </article>
        </>
    )
}

export default DetailsPage