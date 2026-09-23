"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MapPin, Clock, Phone } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/data";

const SHOP_WA = getGeneralWhatsAppLink();

function StarRating({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

const giftProducts = [
  { label: "GIFT ESSENTIALS", price: "?850", img: "/product-hoop.jpg" },
  { label: "TOTE BAGS", price: "?1,800", img: "/product-tote-floral.jpg" },
  { label: "CUSTOM TOTES", price: "?1,800", img: "/product-tote-fox.jpg" },
  { label: "GIFT BASKETS", price: "?2,900", img: "/hero-product.jpg" },
];

const categories = [
  { label: "PERFECTLY PICKED & READY TO GIFT", img: "/product-hoop.jpg" },
  { label: "MAKE IT YOURS: CUSTOM EMBROIDERY", img: "/product-tote-floral.jpg" },
  { label: "TINY TOUCHES", img: "/product-tote-fox.jpg" },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "Absolutely love my custom embroidered tote! The quality is incredible and it arrived so quickly. Will definitely order again!",
    avatar: "S",
    color: "#A78BFA",
  },
  {
    name: "Emily R.",
    text: "The sorority gifts were perfect! Everyone in the chapter loved them. Such a thoughtful and unique gift idea.",
    avatar: "E",
    color: "#F9A8D4",
  },
  {
    name: "Jessica L.",
    text: "Best embroidery shop around! The attention to detail is unmatched. My monogram bag is gorgeous.",
    avatar: "J",
    color: "#86EFAC",
  },
];

const galleryImgs = [
  "/product-tote-floral.jpg",
  "/owner-portrait.jpg",
  "/hero-product.jpg",
  "/product-tote-fox.jpg",
  "/product-shirt.jpg",
  "/product-hoop.jpg",
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ----------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------- */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#5B4E9E 0%,#6B5CB0 45%,#8B7EC8 75%,#A89DD8 100%)" }}
      >
        {[
          { pos: "top-[15%] left-[8%]",  bg: "#F9C5D1" },
          { pos: "top-[30%] left-[15%]", bg: "#FFE066" },
          { pos: "top-[60%] left-[5%]",  bg: "#A8D8EA" },
          { pos: "top-[10%] right-[8%]", bg: "#F9C5D1" },
          { pos: "top-[40%] right-[5%]", bg: "#B5EAD7" },
          { pos: "top-[70%] right-[10%]",bg: "#FFE066" },
        ].map((d, i) => (
          <div key={i} className={`absolute w-3 h-3 rounded-full opacity-60 ${d.pos}`} style={{ background: d.bg }} />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-pink-200 text-sm font-medium tracking-widest uppercase mb-3">Sweet Treats</p>
            <h1
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", fontFamily: "'Georgia',serif" }}
            >
              Thoughtful Gift And<br />
              Custom Embroidery,<br />
              <span className="text-yellow-300">Now Shipped To You!</span>
            </h1>
            <p className="text-purple-200 text-base leading-relaxed mb-8 max-w-md">
              Find the perfect personalized gift for anyone on your list. Custom embroidery, unique gifts &amp; sweet treats delivered right to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/collection"
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{ background: "#F9C5D1", color: "#5B4E9E" }}
              >
                SHOP NOW ?
              </Link>
              <a
                href={SHOP_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                CUSTOM ORDER
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <Image src="/hero-product.jpg" alt="Gift basket" fill className="object-cover" />
              </div>
              <div
                className="absolute -top-4 -left-4 text-purple-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                style={{ background: "#FFE066", transform: "rotate(-12deg)" }}
              >
                ?? Free Shipping!
              </div>
              <div
                className="absolute -bottom-2 -right-2 text-purple-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                style={{ background: "#F9C5D1", transform: "rotate(8deg)" }}
              >
                ? Custom Made
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 70 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#FAD9E3" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 2. GIFTS THAT MAKE THEM SMILE */}
      {/* ----------------------------------------------- */}
      <section className="py-16" style={{ background: "#FAD9E3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-4">
            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">Shop In Store or Online</p>
            <h2 className="font-bold text-3xl lg:text-4xl text-purple-900" style={{ fontFamily: "'Georgia',serif" }}>
              GIFTS THAT MAKE THEM SMILE
            </h2>
            <Link href="/collection" className="inline-block mt-3 text-xs text-purple-700 border border-purple-400 rounded-full px-4 py-1.5 hover:bg-purple-100 transition-all">
              SHOP ALL ITEMS ?
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10">
            {giftProducts.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div
                  className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "0 8px 24px rgba(91,78,158,0.2)" }}
                >
                  <Image src={p.img} alt={p.label} fill className="object-cover" />
                </div>
                <p className="text-center text-xs font-bold text-purple-900 tracking-wide max-w-[130px] leading-tight">{p.label}</p>
                <p className="text-xs text-purple-600 font-semibold">{p.price}</p>
                <button className="text-xs text-white px-4 py-1 rounded-full" style={{ background: "#C084FC" }}>
                  SHOP NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 3. BEST CATEGORIES */}
      {/* ----------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">Shop by type</p>
            <h2 className="font-bold text-3xl lg:text-4xl text-purple-900" style={{ fontFamily: "'Georgia',serif" }}>
              BEST CATEGORIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-bold tracking-wide">{cat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#F3F0FF" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 4. FOR STUDENTS & SORORITIES */}
      {/* ----------------------------------------------- */}
      <section className="py-20 relative" style={{ background: "#F3F0FF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="relative mb-10">
            <svg viewBox="0 0 800 130" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl mx-auto" style={{ height: 120 }}>
              <defs>
                <path id="arcpath" d="M 60,110 Q 400,-20 740,110" />
              </defs>
              <text style={{ fontSize: "40px", fontFamily: "'Georgia',serif", fill: "#3D2B8E", fontWeight: 900 }}>
                <textPath href="#arcpath" startOffset="50%" textAnchor="middle">
                  FOR STUDENTS AND SORORITIES
                </textPath>
              </text>
            </svg>
          </div>

          <p className="text-purple-500 text-sm tracking-widest uppercase mb-10">
            CAMPUS READY GIFTS &amp; PERSONAL GO-TO&apos;S
          </p>

          <div className="flex items-center justify-center gap-4 lg:gap-8">
            <button className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-400 hover:border-purple-600 hover:text-purple-600 transition-all flex-shrink-0">
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-6 lg:gap-10">
              {["/product-tote-floral.jpg", "/product-shirt.jpg", "/product-hoop.jpg"].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white"
                    style={{ boxShadow: "0 8px 24px rgba(91,78,158,0.2)" }}
                  >
                    <Image src={img} alt="Sorority product" fill className="object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-400 hover:border-purple-600 hover:text-purple-600 transition-all flex-shrink-0">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <StarRating />
            <p className="font-bold text-purple-900 text-sm tracking-wide">CUSTOM EMBROIDERY</p>
            <p className="text-purple-700 font-semibold text-sm">?1,850</p>
          </div>
        </div>

        <div className="mt-12">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#FAD9E3" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 5. SOCIAL PROOF */}
      {/* ----------------------------------------------- */}
      <section className="py-16" style={{ background: "#FAD9E3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">Real customer reviews</p>
            <h2 className="font-bold text-3xl lg:text-4xl text-purple-900" style={{ fontFamily: "'Georgia',serif" }}>
              SOCIAL PROOF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Google rating card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-6 h-6">
                    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.9 2.5 30.3 0 24 0 14.8 0 6.9 5.4 3 13.3l7.8 6C12.8 13 17.9 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.9 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.9c-.6 2.9-2.2 5.4-4.6 7l7.1 5.5c4.2-3.8 6.5-9.5 6.5-16.5z"/>
                    <path fill="#FBBC05" d="M10.8 28.7A14.7 14.7 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7L2.5 13.3A24 24 0 0 0 0 24c0 3.8.9 7.4 2.5 10.6l8.3-5.9z"/>
                    <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.7l-7.1-5.5c-2.2 1.5-5 2.4-8.9 2.4-6.1 0-11.2-4.1-13-9.6l-8.1 6.2C6.5 42.5 14.6 48 24 48z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">NaamKi Doori</p>
                  <p className="text-gray-400 text-xs">Google Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-800">4.9</span>
                <div>
                  <StarRating />
                  <p className="text-xs text-gray-400 mt-1">Based on 87 reviews</p>
                </div>
              </div>
            </div>

            {reviews.slice(0, 2).map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                    <StarRating />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {reviews.slice(2).map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                    <StarRating />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#5B4E9E" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 6. WHY NAAMKI DOORI */}
      {/* ----------------------------------------------- */}
      <section className="py-16 text-white" style={{ background: "#5B4E9E" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
                <Image src="/owner-portrait.jpg" alt="Owner of NaamKi Doori" fill className="object-cover" />
                <div className="absolute -top-4 -left-4 text-4xl select-none">??</div>
                <div className="absolute -bottom-2 -right-2 text-3xl select-none">??</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-pink-200 text-xs tracking-widest uppercase mb-3">The story behind the brand</p>
              <h2 className="font-bold text-3xl lg:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Georgia',serif" }}>
                WHY NAAMKI DOORI&apos;S
              </h2>
              <p className="text-purple-200 leading-relaxed mb-4">
                NaamKi Doori was born from a passion for meaningful gifts and custom embroidery. Every piece we create tells a story  your story  stitched with care and delivered with love.
              </p>
              <p className="text-purple-200 leading-relaxed mb-4">
                Whether you&apos;re looking for the perfect personalized gift, sorority merchandise, or a sweet treat to brighten someone&apos;s day, we have something special just for you.
              </p>
              <p className="text-purple-200 leading-relaxed mb-8">
                We believe every gift should feel as special as the person receiving it. That&apos;s why we take the time to get the details just right, every single time.
              </p>
              <a
                href={SHOP_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "#F9C5D1", color: "#5B4E9E" }}
              >
                LEARN MORE ?
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 7. STOP IN & SAY HELLO */}
      {/* ----------------------------------------------- */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">Come see us in person</p>
          <h2 className="font-bold text-3xl lg:text-4xl text-purple-900 mb-6" style={{ fontFamily: "'Georgia',serif" }}>
            STOP IN &amp; SAY HELLO
          </h2>

          <div className="inline-block bg-purple-50 rounded-2xl px-8 py-6 mb-8 border border-purple-100 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={18} className="text-purple-500 flex-shrink-0" />
              <p className="font-semibold text-purple-900 text-sm">Hours: TuesdayFriday 9 AM4 PM</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={18} className="text-purple-500 flex-shrink-0" />
              <p className="text-purple-700 text-sm">123 Craft Lane, Mumbai, India</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-purple-500 flex-shrink-0" />
              <p className="text-purple-700 text-sm">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "#5B4E9E", color: "#fff" }}
            >
              GET DIRECTIONS ?
            </Link>
            <a
              href={SHOP_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide border-2 transition-all hover:scale-105"
              style={{ borderColor: "#5B4E9E", color: "#5B4E9E" }}
            >
              MESSAGE US
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 8. PHOTO GALLERY STRIP */}
      {/* ----------------------------------------------- */}
      <section className="grid grid-cols-3 md:grid-cols-6">
        {galleryImgs.map((img, i) => (
          <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
            <Image
              src={img}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/30 transition-all duration-300" />
          </div>
        ))}
      </section>

    </div>
  );
}
