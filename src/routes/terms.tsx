import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../lib/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Gad Gad" },
      { name: "description", content: "Terms for using gadgad.studio and engaging Gad Gad's marketing and AI automation services." },
      { property: "og:title", content: "Terms of Service — Gad Gad" },
      { property: "og:description", content: "Terms for using gadgad.studio and engaging Gad Gad's services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" eyebrow="Sweet, simple, and straight to the point">
      <p>
        By using gadgad.studio or engaging Gad Gad's services, you agree these are provided
        "as is" for local business marketing and AI automation support.
      </p>
      <p>
        Package pricing and inclusions are as listed on the Packages page and subject to
        change with notice to active clients.
      </p>
      <p>
        Cancellation is available anytime per the no-long-term-contract policy.
      </p>
      <p>
        Gad Gad is not liable for indirect damages arising from use of the site or services.
        Norfolk, VA governs any disputes.
      </p>
    </LegalPage>
  );
}
