import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navRef = useRef<HTMLDivElement | null>(null);
  const isHome = pathname === "/";
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toUTCString().split(" ")[4] ?? "";
      setTime(`${t} UTC`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!navRef.current) return;

      if (!navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-colors bg-background text-foreground border-b border-foreground"
      //   (isHome && !open
      //     ? "md:mix-blend-difference md:text-background bg-background text-foreground"
      //     : "bg-background text-foreground border-b border-foreground")
      }
    >
      <div ref={navRef}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="size-2 rounded-full bg-acid animate-pulse" />
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">DIVINITY CONSULT</div>
              <div className="text-xs opacity-60 hidden sm:block">Asset Integrity & Inspection</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {LINKS.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);

              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={[
                    "relative transition-colors",
                    active ? "text-acid" : "hover:text-acid",
                  ].join(" ")}
                >
                  {l.label}
                  {active && <span className="absolute -bottom-2 left-0 right-0 h-px bg-acid" />}
                </Link>
              );
            })}
          </nav>

          {/* Right Info */}
          <div className="hidden md:flex items-center gap-6 text-xs opacity-60">
            <span>{time}</span>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden border border-current/40 px-3 py-1 text-sm"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-96" : "max-h-0",
          ].join(" ")}
        >
          <div className="px-6 py-6 flex flex-col gap-6 border-t border-foreground/10 bg-background">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-lg font-medium hover:text-acid transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
