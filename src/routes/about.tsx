import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Divinity Consult" },
      {
        name: "description",
        content:
          "Divinity Consult is an independent asset integrity, NDT and rope-access inspection firm built by inspectors and engineers.",
      },
      { property: "og:title", content: "About — Divinity Consult" },
      { property: "og:description", content: "Independent. Certified. On rope by sunrise." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  {
    n: "01",
    t: "Independent",
    d: "We operate with complete technical independence. Our inspection findings, reports, and recommendations are issued solely in the interest of asset integrity, safety, and regulatory compliance — free from contractor or commercial influence.",
  },
  {
    n: "02",
    t: "Certified",
    d: "All inspections are performed by personnel holding recognised international certifications, including PCN, ASNT, IRATA, and FROSIO. Qualifications are current, traceable, and aligned with project-specific requirements.",
  },
  {
    n: "03",
    t: "Operationally Responsive",
    d: "We support planned campaigns, shutdowns, and unplanned inspections with rapid mobilisation. Rope access and inspection teams are deployed efficiently across onshore and offshore environments to minimise operational downtime.",
  },
  {
    n: "04",
    t: "Engineering-Led",
    d: "Inspection data is translated into actionable insight. Our services extend beyond detection to include integrity assessment, fitness-for-service evaluation, and practical engineering recommendations.",
  },
];

const TIMELINE = [
  {
    y: "2014",
    t: "Divinity Consult established by rope access technicians and NDT inspectors to deliver independent inspection services.",
  },
  {
    y: "2017",
    t: "Approved IRATA member company and awarded initial offshore inspection framework contracts.",
  },
  {
    y: "2019",
    t: "Inspection engineering capability expanded to include risk-based inspection (RBI) and fitness-for-service assessments in accordance with API and international standards.",
  },
  {
    y: "2022",
    t: "Advanced NDT services introduced, including phased array ultrasonic testing (PAUT), time-of-flight diffraction (TOFD), and engineering critical assessments (ECA).",
  },
  {
    y: "2025",
    t: "Inspection and integrity services delivered across multiple regions with a multidisciplinary team of certified inspectors, engineers, and rope access technicians.",
  },
];

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        section="§ About"
        title={
          <>
            Built by
            <br />
            inspectors. <span className="italic text-acid">Trusted by assets owners</span>
          </>
        }
        intro="Divinity Consult is an independent asset integrity, non-destructive testing (NDT), and rope access inspection consultancy delivering technically defensible inspection data for critical onshore and offshore assets.

Established by field inspectors and inspection engineers, we provide impartial assessment, certified execution, and engineering-led recommendations that support safe operation, regulatory compliance, and informed asset management decisions. Our work is grounded in international standards and executed by certified personnel with proven offshore and industrial experience."
      />

      <section className="px-6 md:px-10 py-20 border-b border-foreground">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-10">
          § Values
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-foreground">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-r border-b border-foreground p-8 min-h-[220px]"
            >
              <div className="font-mono text-xs uppercase mb-6">{v.n}</div>
              <h3 className="font-display uppercase text-4xl md:text-5xl mb-3">{v.t}</h3>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 border-b border-foreground">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-10">
          § Timeline
        </div>
        <ul className="space-y-px bg-foreground">
          {TIMELINE.map((row, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 items-center bg-background p-6 md:p-8"
            >
              <div className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl">
                {row.y}
              </div>
              <div className="col-span-9 md:col-span-10 text-lg md:text-2xl">{row.t}</div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 py-20 bg-acid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display uppercase text-[12vw] md:text-[8vw] leading-[0.85]">
            Talk to a <span className="italic">technician.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-background hover:text-foreground transition border border-foreground self-start md:self-end"
          >
            Speak with a certified <span className="italic">inspection professional</span>{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}
