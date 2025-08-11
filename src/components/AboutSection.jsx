// AboutSection.jsx
import React from "react";
import macbookImage from '../assets/macbookwako.png';

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-16 pb-20">
        {/* Section Title */}
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-10"
        >
          About us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden ring-black/5 rounded-2xl ">
              <img
                src={macbookImage}
                alt="Wako brand displayed on a laptop screen"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              At Wako, we turn ideas into digital
              products people remember.
            </h3>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg max-w-xl">
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
