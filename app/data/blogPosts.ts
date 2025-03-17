import fs from 'fs';
import path from 'path';

export type Post = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    content: string;
};

// Single export function for all blog post data
export function getBlogPosts(): Post[] {
    const contentDir = path.join(process.cwd(), 'app', 'content');
    const posts: Post[] = [];

    // Read markdown files from content directory
    const files = fs.readdirSync(contentDir);

    files.forEach((file, index) => {
        if (file.endsWith('.md')) {
            const filePath = path.join(contentDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const slug = file.replace('.md', '');

            // Extract title and first paragraph for excerpt
            const titleMatch = content.match(/^#\s+(.+)$/m);
            const excerptMatch = content.match(/\n\n([^#\n].+?)\n/);

            posts.push({
                id: index + 1,
                title: titleMatch ? titleMatch[1] : 'Untitled',
                excerpt: excerptMatch ? excerptMatch[1] : '',
                date: new Date().toISOString().split('T')[0], // You might want to add date in frontmatter
                slug,
                content
            });
        }
    });

    return posts;
}