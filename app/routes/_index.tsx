import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
    // In a real app, you would fetch posts from a database or CMS
    const posts = [
        {
            id: 1,
            title: "Getting Started with Remix",
            excerpt: "Learn how to build modern web applications with Remix framework",
            date: "2025-03-16",
            slug: "getting-started-with-remix",
        },
        {
            id: 2,
            title: "Server-Side Rendering with Remix",
            excerpt: "Explore the benefits of server-side rendering in modern web applications",
            date: "2025-03-17",
            slug: "server-side-rendering-with-remix",
        },
        {
            id: 3,
            title: "Relationship Evaluation Model",
            excerpt: "Learn how to build a custom relationship evaluation model using machine learning techniques",
            date: "2025-03-19",
            slug: "relationship-evaluation-model",
        }
    ];

    return json({ posts });
};

export default function BlogIndex() {
    const { posts } = useLoaderData();

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Welcome to My Blog
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Thoughts, ideas, and tutorials about web development, design, and more.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post: any) => (
                        <article
                            key={post.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            <div className="p-6">
                                <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {post.date}
                                </time>
                                <h2 className="text-xl font-bold mt-3 mb-4 text-gray-900 dark:text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
                                    <Link to={`/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/${post.slug}`}
                                    className="inline-flex items-center font-semibold text-primary-light dark:text-primary-dark hover:opacity-80 transition-opacity"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}