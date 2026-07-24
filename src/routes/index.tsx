import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { SERVICES } from "@/lib/services";
import { FAQS } from "@/lib/faqs";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divinity Consult — Asset Integrity, NDT & Rope Access Inspection" },
      {
        name: "description",
        content:
          "Divinity Consult delivers QA/QC, asset integrity management, rope access inspection, and conventional & advanced NDT services for critical industrial assets.",
      },
      {
        name: "keywords",
        content:
          "asset integrity management, rope access inspection, NDT services, non destructive testing, QA QC inspection, advanced NDT, PAUT, TOFD, industrial inspection",
      },
      {
        property: "og:title",
        content: "Divinity Consult — Asset Integrity, NDT & Rope Access Inspection",
      },
      {
        property: "og:description",
        content:
          "QA/QC, asset integrity management, rope access, and advanced NDT for the assets that can't afford to fail.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://divinityconsult.org/" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Divinity Consult",
          description:
            "Asset integrity management, QA/QC, rope access inspection, and conventional & advanced non-destructive testing (NDT) services.",
          areaServed: "Worldwide",
          serviceType: [
            "Asset Integrity Management",
            "Quality Assurance and Quality Control",
            "Rope Access Inspection",
            "Conventional Non-Destructive Testing",
            "Advanced Non-Destructive Testing",
            "Inspection Engineering",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { k: "400k+", v: "vertical metres inspected" },
  { k: "0", v: "lost time incidents recorded" },
  { k: "14", v: "countries of operation" },
  { k: "40+", v: "certified inspection technicians" },
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  const faqs = FAQS.filter((f) => f.scope === "global");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -200]);
  const heroRot = useTransform(scrollYProgress, [0, 1], [0, -8]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 12, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 12, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w - 0.5) * 40);
      my.set((e.clientY / h - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="relative bg-background text-foreground noise overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 pt-32"
      >
        <motion.div
          style={{ x: sx, y: sy }}
          className="absolute right-6 md:right-10 top-32 max-w-xs font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-foreground p-3 hidden sm:block"
        >
          <div className="flex justify-between mb-2">
            <span>FILE</span>
            <span>DC-001</span>
          </div>
          <div className="opacity-70">
            Operatives on rope: <span className="text-foreground">07</span>
          </div>
          <div className="opacity-70">
            Altitude max today: <span className="text-foreground">238 m</span>
          </div>
          <div className="opacity-70">
            Wind: <span className="text-foreground">14 kt SW</span>
          </div>
          <div className="mt-2 pt-2 border-t border-foreground/40">
            Status: <span className="text-acid">ON ROPE</span>
          </div>
        </motion.div>

        <motion.h1
          style={{ y: heroY, rotate: heroRot }}
          className="font-display uppercase text-[18vw] md:text-[6.5rem] lg:text-[10rem] leading-[0.9]! md:leading-[0.9]"
        >
          Industrial
          <br />
          inspection
          <br />
          <span className="italic text-acid">
            without
            <br />
            compromise.
          </span>
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <p className="md:col-span-2 text-lg md:text-2xl leading-tight">
            Divinity Consult delivers asset integrity management, QA/QC inspection, rope access
            services, and advanced non-destructive testing for critical industrial infrastructure.
            We support operators in identifying risk, maintaining regulatory compliance, and
            extending asset life through accurate inspection data and engineering-led assessment.
          </p>
          <div className="flex md:justify-end items-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-acid hover:text-foreground transition"
            >
              <span>Request a technical assessment</span>
              <span className="group-hover:translate-x-1 transition">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex justify-between border-t border-foreground pt-3">
          <span>↓ Explore our inspection capability.</span>
          <span>EST. 2014 — IRATA 7891</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-foreground overflow-hidden bg-foreground text-background py-6">
        <div className="marquee-track font-display text-[9vw] uppercase whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8 flex items-center gap-8">
              ROPE ACCESS INSPECTION <span className="text-acid">✦</span> ADVANCED NDT{" "}
              <span className="text-acid">✦</span> ASSET INTEGRITY{" "}
              <span className="text-acid">✦</span> QA/QC <span className="text-acid">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 md:px-10 py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              § 02 — Services
            </div>
            <h2 className="font-display uppercase text-6xl md:text-8xl">
              Our inspection
              <br />
              services.
            </h2>
          </div>
          <Link
            to="/services"
            className="font-mono text-xs uppercase tracking-widest underline decoration-acid decoration-4 hover:text-acid"
          >
            All services ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "var(--color-acid)" }}
              className="group relative border-r border-b border-foreground"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="p-8 min-h-[280px] flex flex-col justify-between cursor-pointer h-full"
              >
                <div className="flex justify-between font-mono text-xs uppercase">
                  <span>{s.n}</span>
                  <span className="text-2xl group-hover:rotate-45 transition">↗</span>
                </div>
                <div>
                  <h3 className="font-display uppercase text-4xl md:text-5xl mb-3">{s.t}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground">
                    {s.short}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifest" className="relative bg-foreground text-background">
        <div className="px-6 md:px-10 py-32">
          <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-6">
            § 03 — Manifesto
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-display text-3xl  md:text-6xl leading-normal!  max-w-6xl"
          >
            Access limitations should never reduce inspection quality. Divinity Consult replaces
            scaffolding dependency, extended shutdowns, and assumption-based reporting with
            certified rope access execution, advanced non-destructive testing, and engineering
            judgement. The result is accurate, repeatable inspection data delivered safely in
            high-risk and hard-to-access environments.
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-10 py-32 border-b border-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 flex flex-col justify-between min-h-[200px]"
            >
              <div className="font-mono text-xs uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-display text-7xl md:text-9xl">{s.k}</div>
                <div className="font-mono text-xs uppercase text-muted-foreground mt-2">{s.v}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="relative px-6 md:px-10 py-32 bg-acid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display uppercase text-[14vw] md:text-[10vw] leading-[0.9]!">
            Safeguard your
            <br />
            <span className="italic">critical assets.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-background hover:text-foreground transition border border-foreground self-start md:self-end"
          >
            Request an inspection assessment ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
