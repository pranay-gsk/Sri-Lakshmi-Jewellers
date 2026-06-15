"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Collections() {
  const categories = [
    {
      id: "gold-necklaces",
      title: "Gold Necklaces",
      description: "Exquisite necklaces crafted in 22 Karat gold, featuring intricate filigree, Kundan, and antique finishes.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "diamond-jewellery",
      title: "Diamond Jewellery",
      description: "Timeless diamond creations certified by GIA/IGI, featuring modern chokers, elegant solitaires, and luxury bangles.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "bridal-collections",
      title: "Bridal Collections",
      description: "Complete traditional South Indian wedding sets, featuring mango harams, kasu malas, vaddanams, and jhumkas.",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "temple-jewellery",
      title: "Temple Jewellery",
      description: "Handcrafted temple jewelry in pure gold, reflecting traditional motifs inspired by South Indian temple architecture.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "bangles",
      title: "Bangles & Kadas",
      description: "A gorgeous array of traditional gold bangles, diamond bracelets, and royal kadas with antique stone settings.",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "earrings",
      title: "Premium Earrings",
      description: "From traditional South Indian jhumkas and buttalu to contemporary diamond studs and exquisite drops.",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "rings",
      title: "Exquisite Rings",
      description: "Solitaire engagement rings, traditional gold bands, and cocktail rings embellished with rubies and emeralds.",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "kids-jewellery",
      title: "Kids Jewellery",
      description: "Lightweight, smooth-edged gold ornaments including anklets, small waist chains, and certified baby bangles.",
      image: "https://images.unsplash.com/photo-1596944210900-34fa323a6b9a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "silver-articles",
      title: "Silver Articles",
      description: "Pure silver puja items, designer plates, bowls, and beautifully detailed legacy gift articles.",
      image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8be?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-[84px] lg:pt-[96px]">
      {/* Banner */}
      <section className="bg-stone-900 text-[#FAF6F0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1920&auto=format&fit=crop"
            alt="Gold Jewellery background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] font-sans uppercase block mb-3">Our Offerings</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">Exquisite Collections</h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Intro section */}
      <section className="py-12 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-semibold">Crafted for Every Milestone</h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
            At Sri Lakshmi Jewellers, we showcase a wide array of curated collections spanning purity, artistry, and heritage. Discover gold, diamond, and silver designs handcrafted to fit your unique celebration.
          </p>
        </div>
      </section>

      {/* Grid of Categories */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className="group relative bg-white border border-[#eeddae]/30 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 bg-[#FDFBF7] flex-grow flex flex-col justify-between border-t border-[#eeddae]/10">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-gold-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-stone-600 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#eeddae]/10 flex justify-between items-center">
                    <Link
                      href="/contact"
                      className="text-xs font-sans tracking-widest font-semibold uppercase text-gold-600 hover:text-gold-700 transition-colors flex items-center gap-1"
                    >
                      Inquire Collection <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
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
