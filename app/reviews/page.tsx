import Image from "next/image"
import { Star, StarHalf, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Client Reviews | Sounds Like Soma | Philadelphia Recording Studio",
  description:
    "Read reviews and testimonials from our clients about their experiences at Sounds Like Soma recording studio in Philadelphia.",
}

interface Review {
  id: string
  name: string
  role: string
  company?: string
  image: string
  rating: number
  text: string
  date: string
  service: string
}

export default function ReviewsPage() {
  const reviews: Review[] = [
    {
      id: "review1",
      name: "James Wilson",
      role: "Lead Singer",
      company: "The Resonance Collective",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "Working with Sounds Like Soma was an incredible experience. The team's attention to detail and commitment to capturing our sound exactly as we envisioned made all the difference. The studio space is comfortable and inspiring, and the equipment is top-notch. We'll definitely be back for our next album.",
      date: "2023-05-15",
      service: "recording",
    },
    {
      id: "review2",
      name: "Sarah James",
      role: "Vocalist & Songwriter",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "I've recorded at many studios over the years, but Sounds Like Soma stands out for their exceptional engineering talent and welcoming atmosphere. They took the time to understand my artistic vision and helped bring it to life with their technical expertise. The vocal chain they set up for me was perfect for my style.",
      date: "2023-04-22",
      service: "recording",
    },
    {
      id: "review3",
      name: "Michael Rodriguez",
      role: "Podcast Host",
      company: "The Creative Process",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      text: "As a podcast host, audio quality is everything. Sounds Like Soma provided the perfect environment for recording our interviews, with excellent sound isolation and professional equipment. Their podcast editing service saved us countless hours and elevated our production quality significantly.",
      date: "2023-06-10",
      service: "podcast",
    },
    {
      id: "review4",
      name: "Emily Chen",
      role: "Voice Actor",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "The voice over recording services at Sounds Like Soma are exceptional. The booth is perfectly treated, the microphone selection is extensive, and the engineers understand the specific needs of voice actors. They made the session efficient and comfortable, and delivered files in all the formats I needed.",
      date: "2023-03-18",
      service: "voiceover",
    },
    {
      id: "review5",
      name: "David Thompson",
      role: "Producer",
      company: "Rhythm Collective",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "I've been using Sounds Like Soma for mixing and mastering services for several years now. Their attention to detail and ability to enhance my productions while maintaining my artistic vision is unmatched. They have a great ear for balance and depth, and their masters translate perfectly across all playback systems.",
      date: "2023-07-05",
      service: "editing",
    },
    {
      id: "review6",
      name: "Lisa Johnson",
      role: "Band Manager",
      company: "The Harmonics",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      text: "We've been renting rehearsal space at Sounds Like Soma for our weekly practices, and it's been a game-changer for our band. The rooms are well-equipped, soundproofed, and comfortable. The staff is always helpful, and the booking process is seamless. It's become our second home!",
      date: "2023-02-28",
      service: "rental",
    },
    {
      id: "review7",
      name: "Robert Kim",
      role: "Independent Artist",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "The website and EPK that Sounds Like Soma created for me has completely transformed my online presence. They understood my aesthetic and translated it perfectly into a professional, user-friendly website. The EPK has already helped me secure several gigs and press features. Worth every penny!",
      date: "2023-05-30",
      service: "promotion",
    },
  ]

  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Client Reviews</h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">
              Read what our clients have to say about their experiences at Sounds Like Soma recording studio in
              Philadelphia.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 bg-[#3A3A3A] border-gray-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                All Reviews
              </TabsTrigger>
              <TabsTrigger value="recording" className="data-[state=active]:bg-purple-600">
                Recording
              </TabsTrigger>
              <TabsTrigger value="editing" className="data-[state=active]:bg-purple-600">
                Editing & Production
              </TabsTrigger>
              <TabsTrigger value="podcast" className="data-[state=active]:bg-purple-600">
                Podcast
              </TabsTrigger>
              <TabsTrigger value="voiceover" className="data-[state=active]:bg-purple-600">
                Voice Over
              </TabsTrigger>
              <TabsTrigger value="rental" className="data-[state=active]:bg-purple-600">
                Space Rental
              </TabsTrigger>
              <TabsTrigger value="promotion" className="data-[state=active]:bg-purple-600">
                Promotion
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </TabsContent>

            {["recording", "editing", "podcast", "voiceover", "rental", "promotion"].map((service) => (
              <TabsContent key={service} value={service} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews
                    .filter((review) => review.service === service)
                    .map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-16 w-16 text-purple-400 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
              "Sounds Like Soma isn't just a recording studio, it's a creative partner. Their team's expertise and
              passion for music elevated our album beyond what we thought possible."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="Client" width={64} height={64} />
              </div>
              <div className="text-left">
                <p className="font-bold">Alex Martinez</p>
                <p className="text-purple-400">Grammy-Nominated Producer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Sounds Like Soma?</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">
            Join our satisfied clients and create your next project with us. Contact us today to discuss your needs or
            schedule a studio tour.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            Book Now
          </Button>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-[#FFFFF0]/80 mb-8">
              If you've worked with us, we'd love to hear about your experience. Your feedback helps us improve and
              helps others find the right studio for their needs.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">Leave a Review</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="bg-[#3A3A3A] border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <Image src={review.image || "/placeholder.svg"} alt={review.name} width={48} height={48} />
          </div>
          <div>
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-sm text-purple-400">{review.role}</p>
            {review.company && <p className="text-xs text-[#FFFFF0]/60">{review.company}</p>}
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(Math.floor(review.rating))].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          ))}
          {review.rating % 1 !== 0 && <StarHalf className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
        </div>

        <p className="text-sm text-[#FFFFF0]/80 mb-4">{review.text}</p>

        <p className="text-xs text-[#FFFFF0]/50">
          {new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </CardContent>
    </Card>
  )
}
