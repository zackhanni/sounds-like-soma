import { Globe, Share2, Palette } from "lucide-react";
import ServiceCategoryLayout from "@/components/service-category-layout";

export const metadata = {
  title: "Artist Promotion Services | Sounds Like Soma | Philadelphia",
  description:
    "Professional artist promotion services including website design, EPK creation, social media content, and branding consultation for musicians and creators in Philadelphia.",
};

export default function PromotionPage() {
  const services = [
    {
      id: "website-epk",
      title: "Website Design / EPK Creation",
      description: "Custom websites and electronic press kits for artists",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      href: "/services/promotion/website",
    },
    {
      id: "social-media",
      title: "Social Media Content Packages",
      description: "Professional social media content creation and management",
      icon: <Share2 className="h-6 w-6 text-purple-400" />,
      href: "/services/promotion/social",
    },
    {
      id: "branding",
      title: "Branding Consultation",
      description:
        "Professional branding consultation for artists and musicians",
      icon: <Palette className="h-6 w-6 text-purple-400" />,
      href: "/services/promotion/branding",
    },
  ];

  const faqs = [
    {
      question: "What's included in an Electronic Press Kit (EPK)?",
      answer:
        "Our standard EPKs include professional biography, high-resolution photos, music samples, videos, press quotes/reviews, contact information, and social media links. We can customize the content based on your specific needs and career stage. EPKs are delivered in both digital format (website or PDF) and print-ready versions.",
    },
    {
      question:
        "Do you build websites on specific platforms like WordPress or Squarespace?",
      answer:
        "Yes, we build artist websites on various platforms including WordPress, Squarespace, Wix, and Bandzoogle. We recommend platforms based on your specific needs, technical comfort level, and budget. All our websites are mobile-responsive, SEO-optimized, and designed for easy updating.",
    },
    {
      question: "What does a social media content package include?",
      answer:
        "Our social media packages typically include a mix of professional photos, graphics, short videos, animated content, and suggested captions/hashtags. Packages are customized based on your platforms of focus (Instagram, TikTok, Facebook, etc.) and can include content planning calendars and posting schedules.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "A standard artist website typically takes 3-4 weeks from concept to launch. This includes planning, design, development, content creation, revisions, and testing. More complex sites with custom functionality may take 6-8 weeks. We can accommodate rush projects when possible for an additional fee.",
    },
    {
      question: "Do you handle website hosting and maintenance?",
      answer:
        "Yes, we offer optional hosting and maintenance packages to keep your website secure, updated, and running smoothly. These packages include regular backups, security monitoring, platform updates, and technical support. We can also provide training so you can make basic updates yourself.",
    },
    {
      question: "What's involved in a branding consultation?",
      answer:
        "Our branding consultations typically include audience analysis, competitive positioning, visual identity development (logos, colors, typography), messaging strategy, and implementation guidelines. We start with an in-depth interview to understand your music, influences, goals, and vision, then develop a comprehensive brand strategy.",
    },
    {
      question: "Can you help with music distribution and playlist placement?",
      answer:
        "While we don't directly handle distribution, we can advise on distribution platforms and strategies. For playlist placement, we offer consultation on playlist pitching strategies and can help prepare your submissions. We also have partnerships with playlist curators and promotion services that we can connect you with.",
    },
  ];

  const keywords = [
    "artist website design Philadelphia",
    "electronic press kit creation",
    "musician EPK service",
    "artist social media management",
    "music branding consultation",
    "band website development",
    "artist promotion services",
    "music marketing Philadelphia",
    "social media content for musicians",
    "artist brand development",
    "music promotion strategy",
    "professional musician websites",
  ];

  return (
    <ServiceCategoryLayout
      title="Artist Promotion"
      description="Comprehensive promotion services to help musicians and creators build their brand and reach new audiences."
      longDescription="Our artist promotion services help musicians and creators build their brand and reach new audiences. From professional websites and EPKs to social media content and branding consultation, we provide the tools and expertise to elevate your presence in the industry and connect with fans, venues, and industry professionals."
      services={services}
      faqs={faqs}
      ctaText="Ready to elevate your artist brand? Contact us today to discuss your promotion needs."
      ctaButtonText="Boost Your Career"
      keywords={keywords}
    >
      <p className="mb-4">
        At Sounds Like Soma, we understand that creating great music is only
        part of a successful career. Our Philadelphia-based artist promotion
        services help you build a professional presence and connect with your
        audience:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Website Design & EPK Creation:</strong> Professional online
          presence with custom websites and electronic press kits that showcase
          your music and brand
        </li>
        <li>
          <strong>Social Media Content:</strong> Engaging photos, graphics,
          videos, and animations designed specifically for music promotion
          across platforms
        </li>
        <li>
          <strong>Branding Consultation:</strong> Comprehensive brand
          development including visual identity, messaging, and positioning
          strategy
        </li>
      </ul>

      <p className="mb-4">
        Our approach combines industry expertise with digital marketing best
        practices to create promotion strategies that work for musicians at all
        career stages. We focus on building sustainable, authentic connections
        with fans while presenting a professional image to industry gatekeepers.
      </p>

      <p className="mb-4">
        Unlike generic marketing agencies, we specialize in music promotion and
        understand the unique challenges and opportunities in the industry. Our
        team includes music industry veterans who have worked with independent
        artists, major labels, and everything in between.
      </p>

      <p>
        Whether you&apos;re releasing your first single or promoting your tenth
        album, our promotion services can help you cut through the noise and
        reach the audience your music deserves. We offer both one-time project
        services and ongoing promotion packages to suit your needs and budget.
      </p>
    </ServiceCategoryLayout>
  );
}
