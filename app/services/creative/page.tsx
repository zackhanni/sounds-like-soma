import { Video, FileAudio, Music, PenTool } from "lucide-react"
import ServiceCategoryLayout from "@/components/service-category-layout"

export const metadata = {
  title: "Creative Services | Sounds Like Soma | Philadelphia",
  description:
    "Professional creative services including 4K video production, beatmaking, instrumental recreation, and songwriting for artists and brands in Philadelphia.",
}

export default function CreativePage() {
  const services = [
    {
      id: "video-production",
      title: "4K Video Production",
      description: "Professional 4K video production for music videos and more",
      icon: <Video className="h-6 w-6 text-purple-400" />,
      href: "/services/creative/video",
    },
    {
      id: "beatmaking",
      title: "Beatmaking",
      description: "Custom beat production for artists and projects",
      icon: <FileAudio className="h-6 w-6 text-purple-400" />,
      href: "/services/creative/beatmaking",
    },
    {
      id: "instrumental-recreation",
      title: "Instrumental Recreation",
      description: "Recreation of instrumentals and backing tracks",
      icon: <Music className="h-6 w-6 text-purple-400" />,
      href: "/services/creative/instrumental",
    },
    {
      id: "songwriting",
      title: "Songwriting / Toplining",
      description: "Professional songwriting and toplining services",
      icon: <PenTool className="h-6 w-6 text-purple-400" />,
      href: "/services/creative/songwriting",
    },
  ]

  const faqs = [
    {
      question: "What types of video content do you produce?",
      answer:
        "We specialize in music videos, performance videos, lyric videos, behind-the-scenes content, artist interviews, and promotional videos for musicians and brands. Our 4K video production services can be customized to fit your creative vision and budget.",
    },
    {
      question: "How much does a music video typically cost?",
      answer:
        "Music video costs vary widely depending on the concept, locations, equipment needs, crew size, and post-production requirements. Our basic music video packages start at $1,500, while more elaborate productions can range from $3,000-$10,000+. We work with you to create a concept that fits your budget while maximizing production value.",
    },
    {
      question: "Do you provide exclusive beats or only leased beats?",
      answer:
        "We offer both exclusive and non-exclusive (leased) beats. Exclusive beats are sold only once and all rights transfer to you, while non-exclusive beats may be leased to multiple artists. Exclusive beats are priced higher but provide you with complete ownership and prevent other artists from using the same instrumental.",
    },
    {
      question: "Can you recreate a specific song or instrumental for my project?",
      answer:
        "Yes, our instrumental recreation services can reproduce existing songs for cover versions, backing tracks, or reference purposes. We can create versions that closely match the original or customize them to your preferences. Note that using recreated instrumentals still requires proper licensing for commercial release.",
    },
    {
      question: "How does the songwriting collaboration process work?",
      answer:
        "Our songwriting process typically begins with a consultation to understand your vision, influences, and goals. We can start from scratch or help develop your existing ideas. Depending on your needs, we can provide complete songs (music and lyrics), toplining (melody and lyrics over your instrumental), or co-writing sessions where we collaborate directly with you.",
    },
    {
      question: "Do you offer royalty splits for songwriting services?",
      answer:
        "Yes, we offer flexible compensation options for songwriting, including work-for-hire (flat fee with no royalties), traditional co-writing splits (typically 50/50), or custom arrangements. The specific terms are agreed upon before beginning the project and formalized in a simple agreement.",
    },
    {
      question: "How long does it take to produce a custom beat?",
      answer:
        "A basic custom beat typically takes 1-3 days to create, while more complex productions may take 3-7 days. The timeline depends on the complexity, revisions needed, and our current workload. Rush services are available for time-sensitive projects at an additional fee.",
    },
  ]

  const keywords = [
    "music video production Philadelphia",
    "4K video production",
    "custom beat maker",
    "professional beatmaking",
    "instrumental recreation service",
    "backing track creation",
    "professional songwriting services",
    "toplining for musicians",
    "creative content production",
    "music producer Philadelphia",
    "custom music production",
    "artist development services",
  ]

  return (
    <ServiceCategoryLayout
      title="Creative Services"
      description="Comprehensive creative services including 4K video production, beatmaking, instrumental recreation, and songwriting for artists and brands."
      longDescription="Our creative services extend beyond audio to help artists and brands develop compelling content that enhances their music and builds their audience. From stunning 4K videos to custom beats, instrumental recreations, and professional songwriting, we provide end-to-end creative solutions to bring your vision to life."
      services={services}
      faqs={faqs}
      ctaText="Ready to bring your creative vision to life? Contact us today to discuss your project."
      ctaButtonText="Start Creating"
      keywords={keywords}
    >
      <p className="mb-4">
        At Sounds Like Soma, we believe that great music deserves great visuals and supporting content. Our
        Philadelphia-based creative services help artists and brands develop compelling content that enhances their
        music and builds their audience:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>4K Video Production:</strong> Professional music videos, performance videos, and promotional content
          with cinema-quality cameras and creative direction
        </li>
        <li>
          <strong>Beatmaking:</strong> Custom instrumental production across all genres, from hip-hop and R&B to pop and
          electronic music
        </li>
        <li>
          <strong>Instrumental Recreation:</strong> Accurate reproduction of existing songs for covers, backing tracks,
          or reference purposes
        </li>
        <li>
          <strong>Songwriting/Toplining:</strong> Professional melody and lyric creation to help complete your musical
          vision
        </li>
      </ul>

      <p className="mb-4">
        Our creative team includes experienced videographers, producers, musicians, and songwriters who understand how
        to translate your artistic vision into compelling content. We work collaboratively with you throughout the
        process, ensuring the final product aligns with your brand and resonates with your audience.
      </p>

      <p>
        Whether you're an emerging artist looking to create your first music video, an established musician seeking
        fresh beats, or a brand needing custom music and visuals, our creative services provide the professional quality
        and artistic sensibility to help you stand out in today's competitive landscape.
      </p>
    </ServiceCategoryLayout>
  )
}
