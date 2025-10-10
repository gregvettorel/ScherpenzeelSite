import React from "react";
import SeoHead from "../components/SeoHead";
import Projects from "../components/Projects";

export default function WorkPage() {
  return (
    <>
      <SeoHead
        kind="page"
        title="Work | Wako"
        description="Een selectie van recente projecten: branding, webdesign, 3D en development."
        canonicalPath="/work"
      />
      <Projects />
    </>
  );
}