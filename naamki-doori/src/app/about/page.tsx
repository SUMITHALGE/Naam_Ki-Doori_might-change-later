"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, Award, Users } from "lucide-react";
import {
  FadeUp,
  Parallax,
  ScaleIn,
  StaggerChildren,
  staggerChildVariants,
} from "@/components/animations";
import { getGeneralWhatsAppLink } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Story
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.05]">
              The Art of
              <br />
              <span className="italic text-soft-brown">Naming</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-charcoal/50 text-lg leading-relaxed">
              NaamKi_Doori is more than a brand. It&apos;s a belief that names
              carry meaning, and the distance between a thought and its
              expression can be stitched together, thread by thread.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Parallax>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-warm-beige via-cream to-soft-brown/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-dashed border-gold/30 flex items-center justify-center">
                      <Heart size={32} className="text-gold/40" />
                    </div>
                    <p className="font-serif text-xl text-soft-brown/40 italic">
                      Where It Began
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold/20 rounded-tl-xl" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold/20 rounded-br-xl" />
              </div>
            </Parallax>

            <div>
              <FadeUp>
                <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                  The Beginning
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-8 leading-[1.1]">
                  Born from a
                  <br />
                  <span className="italic text-soft-brown">
                    Handwritten Letter
                  </span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-charcoal/60 leading-relaxed mb-6">
                  It started with a grandmother&apos;s handkerchief — worn soft
                  by decades of use, her name embroidered in the corner in
                  fading crimson thread. That simple piece of cloth carried
                  generations of love, and it sparked an idea.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-charcoal/60 leading-relaxed mb-6">
                  What if we could create objects that carry the same weight of
                  meaning? Objects where a name isn&apos;t just printed — it&apos;s
                  woven into the very fabric, stitch by careful stitch, becoming
                  part of the textile&apos;s DNA.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="text-charcoal/60 leading-relaxed">
                  NaamKi_Doori — literally &quot;the distance of a name&quot; — was
                  founded to bridge that gap between what we feel and what we
                  hold. Every piece we create is a love letter made tangible.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <FadeUp>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                What Guides Us
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                Our Values
              </h2>
            </FadeUp>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Heart size={28} />,
                title: "Intention",
                description:
                  "Every stitch is placed with purpose. We don't mass-produce — we create with meaning.",
              },
              {
                icon: <Users size={28} />,
                title: "Artisan First",
                description:
                  "We partner with master craftspeople, ensuring fair wages and preserving heritage techniques.",
              },
              {
                icon: <Leaf size={28} />,
                title: "Sustainability",
                description:
                  "From organic fabrics to eco-friendly dyes, we choose materials that honor the earth.",
              },
              {
                icon: <Award size={28} />,
                title: "Excellence",
                description:
                  "Each piece passes a 12-point quality check. We sign off only on perfection.",
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={staggerChildVariants}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ivory border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-cream transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-20 lg:py-32 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <FadeUp>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Behind the Scenes
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
                Our Process
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="max-w-2xl mx-auto text-cream/50 leading-relaxed">
                From your initial vision to the final stitch, here&apos;s how
                we bring your bespoke piece to life.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a conversation — understanding your vision, the occasion, and the emotions you want to capture. This happens over WhatsApp, where we share ideas, references, and options until the design feels perfectly you.",
              },
              {
                step: "02",
                title: "Design & Pattern",
                description:
                  "Our design team translates your brief into an embroidery pattern, choosing the right stitch techniques, thread weights, and placement. We share a digital preview for your approval before any needle touches fabric.",
              },
              {
                step: "03",
                title: "Material Sourcing",
                description:
                  "We source the finest materials — from Belgian linen to Banarasi silk, from organic cotton to real gold zari thread. Every material is chosen for both beauty and longevity.",
              },
              {
                step: "04",
                title: "Artisan Crafting",
                description:
                  "Master artisans — some with 30+ years of experience — bring your piece to life. Using heritage techniques like Chikankari, Aari, and Zardozi, they spend hours (sometimes days) ensuring every stitch is impeccable.",
              },
              {
                step: "05",
                title: "Quality & Delivery",
                description:
                  "Every piece passes our 12-point quality check before being hand-wrapped in our signature packaging — tissue paper, a handwritten note, and a cotton dust bag. It arrives at your doorstep like a gift.",
              },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <span className="font-serif text-5xl text-gold/30">
                      {item.step}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-2xl text-cream">
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-cream/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {i < 4 && (
                  <div className="border-b border-cream/10 mt-16 lg:mt-24" />
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                The Founder
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mb-8">
                A Letter from
                <br />
                <span className="italic text-soft-brown">Our Founder</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative bg-ivory rounded-3xl p-10 lg:p-16 border border-warm-beige/30">
                <span className="font-serif text-8xl text-gold/10 absolute top-4 left-8 leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-serif text-xl lg:text-2xl text-charcoal/70 italic leading-relaxed mb-8 mt-4">
                  I started NaamKi_Doori because I believe that in a world of
                  mass production, there&apos;s something revolutionary about
                  slowing down. About choosing a needle over a machine. About
                  taking someone&apos;s name and turning it into something you
                  can touch, hold, and pass on.
                </p>
                <p className="font-serif text-xl lg:text-2xl text-charcoal/70 italic leading-relaxed mb-8">
                  When you choose one of our pieces, you&apos;re not just buying a
                  product — you&apos;re investing in a story. Your story.
                </p>
                <div>
                  <p className="font-serif text-lg text-charcoal">
                    With love and thread,
                  </p>
                  <p className="font-serif text-2xl text-gold mt-2">
                    The NaamKi_Doori Team
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-warm-beige/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mb-6">
              Ready to Create
              <br />
              <span className="italic text-soft-brown">Something Beautiful?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-charcoal/60 leading-relaxed mb-10">
              Whether it&apos;s a gift for someone special or a treat for
              yourself, we&apos;d love to hear your story and stitch it into
              something extraordinary.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collection"
                className="group px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase rounded-full hover:bg-deep-brown transition-all duration-300 flex items-center gap-3"
              >
                Browse Collection
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-charcoal/20 text-charcoal text-sm tracking-[0.2em] uppercase rounded-full hover:border-gold hover:text-gold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
