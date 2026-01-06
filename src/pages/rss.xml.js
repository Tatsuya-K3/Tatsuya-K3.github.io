import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { getProfile } from '../lib/constants';
const parser = new MarkdownIt();

export async function GET(context) {
  const profile = getProfile();
  const blog = await getCollection("blog");
  return rss({
    title: `${profile.name} Blog`,
    description: `Blog posts by ${profile.name}`,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
