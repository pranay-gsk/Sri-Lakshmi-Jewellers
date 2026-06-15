"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    collection: "Gold Necklaces",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        collection: "Gold Necklaces",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-[84px] lg:pt-[96px]">
      {/* Banner */}
      <section className="bg-stone-900 text-[#FAF6F0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8be?q=80&w=1920&auto=format&fit=crop"
            alt="Gold Jewellery background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] font-sans uppercase block mb-3">Get In Touch</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">Contact Us</h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Showroom info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-gold-600 text-xs tracking-wider uppercase font-semibold block">Experience Luxury</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                  Visit Our Showroom
                </h2>
                <p className="font-sans text-stone-600 leading-relaxed">
                  We welcome you to visit our state-of-the-art showroom in Vijayawada. Explore our curated collections in a private and luxurious environment.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3 p-6 bg-[#FAF6F0] border border-[#eeddae]/30 rounded-sm">
                  <MapPin className="h-6 w-6 text-gold-600" />
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917]">Showroom Address</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    Beside Raj Towers, MG Road,
                    <br />
                    Vijayawada, AP - 520010
                  </p>
                </div>

                <div className="space-y-3 p-6 bg-[#FAF6F0] border border-[#eeddae]/30 rounded-sm">
                  <Clock className="h-6 w-6 text-gold-600" />
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917]">Business Hours</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    Mon - Sat: 10:30 AM - 8:30 PM
                    <br />
                    Sun: 11:30 AM - 7:30 PM
                  </p>
                </div>

                <div className="space-y-3 p-6 bg-[#FAF6F0] border border-[#eeddae]/30 rounded-sm">
                  <Phone className="h-6 w-6 text-gold-600" />
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917]">Call Us</h3>
                  <p className="font-sans text-sm text-stone-600">
                    <a href="tel:+918662223344" className="hover:text-gold-600 transition-colors">+91 866 222 3344</a>
                  </p>
                </div>

                <div className="space-y-3 p-6 bg-[#FAF6F0] border border-[#eeddae]/30 rounded-sm">
                  <Mail className="h-6 w-6 text-gold-600" />
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917]">Email Inquiry</h3>
                  <p className="font-sans text-sm text-stone-600">
                    <a href="mailto:info@srilakshmijewellers.com" className="hover:text-gold-600 transition-colors">info@srilakshmijewellers.com</a>
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+918662223344"
                  className="px-6 py-3.5 bg-stone-900 text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-white font-sans text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 bg-[#25D366] text-white hover:bg-[#128C7E] font-sans text-xs tracking-widest uppercase rounded-sm shadow-md transition-colors"
                >
                  <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Appointment Booking / Inquiry Form */}
            <div id="book-appointment" className="bg-white p-8 sm:p-10 border border-[#eeddae]/40 rounded-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400" />
              
              <div className="mb-8 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-stone-900">Book An Appointment</h3>
                <p className="font-sans text-xs text-stone-500">Plan a visit to preview bridal collections with our personal consultants.</p>
              </div>

              {status === "success" ? (
                <div className="py-16 text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-green-50 text-green-600 rounded-full">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-stone-900">Request Submitted Successfully</h4>
                  <p className="font-sans text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your inquiry has been sent to our showroom coordinator. We will contact you shortly to confirm your booking details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-sans rounded-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-sans font-semibold text-stone-700 tracking-wider uppercase mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF6F0] border border-stone-200 rounded-sm text-sm focus:border-gold-500 focus:outline-none transition-colors text-stone-850"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-sans font-semibold text-stone-700 tracking-wider uppercase mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF6F0] border border-stone-200 rounded-sm text-sm focus:border-gold-500 focus:outline-none transition-colors text-stone-850"
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-sans font-semibold text-stone-700 tracking-wider uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF6F0] border border-stone-200 rounded-sm text-sm focus:border-gold-500 focus:outline-none transition-colors text-stone-850"
                        placeholder="e.g. name@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="collection" className="block text-xs font-sans font-semibold text-stone-700 tracking-wider uppercase mb-2">Interested Collection</label>
                    <select
                      id="collection"
                      name="collection"
                      value={formData.collection}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF6F0] border border-stone-200 rounded-sm text-sm focus:border-gold-500 focus:outline-none transition-colors text-stone-850"
                    >
                      <option>Gold Necklaces</option>
                      <option>Diamond Jewellery</option>
                      <option>Bridal Collections</option>
                      <option>Temple Jewellery</option>
                      <option>Bangles & Kadas</option>
                      <option>Silver Articles</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-sans font-semibold text-stone-700 tracking-wider uppercase mb-2">Message / Special Request</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF6F0] border border-stone-200 rounded-sm text-sm focus:border-gold-500 focus:outline-none transition-colors text-stone-850"
                      placeholder="Let us know your preferences..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 disabled:from-gold-300 disabled:to-gold-400 text-white font-sans text-xs tracking-widest uppercase rounded-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Submitting Request..." : "Book Appointment"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map view */}
      <section className="h-[450px] relative bg-stone-100 border-t border-[#eeddae]/30">
        {/* Real or mock beautiful map presentation */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.267600862024!2d80.62772591485121!3d16.512686188612716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1f98eb6c33f%3A0xd689bb53e7f22384!2sMG%20Rd%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1605273395992!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Sri Lakshmi Jewellers Showroom Location"
        />
      </section>
    </div>
  );
}
