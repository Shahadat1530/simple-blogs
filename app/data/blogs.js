const blogs = [
    {
        "id": 1,
        "title": "Understanding Server Components in Modern Web Apps",
        "excerpt": "Learn how server components improve performance and reduce bundle size.",
        "content": "Server Components allow developers to render UI on the server, reducing the JavaScript sent to the client...",
        "author": "Nova Team",
        "date": "2026-01-12",
        "category": "Next.js",
        "readTime": "5 min",
        "image": "https://plus.unsplash.com/premium_photo-1764688953383-afbef636b938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNlcnZlciUyMENvbXBvbmVudHN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 2,
        "title": "Streaming UI Explained with Practical Examples",
        "excerpt": "Discover how streaming UI improves UX with progressive rendering.",
        "content": "Streaming allows parts of UI to load gradually instead of waiting for the full page...",
        "author": "Nova Team",
        "date": "2026-01-18",
        "category": "React",
        "readTime": "6 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 3,
        "title": "Dynamic Routing in Next.js 14 Made Simple",
        "excerpt": "A beginner-friendly guide to dynamic routing.",
        "content": "Dynamic routes allow pages like /blog/[slug] to be generated from data...",
        "author": "Nova Team",
        "date": "2026-02-02",
        "category": "Next.js",
        "readTime": "4 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 4,
        "title": "Error Handling Strategies in Modern Applications",
        "excerpt": "Handle errors gracefully using modern tools.",
        "content": "Error handling is essential for stability. Next.js provides error.js...",
        "author": "Nova Team",
        "date": "2026-02-10",
        "category": "Best Practices",
        "readTime": "5 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 5,
        "title": "Optimizing Performance in React Applications",
        "excerpt": "Improve performance using modern techniques.",
        "content": "Use memoization, lazy loading, and code splitting to boost performance...",
        "author": "Nova Team",
        "date": "2026-02-20",
        "category": "React",
        "readTime": "7 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 6,
        "title": "Introduction to Tailwind CSS for Beginners",
        "excerpt": "Start building fast UIs with Tailwind CSS.",
        "content": "Tailwind is a utility-first CSS framework that helps build UI quickly...",
        "author": "Nova Team",
        "date": "2026-02-25",
        "category": "CSS",
        "readTime": "5 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 7,
        "title": "Building Scalable Folder Structures in Next.js",
        "excerpt": "Organize your project like a pro.",
        "content": "Proper folder structure helps maintain scalability and readability...",
        "author": "Nova Team",
        "date": "2026-03-01",
        "category": "Architecture",
        "readTime": "6 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 8,
        "title": "Client vs Server Components Explained Clearly",
        "excerpt": "Understand the difference with simple examples.",
        "content": "Client components run in browser while server components run on server...",
        "author": "Nova Team",
        "date": "2026-03-05",
        "category": "Next.js",
        "readTime": "5 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 9,
        "title": "Using Suspense for Better User Experience",
        "excerpt": "Enhance UX with loading boundaries.",
        "content": "Suspense lets you show fallback UI while components are loading...",
        "author": "Nova Team",
        "date": "2026-03-10",
        "category": "React",
        "readTime": "4 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 10,
        "title": "Deploying Next.js Applications the Right Way",
        "excerpt": "Learn best practices for deployment.",
        "content": "Deploy using Vercel or other platforms with proper environment setup...",
        "author": "Nova Team",
        "date": "2026-03-15",
        "category": "Deployment",
        "readTime": "6 min",
        "image": "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyZWFtaW5nJTIwVUklMjBFeHBsYWluZWQlMjB3aXRoJTIwUHJhY3RpY2FsJTIwRXhhbXBsZXN8ZW58MHx8MHx8fDA%3D"
    }
]

export default blogs;