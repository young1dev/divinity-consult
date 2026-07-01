import { createAPIFileRoute } from "@tanstack/start/api";

export const Route = createAPIFileRoute("/robots.txt")({
  GET: async () => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://divinityconsult.org/sitemap.xml`;

    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=86400",
      },
    });
  },
});