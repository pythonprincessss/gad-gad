import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gad Gad — AI for the businesses that make this city worth living in" },
      {
        name: "description",
        content:
          "Hot-pink, Norfolk-grown AI agency. We put the same AI the big guys use back in the hands of the local businesses that built this city. Free AI Visibility Audit.",
      },
      { property: "og:title", content: "Gad Gad — AI for local businesses" },
      {
        property: "og:description",
        content:
          "The same AI corporations use to push you out — we put it back in your hands. Built in Norfolk, VA.",
      },
    ],
  }),
  component: Index,
});

const css = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --pink:       #e0218a;
  --pink-mid:   #e94196;
  --pink-soft:  #f18dbc;
  --pink-deep:  #a0005e;
  --pink-deeper:#7a0048;
  --blush:      #facde5;
  --blush-light:#ffecf6;
  --sky:        #5BCDFF;
  --sky-deep:   #87CEEB;
  --white:      #FFFFFF;
  --text-dark:  #1A0010;
  --text-mid:   #5C0038;
  --text-muted: #9B6080;
}

html { scroll-behavior: smooth; }

body.gadgad-body {
  font-family: 'DM Sans', system-ui, sans-serif;
  background: var(--blush-light);
  color: var(--text-dark);
  overflow-x: hidden;
}

/* ── NAV ── */
.gg-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(224,33,138,0.12);
}
.nav-logo {
  font-family: 'Pacifico', cursive;
  font-size: 22px;
  color: var(--white);
  background: var(--pink);
  padding: 4px 20px 7px;
  border-radius: 40px;
  text-shadow: 2px 2px 0 var(--pink-deep);
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 14px rgba(224,33,138,0.28);
  transition: transform 0.3s ease;
}
.nav-logo:hover { transform: rotate(-2deg) scale(1.04); }
.nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--text-mid); text-decoration: none; transition: color 0.2s; }
.nav-links a:hover { color: var(--pink); }
.nav-cta {
  background: var(--pink) !important;
  color: var(--white) !important;
  padding: 8px 22px !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  box-shadow: 0 6px 18px rgba(224,33,138,0.32);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s !important;
}
.nav-cta:hover { background: var(--pink-deep) !important; transform: translateY(-2px); box-shadow: 0 10px 24px rgba(224,33,138,0.42); }

