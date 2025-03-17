import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogPosts, type Post } from "~/data/blogPosts";
import { parseMarkdown } from "~/utils/markdown";

const blogPosts = getBlogPosts();

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        throw new Response("Not Found", { status: 404 });
    }

    return json({ post });
};

export default function BlogPost() {
    const { post } = useLoaderData<typeof loader>();

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-primary-light dark:text-primary-dark hover:opacity-80 transition-opacity mb-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Blog
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {post.title}
                    </h1>

                    <time className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                        {post.date}
                    </time>
                </div>

                <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 prose-a:text-blue-600 prose-pre:bg-gray-100 prose-pre:text-gray-800 prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-gray-200 dark:prose-a:text-blue-400 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-200 dark:prose-code:text-gray-200 dark:prose-code:bg-gray-800">
                    <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) || '' }} />
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <Link
                        to="/"
                        className="inline-flex items-center font-semibold text-primary-light dark:text-primary-dark hover:opacity-80 transition-opacity"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to all articles
                    </Link>
                </div>
            </div>
        </div>
    );
}