// src/components/FAQSection.tsx

import { motion } from "framer-motion";
import { FAQ } from "@/lib/faqs";

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({ title = "FAQs", faqs }: FAQSectionProps) {
  if (!faqs.length) return null;

  return (
    <section className="px-6 md:px-10 py-24 border-b border-foreground">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-10">
        § FAQs
      </div>

      <div className="max-w-4xl space-y-px bg-foreground">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-background p-6 md:p-8"
          >
            <h3 className="font-display uppercase text-2xl md:text-3xl mb-3 leading-normal!">
              {f.q}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{f.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}