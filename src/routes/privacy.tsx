import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../lib/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gad Gad" },
      { name: "description", content: "How Gad Gad collects, uses, and protects information from Norfolk small businesses and site visitors." },
      { property: "og:title", content: "Privacy Policy — Gad Gad" },
      { property: "og:description", content: "How Gad Gad collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" eyebrow="The fine print, in plain English">
      <p>
        Gad Gad collects only what's needed to respond to inquiries and provide services:
        name, email, and business info submitted via the audit form or email.
      </p>
      <p>
        We don't sell or share data with third parties. Data is stored securely and used
        solely to deliver Gad Gad's marketing and AI automation services.
      </p>
      <p>
        Contact <a href="mailto:kayhew@gadgad.studio">kayhew@gadgad.studio</a> with any
        privacy questions or data deletion requests.
      </p>
    </LegalPage>
  );
}
