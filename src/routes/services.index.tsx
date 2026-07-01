import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/services";
import { FAQS } from "@/lib/faqs";
import { buildFAQSchema } from "@/lib/faqSchema";

export const Route = createFileRoute("/services/")({
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const faqs = FAQS.filter((f) => f.scope === s?.slug);

    return {
      meta: [
        { title: `${s?.t || "Service"} — Divinity Consult` },
        { name: "description", content: s?.long },
        { property: "og:title", content: "Services — Divinity Consult" },
        {
          property: "og:description",
          content: "Inspection and integrity services for critical assets.",
        },
      ],
      scripts: faqs.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(buildFAQSchema(faqs)),
            },
          ]
        : [],
    };
  },
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        section="§ Services"
        title={
          <>
            Inspection and integrity services for
            <br />
            <span className="italic text-acid">critical assets.</span>
          </>
        }
        intro="Divinity Consult provides independent inspection, asset integrity and rope-access services for onshore and offshore industrial assets. We support operators, EPCs and asset owners with compliant inspection, non-destructive testing and engineering assessment across the full asset lifecycle."
      />

      <section className="px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "var(--color-acid)" }}
              className="group border-r border-b border-foreground"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="p-8 min-h-[320px] flex flex-col justify-between"
              >
                <div className="flex justify-between font-mono text-xs uppercase">
                  <span>{s.n}</span>
                  <span className="text-2xl group-hover:rotate-45 transition">↗</span>
                </div>
                <div>
                  <h2 className="font-display uppercase text-4xl md:text-5xl mb-3">{s.t}</h2>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground mb-4">
                    {s.short}
                  </p>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                    {s.industries.slice(0, 3).join(" · ")}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
