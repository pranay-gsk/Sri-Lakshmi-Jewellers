"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "gold",
    title: "Antique Gold Haram",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "diamonds",
    title: "Solitaire Diamond Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "bridal",
    title: "Royal Telugu Bridal Set",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "temple",
    title: "Lord Krishna Nakshi Pendant",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "showroom",
    title: "Sri Lakshmi Showroom Lounge",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "gold",
    title: "Antique Ruby Bangles",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "diamonds",
    title: "Luxury Diamond Choker",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "bridal",
    title: "Bridal Vaddanam (Waist Belt)",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "showroom",
    title: "Premium Bridal Consultation Desk",
    image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8be?q=80&w=800&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { value: "all", label: "All Works" },
  { value: "gold", label: "Gold Jewellery" },
  { value: "diamonds", label: "Diamond Jewellery" },
  { value: "bridal", label: "Bridal Collections" },
  { value: "temple", label: "Temple Jewellery" },
  { value: "showroom", label: "Showroom Interior" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    const prevIndex = activeImageIndex === 0 ? filteredItems.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(prevIndex);
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    const nextIndex = activeImageIndex === filteredItems.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImageIndex(nextIndex);
  };

  return (
    <div className="pt-[84px] lg:pt-[96px] min-h-[80vh]">
      {/* Banner */}
      <section className="bg-stone-900 text-[#FAF6F0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1920&auto=format&fit=crop"
            alt="Gold Jewellery background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] font-sans uppercase block mb-3">Brilliance in Frame</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">Jewellery Gallery</h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#FAF6F0] border-b border-[#eeddae]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2.5 rounded-sm font-sans text-xs tracking-wider uppercase border transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-gold-600 border-gold-600 text-white shadow-md"
                    : "border-stone-300 text-stone-600 hover:border-gold-500 hover:text-gold-600 bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className="relative break-inside-avoid bg-white border border-[#eeddae]/20 rounded-sm overflow-hidden p-2 shadow-sm hover:shadow-xl hover:border-gold-500/50 group cursor-pointer transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-sm w-full h-[280px] sm:h-auto sm:aspect-auto">
                  {/* Aspect height handled dynamically since masonry, fallback to image sizes or placeholder heights */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end p-2 bg-stone-900/60 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs text-gold-400 font-sans tracking-widest uppercase block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-white font-medium">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-6 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
            <img
              src={filteredItems[activeImageIndex].image}
              alt={filteredItems[activeImageIndex].title}
              className="max-w-full max-h-full object-contain border border-gold-500/30 p-1 bg-stone-900/50"
            />
            <div className="absolute bottom-[-40px] text-center w-full">
              <h4 className="font-serif text-lg text-white">{filteredItems[activeImageIndex].title}</h4>
              <span className="text-xs text-gold-400 uppercase tracking-widest">{filteredItems[activeImageIndex].category}</span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-6 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
}
