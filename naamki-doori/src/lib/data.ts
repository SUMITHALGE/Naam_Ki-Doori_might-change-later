export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  description: string;
  story: string;
  image: string;
  gallery: string[];
  personalizationOptions: string[];
  featured: boolean;
}

export const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number

export function getWhatsAppLink(productName: string): string {
  const message = encodeURIComponent(
    `Hi! I'm interested in "${productName}" from NaamKi_Doori. Could you please share more details?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getGeneralWhatsAppLink(): string {
  const message = encodeURIComponent(
    `Hi! I'd like to know more about NaamKi_Doori's custom embroidery services.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const categories = [
  "All",
  "Tote Bags",
  "Apparel",
  "Handkerchiefs",
  "Custom Names",
  "Gifts",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Monogram Linen Tote",
    slug: "monogram-linen-tote",
    category: "Tote Bags",
    price: 2499,
    description:
      "A timeless linen tote bag with your initials delicately embroidered in our signature serif font. Perfect for everyday elegance.",
    story:
      "Each Monogram Linen Tote begins its journey as a sheet of premium Belgian linen. Our artisans spend over 3 hours hand-embroidering each monogram, ensuring every stitch captures the essence of your identity. The thread we use is a blend of silk and cotton, giving each letter a subtle sheen that catches the light beautifully.",
    image: "/product-tote-floral.jpg",
    gallery: [
      "/product-tote-floral.jpg",
      "/product-tote-fox.jpg",
      "/product-hoop.jpg",
    ],
    personalizationOptions: [
      "Up to 3 initials",
      "Thread color (Gold, Ivory, Blush, Navy)",
      "Font style (Serif, Script, Modern)",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Garden Bloom Handkerchief Set",
    slug: "garden-bloom-handkerchief-set",
    category: "Handkerchiefs",
    price: 1899,
    description:
      "A set of three pure cotton handkerchiefs, each adorned with delicate floral embroidery inspired by Indian botanical gardens.",
    story:
      "Our Garden Bloom collection draws inspiration from the Mughal gardens of Srinagar. Each petal and leaf is embroidered using a centuries-old 'aari' technique, passed down through five generations of artisans in Lucknow. The result is a handkerchief that is both a functional accessory and a piece of wearable art.",
    image: "/product-hoop.jpg",
    gallery: [
      "/product-hoop.jpg",
      "/product-tote-floral.jpg",
      "/hero-product.jpg",
    ],
    personalizationOptions: [
      "Name embroidery on corner",
      "Border color (White, Cream, Sage)",
      "Gift box packaging",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Heritage Name Kurta",
    slug: "heritage-name-kurta",
    category: "Apparel",
    price: 4999,
    description:
      "A premium cotton kurta with your name elegantly embroidered along the collar in traditional Chikankari style.",
    story:
      "The Heritage Name Kurta is our love letter to the Chikankari tradition of Lucknow. Each kurta is crafted from 100-count handwoven cotton, and the name embroidery is done using the 'tepchi' stitch — a running stitch that creates a subtle, textured effect. It takes our master artisan nearly 8 hours to complete each piece.",
    image: "/product-shirt.jpg",
    gallery: [
      "/product-shirt.jpg",
      "/product-hoop.jpg",
      "/owner-portrait.jpg",
    ],
    personalizationOptions: [
      "Full name (up to 15 characters)",
      "Size (XS to XXL)",
      "Thread color (White on White, Gold, Silver)",
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Love Letter Envelope Clutch",
    slug: "love-letter-envelope-clutch",
    category: "Gifts",
    price: 3299,
    description:
      "A velvet envelope clutch embroidered with a personalized message — the perfect gift for someone you cherish.",
    story:
      "Inspired by the art of handwritten letters, this clutch transforms your words into embroidered poetry. Each letter is stitched using French knots and satin stitch, creating a tactile, raised effect that invites you to trace the words with your fingertips. It's not just a clutch — it's a keepsake.",
    image: "/hero-product.jpg",
    gallery: [
      "/hero-product.jpg",
      "/product-tote-fox.jpg",
      "/product-hoop.jpg",
    ],
    personalizationOptions: [
      "Custom message (up to 30 characters)",
      "Velvet color (Burgundy, Forest Green, Midnight Blue)",
      "Thread color (Gold, Silver, Rose Gold)",
    ],
    featured: true,
  },
  {
    id: "5",
    name: "Baby Name Onesie",
    slug: "baby-name-onesie",
    category: "Custom Names",
    price: 1299,
    description:
      "A soft organic cotton onesie with the baby's name embroidered in playful lettering. The sweetest first gift.",
    story:
      "We believe every name deserves to be celebrated from day one. Our Baby Name Onesie is crafted from GOTS-certified organic cotton, gentle enough for the most delicate skin. The embroidery uses hypoallergenic threads and child-safe techniques, ensuring every stitch is as soft as a mother's touch.",
    image: "/product-hoop.jpg",
    gallery: [
      "/product-hoop.jpg",
      "/product-tote-floral.jpg",
      "/owner-portrait.jpg",
    ],
    personalizationOptions: [
      "Baby's name (up to 12 characters)",
      "Size (0-3m, 3-6m, 6-12m)",
      "Thread color (Pastel Pink, Sky Blue, Sage, Buttercup)",
    ],
    featured: false,
  },
  {
    id: "6",
    name: "Bridal Dupatta",
    slug: "bridal-dupatta",
    category: "Apparel",
    price: 8999,
    description:
      "A luxurious silk dupatta with the couple's names and wedding date embroidered in golden thread — a bridal heirloom.",
    story:
      "Our Bridal Dupatta is the culmination of 200+ hours of artistry. Using real gold zari thread on pure Banarasi silk, our master craftsmen create intricate patterns that frame the couple's names and their auspicious date. This isn't just a wedding accessory — it's a family heirloom designed to be passed down through generations.",
    image: "/product-tote-fox.jpg",
    gallery: [
      "/product-tote-fox.jpg",
      "/product-tote-floral.jpg",
      "/hero-product.jpg",
    ],
    personalizationOptions: [
      "Couple's names",
      "Wedding date",
      "Border pattern (Paisley, Floral, Geometric)",
      "Silk color (Ivory, Red, Blush Pink)",
    ],
    featured: true,
  },
  {
    id: "7",
    name: "Weekend Canvas Tote",
    slug: "weekend-canvas-tote",
    category: "Tote Bags",
    price: 1999,
    description:
      "A sturdy canvas tote with a custom embroidered motif — florals, initials, or your pet's name. Your everyday companion.",
    story:
      "The Weekend Canvas Tote is designed for the modern woman who values both style and sustainability. Made from recycled canvas, each bag is reinforced with leather-trimmed handles and features your choice of embroidered design. It's the bag that tells your story while you're out writing new chapters.",
    image: "/product-tote-fox.jpg",
    gallery: [
      "/product-tote-fox.jpg",
      "/product-tote-floral.jpg",
      "/product-shirt.jpg",
    ],
    personalizationOptions: [
      "Custom text or initials",
      "Motif (Floral, Leaf, Pet portrait)",
      "Canvas color (Natural, Sage, Dusty Rose)",
    ],
    featured: false,
  },
  {
    id: "8",
    name: "Gratitude Journal Cover",
    slug: "gratitude-journal-cover",
    category: "Gifts",
    price: 2199,
    description:
      "A leather journal cover with a name or short quote embroidered on the front — the perfect mindful gift.",
    story:
      "We partnered with a family of leather artisans in Rajasthan to create this journal cover. The vegetable-tanned leather develops a beautiful patina over time, and the embroidered text becomes a daily reminder of intention. Each cover fits standard A5 notebooks, making it a gift that keeps giving.",
    image: "/owner-portrait.jpg",
    gallery: [
      "/owner-portrait.jpg",
      "/product-hoop.jpg",
      "/hero-product.jpg",
    ],
    personalizationOptions: [
      "Name or quote (up to 25 characters)",
      "Leather color (Tan, Cognac, Black)",
      "Thread color (Gold, Cream, Copper)",
    ],
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
