import React from 'react';

function RunningBanner() {
  return (
    <div className="w-full bg-blue-600 overflow-hidden py-6">
      <div className="whitespace-nowrap animate-marquee text-white text-5xl font-light">
        <span className="mx-12">Visual design for digital</span>
        <span className="mx-12">Visual design for digital</span>
        <span className="mx-12">Visual design for digital</span>
      </div>
    </div>
  );
}

export default RunningBanner;
