// AboutSection.jsx
import React from "react";
import macbookImage from '../assets/macbookwako.png';

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Eyebrow */}
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8"
        >
          About us
        </h2>
<br />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* If you use Next.js, swap <img> for <Image fill/> */}
              <img
src={macbookImage}
                alt="Wako brand displayed on a laptop screen"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              At Wako, we turn ideas into digital
              products people remember.
            </h3>

            <div className="mt-5 space-y-4 text-gray-600">
              <p>
                We blend bold design with precise development to craft websites
                and apps that not only look beautiful but also work flawlessly.
              </p>
              <p>
                With backgrounds in marketing, branding, and technology, we
                create products that connect with audiences and deliver
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
