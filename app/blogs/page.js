import BlogCard from "../components/BlogCard"
import blogs from "../data/blogs"

const BlogsPage = () => {
    return (
        <>
            <section className="text-center py-20 px-6">
                <h1 className="text-5xl font-bold mb-4">Insights & Articles</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Explore modern web development, performance, and architecture topics.
                </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </>
    )
}

export default BlogsPage