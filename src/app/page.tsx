"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartHandshake, Gem, BadgeCheck, Sparkles, ChevronRight, HelpCircle, Heart, Star } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "25+", label: "Years of Trust" },
    { value: "50,000+", label: "Happy Customers" },
    { value: "10,000+", label: "Unique Designs" },
    { value: "100%", label: "Certified Jewellery" },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "BIS Hallmarked Gold",
      description: "Every gram of gold is 100% BIS hallmarked, ensuring purity and highest buyback value.",
    },
    {
      icon: <Gem className="h-8 w-8 text-gold-500" />,
      title: "Certified Diamonds",
      description: "Our diamonds are ethically sourced, certified by IGI & GIA with complete transparency.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gold-500" />,
      title: "Custom Designs",
      description: "Bring your dream design to life with the help of our award-winning master craftsmen.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-gold-500" />,
      title: "Trusted Legacy",
      description: "Vijayawada's trusted family jeweler since 1995, building relations across generations.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-gold-500" />,
      title: "Transparent Pricing",
      description: "Clear billing with direct itemization of gold weight, stones, and making charges.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-gold-500" />,
      title: "Expert Craftsmanship",
      description: "Traditional karigars from across India bringing unmatched intricacy to every piece.",
    },
  ];

  const testimonials = [
    {
      name: "Lakshmi Prasanna",
      occasion: "Bridal Jewellery",
      review: "For my daughter's wedding, we wanted traditional temple jewellery. Sri Lakshmi Jewellers exceeded our expectations. The design was majestic and everyone appreciated it. Truly the best in Vijayawada!",
      rating: 5,
    },
    {
      name: "Ramesh Babu",
      occasion: "Anniversary Gift",
      review: "Purchased a diamond choker set. The staff explained the clarity and cut details very patiently. The certification documents were handed over immediately. Excellent customer service.",
      rating: 5,
    },
    {
      name: "Srinivas Rao",
      occasion: "Dhanteras Purchase",
      review: "We have been buying from Sri Lakshmi Jewellers since 1998. The trust and transparency they maintain in billing is why we never go anywhere else.",
      rating: 5,
    },
  ];

  const careTips = [
    {
      title: "Store Separately",
      description: "Keep your gold, diamonds, and pearls in separate soft-lined compartments to prevent scratching.",
    },
    {
      title: "Avoid Chemicals",
      description: "Remove jewellery before applying cosmetics, perfumes, hairsprays, or handling household cleaning products.",
    },
    {
      title: "Professional Cleaning",
      description: "Bring your precious sets to our showroom once a year for complimentary professional cleaning and security checks.",
    },
  ];

  const faqs = [
    {
      question: "Are your gold items BIS Hallmarked?",
      answer: "Yes, all gold jewellery at Sri Lakshmi Jewellers is 100% BIS Hallmarked. We strictly adhere to government guidelines for purity and quality assurance.",
    },
    {
      question: "Do you offer certification for diamond jewellery?",
      answer: "Absolutely. Every piece of diamond jewellery is accompanied by an official certificate from internationally renowned grading laboratories like IGI or GIA.",
    },
    {
      question: "Can I customize a design I saw online?",
      answer: "Yes, we specialize in custom jewellery design. You can bring a photograph or sketch, and our expert craftsmen will create a custom piece tailored to your taste and specifications.",
    },
    {
      question: "Do you accept gold exchange?",
      answer: "Yes, we offer gold exchange services. We test the purity of your old gold transparently using state-of-the-art Karatmeter machines and offer the best market value.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-950 text-white pt-24">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Golden Jewellery Close Up"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-stone-950/70 to-stone-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-400 font-sans text-xs sm:text-sm tracking-[0.4em] uppercase block mb-4"
          >
            Est. 1995 • Vijayawada
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-white leading-tight mb-6"
          >
            Timeless Elegance <br />
            <span className="text-gold-500">Crafted to Perfection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base sm:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Discover exquisite gold, diamond, and bridal jewellery collections designed for life's most precious moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <Link
              href="/collections"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-gold-600 shadow-xl transition-all duration-300 hover:shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#FAF6F0]/10 text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-white/60 hover:border-white transition-all duration-300"
            >
              Visit Showroom
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#FAF6F0] py-12 border-b border-[#eeddae]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-xs sm:text-sm tracking-wider text-stone-600 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME / HERITAGE PREVIEW */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-gold-600 font-sans text-xs tracking-[0.3em] uppercase block">
                Heritage & Trust
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Trusted Heritage Since 1995
              </h2>
              <p className="font-sans text-stone-600 leading-relaxed">
                Sri Lakshmi Jewellers is a trusted name in fine jewelry, offering premium craftsmanship, certified diamonds, and exclusive bridal collections in the heart of Vijayawada.
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                For over two decades, we have been dedicating our expertise to curating masterpieces that celebrate the beautiful culture of South India, combining purity, trust, and luxury design.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-sans tracking-widest text-gold-600 font-semibold uppercase hover:text-gold-700 transition-colors"
                >
                  Read Our Story <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[350px] sm:h-[450px] rounded-lg overflow-hidden border-2 border-[#eeddae] p-2 bg-white shadow-2xl">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop"
                  alt="High End Jewellery Display"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-stone-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase block">
              The Sri Lakshmi Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Why Discerning Customers Choose Us
            </h2>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-stone-950/40 border border-gold-900/40 p-8 rounded-sm hover:border-gold-500/60 transition-all duration-300 group"
              >
                <div className="mb-6 bg-stone-900/80 w-16 h-16 rounded-full flex items-center justify-center border border-gold-900/30 group-hover:border-gold-500/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-gold-300 mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-[#FAF6F0]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-600 font-sans text-xs tracking-[0.3em] uppercase block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Words From Our Valued Customers
            </h2>
            <div className="w-24 h-[1px] bg-gold-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-8 rounded-sm border border-[#eeddae]/40 shadow-sm relative">
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="font-sans text-stone-600 text-sm italic mb-6 leading-relaxed">
                  "{t.review}"
                </p>
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">{t.name}</h4>
                  <span className="text-xs text-gold-600 font-sans tracking-wide uppercase">{t.occasion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JEWELLERY CARE TIPS */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#eeddae]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <span className="text-gold-600 font-sans text-xs tracking-[0.3em] uppercase block">
                Preserve Brilliance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Jewellery Care Tips
              </h2>
              <p className="font-sans text-stone-600 leading-relaxed">
                Fine jewelry is a legacy meant to be passed down through generations. Follow these simple steps to keep your gold and diamonds sparkling forever.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              {careTips.map((tip, idx) => (
                <div key={idx} className="bg-[#FAF6F0] p-6 border border-[#eeddae]/30 rounded-sm">
                  <span className="font-serif text-3xl font-bold text-gold-400 block mb-4">0{idx + 1}</span>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">{tip.title}</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#FAF6F0] border-t border-[#eeddae]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold-600 font-sans text-xs tracking-[0.3em] uppercase block">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-[1px] bg-gold-600 mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#FDFBF7] rounded-sm border border-[#eeddae]/40 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 p-6 text-stone-900 cursor-pointer select-none">
                  <h3 className="font-serif text-base sm:text-lg font-medium">
                    {faq.question}
                  </h3>
                  <span className="relative shrink-0 ml-1.5 w-5 h-5">
                    <ChevronRight className="absolute inset-0 w-5 h-5 text-gold-600 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-[#eeddae]/10 text-stone-600 font-sans text-sm leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
