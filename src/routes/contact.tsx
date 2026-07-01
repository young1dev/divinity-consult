import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import ReactGA from "react-ga4";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Divinity Consult" },
      {
        name: "description",
        content:
          "Brief our inspection, integrity and rope-access team. 24/7 standby across UK & EU.",
      },
      { property: "og:title", content: "Contact — Divinity Consult" },
      {
        property: "og:description",
        content: "Brief our crew. We'll respond inside a working day.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

// Define a strict TypeScript interface for our form data structure
interface FormDataState {
  name: string;
  company: string;
  email: string;
  asset: string;
  scope: string;
}

type FormFields = "name" | "company" | "email" | "asset";

function Contact() {
  // 1. Initialize our form state with empty strings
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    company: "",
    email: "",
    asset: "",
    scope: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // 3. Dynamic input change handler (TypeScript edition)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 4. Handle the actual form submission to our serverless backend
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      ReactGA.event({
        category: 'Contact',
        action: 'Form_Submit'
      })

      if (response.ok) {
        setSent(true);
        // Clear out the form inputs on successful send
        setFormData({ name: "", company: "", email: "", asset: "", scope: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      setErrorMsg(
        "Failed to deliver brief. Please try emailing hello@divinityconsult.co directly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#F6F7F8] text-foreground min-h-screen">
      <section className="px-6 md:px-10 pt-40 pb-16">
        <div className="font-mono text-xs uppercase tracking-widest mb-6">
          § Contact — Throw us a line
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-display uppercase text-[16vw] md:text-[12vw] leading-[0.9]!"
        >
          Protect
          <br />
          what you've
          <br />
          <span className="italic text-acid">built.</span>
        </motion.h1>
      </section>

      <section className="px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest opacity-70 mb-2">
            § Project Enquiry
          </div>
          {(
            [
              { id: "name", l: "Your name", t: "text" },
              { id: "company", l: "Company", t: "text" },
              { id: "email", l: "Email", t: "email" },
              { id: "asset", l: "Asset / location", t: "text" },
            ] as const
          ).map((f) => (
            <div key={f.id}>
              <label
                htmlFor={f.id}
                className="block font-mono text-[10px] uppercase tracking-widest mb-2"
              >
                {f.l}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.t}
                required
                value={formData[f.id as FormFields]} // Binds the input value to our React state
                onChange={handleChange} // Fires every time the user types a character
                className="w-full bg-transparent border-b-2 border-foreground py-3 font-mono text-lg focus:outline-none focus:border-foreground"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="scope"
              className="block font-mono text-[10px] uppercase tracking-widest mb-2"
            >
              Scope of work
            </label>
            <textarea
              id="scope"
              name="scope"
              rows={5}
              required
              value={formData.scope} // Binds textarea to state
              onChange={handleChange}
              className="w-full bg-transparent border-2 border-foreground p-4 font-mono text-base focus:outline-none"
            />
          </div>

          {errorMsg && <div className="text-red-600 font-mono text-xs">{errorMsg}</div>}

          <button
            type="submit"
            disabled={isSending || sent}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-background hover:text-foreground transition border border-foreground disabled:opacity-60"
          >
            {isSending
              ? "Sending..."
              : sent
                ? "Enquiry received — our team will respond"
                : "Send brief ↗"}
          </button>
        </form>

        {/* INFO */}
        <div className="font-mono text-sm space-y-10">
          <div>
            <div className="text-xs uppercase opacity-60 mb-2">Email</div>
            <a href="mailto:hello@divinityconsult.co" className="underline text-xl md:text-2xl">
              hello@divinityconsult.co
            </a>
          </div>
          <div>
            <div className="text-xs uppercase opacity-60 mb-2">Operations — 24/7 standby</div>
            <div className="text-xl">+44 (0)20 7946 0710</div>
          </div>
          <div>
            <div className="text-xs uppercase opacity-60 mb-2">HQ</div>
            <div>Unit 4, Vauxhall Arches</div>
            <div>London SE11, UK</div>
          </div>
          <div>
            <div className="text-xs uppercase opacity-60 mb-2">Accreditations</div>
            <div className="flex flex-wrap gap-2">
              {[
                "IRATA 7891",
                "ISO 9001",
                "ISO 45001",
                "PCN",
                "ASNT",
                "FROSIO",
                "SafeContractor",
              ].map((c) => (
                <span key={c} className="border border-foreground px-3 py-1 text-xs uppercase">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
