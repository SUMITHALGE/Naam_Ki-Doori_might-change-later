import Link from "next/link";
import { Instagram, Heart, MapPin, Clock, Phone } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ background: "#3D2B8E" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl lg:text-3xl mb-2" style={{ fontFamily: "'Georgia',serif" }}>
              NaamKi Doori
            </h3>
            <p className="text-purple-300 text-xs tracking-[0.25em] uppercase mb-5">
              Every Stitch Tells A Story
            </p>
            <p className="text-purple-200 text-sm leading-relaxed max-w-sm mb-6">
              We craft bespoke embroidered pieces and thoughtful gifts that transform your name and your memories into timeless keepsakes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/naamki_doori"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "#F9C5D1", color: "#3D2B8E" }}
              >
                <Instagram size={16} />
              </a>
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "#86EFAC", color: "#3D2B8E" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-pink-300 font-bold mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/collection", label: "Shop All" },
                { href: "/collection", label: "Custom Embroidery" },
                { href: "/collection", label: "Tote Bags" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-purple-300 hover:text-white transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-pink-300 font-bold mb-5">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-purple-300 text-sm">
                <Clock size={14} className="mt-0.5 flex-shrink-0 text-pink-300" />
                <span>Tue-Fri: 9 AM - 4 PM</span>
              </li>
              <li className="flex items-start gap-2 text-purple-300 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-pink-300" />
                <span>123 Craft Lane, Mumbai, India</span>
              </li>
              <li className="flex items-start gap-2 text-purple-300 text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-pink-300" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-400 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} NaamKi Doori. All rights reserved.
          </p>
          <p className="text-purple-400 text-xs tracking-wider flex items-center gap-1">
            Made with <Heart size={12} className="text-pink-400 fill-pink-400 mx-1" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
