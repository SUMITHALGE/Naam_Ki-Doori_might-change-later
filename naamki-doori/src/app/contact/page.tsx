"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, MapPin, Clock, Send } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { getGeneralWhatsAppLink } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Get in Touch
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal mb-6">
              Contact Us
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-charcoal/50 text-lg leading-relaxed">
              We&apos;d love to hear from you. Whether you have a custom order
              in mind or just want to say hello — reach out.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Methods */}
            <div>
              <FadeUp>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-8">
                  Let&apos;s Start
                  <br />
                  <span className="italic text-soft-brown">a Conversation</span>
                </h2>
              </FadeUp>

              <div className="space-y-8">
                {/* WhatsApp */}
                <FadeUp delay={0.1}>
                  <a
                    href={getGeneralWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 p-6 rounded-2xl border border-warm-beige/30 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-none group-hover:bg-[#25D366]/20 transition-colors duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-[#25D366]"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-charcoal/50 text-sm mb-2">
                        Our preferred way to connect. Fastest response time.
                      </p>
                      <span className="text-[#25D366] text-sm font-medium flex items-center gap-1">
                        Chat Now
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    </div>
                  </a>
                </FadeUp>

                {/* Instagram */}
                <FadeUp delay={0.2}>
                  <a
                    href="https://instagram.com/naamki_doori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 p-6 rounded-2xl border border-warm-beige/30 hover:border-pink-300/30 hover:bg-pink-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-none">
                      <Instagram size={24} className="text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal mb-1">
                        Instagram
                      </h3>
                      <p className="text-charcoal/50 text-sm mb-2">
                        Follow our journey and see our latest creations.
                      </p>
                      <span className="text-pink-500 text-sm font-medium flex items-center gap-1">
                        @naamki_doori
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    </div>
                  </a>
                </FadeUp>

                {/* Info Cards */}
                <FadeUp delay={0.3}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-5 rounded-2xl bg-ivory border border-warm-beige/30">
                      <Clock
                        size={20}
                        className="text-gold mb-3"
                      />
                      <h4 className="font-serif text-lg text-charcoal mb-1">
                        Response Time
                      </h4>
                      <p className="text-charcoal/50 text-sm">
                        Within 2-4 hours on WhatsApp
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-ivory border border-warm-beige/30">
                      <MapPin
                        size={20}
                        className="text-gold mb-3"
                      />
                      <h4 className="font-serif text-lg text-charcoal mb-1">
                        Based In
                      </h4>
                      <p className="text-charcoal/50 text-sm">
                        India • Ships Worldwide
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Contact Form */}
            <FadeUp delay={0.2}>
              <div className="bg-ivory rounded-3xl p-8 lg:p-12 border border-warm-beige/30">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                      <Send size={28} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/50 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="text-sm text-gold hover:text-deep-brown transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-charcoal/50 text-sm mb-8">
                      Fill out the form below and we&apos;ll get back to you.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-cream border border-warm-beige/50 rounded-xl text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-cream border border-warm-beige/50 rounded-xl text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-cream border border-warm-beige/50 rounded-xl text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                          placeholder="Custom order inquiry"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-cream border border-warm-beige/50 rounded-xl text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                          placeholder="Tell us about your vision..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase rounded-full hover:bg-deep-brown transition-all duration-300"
                      >
                        Send Message
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
