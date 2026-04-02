import Image from "next/image";
import Link from "next/link";
import blogs from "./data/blogs";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <div className="py-5">
      <div className="mb-5 py-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Discover Modern Web Development Insights
        </h2>
        <p className="text-gray-400 mb-6">
          Learn Next.js, React, performance optimization, and modern UI techniques through curated articles.
        </p>
      </div>
      <div className="relative w-full h-[550px] overflow-hidden rounded-md">
        <Image
          alt={`hero section image`}
          src={'/images/home/home.jpg'}
          className="object-cover group-hover:scale-110 transition duration-500"
          fill
        />
      </div>
      <div className="my-5 font-bold text-4xl border-b border-gray-400">
        Our Blogs
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs?.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="my-5 text-center">
        <Link href={'/blogs'} className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition">
          Explore Blogs
        </Link>
      </div>
    </div>
  );
}
