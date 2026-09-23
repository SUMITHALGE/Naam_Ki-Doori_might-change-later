"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/animations";
import { ProductCard } from "@/components/product-card";
import { products, categories, type Category } from "@/lib/data";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 lg:pt-28">
      {/* Header */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Creations
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal mb-6">
              Collection
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-charcoal/50 leading-relaxed">
              Browse our curated collection of embroidered pieces — each one
              handcrafted with care, designed to tell your unique story.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 lg:top-24 z-30 bg-cream/90 backdrop-blur-md border-y border-warm-beige/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-none px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-charcoal text-cream"
                    : "bg-transparent text-charcoal/50 hover:text-charcoal hover:bg-warm-beige/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-charcoal/30 italic">
                No pieces found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
