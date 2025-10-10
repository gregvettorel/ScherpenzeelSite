import React from "react";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        kind="page"
        title="Services | Wako"
        description="Webdesign, development en branding. Websites die snel laden en converteren."
        canonicalPath="/services"
      />
      <Services />
    </>
  );
}