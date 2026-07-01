import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Divinity Consult" },
      {
        name: "description",
        content:
          "Privacy policy outlining how Divinity Consult collects, uses, and protects personal and technical data.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        section="§ Legal"
        title={<>Privacy policy.</>}
        intro="This policy explains how Divinity Consult collects, uses, and safeguards personal information."
      />

      <section className="px-6 md:px-10 py-20 max-w-4xl text-sm leading-relaxed space-y-8">
        <p>
          Divinity Consult Ltd is committed to protecting your privacy. This
          policy explains what information we collect, how it is used, and the
          steps we take to safeguard it.
        </p>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Information we collect
          </h2>
          <p>
            We may collect personal data including names, email addresses,
            telephone numbers, company information, and technical data such as IP
            addresses when you interact with our website or request services.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Use of information
          </h2>
          <p>
            Information is used solely to respond to enquiries, provide services,
            comply with legal obligations, and improve our operations.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Data protection
          </h2>
          <p>
            Appropriate technical and organisational measures are in place to
            protect personal data against unauthorised access, disclosure, or
            loss.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Contact
          </h2>
          <p>
            For privacy-related enquiries, contact{" "}
            <a href="mailto:hello@divinityconsult.co" className="underline">
              hello@divinityconsult.co
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}