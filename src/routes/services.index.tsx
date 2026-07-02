import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Services — Divinity Consult",
      },
      {
        name: "description",
        content:
          "Independent asset integrity management, rope access inspection, QA/QC and advanced non-destructive testing services for critical industrial assets.",
      },
      {
        property: "og:title",
        content: "Services — Divinity Consult",
      },
      {
        property: "og:description",
        content:
          "Inspection, integrity engineering and rope-access execution under one roof.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div>
      <PageHero
        section="§ Services"
        title={
          <>
            Inspection and integrity services for
            <br />
           <span className="text-acid italic"> critical assets.</span>
          </>
        }
        intro="Divinity Consult provides independent inspection, asset integrity management, rope access execution, and advanced non-destructive testing services for onshore and offshore industrial assets. We support operators, EPCs and asset owners with compliant inspection and engineering assessment across the full asset lifecycle."
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
                  <span className="text-2xl group-hover:rotate-45 transition">
                    ↗
                  </span>
                </div>

                <div>
                  <h2 className="font-display uppercase text-4xl md:text-5xl mb-3">
                    {s.t}
                  </h2>
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