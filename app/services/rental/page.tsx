import { Home, Users, Radio } from "lucide-react"
import ServiceCategoryLayout from "@/components/service-category-layout"

export const metadata = {
  title: "Studio Space Rental | Sounds Like Soma | Philadelphia",
  description:
    "Professional studio space rental in Philadelphia for recording, rehearsals, and podcasting. Hourly and daily rates with premium equipment included.",
}

export default function RentalPage() {
  const services = [
    {
      id: "studio-rental",
      title: "Rentable Music Studio",
      description: "Professional recording studio space available for hourly rental",
      icon: <Home className="h-6 w-6 text-purple-400" />,
      href: "/services/rental/studio",
    },
    {
      id: "rehearsal-space",
      title: "Band Rehearsal Space",
      description: "Spacious rehearsal rooms for bands and musical groups",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      href: "/services/rental/rehearsal",
    },
    {
      id: "podcast-studio",
      title: "Podcast Studio Rental",
      description: "Professional podcast studio available for hourly rental",
      icon: <Radio className="h-6 w-6 text-purple-400" />,
      href: "/services/rental/podcast",
    },
  ]

  const faqs = [
    {
      question: "What equipment is included with studio rentals?",
      answer:
        "Our studio rentals include professional recording equipment such as microphones, preamps, monitors, headphones, and a digital audio workstation (Pro Tools, Logic, or Ableton). Specific equipment varies by room, and we can provide a detailed equipment list for each space. Additional gear is available for rent if needed.",
    },
    {
      question: "Do I need to bring my own engineer when renting the studio?",
      answer:
        "You can bring your own engineer or rent the space without an engineer if you're comfortable operating the equipment. We also offer in-house engineers at an additional hourly rate. For first-time renters, we provide a brief orientation to our facilities regardless of whether you bring an engineer.",
    },
    {
      question: "What are your rehearsal space hours?",
      answer:
        "Our rehearsal spaces are available 7 days a week from 10am to midnight. Extended hours can be arranged for special circumstances. Monthly lockout clients receive 24/7 access to their dedicated space.",
    },
    {
      question: "Is backline equipment provided in rehearsal spaces?",
      answer:
        "Basic backline equipment including PA system, microphones, and stands is included with all rehearsal space rentals. Additional equipment such as drum kits, guitar/bass amps, and keyboards is available in select rooms or can be rented for an additional fee. We offer several rehearsal room sizes to accommodate bands of different sizes, from solo artists to large ensembles.",
    },
    {
      question: "What's included in the podcast studio rental?",
      answer:
        "Our podcast studio rentals include professional broadcast microphones (typically Shure SM7Bs or equivalent), headphones, a mixing console, acoustic treatment, comfortable seating for hosts and guests, and recording equipment. We can record directly to your preferred format or provide the raw audio files after your session.",
    },
    {
      question: "Do you offer discounts for regular bookings?",
      answer:
        "Yes, we offer discounted rates for regular bookings. Weekly or monthly commitments receive 10-20% off our standard rates, and we offer block booking discounts when you book multiple sessions in advance. We also have membership options for frequent users that include priority booking and additional benefits.",
    },
    {
      question: "What's your cancellation policy for space rentals?",
      answer:
        "We require 48 hours notice for cancellations to receive a full refund. Cancellations with 24-48 hours notice receive a 50% refund or can reschedule with a small fee. Cancellations with less than 24 hours notice are charged in full, though we try to be flexible when possible for emergencies or if we can fill the slot.",
    },
  ]

  const keywords = [
    "recording studio rental Philadelphia",
    "rehearsal space Philadelphia",
    "band practice rooms",
    "podcast studio rental",
    "hourly studio rental",
    "music production space",
    "professional recording space",
    "affordable rehearsal rooms",
    "equipped rehearsal space",
    "podcast recording booth",
    "audio recording space",
    "music studio near me",
  ]

  return (
    <ServiceCategoryLayout
      title="Space Rental"
      description="Professional studio spaces available for hourly and daily rental, including recording studios, rehearsal rooms, and podcast facilities."
      longDescription="Our Philadelphia studio spaces are available for hourly and daily rental, providing professional environments for recording, rehearsals, and content creation. With premium equipment, acoustic treatment, and flexible booking options, we offer the perfect space for your creative projects without the long-term commitment of owning or leasing a studio."
      services={services}
      faqs={faqs}
      ctaText="Ready to book studio space? Contact us today to check availability and reserve your time."
      ctaButtonText="Book Space Now"
      keywords={keywords}
    >
      <p className="mb-4">
        At Sounds Like Soma, we provide access to professional creative spaces without the high cost of ownership. Our
        Philadelphia studio rental options include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Recording Studios:</strong> Professional recording environments with premium equipment and acoustic
          treatment, available with or without an engineer
        </li>
        <li>
          <strong>Rehearsal Spaces:</strong> Soundproofed rooms with PA systems and optional backline equipment for
          bands and musicians to practice and prepare
        </li>
        <li>
          <strong>Podcast Studios:</strong> Purpose-built podcast recording spaces with broadcast-quality equipment and
          comfortable seating for hosts and guests
        </li>
      </ul>

      <p className="mb-4">All our rental spaces feature:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Flexible hourly and daily rates</li>
        <li>Professional-grade equipment included</li>
        <li>Acoustic treatment for optimal sound</li>
        <li>Climate-controlled, comfortable environments</li>
        <li>24/7 security and controlled access</li>
        <li>Convenient Philadelphia location with parking</li>
      </ul>

      <p>
        Whether you're an independent artist recording your next release, a band preparing for tour, or a podcaster
        creating content, our rental spaces provide the professional environment you need without the long-term
        commitment. We also offer package deals that combine space rental with our other services like mixing,
        mastering, or video production.
      </p>
    </ServiceCategoryLayout>
  )
}