/* ── HERO ── */
#hero {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 20% 0%, #B8E6F8 0%, transparent 55%),
    radial-gradient(ellipse at 85% 10%, #D5F0FF 0%, transparent 50%),
    linear-gradient(180deg, #87CEEB 0%, #ADE1F5 55%, #CBF0FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 110px 1rem 200px;
  text-align: center;
}

/* ── FLUFFY DRIFTING CLOUDS ── */
.bg-cloud { position: absolute; pointer-events: none; filter: drop-shadow(0 8px 20px rgba(135,206,235,0.35)); }
.bg-cloud .body {
  background: #fff;
  border-radius: 100px;
  position: relative;
  box-shadow: inset -8px -10px 24px rgba(180,210,230,0.35), inset 8px 4px 18px rgba(255,255,255,0.9);
}
.bg-cloud .body::before,
.bg-cloud .body::after,
.bg-cloud .puff1,
.bg-cloud .puff2,
.bg-cloud .puff3 {
  content: '';
  position: absolute;
  background: #fff;
  border-radius: 50%;
  box-shadow: inset -6px -8px 18px rgba(180,210,230,0.3), inset 6px 3px 12px rgba(255,255,255,0.9);
}

.bc1 .body { width: 220px; height: 64px; }
.bc1 .body::before { width: 100px; height: 88px; top: -42px; left: 18px; }
.bc1 .body::after  { width: 74px;  height: 62px; top: -32px; left: 90px; }
.bc1 .puff1 { width: 56px; height: 50px; top: -20px; left: 150px; }
.bc1 { top: 14%; left: -240px; animation: driftR 38s linear infinite; opacity: 0.95; }

.bc2 .body { width: 300px; height: 82px; }
.bc2 .body::before { width: 124px; height: 100px; top: -48px; left: 26px; }
.bc2 .body::after  { width: 94px;  height: 74px; top: -36px; left: 120px; }
.bc2 .puff1 { width: 68px; height: 58px; top: -22px; left: 210px; }
.bc2 .puff2 { width: 48px; height: 42px; top: -10px; left: 8px; }
.bc2 { top: 24%; right: -320px; animation: driftL 46s linear infinite; animation-delay: -15s; opacity: 0.92; }

.bc3 .body { width: 170px; height: 52px; }
.bc3 .body::before { width: 78px; height: 64px; top: -32px; left: 16px; }
.bc3 .body::after  { width: 58px; height: 48px; top: -24px; left: 68px; }
.bc3 .puff1 { width: 42px; height: 38px; top: -14px; left: 118px; }
.bc3 { top: 8%; right: -190px; animation: driftL 28s linear infinite; animation-delay: -8s; opacity: 0.9; }

.bc4 .body { width: 260px; height: 72px; }
.bc4 .body::before { width: 110px; height: 88px; top: -44px; left: 22px; }
.bc4 .body::after  { width: 84px;  height: 68px; top: -32px; left: 102px; }
.bc4 .puff1 { width: 58px; height: 50px; top: -18px; left: 184px; }
.bc4 { top: 52%; left: -280px; animation: driftR 42s linear infinite; animation-delay: -22s; opacity: 0.82; }

.bc5 .body { width: 195px; height: 60px; }
.bc5 .body::before { width: 88px; height: 72px; top: -36px; left: 19px; }
.bc5 .body::after  { width: 66px; height: 54px; top: -26px; left: 80px; }
.bc5 .puff1 { width: 48px; height: 42px; top: -14px; left: 138px; }
.bc5 { top: 68%; right: -220px; animation: driftL 32s linear infinite; animation-delay: -26s; opacity: 0.9; }

.bc6 .body { width: 140px; height: 44px; }
.bc6 .body::before { width: 64px; height: 54px; top: -26px; left: 14px; }
.bc6 .body::after  { width: 46px; height: 40px; top: -18px; left: 56px; }
.bc6 { top: 38%; left: -160px; animation: driftR 50s linear infinite; animation-delay: -5s; opacity: 0.7; }

@keyframes driftR { from { transform: translateX(0); } to { transform: translateX(calc(100vw + 380px)); } }
@keyframes driftL { from { transform: translateX(0); } to { transform: translateX(calc(-100vw - 380px)); } }

/* ── SPARKLES ── */
.sp {
  position: absolute;
  pointer-events: none;
  color: #fff;
  animation: twinkle 3.4s ease-in-out infinite;
  z-index: 3;
  user-select: none;
  text-shadow: 0 0 12px rgba(255,255,255,0.85), 0 0 24px rgba(255,255,255,0.4);
}
@keyframes twinkle {
  0%,100% { transform: translateY(0) rotate(0deg) scale(0.7); opacity: 0.3; }
  40%     { transform: translateY(-10px) rotate(15deg) scale(1.1); opacity: 1; }
  60%     { transform: translateY(-14px) rotate(25deg) scale(1.35); opacity: 1; }
}

/* ── HERO LOGO ── */
.hero-logo-wrap {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: floatY 5.5s ease-in-out infinite;
}
@keyframes floatY {
  0%,100% { transform: translateY(0) rotate(-0.4deg); }
  50%     { transform: translateY(-20px) rotate(0.4deg); }
}

.hero-logo {
  font-family: 'Pacifico', cursive;
  font-size: clamp(60px, 12vw, 124px);
  color: var(--white);
  background: linear-gradient(180deg, var(--pink-mid) 0%, var(--pink) 100%);
  display: inline-block;
  padding: 14px 50px 18px;
  border-radius: 52px;
  line-height: 1;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 0 var(--pink-deep), 4px 4px 0 var(--pink-deeper);
  box-shadow:
    0 6px 0 var(--pink-deep),
    0 12px 0 var(--pink-deeper),
    0 20px 36px rgba(160,0,94,0.28),
    inset 0 2px 0 rgba(255,255,255,0.4);
}
.hero-logo::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 52px;
  background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
  background-size: 220% 100%;
  animation: shimmer 4.5s ease-in-out infinite;
  pointer-events: none;
  mix-blend-mode: overlay;
}
@keyframes shimmer {
  0% { background-position: 220% 0; }
  100% { background-position: -120% 0; }
}

