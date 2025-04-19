import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Music, Radio, Headphones, BookOpen } from "lucide-react"

export const metadata = {
  title: "Audio & Video Samples | Sounds Like Soma | Philadelphia Recording Studio",
  description:
    "Listen to and watch samples of our professional recording, mixing, and production work. Music, podcasts, voice overs, and video production from our Philadelphia studio.",
}

interface AudioSample {
  id: string
  title: string
  artist: string
  description: string
  imageUrl: string
  audioUrl: string
  category: string
}

interface VideoSample {
  id: string
  title: string
  artist: string
  description: string
  thumbnailUrl: string
  embedUrl: string
}

export default function SamplesPage() {
  const audioSamples: AudioSample[] = [
    {
      id: "sample1",
      title: "Midnight Dreams",
      artist: "The Resonance Collective",
      description: "Full band recording, mixing, and mastering",
      imageUrl: "/placeholder.svg?height=300&width=300",
      audioUrl: "#", // Replace with actual audio URL
      category: "music",
    },
    {
      id: "sample2",
      title: "Urban Echoes",
      artist: "Sarah James",
      description: "Vocal recording and production",
      imageUrl: "/placeholder.svg?height=300&width=300",
      audioUrl: "#", // Replace with actual audio URL
      category: "music",
    },
    {
      id: "sample3",
      title: "The Creative Process",
      artist: "Art & Culture Podcast",
      description: "Full podcast production and editing",
      imageUrl: "/placeholder.svg?height=300&width=300",
      audioUrl: "#", // Replace with actual audio URL
      category: "podcast",
    },
    {
      id: "sample4",
      title: "Corporate Explainer",
      artist: "TechFuture Inc.",
      description: "Professional voice over recording",
      imageUrl: "/placeholder.svg?height=300&width=300",
      audioUrl: "#", // Replace with actual audio URL
      category: "voiceover",
    },
    {
      id: "sample5",
      title: "The Lost City - Chapter 1",
      artist: "Narrated by James Wilson",
      description: "Audiobook recording and production",
      imageUrl: "/placeholder.svg?height=300&width=300",
      audioUrl: "#", // Replace with actual audio URL
      category: "audiobook",
    },
  ]

  const videoSamples: VideoSample[] = [
    {
      id: "video1",
      title: "Neon Lights",
      artist: "Electric Wave",
      description: "4K music video production",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual embed URL
    },
    {
      id: "video2",
      title: "Studio Session",
      artist: "The Harmonics",
      description: "Live recording session highlights",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual embed URL
    },
    {
      id: "video3",
      title: "Artist Interview",
      artist: "Music Spotlight Series",
      description: "Artist interview and acoustic performance",
      thumbnailUrl: "/placeholder.svg?height=400&width=600",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual embed URL
    },
  ]

  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">
              Listen to and watch samples of our professional recording, mixing, and production work from our
              Philadelphia studio.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Samples Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Audio Samples</h2>

          <Tabs defaultValue="music" className="w-full">
            <TabsList className="mb-8 bg-[#3A3A3A] border-gray-700">
              <TabsTrigger value="music" className="data-[state=active]:bg-purple-600">
                <Music className="h-4 w-4 mr-2" />
                Music
              </TabsTrigger>
              <TabsTrigger value="podcast" className="data-[state=active]:bg-purple-600">
                <Radio className="h-4 w-4 mr-2" />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="voiceover" className="data-[state=active]:bg-purple-600">
                <Headphones className="h-4 w-4 mr-2" />
                Voice Overs
              </TabsTrigger>
              <TabsTrigger value="audiobook" className="data-[state=active]:bg-purple-600">
                <BookOpen className="h-4 w-4 mr-2" />
                Audiobooks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="music" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {audioSamples
                  .filter((sample) => sample.category === "music")
                  .map((sample) => (
                    <AudioSampleCard key={sample.id} sample={sample} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="podcast" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {audioSamples
                  .filter((sample) => sample.category === "podcast")
                  .map((sample) => (
                    <AudioSampleCard key={sample.id} sample={sample} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="voiceover" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {audioSamples
                  .filter((sample) => sample.category === "voiceover")
                  .map((sample) => (
                    <AudioSampleCard key={sample.id} sample={sample} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="audiobook" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {audioSamples
                  .filter((sample) => sample.category === "audiobook")
                  .map((sample) => (
                    <AudioSampleCard key={sample.id} sample={sample} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Samples Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Video Samples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoSamples.map((video) => (
              <div key={video.id} className="bg-[#3A3A3A] rounded-lg overflow-hidden border border-gray-700">
                <div className="aspect-video relative">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                  <p className="text-purple-400">{video.artist}</p>
                  <p className="text-[#FFFFF0]/70 text-sm mt-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Project?</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project, schedule a studio tour, or book your first session.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

function AudioSampleCard({ sample }: { sample: AudioSample }) {
  return (
    <Card className="bg-[#3A3A3A] border-gray-700 overflow-hidden">
      <div className="relative aspect-square">
        <Image src={sample.imageUrl || "/placeholder.svg"} alt={sample.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button size="icon" className="h-16 w-16 rounded-full bg-purple-600 hover:bg-purple-700">
            <Play className="h-8 w-8" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{sample.title}</h3>
        <p className="text-purple-400">{sample.artist}</p>
        <p className="text-[#FFFFF0]/70 text-sm mt-2">{sample.description}</p>
        <div className="mt-4">
          <audio controls className="w-full">
            <source src={sample.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </CardContent>
    </Card>
  )
}
