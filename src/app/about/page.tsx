"use client";

import React from "react";
import Image from "next/image";
import { Award, Gem, ShieldCheck, Heart, Sparkles, UserCheck } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Award className="h-6 w-6 text-gold-500" />,
      title: "BIS Hallmarked Gold",
      description: "We verify the purity of every gold ornament to ensure absolute authenticity and direct transparency.",
    },
    {
      icon: <Gem className="h-6 w-6 text-gold-500" />,
      title: "Certified Diamonds",
      description: "Our diamonds are ethically sourced and carry international certifications verifying cut, color, clarity, and carat.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold-500" />,
      title: "Custom Designs",
      description: "Collaborate directly with our master designers to craft unique pieces suited specifically for your special occasions.",
    },
    {
      icon: <Heart className="h-6 w-6 text-gold-500" />,
      title: "Trusted Legacy",
      description: "Since 1995, we have earned the trust of families in Vijayawada by prioritizing transparency and quality.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-gold-500" />,
      title: "Transparent Pricing",
      description: "Enjoy completely transparent billing with precise details on gold rates, stone weights, and making charges.",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-gold-500" />,
      title: "Expert Craftsmanship",
      description: "Handcrafted by traditional artisans (karigars) whose families have practiced the art of jewelry making for generations.",
    },
  ];

  return (
    <div className="pt-[84px] lg:pt-[96px]">
      {/* Banner */}
      <section className="bg-stone-900 text-[#FAF6F0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop"
            alt="Gold Jewellery background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] font-sans uppercase block mb-3">Our Legacy</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">About Us</h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div className="space-y-6">
              <span className="text-gold-600 text-xs tracking-wider uppercase font-semibold block">Trusted for 25+ Years</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Trusted Heritage Since 1995
              </h2>
              <p className="font-sans text-stone-600 leading-relaxed text-sm sm:text-base">
                Established in 1995, Sri Lakshmi Jewellers has grown to become a cornerstone of fine jewellery in Vijayawada, Andhra Pradesh. We specialize in curating traditional South Indian bridal designs, modern diamond creations, and exquisite silver articles.
              </p>
              <p className="font-sans text-stone-600 leading-relaxed text-sm sm:text-base">
                Our design philosophy blends time-honored heritage with contemporary refinement. From selecting the finest gemstones to the final polish of a handmade necklace, we ensure the highest standards of purity and artistic integrity.
              </p>
              <p className="font-sans text-stone-600 leading-relaxed text-sm sm:text-base">
                Whether you are seeking custom-made bridal necklaces or elegant daily wear gold rings, our experienced consultants are dedicated to providing a personalized and transparent shopping experience.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[250px] sm:h-[350px] rounded-sm overflow-hidden border border-[#eeddae]/40 p-1 bg-white shadow-md">
                <div className="relative w-full h-full rounded-sm overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop"
                    alt="Gold bridal necklace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[350px] rounded-sm overflow-hidden border border-[#eeddae]/40 p-1 bg-white shadow-md mt-6 sm:mt-12">
                <div className="relative w-full h-full rounded-sm overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
                    alt="Diamond rings"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust standards */}
      <section className="py-20 bg-stone-900 text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase block">Our Standards</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Uncompromising Quality</h2>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-stone-950/50 border border-gold-900/30 p-8 rounded-sm hover:border-gold-500/50 transition-colors">
                <div className="mb-4">{val.icon}</div>
                <h3 className="font-serif text-lg text-gold-300 font-semibold mb-2">{val.title}</h3>
                <p className="font-sans text-[#FAF6F0]/70 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
