// src/components/Footer.js
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Consulting', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Social */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Medusmo</h2>
          <p className="text-sm mb-4">
            Crafting digital experiences that leave a lasting mark.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Link groups */}
        {linkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-white font-semibold mb-3">{group.title}</h3>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Medusmo Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
