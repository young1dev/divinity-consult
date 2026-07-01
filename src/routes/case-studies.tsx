import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      {
        title: "Case Studies — Inspection, NDT & Rope Access Projects | Divinity Consult",
      },
      {
        name: "description",
        content:
          "Representative inspection, non-destructive testing (NDT), asset integrity and rope-access projects delivered across offshore energy, industrial processing, renewables, civil infrastructure and telecommunications.",
      },
      {
        property: "og:title",
        content: "Case Studies — Divinity Consult",
      },
      {
        property: "og:description",
        content:
          "Representative inspection, NDT and rope-access projects delivered on critical onshore and offshore assets.",
      },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

const CASES = [
  {
    y: "2025",
    c: "BNK Tower, Rotterdam",
    w: "Façade re-glazing · 142 m · 19 days",
    h: "238 m",
    tag: "Rope Access",
  },
  {
    y: "2025",
    c: "North Sea Platform K-7",
    w: "NDT inspection + spot welding on rope",
    h: "62 m above sea",
    tag: "NDT",
  },
  {
    y: "2024",
    c: "Vasto Wind Farm",
    w: "Blade leading-edge repair · 24 turbines",
    h: "165 m",
    tag: "Rope Access",
  },
  {
    y: "2024",
    c: "Refinery Crude Unit, Antwerp",
    w: "API 579 Level 2 FFS — sulphur condenser overpressure event",
    h: "—",
    tag: "Integrity",
  },
  {
    y: "2024",
    c: "Lisbon Cathedral",
    w: "Stone consolidation + bird abatement",
    h: "84 m",
    tag: "Rope Access",
  },
  {
    y: "2023",
    c: "LNG Loading Arm, Milford Haven",
    w: "PAUT corrosion mapping under insulation",
    h: "—",
    tag: "NDT",
  },
  {
    y: "2023",
    c: "Telecom Mast Σ-12",
    w: "Antenna replacement and ice mitigation works",
    h: "212 m",
    tag: "Rope Access",
  },
];

function CaseStudies() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        section="§ Case Studies"
        title={
          <>
            Proven work.
            <br />
           <span className="italic text-acid">Critical assets.</span>
          </>
        }
        intro="A selection of inspection, non-destructive testing (NDT), asset integrity and rope-access projects delivered on high-risk assets across offshore energy, industrial facilities, renewables, civil structures and telecommunications."
      />

      <section className="px-6 md:px-10 py-20">
        <div className="space-y-px bg-foreground">
          {CASES.map((row, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ x: 12, backgroundColor: "var(--color-acid)" }}
              className="grid grid-cols-12 gap-4 items-center bg-background p-6 md:p-8 group cursor-pointer"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs">{row.y}</div>
              <div className="col-span-10 md:col-span-5 font-display uppercase text-2xl md:text-4xl">
                {row.c}
              </div>
              <div className="col-span-7 md:col-span-4 text-sm text-muted-foreground group-hover:text-foreground">
                {row.w}
              </div>
              <div className="col-span-4 md:col-span-1 font-mono text-[10px] uppercase tracking-widest text-right">
                {row.tag}
              </div>
              <div className="col-span-1 text-right text-2xl">↗</div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-foreground text-background">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display uppercase text-[10vw] md:text-[7vw] leading-[0.9]!">
            Have an asset
            <br />
            requiring <span className="italic text-acid">inspection?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-acid text-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-background transition self-start md:self-end"
          >
            Brief us ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
