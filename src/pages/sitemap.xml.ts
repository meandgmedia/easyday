import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

// Static routes, with a rough priority hint for search engines.
// Add a new route here whenever a new top-level page is created.
const staticRoutes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  { path: "/mobile-notary", priority: "0.9" },
  { path: "/remote-online-notary", priority: "0.9" },
  { path: "/loan-signings", priority: "0.7" },
  { path: "/apostille-services", priority: "0.5" },
  { path: "/schedule", priority: "0.9" },
  { path: "/blog", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
  { path: "/privacy-policy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const blogRoutes = posts.map((post) => ({
    path: `/blog/${post.id}`,
    priority: "0.6",
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString(),
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const urlEntries = allRoutes
    .map((route) => {
      const lastmodTag = "lastmod" in route ? `\n    <lastmod>${route.lastmod}</lastmod>` : "";
      return `  <url>
    <loc>${SITE.url}${route.path}</loc>${lastmodTag}
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
