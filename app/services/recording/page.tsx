import { Music, Radio, Headphones, BookOpen } from "lucide-react"
import ServiceCategoryLayout from "@/components/service-category-layout"

export const metadata = {
  title: "Recording Services | Sounds Like Soma | Philadelphia Recording Studio",
  description:
    "Professional recording services for vocals, bands, podcasts, voice overs, and audiobooks in Philadelphia. State-of-the-art equipment and experienced engineers.",
}

export default function RecordingPage() {
  const services = [
    {
      id: "vocal-recording",
      title: "Vocal Recording",
      description: "Professional vocal recording for singers and artists",
      icon: <Music className="h-6 w-6 text-purple-400" />,
      href: "/services/recording/vocal",
    },
    {
      id: "band-recording",
      title: "Band Recording",
      description: "Full band recording sessions with multiple instruments",
      icon: <Music className="h-6 w-6 text-purple-400" />,
      href: "/services/recording/band",
    },
    {
      id: "podcast-recording",
      title: "Podcast Recording",
      description: "Professional podcast recording with multiple microphones",
      icon: <Radio className="h-6 w-6 text-purple-400" />,
      href: "/services/recording/podcast",
    },
    {
      id: "voiceover-recording",
      title: "Voice Over Recording",
      description: "Voice over recording for commercials, narration, and more",
      icon: <Headphones className="h-6 w-6 text-purple-400" />,
      href: "/services/recording/voiceover",
    },
    {
      id: "audiobook-recording",
      title: "Audiobook Recording",
      description: "Professional audiobook recording and production",
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      href: "/services/recording/audiobook",
    },
  ]

  const faqs = [
    {
      question: "What microphones do you use for vocal recording?",
      answer:
        "We have a selection of premium microphones including Neumann U87, Sony C800G, Shure SM7B, AKG C414, and more. We select the best microphone for your specific voice and style to ensure optimal results.",
    },
    {
      question: "How long does a typical recording session take?",
      answer:
        "Session length varies depending on the project. Vocal sessions typically range from 2-4 hours, band recordings may take 4-8 hours or multiple days, and podcast episodes usually take 1-3 hours. We'll work with you to create a schedule that fits your project's needs.",
    },
    {
      question: "Do you provide session musicians for recording projects?",
      answer:
        "Yes, we have a network of professional session musicians available for hire across all instruments. Whether you need a full band or just a specific instrument, we can arrange talented musicians to enhance your project.",
    },
    {
      question: "Can I bring my own engineer to work in your studio?",
      answer:
        "Yes, we allow outside engineers to work in our studios. We provide a brief orientation to our equipment and facilities, and our staff is available to assist if needed. There's a small additional fee for setup and technical support.",
    },
    {
      question: "What file formats do you deliver recordings in?",
      answer:
        "We typically deliver high-resolution WAV files (24-bit, 48kHz or 96kHz), but we can provide any format you need including MP3, AIFF, FLAC, and more. We can also provide stems and individual tracks for further editing.",
    },
    {
      question: "Do you offer remote recording sessions?",
      answer:
        "Yes, we offer remote recording sessions using Source-Connect, Audiomovers, or Zoom. This allows you to direct the session from anywhere while we capture high-quality audio in our studio. We can also set up remote monitoring so you can hear exactly what we're recording in real-time.",
    },
    {
      question: "What's your cancellation policy for recording sessions?",
      answer:
        "We require 48 hours notice for cancellations to receive a full refund of your deposit. Cancellations with less than 48 hours notice may forfeit the deposit, though we try to be flexible when possible and can often reschedule instead.",
    },
  ]

  const keywords = [
    "Philadelphia recording studio",
    "vocal recording Philadelphia",
    "band recording services",
    "podcast recording studio",
    "voice over recording",
    "audiobook recording services",
    "professional recording studio",
    "music recording Philadelphia",
    "audio recording services",
    "professional microphones",
    "recording studio near me",
    "best recording studio Philadelphia",
  ]

  return (
    <ServiceCategoryLayout
      title="Recording Services"
      description="Professional audio recording for vocals, bands, podcasts, voice overs, and audiobooks in our state-of-the-art Philadelphia studios."
      longDescription="Our recording services provide artists, bands, podcasters, and voice actors with access to premium equipment and experienced engineers in acoustically-treated spaces designed for optimal sound capture. From solo vocal sessions to full band recordings, we have the facilities and expertise to bring your project to life with exceptional sound quality."
      services={services}
      faqs={faqs}
      ctaText="Ready to book your recording session? Contact us today to discuss your project and schedule studio time."
      ctaButtonText="Book Recording Time"
      keywords={keywords}
    >
      <p className="mb-4">
        At Sounds Like Soma, we understand that great recording starts with the right environment, equipment, and
        expertise. Our Philadelphia recording studios feature:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Premium Microphones and Preamps:</strong> Including Neumann, AKG, Shure, Sony, and more to capture
          every nuance of your performance
        </li>
        <li>
          <strong>Acoustically-Designed Spaces:</strong> Multiple room options with ideal acoustic properties for
          different recording needs
        </li>
        <li>
          <strong>Experienced Engineers:</strong> Our team brings years of experience across all genres and recording
          types
        </li>
        <li>
          <strong>Comfortable Environment:</strong> Designed to inspire creativity and optimal performance
        </li>
        <li>
          <strong>High-Resolution Recording:</strong> State-of-the-art digital and analog recording chains for
          exceptional sound quality
        </li>
      </ul>

      <p className="mb-4">
        Whether you're recording vocals for your next hit single, capturing your band's live energy, producing a
        podcast, or recording voice overs for commercial work, our Philadelphia recording studios provide the perfect
        environment to achieve professional results.
      </p>

      <p>
        We work with clients at all levels, from first-time recording artists to major label professionals, providing
        the same attention to detail and quality for every project. Our goal is to make the recording process smooth and
        enjoyable while delivering results that exceed your expectations.
      </p>
    </ServiceCategoryLayout>
  )
}
