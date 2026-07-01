import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  loader: () => {
    if (typeof window === "undefined") {
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://divinityconsult.org/</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://divinityconsult.org/about</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://divinityconsult.org/services</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://divinityconsult.org/services/ndt-advanced</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://divinityconsult.org/services/qa-qc</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://divinityconsult.org/contact</loc>
    <lastmod>2026-07-01T11:12:52.621Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

      throw new Response(sitemapXml, {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }
  },
  component: () => null,
});