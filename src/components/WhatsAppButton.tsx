"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919876543210"; // Standard Indian number format without + or spaces
  const message = encodeURIComponent("Hello Sri Lakshmi Jewellers, I would like to inquire about your premium jewellery collections.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Call Now Button */}
      <a
        href="tel:+918662223344"
        className="flex items-center justify-center w-12 h-12 bg-stone-900 text-gold-500 border border-gold-500 rounded-full shadow-lg hover:bg-gold-500 hover:text-white transition-all duration-300 transform hover:scale-110"
        title="Call Showroom"
        aria-label="Call Showroom"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110"
        title="WhatsApp Us"
        aria-label="WhatsApp Us"
      >
        {/* Custom MessageSquare/WhatsApp looking icon */}
        <MessageSquare className="h-5 w-5 fill-current" />
      </a>
    </div>
  );
}
