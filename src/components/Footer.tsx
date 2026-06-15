import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#FAF6F0] border-t border-gold-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Legacy */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start select-none">
              <span className="font-serif text-3xl font-semibold tracking-wider text-white">
                SRI LAKSHMI
              </span>
              <span className="text-xs tracking-[0.3em] font-light text-gold-500 uppercase">
                JEWELLERS
              </span>
            </Link>
            <p className="text-sm text-[#FAF6F0]/70 font-sans leading-relaxed">
              Serving Vijayawada since 1995. Crafted to perfection, we bring you BIS Hallmarked Gold and Certified Diamonds.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-800 hover:border-gold-500 hover:text-gold-500 transition-colors rounded-sm"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-800 hover:border-gold-500 hover:text-gold-500 transition-colors rounded-sm"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-800 hover:border-gold-500 hover:text-gold-500 transition-colors rounded-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold-400 tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-[#FAF6F0]/70">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-400 transition-colors">Collections</Link>
              </li>
              <li>
                <Link href="/bridal" className="hover:text-gold-400 transition-colors">Bridal Jewellery</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Collections links */}
          <div>
            <h4 className="font-serif text-lg text-gold-400 tracking-wider mb-6">Collections</h4>
            <ul className="space-y-3 font-sans text-sm text-[#FAF6F0]/70">
              <li>
                <Link href="/collections#gold" className="hover:text-gold-400 transition-colors">Gold Necklaces</Link>
              </li>
              <li>
                <Link href="/collections#diamonds" className="hover:text-gold-400 transition-colors">Diamond Jewellery</Link>
              </li>
              <li>
                <Link href="/bridal" className="hover:text-gold-400 transition-colors">Bridal Collections</Link>
              </li>
              <li>
                <Link href="/collections#temple" className="hover:text-gold-400 transition-colors">Temple Jewellery</Link>
              </li>
              <li>
                <Link href="/collections#silver" className="hover:text-gold-400 transition-colors">Silver Articles</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg text-gold-400 tracking-wider mb-6">Visit Our Showroom</h4>
            <ul className="space-y-4 font-sans text-sm text-[#FAF6F0]/70">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <span>
                  Beside Raj Towers, MG Road,
                  <br />
                  Vijayawada, Andhra Pradesh - 520010
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gold-500 mr-3 shrink-0" />
                <a href="tel:+918662223344" className="hover:text-gold-400 transition-colors">+91 866 222 3344</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gold-500 mr-3 shrink-0" />
                <a href="mailto:info@srilakshmijewellers.com" className="hover:text-gold-400 transition-colors">info@srilakshmijewellers.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-gold-500 mr-3 shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 10:30 AM - 8:30 PM
                  <br />
                  Sun: 11:30 AM - 7:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-stone-800 bg-stone-950 py-6 text-center text-xs text-[#FAF6F0]/40 font-sans tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <span>&copy; {currentYear} Sri Lakshmi Jewellers. All Rights Reserved.</span>
          <span>Designed with Timeless Elegance</span>
        </div>
      </div>
    </footer>
  );
}
