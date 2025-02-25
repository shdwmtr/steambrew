"use client"

import {unified} from 'unified'

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import rehypeSanitize from 'rehype-sanitize'
import { defaultSchema } from 'hast-util-sanitize'
import rehypeRaw from 'rehype-raw';

const sanitizeSchema = {
    ...defaultSchema,
    tagNames: defaultSchema.tagNames.filter(tag => tag !== 'script'), // Remove <script> from allowed tags
}

function addPathToImgSrc(options) {
    return (tree) => {

        visit(tree, 'element', (node, index, parent) => {
            console.log(node)
            if (node.tagName === 'img' && node.properties && node.properties.src) {
                // Check if the src is already a full URL
                if (!node.properties.src.startsWith('http')) {
                    node.properties.src = `https://raw.githubusercontent.com/${options.owner}/${options.repo}/HEAD/${node.properties.src}`
                }

                if (parent) {
                    const anchor = {
                        type: 'element',
                        tagName: 'a',
                        properties: {
                            href: node.properties.src,
                            target: '_blank',
                            rel: 'noreferrer',
                            'data-caption': node.properties.alt,
                        },
                        children: [{ ...node }]
                    };

                    // Remove data-fancybox attribute if image is too small like with badges
                    node.properties.onload = `if(this.naturalWidth >= 100 && this.naturalHeight >= 100) { this.parentElement.setAttribute('data-fancybox', 'gallery'); }`;
                    parent.children[index] = anchor;
                }
            }
        })
    }
}

export async function MarkdownToHtml(markdown, owner, repo) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, sanitizeSchema)
        .use(addPathToImgSrc, { owner, repo })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown);

    return String(result);
}