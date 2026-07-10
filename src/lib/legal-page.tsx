import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const css = `
.legal-body {
  font-family: 'DM Sans', system-ui, sans-serif;
  background: #ffecf6;
  color: #1A0010;
  min-height: 100vh;
  overflow-x: hidden;
}
.legal-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(224,33,138,0.12);
}
.legal-nav .nav-logo {
  font-family: 'Pacifico', cursive;
  font-size: 22px;
  color: #fff;
  background: #e0218a;
  padding: 4px 20px 7px;
  border-radius: 40px;
  text-shadow: 2px 2px 0 #a0005e;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(224,33,138,0.28);
}
.legal-nav .back-link {
  font-size: 14px;
  color: #5C0038;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.legal-nav .back-link:hover { color: #e0218a; }

.legal-shell {
  max-width: 780px;
  margin: 0 auto;
  padding: 5rem 1.75rem 4rem;
}
.legal-eyebrow {
  font-family: 'Pacifico', cursive;
  color: #e0218a;
  font-size: 22px;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.8);
}
.legal-title {
  font-size: clamp(38px, 6vw, 58px);
  font-weight: 700;
  color: #1A0010;
  letter-spacing: -1px;
  line-height: 1.05;
  margin-bottom: 2.25rem;
}
.legal-card {
  background: #fff;
  border-radius: 28px;
  padding: 2.5rem clamp(1.5rem, 4vw, 3rem);
  box-shadow: 0 20px 60px rgba(224,33,138,0.14), 0 2px 8px rgba(160,0,94,0.06);
  border: 1px solid rgba(224,33,138,0.10);
}
.legal-card p {
  font-size: 17px;
  line-height: 1.75;
  color: #3a0022;
  margin-bottom: 1.25rem;
}
.legal-card p:last-child { margin-bottom: 0; }
.legal-card a {
  color: #e0218a;
  text-decoration: none;
  border-bottom: 1px solid rgba(224,33,138,0.4);
  transition: border-color 0.2s;
}
.legal-card a:hover { border-bottom-color: #e0218a; }

.legal-footer {
  background: linear-gradient(180deg, #e0218a 0%, #a0005e 100%);
  color: rgba(255,255,255,0.9);
  text-align: center;
  padding: 1.85rem 2rem;
  font-size: 13px;
}
.legal-footer strong { color: #fff; font-weight: 600; }
.legal-footer-links { margin-top: 0.6rem; display: flex; gap: 0.6rem; justify-content: center; align-items: center; }
.legal-footer-links a { color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.5); padding-bottom: 1px; }
.legal-footer-links a:hover { border-bottom-color: #fff; }
`;

export function LegalPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <>
      <style>{css}</style>
      <div className="legal-body">
        <nav className="legal-nav">
          <Link to="/" className="nav-logo">gad gad</Link>
          <Link to="/" className="back-link">← Back home</Link>
        </nav>
        <main className="legal-shell">
          {eyebrow && <div className="legal-eyebrow">{eyebrow}</div>}
          <h1 className="legal-title">{title}</h1>
          <div className="legal-card">{children}</div>
        </main>
        <footer className="legal-footer">
          <div>© 2026 <strong>Gad Gad</strong> &nbsp;·&nbsp; Made in Norfolk, VA &nbsp;·&nbsp; AI for the businesses that make this city worth living in.</div>
          <div className="legal-footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