/* Cloud shelf */
.cloud-shelf {
  position: relative;
  width: min(720px, 96vw);
  height: 100px;
  margin-top: 10px;
  z-index: 1;
}
.bump {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  bottom: 0;
  box-shadow: 0 6px 22px rgba(135,206,235,0.32), inset -6px -8px 18px rgba(190,215,235,0.35), inset 6px 4px 14px rgba(255,255,255,0.95);
}
.b1 { width: 120px; height: 92px; left:  -2%; }
.b2 { width: 162px; height: 118px; left: 12%; }
.b3 { width: 142px; height: 106px; left: 32%; }
.b4 { width: 150px; height: 110px; right: 14%; }
.b5 { width: 116px; height: 88px; right: -2%; }
.b6 { width: 82px;  height: 62px; left: 50%; transform: translateX(-50%); }

/* Bottom scene clouds */
.scene-cloud {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  opacity: 0.98;
  bottom: -18px;
  box-shadow: inset -10px -12px 28px rgba(180,210,230,0.35), 0 -4px 24px rgba(255,255,255,0.5);
}
.sc1 { width: 580px; height: 240px; left: -140px; border-radius: 50% 50% 0 0; }
.sc2 { width: 500px; height: 210px; left: 320px;  bottom: -26px; border-radius: 50% 50% 0 0; }
.sc3 { width: 460px; height: 195px; right: -100px; border-radius: 50% 50% 0 0; }
.sc4 { width: 320px; height: 140px; left: 50%; transform: translateX(-50%); bottom: -10px; border-radius: 50% 50% 0 0; opacity: 0.95; }

.hero-tagline {
  font-size: clamp(16px, 2.1vw, 22px);
  font-style: italic;
  color: #fff;
  margin-top: 2rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  text-shadow: 0 2px 12px rgba(160,0,94,0.25), 0 1px 2px rgba(0,0,0,0.1);
  position: relative;
  z-index: 10;
}

.hero-sub {
  max-width: 520px;
  font-size: clamp(14px, 1.6vw, 16.5px);
  color: rgba(255,255,255,0.96);
  line-height: 1.76;
  margin-top: 0.9rem;
  position: relative;
  z-index: 10;
  text-shadow: 0 1px 8px rgba(0,0,0,0.12);
}

.hero-cta {
  margin-top: 2.2rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: var(--pink);
  font-size: 16px;
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(224,33,138,0.28), inset 0 -3px 0 rgba(224,33,138,0.08);
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
}
.hero-cta:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 18px 44px rgba(224,33,138,0.4); }
.hero-cta .sparkle { animation: spinSparkle 3s linear infinite; display: inline-block; }
@keyframes spinSparkle { from { transform: rotate(0); } to { transform: rotate(360deg); } }

/* ── SHARED ── */
.section-inner { max-width: 1020px; margin: 0 auto; }
.eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
  text-transform: uppercase; color: var(--pink); margin-bottom: 0.55rem;
}
.eyebrow-white { color: var(--blush); }
.section-h2 {
  font-size: clamp(28px, 4.2vw, 42px);
  font-weight: 600; line-height: 1.2;
  color: var(--text-dark); margin-bottom: 0.9rem;
  letter-spacing: -0.5px;
}
.section-h2-white { color: #fff; }
.section-lead {
  font-size: 17px; color: var(--text-muted);
  line-height: 1.76; max-width: 600px; margin-bottom: 3rem;
}
.section-lead-white { color: rgba(255,255,255,0.88); }

/* ── WHAT WE DO ── */
#what-we-do {
  background: #fff;
  padding: 6rem 2rem;
  position: relative;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}
