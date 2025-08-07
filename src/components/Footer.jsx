// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-xs text-gray-400 mt-16 px-4 py-6">
      <p>2023 © — Made by Wako design</p>
      <div className="mt-2 flex justify-center gap-4 text-gray-400">
        <a href="google.com" className="hover:underline">Dribbble</a>
        <a href="google.com" className="hover:underline">Instagram</a>
        <a href="google.com" className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
