import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  section,
  title,
  intro,
  children,
}: {
  section: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative px-6 md:px-10 pt-40 pb-20 border-b border-foreground noise">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
        {section}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display uppercase text-[14vw] md:text-[10vw] leading-[0.9]!"
      >
        {title}
      </motion.h1>
      {intro && (
        <p className="mt-10 max-w-3xl text-lg md:text-2xl leading-tight">
          {intro}
        </p>
      )}
      {children}
    </section>
  );
}
