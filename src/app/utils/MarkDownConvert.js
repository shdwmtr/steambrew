"use client"

import {unified} from 'unified'

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

export async function MarkdownToHtml(markdown) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: false })
        .use(rehypeStringify, { allowDangerousHtml: false })
        .process(markdown)

    return String(result);
}