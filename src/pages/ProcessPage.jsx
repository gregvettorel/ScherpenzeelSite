import React from "react";
import SeoHead from "../components/SeoHead";
import ProcessSteps from "../components/ProcessSteps";

export default function ProcessPage() {
  return (
    <>
      <SeoHead
        kind="page"
        title="Process | Wako"
        description="Van kennismaking tot lancering: duidelijke stappen en snelle iteraties."
        canonicalPath="/process"
      />
      <ProcessSteps />
    </>
  );
}