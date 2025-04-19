import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import Navigation from "@/components/navigation";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2E2E2E] text-[#FFFFF0]">
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Music Recording Studios in Philadelphia
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Philadelphia Recording Studios for Professional Audio Editing and
              Music Mixing
            </p>

            <Card className="p-6 bg-[#3A3A3A] border-purple-500 border shadow-lg">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <a
                      href="tel:+12155551234"
                      className="hover:text-purple-400 transition-colors"
                    >
                      (215) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <a
                      href="tel:+12155555678"
                      className="hover:text-purple-400 transition-colors"
                    >
                      (215) 555-5678
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <a
                      href="mailto:info@soundslikesoma.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      info@soundslikesoma.com
                    </a>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Book Now
                </Button>
              </div>
            </Card>
          </div>

          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Recording studio"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <ServicesSection />
    </main>
  );
}
