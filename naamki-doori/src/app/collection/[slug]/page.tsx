"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FadeUp, FadeIn } from "@/components/animations";
import { products, getWhatsAppLink } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-24 lg:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <FadeIn>
          <div className="flex items-center gap-2 text-sm text-charcoal/40">
            <Link
              href="/collection"
              className="hover:text-charcoal transition-colors duration-300 flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              Collection
            </Link>
            <span>/</span>
            <span className="text-charcoal/60">{product.name}</span>
          </div>
        </FadeIn>
      </div>

      {/* Product Content */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <FadeUp>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-warm-beige via-cream to-soft-brown/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full border-2 border-dashed border-gold/20 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full border border-gold/30 flex items-center justify-center">
                          <span className="font-serif text-5xl text-soft-brown/30 italic">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <p className="font-serif text-lg text-soft-brown/30 italic">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/15 rounded-tl-2xl" />
                  <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/15 rounded-br-2xl" />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-warm-beige/50 to-cream border border-warm-beige/30 flex items-center justify-center cursor-pointer hover:border-gold/30 transition-colors duration-300"
                    >
                      <span className="font-serif text-xl text-soft-brown/20 italic">
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Product Info */}
            <div className="lg:py-8">
              <FadeUp delay={0.1}>
                <span className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
                  {product.category}
                </span>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
                  {product.name}
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-3xl font-serif text-gold mb-8">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <p className="text-charcoal/60 leading-relaxed mb-8">
                  {product.description}
                </p>
              </FadeUp>

              {/* Personalization Options */}
              <FadeUp delay={0.3}>
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-charcoal mb-4">
                    Personalization Options
                  </h3>
                  <ul className="space-y-3">
                    {product.personalizationOptions.map((option, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-charcoal/60"
                      >
                        <Check
                          size={16}
                          className="text-gold mt-0.5 flex-none"
                        />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* WhatsApp CTA */}
              <FadeUp delay={0.35}>
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase rounded-full hover:bg-deep-brown transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Inquire on WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </FadeUp>

              {/* Product Story */}
              <FadeUp delay={0.4}>
                <div className="mt-12 pt-8 border-t border-warm-beige/30">
                  <h3 className="font-serif text-2xl text-charcoal mb-4">
                    The Story Behind This Piece
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    {product.story}
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
