import React from "react";
import SeoHead from "../components/SeoHead";
import SectionReveal from "../components/SectionReveal";
import WakoButton from "../components/WakoButton";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        kind="page"
        title="Contact | Wako"
        description="Plan een gratis adviesgesprek of mail ons rechtstreeks."
        canonicalPath="/contact"
      />
      <SectionReveal className="section section-pad" as="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1 className="section-title" style={{ marginBottom: 12 }}>Let’s talk</h1>
          <p className="text-muted" style={{ marginBottom: 24 }}>
            We reply within 24h. Prefer a call? We’ll schedule it.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <WakoButton href="mailto:thisiswako@gmail.com" variant="solid">thisiswako@gmail.com</WakoButton>
            <WakoButton href="tel:+1234567890" variant="ghost">+1 234 567 890</WakoButton>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}