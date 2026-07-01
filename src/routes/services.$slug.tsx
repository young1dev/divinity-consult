import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { getService, SERVICES } from "@/lib/services";
import { FAQS } from "@/lib/faqs";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.t} — Divinity Consult` : "Service — Divinity Consult";
    const desc = s?.long ?? "Inspection & integrity services.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-7xl uppercase">404</h1>
        <p className="font-mono text-xs uppercase mt-3 mb-6">Service not found</p>
        <Link to="/services" className="underline decoration-acid decoration-4">
          All services
        </Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const faqs = FAQS.filter((f) => f.scope === s.slug);

  return (
    <div className="bg-background text-foreground">
      <PageHero section={`§ Service ${s.n}`} title={<>{s.t}</>} intro={s.long} />

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-foreground">
        {/* IMAGE */}
        <div className="relative w-full h-[420px] lg:h-full overflow-hidden border border-foreground">
          {s.image ? (
            <motion.img
              src={s.image}
              alt={s.t}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs uppercase text-muted-foreground">
              Image placeholder
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12">
          {/* Capabilities */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Capabilities
            </div>
            <ul className="space-y-3">
              {s.capabilities.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 border-b border-foreground/30 pb-3"
                >
                  <span className="font-mono text-xs opacity-50 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg">{c}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Industries + CTA */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Industries
            </div>
            <div className="flex flex-wrap gap-2">
              {s.industries.map((i) => (
                <span
                  key={i}
                  className="border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest"
                >
                  {i}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-acid hover:text-foreground transition"
              >
                Scope this with us ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="px-6 md:px-10 py-20">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Related services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-foreground">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$slug"
              params={{ slug: o.slug }}
              className="border-r border-b border-foreground p-8 hover:bg-acid transition group"
            >
              <div className="flex justify-between font-mono text-xs uppercase mb-6">
                <span>{o.n}</span>
                <span className="text-2xl group-hover:rotate-45 transition">↗</span>
              </div>
              <h3 className="font-display uppercase text-3xl">{o.t}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
