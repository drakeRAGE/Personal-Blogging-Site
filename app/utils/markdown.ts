import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export function parseMarkdown(content: string): string {
    // Parse markdown to HTML
    const rawHtml = marked(content);

    // Sanitize HTML to prevent XSS attacks
    const cleanHtml = DOMPurify.sanitize(rawHtml, { RETURN_DOM_FRAGMENT: false }).toString();

    return cleanHtml;
}