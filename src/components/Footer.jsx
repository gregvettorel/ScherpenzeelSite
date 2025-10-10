import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>2025 © — Made by Wako</p>
      <address itemScope itemType="https://schema.org/LocalBusiness" style={{ fontStyle: "normal", marginTop: 8 }}>
        <span itemProp="name">Wako</span> — <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Brussels</span>, <span itemProp="addressCountry">Belgium</span>
        </span>
        {" · "}
        <a href="mailto:thisiswako@gmail.com" itemProp="email">thisiswako@gmail.com</a>
        {" · "}
        <a href="tel:+1234567890" itemProp="telephone">+1 234 567 890</a>
      </address>
    </footer>
  );
}

export default Footer;
