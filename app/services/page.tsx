import Link from "next/link"
import { Mic, Sliders, Palette, Building, Rocket, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Professional Services | Sounds Like Soma | Philadelphia Recording Studio",
  description:
    "Comprehensive audio, video, and creative services for artists, bands, podcasters, and content creators in Philadelphia. Recording, mixing, mastering, video production, and more.",
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "recording",
      title: "Recording",
      description: "Professional audio recording for vocals, bands, podcasts, and more",
      icon: <Mic className="h-8 w-8 text-purple-400" />,
      href: "/services/recording",
    },
    {
      id: "editing",
      title: "Editing & Production",
      description: "Professional audio editing, mixing, and mastering services",
      icon: <Sliders className="h-8 w-8 text-purple-400" />,
      href: "/services/editing",
    },
    {
      id: "creative",
      title: "Creative Services",
      description: "Video production, beatmaking, and creative content services",
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      href: "/services/creative",
    },
    {
      id: "rental",
      title: "Space Rental",
      description: "Rentable studio space for recording, rehearsals, and podcasting",
      icon: <Building className="h-8 w-8 text-purple-400" />,
      href: "/services/rental",
    },
    {
      id: "promotion",
      title: "Artist Promotion",
      description: "Website design, EPK creation, and artist promotion services",
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      href: "/services/promotion",
    },
  ]

  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">
              Comprehensive audio, video, and creative services for artists, bands, podcasters, and content creators in
              Philadelphia.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Card
                key={category.id}
                className="bg-[#3A3A3A] border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-[#FFFFF0]/70">{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={category.href} className="w-full">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Explore {category.title} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Philadelphia's Premier Recording Studio Services</h2>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                At Sounds Like Soma, we provide comprehensive audio and creative services to help artists, bands,
                podcasters, and content creators bring their vision to life. Our Philadelphia studios combine
                state-of-the-art equipment with experienced professionals to deliver exceptional results for projects of
                all sizes.
              </p>

              <p className="mb-4">
                From professional recording and mixing to video production and artist promotion, we offer end-to-end
                solutions that cover every aspect of content creation and distribution. Our team understands the
                technical requirements and creative nuances of different media, ensuring your project meets industry
                standards while standing out from the crowd.
              </p>

              <p className="mb-4">
                Located in the heart of Philadelphia's vibrant music scene, our studios provide a comfortable, inspiring
                environment for creativity to flourish. Whether you're recording your first demo, producing a podcast
                series, or creating content for your brand, our services are designed to help you achieve professional
                results within your budget.
              </p>

              <p>
                Explore our service categories to learn more about how we can help with your specific project, or
                contact us today to discuss your needs and schedule a studio tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project, schedule a studio tour, or book your first session.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
