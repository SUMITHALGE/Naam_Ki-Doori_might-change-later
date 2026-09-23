"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Product, getWhatsAppLink } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group"
    >
      <Link href={`/collection/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-warm-beige/30 mb-5">
          {/* Placeholder gradient for product image */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-cream to-soft-brown/20" />
          
          {/* Decorative embroidery motif */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-dashed border-soft-brown/20 flex items-center justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-2xl lg:text-3xl text-soft-brown/40 italic">
                  {product.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
          
          {/* View button */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={18} className="text-charcoal" />
          </div>

          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-cream/80 backdrop-blur-sm rounded-full text-[10px] tracking-[0.2em] uppercase text-charcoal/70">
              {product.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl lg:text-2xl text-charcoal group-hover:text-soft-brown transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-charcoal/50 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
          <p className="text-gold font-medium tracking-wide">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>

      {/* WhatsApp CTA */}
      <a
        href={getWhatsAppLink(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-charcoal/50 hover:text-[#25D366] transition-colors duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Inquire via WhatsApp
      </a>
    </motion.div>
  );
}
