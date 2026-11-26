import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const site = 'https://arklogs-motion.vercel.app';
const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const items = posts.map(({ id, data }) => {
    const link = `${site}/blog/${encodeURIComponent(id)}/`;
    return `<item><title>${escapeXml(data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${data.date.toUTCString()}</pubDate><description>${escapeXml(data.description)}</description></item>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Arklogs</title><link>${site}/blog/</link><description>Articles and updates from the portfolio.</description>${items.join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
  );
};