.card {
  background: linear-gradient(160deg, #fff 0%, var(--blush-light) 100%);
  border: 1.5px solid var(--blush);
  border-radius: 24px;
  padding: 2rem 1.6rem;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '✦';
  position: absolute;
  top: 14px; right: 16px;
  color: var(--pink-soft);
  opacity: 0;
  font-size: 18px;
  transform: scale(0.5) rotate(0deg);
  transition: opacity 0.3s, transform 0.4s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 48px rgba(224,33,138,0.16);
  border-color: var(--pink-soft);
}
.card:hover::before { opacity: 1; transform: scale(1) rotate(180deg); }

.card-icon {
  width: 54px; height: 54px;
  background: linear-gradient(140deg, var(--blush) 0%, #fff 100%);
  border: 1.5px solid var(--blush);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  margin-bottom: 1.2rem;
  box-shadow: inset 0 -3px 0 rgba(224,33,138,0.06);
}
.card-title { font-size: 17px; font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem; letter-spacing: -0.2px; }
.card-body  { font-size: 14px; color: var(--text-muted); line-height: 1.7; }

/* ── PACKAGES ── */
#packages {
  background: linear-gradient(180deg, var(--pink) 0%, var(--pink-mid) 100%);
  padding: 7rem 2rem 6rem;
  position: relative;
  overflow: hidden;
}
#packages::before {
  content: '';
  position: absolute;
  top: -58px; left: -5%; right: -5%;
  height: 116px;
  background: #fff;
  border-radius: 0 0 50% 50%;
}
.pkg-sp {
  position: absolute;
  color: rgba(255,255,255,0.7);
  pointer-events: none;
  animation: twinkle 4s ease-in-out infinite;
  user-select: none;
}
.tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
  margin-top: 1rem;
  position: relative;
}
.tier {
  background: rgba(255,255,255,0.13);
  border: 1.5px solid rgba(255,255,255,0.28);
  border-radius: 26px;
  padding: 2rem 1.75rem;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(6px);
}
.tier:hover { transform: translateY(-8px); background: rgba(255,255,255,0.22); box-shadow: 0 20px 40px rgba(122,0,72,0.3); }
.tier-featured {
  background: #fff; border-color: #fff;
  box-shadow: 0 14px 40px rgba(122,0,72,0.28);
  transform: translateY(-6px);
}
.tier-featured:hover { background: #fff; transform: translateY(-12px); box-shadow: 0 24px 50px rgba(122,0,72,0.36); }
.tier-badge {
  display: inline-block;
  font-size: 10px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  background: var(--sky); color: #003d5c;
  padding: 5px 14px; border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(91,205,255,0.4);
}
.tier-num { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 0.3rem; }
.tier-num-feat { color: var(--pink); }
.tier-name { font-size: 21px; font-weight: 600; color: #fff; margin-bottom: 0.2rem; letter-spacing: -0.2px; }
.tier-name-feat { color: var(--pink); }
.tier-price { font-size: 13px; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
.tier-price-feat { color: var(--pink-deep); }
.tier-divider { height: 1px; background: rgba(255,255,255,0.22); margin-bottom: 1.25rem; }
.tier-divider-feat { background: var(--blush); }
.tier-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; font-size: 14px; color: rgba(255,255,255,0.92); border-bottom: 1px solid rgba(255,255,255,0.1); }
.tier-item:last-child { border-bottom: none; }
.tier-item-feat { color: #3a0025; border-bottom-color: var(--blush); }
.tier-check { color: var(--sky); flex-shrink: 0; font-size: 13px; margin-top: 2px; animation: twinkle 3s ease-in-out infinite; }
.tier-check-feat { color: var(--pink); }

/* ── ABOUT ── */
#about {
  background: linear-gradient(170deg, var(--blush) 0%, #ffd9eb 100%);
  padding: 6rem 2rem;
  overflow: hidden;
  position: relative;
}
.about-sp {
  position: absolute;
  pointer-events: none;
  color: var(--pink-soft);
  animation: twinkle 3.6s ease-in-out infinite;
  user-select: none;
  z-index: 1;
  text-shadow: 0 0 10px rgba(224,33,138,0.3);
}
.about-inner {
  max-width: 1020px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}
.about-k-wrap { display: flex; align-items: center; justify-content: center; }
.about-k-container {
  position: relative;
  display: inline-block;
  animation: floatY 6.5s ease-in-out infinite;
  animation-delay: 1s;
}
.about-k-container::before {
  content: 'K';
  font-family: 'Pacifico', cursive;
  font-size: clamp(180px, 24vw, 300px);
  line-height: 1;
  position: absolute;
  top: 0; left: 0;
  color: transparent;
  -webkit-text-stroke: 16px #fff;
  z-index: 0;
  filter: drop-shadow(0 18px 36px rgba(160,0,94,0.22));
}
.about-k {
  font-family: 'Pacifico', cursive;
  font-size: clamp(180px, 24vw, 300px);
  line-height: 1;
  color: var(--pink);
  position: relative;
  z-index: 1;
  text-shadow:
    3px  3px  0 var(--pink-soft),
    6px  6px  0 var(--pink-mid),
    9px  9px  0 var(--pink-deep),
    12px 12px 0 var(--pink-deeper);
  display: block;
}
.k-sp {
  position: absolute;
  font-size: 20px;
  color: var(--pink);
  animation: orbitSpark 3s ease-in-out infinite;
  pointer-events: none;
  text-shadow: 0 0 12px rgba(224,33,138,0.5);
}
.k-sp:nth-child(2) { top: 6%;   right: -14%; animation-delay: 0s;   font-size: 24px; }
.k-sp:nth-child(3) { top: 38%;  left:  -18%; animation-delay: 0.8s; font-size: 18px; }
.k-sp:nth-child(4) { bottom: 16%; right: -10%; animation-delay: 1.6s; font-size: 20px; }
.k-sp:nth-child(5) { top: -8%;  left:  30%;  animation-delay: 2.2s; font-size: 16px; }
.k-sp:nth-child(6) { bottom: 4%; left: 10%;   animation-delay: 0.4s; font-size: 22px; }
.k-sp:nth-child(7) { top: 60%;  right: -16%; animation-delay: 1.2s; font-size: 14px; }
@keyframes orbitSpark {
  0%,100% { transform: translateY(0) scale(0.8) rotate(0); opacity: 0.5; }
  50%     { transform: translateY(-14px) scale(1.4) rotate(20deg); opacity: 1; }
}

.about-name { font-size: clamp(26px, 3.6vw, 36px); font-weight: 600; color: var(--text-dark); margin-bottom: 0.25rem; letter-spacing: -0.5px; }
.about-role { font-size: 14px; color: var(--pink); font-weight: 600; letter-spacing: 0.5px; margin-bottom: 1.25rem; }
.about-bio { font-size: 16px; color: var(--text-mid); line-height: 1.8; margin-bottom: 1.75rem; }
.badges { display: flex; flex-wrap: wrap; gap: 8px; }
.badge {
  font-size: 12px; font-weight: 500;
  background: #fff;
  color: var(--pink-deeper);
  border: 1.5px solid var(--pink-soft);
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(224,33,138,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}
.badge:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(224,33,138,0.18); }

/* ── CONTACT ── */
#contact {
  background:
    radial-gradient(ellipse at 50% 0%, #ffd9eb 0%, transparent 60%),
    var(--blush-light);
  padding: 7rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.contact-sp {
  position: absolute;
  pointer-events: none;
  color: var(--pink-soft);
  animation: twinkle 3.4s ease-in-out infinite;
  user-select: none;
  text-shadow: 0 0 10px rgba(224,33,138,0.3);
}
.contact-logo {
  font-family: 'Pacifico', cursive;
  font-size: 46px;
  color: var(--pink);
  text-shadow: 3px 3px 0 var(--blush), 6px 6px 0 var(--pink-soft);
  display: block;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
}
.contact-h2 { font-size: clamp(28px, 4.2vw, 40px); font-weight: 600; color: var(--text-dark); margin-bottom: 0.75rem; position: relative; z-index: 2; letter-spacing: -0.5px; }
.contact-sub { font-size: 17px; color: var(--text-muted); max-width: 480px; margin: 0 auto 2.5rem; line-height: 1.74; position: relative; z-index: 2; }
.contact-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: linear-gradient(180deg, var(--pink-mid) 0%, var(--pink) 100%);
  color: #fff;
  font-size: 16px; font-weight: 600;
  padding: 18px 44px; border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 12px 36px rgba(224,33,138,0.32), inset 0 -3px 0 rgba(122,0,72,0.2);
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative; z-index: 2;
}
.contact-btn:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 48px rgba(224,33,138,0.45); }
.contact-btn .sparkle { animation: spinSparkle 3s linear infinite; display: inline-block; }
.contact-note { margin-top: 1.25rem; font-size: 13px; color: var(--text-muted); position: relative; z-index: 2; }

/* ── FOOTER ── */
.gg-footer {
  background: linear-gradient(180deg, var(--pink) 0%, var(--pink-deep) 100%);
  color: rgba(255,255,255,0.85);
  text-align: center;
  padding: 1.85rem 2rem;
  font-size: 13px;
}
.gg-footer strong { color: #fff; font-weight: 600; }
.gg-footer .heart { display: inline-block; animation: heartBeat 1.6s ease-in-out infinite; color: #fff; }
@keyframes heartBeat {
  0%,100% { transform: scale(1); }
  25% { transform: scale(1.18); }
  50% { transform: scale(0.95); }
}

/* ── REVEAL ── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  .reveal { opacity: 1; transform: none; }
}

@media (max-width: 720px) {
  .gg-nav { padding: 1rem 1.25rem; }
  .nav-links li:not(:last-child) { display: none; }
  .about-inner { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
  .badges { justify-content: center; }
  #packages::before { display: none; }
  .cloud-shelf { width: 98vw; height: 80px; }
  .hero-logo { padding: 12px 28px 16px; border-radius: 36px; }
}
`;

function Index() {
  useEffect(() => {
    document.body.classList.add("gadgad-body");
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(() => target.classList.add("visible"), i * 75);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => io.observe(el));
    document
      .querySelectorAll<HTMLElement>(".cards-grid .card, .tiers .tier")
      .forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
      });
    return () => {
      io.disconnect();
      document.body.classList.remove("gadgad-body");
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="gg-nav">
        <a href="#hero" className="nav-logo">Gad Gad</a>
        <ul className="nav-links">
          <li><a href="#what-we-do">What we do</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Free audit</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="bg-cloud bc1"><div className="body"><span className="puff1" /></div></div>
        <div className="bg-cloud bc2"><div className="body"><span className="puff1" /><span className="puff2" /></div></div>
        <div className="bg-cloud bc3"><div className="body"><span className="puff1" /></div></div>
        <div className="bg-cloud bc4"><div className="body"><span className="puff1" /></div></div>
        <div className="bg-cloud bc5"><div className="body"><span className="puff1" /></div></div>
        <div className="bg-cloud bc6"><div className="body" /></div>

        <div className="sp" style={{ top: "18%", left: "8%",  fontSize: 22, animationDelay: "0s"   }}>✦</div>
        <div className="sp" style={{ top: "13%", right: "10%", fontSize: 28, animationDelay: "0.9s" }}>✦</div>
        <div className="sp" style={{ top: "34%", right: "7%",  fontSize: 14, animationDelay: "1.8s" }}>✦</div>
        <div className="sp" style={{ top: "60%", left: "5%",   fontSize: 18, animationDelay: "2.6s" }}>✦</div>
        <div className="sp" style={{ top: "20%", left: "26%",  fontSize: 12, animationDelay: "3.2s" }}>✦</div>
        <div className="sp" style={{ top: "44%", right: "20%", fontSize: 10, animationDelay: "1.1s" }}>✦</div>
        <div className="sp" style={{ top: "70%", right: "30%", fontSize: 16, animationDelay: "2.1s" }}>✦</div>
        <div className="sp" style={{ top: "28%", left: "44%",  fontSize: 10, animationDelay: "0.4s" }}>✦</div>
        <div className="sp" style={{ top: "55%", left: "38%",  fontSize: 12, animationDelay: "1.5s" }}>✦</div>
        <div className="sp" style={{ top: "8%",  left: "52%",  fontSize: 14, animationDelay: "2.8s" }}>✦</div>

        <div className="hero-logo-wrap">
          <div className="hero-logo">Gad Gad</div>
          <div className="cloud-shelf">
            <div className="bump b1" />
            <div className="bump b2" />
            <div className="bump b3" />
            <div className="bump b6" />
            <div className="bump b4" />
            <div className="bump b5" />
          </div>
        </div>

        <p className="hero-tagline">"What, like it's hard?"</p>
        <p className="hero-sub">
          The same AI the big guys are using to quietly push local businesses out of the picture —
          we're putting it back in your hands. Sweetly. Seriously. And in heels.
        </p>
        <a href="#contact" className="hero-cta">
          <span className="sparkle">✦</span> Get your free audit
        </a>

        <div className="scene-cloud sc1" />
        <div className="scene-cloud sc2" />
        <div className="scene-cloud sc4" />
        <div className="scene-cloud sc3" />
      </section>

      <section id="what-we-do">
        <div className="section-inner">
          <p className="eyebrow reveal">What we do</p>
          <h2 className="section-h2 reveal">AI that works for your business, not against it.</h2>
          <p className="section-lead reveal">
            The tools that were supposed to bring us closer are being used to consolidate everything
            into a few hands. Gad Gad gives the businesses that built this city the same advantage —
            minus the corporate price tag, plus a lot more personality.
          </p>
          <div className="cards-grid">
            <div className="card reveal">
              <div className="card-icon">🔍</div>
              <p className="card-title">AI visibility</p>
              <p className="card-body">
                Google isn't really Google anymore. If your business isn't dressed for AI-powered search,
                customers can't see you. We make sure they do.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">🤖</div>
              <p className="card-title">Smart automation</p>
              <p className="card-body">
                Answer questions, book appointments, and follow up like a charming hostess —
                even at 2am, even when you're off the clock.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">🏘️</div>
              <p className="card-title">Built for Hampton Roads</p>
              <p className="card-body">
                We're not a national agency. We're your neighbor. Every strategy is made for Norfolk,
                by someone who actually lives here and loves it.
              </p>
            </div>
            <div className="card reveal">
              <div className="card-icon">📊</div>
              <p className="card-title">Clear reporting</p>
              <p className="card-body">
                No jargon. No black boxes. Just plain-English monthly reports that tell you exactly
                what's working — and what we changed to make it work better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages">
        <div className="pkg-sp" style={{ top: "10%", left: "6%",  fontSize: 22, animationDelay: "0s"   }}>✦</div>
        <div className="pkg-sp" style={{ top: "16%", right: "8%", fontSize: 18, animationDelay: "1.1s" }}>✦</div>
        <div className="pkg-sp" style={{ bottom: "12%", left: "10%", fontSize: 16, animationDelay: "2.3s" }}>✦</div>
        <div className="pkg-sp" style={{ bottom: "20%", right: "6%", fontSize: 24, animationDelay: "0.7s" }}>✦</div>

        <div className="section-inner">
          <p className="eyebrow eyebrow-white reveal">Packages</p>
          <h2 className="section-h2 section-h2-white reveal">Pick your level of protection.</h2>
          <p className="section-lead section-lead-white reveal">
            Every package starts with a free AI Visibility Audit. No long-term contracts.
            Cancel any time — though we don't think you'll want to.
          </p>
          <div className="tiers">

            <div className="tier reveal">
              <p className="tier-num">Tier 1</p>
              <p className="tier-name">AI Essentials</p>
              <p className="tier-price">$498 setup &nbsp; · &nbsp; $298/mo</p>
              <div className="tier-divider" />
              <div className="tier-item"><span className="tier-check">✦</span>AI-optimized business profile</div>
              <div className="tier-item"><span className="tier-check">✦</span>Schema markup for Google's AI</div>
              <div className="tier-item"><span className="tier-check">✦</span>Smart FAQ setup</div>
              <div className="tier-item"><span className="tier-check">✦</span>Monthly visibility report</div>
              <div className="tier-item"><span className="tier-check">✦</span>Email support</div>
            </div>

            <div className="tier tier-featured reveal">
              <div><span className="tier-badge">Most loved</span></div>
              <p className="tier-num tier-num-feat">Tier 2</p>
              <p className="tier-name tier-name-feat">AI Agent Ready</p>
              <p className="tier-price tier-price-feat">$998 setup &nbsp; · &nbsp; $598/mo</p>
              <div className="tier-divider tier-divider-feat" />
              <div className="tier-item tier-item-feat"><span className="tier-check tier-check-feat">✦</span>Everything in Tier 1</div>
              <div className="tier-item tier-item-feat"><span className="tier-check tier-check-feat">✦</span>AI booking integration</div>
              <div className="tier-item tier-item-feat"><span className="tier-check tier-check-feat">✦</span>24/7 automated responses</div>
              <div className="tier-item tier-item-feat"><span className="tier-check tier-check-feat">✦</span>Agent-readable endpoints</div>
              <div className="tier-item tier-item-feat"><span className="tier-check tier-check-feat">✦</span>Priority support</div>
            </div>

            <div className="tier reveal">
              <p className="tier-num">Tier 3</p>
              <p className="tier-name">Market Dominance</p>
              <p className="tier-price">$1,998 setup &nbsp; · &nbsp; $1,198/mo</p>
              <div className="tier-divider" />
              <div className="tier-item"><span className="tier-check">✦</span>Everything in Tier 2</div>
              <div className="tier-item"><span className="tier-check">✦</span>Competitor gap analysis</div>
              <div className="tier-item"><span className="tier-check">✦</span>Custom AI agent build</div>
              <div className="tier-item"><span className="tier-check">✦</span>Dedicated strategy sessions</div>
              <div className="tier-item"><span className="tier-check">✦</span>White-glove onboarding</div>
            </div>

          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-sp" style={{ top: "8%",  left: "4%",  fontSize: 24, animationDelay: "0s"   }}>✦</div>
        <div className="about-sp" style={{ top: "22%", right: "5%", fontSize: 18, animationDelay: "1.1s" }}>✦</div>
        <div className="about-sp" style={{ top: "55%", left: "8%",  fontSize: 14, animationDelay: "2.3s" }}>✦</div>
        <div className="about-sp" style={{ bottom: "12%", right: "9%", fontSize: 22, animationDelay: "0.6s" }}>✦</div>
        <div className="about-sp" style={{ bottom: "30%", left: "3%", fontSize: 12, animationDelay: "1.8s" }}>✦</div>
        <div className="about-sp" style={{ top: "40%", right: "12%", fontSize: 10, animationDelay: "3s"   }}>✦</div>
        <div className="about-sp" style={{ top: "70%", right: "4%",  fontSize: 18, animationDelay: "1.5s" }}>✦</div>
        <div className="about-sp" style={{ top: "82%", left: "22%", fontSize: 16, animationDelay: "2.7s" }}>✦</div>

        <div className="about-inner">
          <div className="about-k-wrap reveal">
            <div className="about-k-container">
              <div className="about-k">K</div>
              <div className="k-sp">✦</div>
              <div className="k-sp">✦</div>
              <div className="k-sp">✦</div>
              <div className="k-sp">✦</div>
              <div className="k-sp">✦</div>
              <div className="k-sp">✦</div>
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow reveal">About</p>
            <h2 className="about-name reveal">Kayla Hewlett</h2>
            <p className="about-role reveal">Founder, Gad Gad &nbsp;·&nbsp; The Elle Woods of AI</p>
            <p className="about-bio reveal">
              I care deeply about community, about helping people who need a hand, and about
              building the kind of relationships that turn into bridges — the ones everybody can
              cross and keep building on. I started Gad Gad because the tools meant to protect
              local businesses are quietly being aimed at them. That stops here, in heels,
              with a smile.
            </p>
            <div className="badges reveal">
              <span className="badge">AI/ML Engineer</span>
              <span className="badge">Oracle Cloud AI Certified</span>
              <span className="badge">AWS &amp; Azure</span>
              <span className="badge">Dean's List, CS</span>
              <span className="badge">Norfolk, VA</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-sp" style={{ top: "12%", left: "6%",  fontSize: 26, animationDelay: "0s"   }}>✦</div>
        <div className="contact-sp" style={{ top: "20%", right: "8%", fontSize: 18, animationDelay: "1.4s" }}>✦</div>
        <div className="contact-sp" style={{ bottom: "18%", left: "10%", fontSize: 20, animationDelay: "2.1s" }}>✦</div>
        <div className="contact-sp" style={{ bottom: "25%", right: "6%", fontSize: 14, animationDelay: "0.7s" }}>✦</div>
        <div className="contact-sp" style={{ top: "50%", left: "18%", fontSize: 12, animationDelay: "1.9s" }}>✦</div>
        <div className="contact-sp" style={{ top: "40%", right: "20%", fontSize: 16, animationDelay: "2.8s" }}>✦</div>

        <div className="section-inner">
          <span className="contact-logo reveal">Gad Gad</span>
          <h2 className="contact-h2 reveal">Ready to find out?</h2>
          <p className="contact-sub reveal">
            Get your free AI Visibility Audit. No pressure, no pitch — just an honest, sparkly look
            at where your business stands right now.
          </p>
          <a href="mailto:hello@gadgad.ai" className="contact-btn reveal">
            <span className="sparkle">✦</span> Email us for your free audit
          </a>
          <p className="contact-note reveal">We respond within 24 hours. Norfolk businesses always get priority.</p>
        </div>
      </section>

      <footer className="gg-footer">
        © 2026 <strong>Gad Gad</strong> &nbsp;·&nbsp; Made in Norfolk, VA <span className="heart">♥</span> &nbsp;·&nbsp; AI for the businesses that make this city worth living in.
      </footer>
    </>
  );
}
