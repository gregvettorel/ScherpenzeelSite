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
        <a className="email">thisiswako@gmail.com</a>
        {" · "}
        <a className="tel">+32 479 95 44 00 </a>
        {" · "}
        <a className="tel"> +32 472 28 79 04</a>
      </address>
    </footer>
  );
}

export default Footer;
