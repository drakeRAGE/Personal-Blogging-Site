# My Remix Blog

Welcome to my blogging platform built with Remix! This is a modern, fast, and easy-to-use blog that supports Markdown-based content creation.

## Adding a New Blog Post

To create a new blog post, follow these steps:

1. Create a new Markdown file in the `app/content` directory with a descriptive slug name (e.g., `my-new-post.md`)

2. Structure your post using this format:
   ```markdown
   # Your Post Title

   Your first paragraph will automatically become the post excerpt.

   Rest of your content goes here using Markdown formatting.
   ```

The system will automatically:
- Generate a unique ID for the post
- Extract the title from the H1 heading
- Use the first paragraph as the excerpt
- Use the current date as the post date
- Use the filename (without .md) as the slug

Your post will immediately appear on the homepage with proper styling and routing.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`:
- `build/server`
- `build/client`

## Features

- Automatic post loading through the `getBlogPosts()` function
- Clean and SEO-friendly URLs using post slugs
- Consistent styling and layout
- Markdown rendering for content
- Responsive design with Tailwind CSS
