import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://divinityconsult.org/#organization",
        name: "Divinity Consult",
        url: "https://divinityconsult.org",
        email: "hello@divinityconsult.org",
        telephone: "+44-20-7946-0710",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Unit 4, Vauxhall Arches",
          addressLocality: "London",
          postalCode: "SE11",
          addressCountry: "GB",
        },
        sameAs: [],
      },
      {
        "@type": "WebPage",
        "@id": "https://divinityconsult.org/#legal",
        name: "Legal Information",
        isPartOf: {
          "@id": "https://divinityconsult.org/#organization",
        },
        hasPart: [
          {
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://divinityconsult.org/privacy-policy",
          },
          {
            "@type": "WebPage",
            name: "Terms of Service",
            url: "https://divinityconsult.org/terms",
          },
        ],
      },
    ],
  };
  

  return (
    <footer className="bg-foreground text-background px-6 md:px-10 py-16 border-t border-foreground text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* COMPANY */}
        <div>
          <div className="font-display uppercase text-xl mb-4">Divinity Consult</div>
          <p className="text-muted-foreground leading-relaxed">
            Independent asset integrity, non-destructive testing (NDT), and rope-access inspection
            services for safety-critical onshore and offshore infrastructure. We deliver defensible
            inspection data that supports compliance, risk reduction, and informed engineering
            decisions.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest mb-4">Navigate</div>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest mb-4">Contact</div>
          <ul className="space-y-2">
            <li>
              <a href="mailto:hello@divinityconsult.org">hello@divinityconsult.org</a>
            </li>
            <li>+44 (0)20 7946 0710</li>
            <li>
              Unit 4, Vauxhall Arches
              <br />
              London SE11, United Kingdom
            </li>
          </ul>
        </div>

        {/* COMPLIANCE */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest mb-4">Accreditation</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>IRATA Member Company — 7891</li>
            <li>ISO 9001 Quality Management</li>
            <li>SafeContractor Approved</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BASE */}
      <div className="mt-12 pt-6 border-t border-foreground flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-background">
        <span>© {new Date().getFullYear()} Divinity Consult Ltd. All rights reserved.</span>

        <div className="flex gap-4">
          <Link to="/privacy-policy" className="transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
