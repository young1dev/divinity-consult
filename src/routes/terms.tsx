import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Divinity Consult" },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of Divinity Consult’s website and professional services.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        section="§ Legal"
        title={<>Terms of service.</>}
        intro="These terms govern the use of this website and the provision of services by Divinity Consult."
      />

      <section className="px-6 md:px-10 py-20 max-w-4xl text-sm leading-relaxed space-y-8">
        <p>
          These terms and conditions apply to the use of the Divinity Consult
          website and the provision of professional inspection services.
        </p>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Use of website
          </h2>
          <p>
            Content is provided for general information purposes only and does
            not constitute technical advice or contractual commitment.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Professional services
          </h2>
          <p>
            All inspection and engineering services are provided subject to
            formal contract, scope definition, and applicable standards.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Liability
          </h2>
          <p>
            Divinity Consult shall not be liable for any loss arising from
            reliance on website content outside of contractual agreements.
          </p>
        </div>

        <div>
          <h2 className="font-display uppercase text-xl mb-2">
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of England and Wales.
          </p>
        </div>
      </section>
    </>
  );
}