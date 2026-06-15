"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MessageSquare } from "lucide-react";

export default function Bridal() {
  const bridalCategories = [
    {
      title: "Bridal Necklaces",
      description: "Grand choker necklaces and multi-tier statement harams embedded with premium rubies, emeralds, and uncut diamonds.",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Complete Wedding Sets",
      description: "Harmonized sets containing matching neckpieces, earrings, waist belt (vaddanam), armlets (aravanki), and hair accessories.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Traditional South Indian Jewellery",
      description: "Masterpieces celebrating heritage Telugu culture, featuring antique gold kasulaperu, mango malas, and Nakshi work temple necklaces.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Diamond Bridal Collections",
      description: "High-end diamond bridal jewellery collections set in 18K white and yellow gold, detailed with rare solitaire drops.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-[84px] lg:pt-[96px]">
      {/* Banner */}
      <section className="bg-stone-900 text-[#FAF6F0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-35 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1920&auto=format&fit=crop"
            alt="Bridal Jewellery background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] font-sans uppercase block mb-3">Make Your Wedding Truly Memorable</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">Bridal Collections</h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Intro section */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-gold-600 font-sans text-xs tracking-wider uppercase font-semibold">The Grand Wedding Saga</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Timeless Jewellery for the Indian Bride
          </h2>
          <p className="font-sans text-stone-600 leading-relaxed">
            At Sri Lakshmi Jewellers, we understand that bridal jewellery is not just an ornament, but a treasure house of memories and culture. Our exclusive wedding collection is handcrafted to bring out the royal essence in every bride, ensuring a stunning and unforgettable presence on her big day.
          </p>
        </div>
      </section>

      {/* Showcase list */}
      <section className="py-10 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {bridalCategories.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Large showcase image */}
                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] rounded-sm overflow-hidden border border-[#eeddae]/40 p-2 bg-white shadow-xl">
                  <div className="relative w-full h-full rounded-sm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Description and CTA */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-gold-500" />
                    <span className="text-xs text-gold-600 font-sans tracking-widest uppercase font-semibold">Exquisite Craftsmanship</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-stone-900 text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-white font-sans text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300"
                    >
                      Book A Consultation
                    </Link>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20Sri%20Lakshmi%20Jewellers%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white hover:bg-[#128C7E] font-sans text-xs tracking-widest uppercase rounded-sm transition-colors shadow-md"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
