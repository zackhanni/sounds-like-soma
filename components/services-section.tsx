"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  Mic,
  Sliders,
  Palette,
  Building,
  Rocket,
  ArrowRight,
  ChevronRight,
  Music,
  Headphones,
  Radio,
  BookOpen,
  Video,
  Wand2,
  FileAudio,
  PenTool,
  Home,
  Users,
  Globe,
  Share2,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SubCategory = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keywords: string[];
  benefits: string[];
  icon: React.ReactNode;
  href: string;
};

type MainCategory = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keywords: string[];
  icon: React.ReactNode;
  subcategories: SubCategory[];
};

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const mainCategories: MainCategory[] = [
    {
      id: "recording",
      title: "Recording",
      description:
        "Professional audio recording for vocals, bands, podcasts, and more",
      longDescription:
        "Our state-of-the-art Philadelphia recording studios offer premium audio capture services with industry-leading equipment and experienced engineers. Whether you're a solo artist, full band, podcaster, or voice actor, our acoustically-treated spaces ensure pristine sound quality for any project.",
      keywords: [
        "Philadelphia recording studio",
        "professional audio recording",
        "music recording",
        "vocal recording",
        "band recording",
        "podcast recording studio",
      ],
      icon: <Mic className="h-8 w-8 text-purple-400" />,
      subcategories: [
        {
          id: "vocal-recording",
          title: "Vocal Recording",
          description:
            "Professional vocal recording for singers and artists in Philadelphia",
          longDescription:
            "Our vocal recording services utilize premium microphones and preamps in acoustically-treated spaces to capture the nuance and emotion in your voice. Our experienced engineers know how to get the best performance and sound quality for any vocal style.",
          keywords: [
            "vocal recording studio",
            "singer recording",
            "vocal booth",
            "professional vocal recording",
            "Philadelphia vocal studio",
          ],
          benefits: [
            "Premium vocal chain with industry-standard microphones",
            "Acoustically-treated vocal booths for clean recordings",
            "Experienced engineers who understand vocal techniques",
            "Comping and tuning services available",
          ],
          icon: <Music className="h-6 w-6 text-purple-400" />,
          href: "/services/recording#vocal",
        },
        {
          id: "band-recording",
          title: "Band Recording",
          description:
            "Full band recording sessions with multiple instruments in our spacious studios",
          longDescription:
            "Our Philadelphia recording studios are designed to accommodate full bands with separate tracking rooms and isolation booths. We have the space, equipment, and expertise to capture your band's unique sound with clarity and energy.",
          keywords: [
            "band recording studio",
            "live band recording",
            "multi-track recording",
            "Philadelphia band studio",
            "full band recording",
          ],
          benefits: [
            "Spacious live rooms with excellent acoustics",
            "Multiple isolation booths for clean separation",
            "High-quality instrument microphones for every application",
            "Experienced engineers who understand band dynamics",
          ],
          icon: <Music className="h-6 w-6 text-purple-400" />,
          href: "/services/recording/band",
        },
        {
          id: "podcast-recording",
          title: "Podcast Recording",
          description:
            "Professional podcast recording with multiple microphones and broadcast-quality equipment",
          longDescription:
            "Our podcast studios in Philadelphia are equipped with broadcast-quality microphones, mixers, and acoustic treatment to ensure your podcast sounds professional. We can accommodate multiple hosts and guests with individual microphones and headphone monitoring.",
          keywords: [
            "podcast studio Philadelphia",
            "podcast recording service",
            "professional podcast equipment",
            "multi-host podcast recording",
            "podcast production",
          ],
          benefits: [
            "Broadcast-quality microphones for each participant",
            "Individual headphone mixes for hosts and guests",
            "Acoustically-treated spaces for clean audio",
            "Remote guest integration capabilities",
          ],
          icon: <Radio className="h-6 w-6 text-purple-400" />,
          href: "/services/recording/podcast",
        },
        {
          id: "voiceover-recording",
          title: "Voice Over Recording",
          description:
            "Professional voice over recording for commercials, narration, audiobooks, and more",
          longDescription:
            "Our voice over recording services provide the perfect environment for capturing clear, professional voice overs for commercials, e-learning, audiobooks, and more. Our engineers understand the specific requirements of voice over work and can help you deliver the perfect take.",
          keywords: [
            "voice over studio Philadelphia",
            "commercial voice over",
            "narration recording",
            "voice actor studio",
            "professional voice over",
          ],
          benefits: [
            "Ultra-quiet recording environment",
            "Premium voice over microphones",
            "Real-time direction capabilities",
            "Remote session options with Source-Connect",
          ],
          icon: <Headphones className="h-6 w-6 text-purple-400" />,
          href: "/services/recording/voiceover",
        },
        {
          id: "audiobook-recording",
          title: "Audiobook Recording",
          description:
            "Professional audiobook recording and production that meets ACX standards",
          longDescription:
            "Our audiobook recording services meet all industry standards including ACX requirements for Audible distribution. We provide the perfect environment for long-form narration with comfortable recording spaces and engineers who understand the unique requirements of audiobook production.",
          keywords: [
            "audiobook studio Philadelphia",
            "ACX compliant recording",
            "audiobook narrator studio",
            "professional audiobook production",
            "Audible ready recording",
          ],
          benefits: [
            "ACX compliant recording and mastering",
            "Comfortable recording environment for long sessions",
            "Chapter marking and organization",
            "Punch and roll recording technique",
            "Noise floor and technical specification monitoring",
          ],
          icon: <BookOpen className="h-6 w-6 text-purple-400" />,
          href: "/services/recording/audiobook",
        },
      ],
    },
    {
      id: "editing",
      title: "Editing & Production",
      description: "Professional audio editing, mixing, and mastering services",
      longDescription:
        "Our Philadelphia-based audio editing and production services transform raw recordings into polished, professional tracks ready for release. Our experienced engineers use industry-standard tools and techniques to enhance your sound while maintaining your artistic vision.",
      keywords: [
        "audio editing Philadelphia",
        "professional mixing services",
        "music mastering",
        "podcast editing",
        "audio production",
        "sound engineering",
      ],
      icon: <Sliders className="h-8 w-8 text-purple-400" />,
      subcategories: [
        {
          id: "mixing",
          title: "Mixing",
          description:
            "Professional audio mixing to balance and enhance your tracks for optimal sound",
          longDescription:
            "Our mixing engineers blend technical expertise with artistic sensibility to balance levels, enhance tones, and create depth and dimension in your music. We use premium analog and digital tools to achieve a polished, professional sound that translates across all playback systems.",
          keywords: [
            "audio mixing services",
            "professional mix engineer",
            "music mixing Philadelphia",
            "mixing and balancing",
            "stereo mixing",
            "surround mixing",
          ],
          benefits: [
            "Balance and clarity across all instruments and vocals",
            "Depth and dimension through expert use of effects",
            "Consistent sound across different playback systems",
            "Enhancement of emotional impact through dynamic control",
          ],
          icon: <Sliders className="h-6 w-6 text-purple-400" />,
          href: "/services/editing/mixing",
        },
        {
          id: "mastering",
          title: "Mastering",
          description:
            "Final polish and preparation of your audio for distribution across all platforms",
          longDescription:
            "Our mastering services provide the final polish that makes your music sound professional and competitive. We optimize levels, enhance clarity, and ensure your tracks translate well across all playback systems while meeting the technical requirements of all distribution platforms.",
          keywords: [
            "audio mastering Philadelphia",
            "professional mastering engineer",
            "album mastering",
            "mastering for streaming",
            "vinyl mastering",
            "CD mastering",
          ],
          benefits: [
            "Loudness optimization for streaming platforms",
            "Enhanced clarity and punch",
            "Consistent sound across your entire album",
            "Format-specific masters for different distribution channels",
          ],
          icon: <Sliders className="h-6 w-6 text-purple-400" />,
          href: "/services/editing/mastering",
        },
        {
          id: "podcast-editing",
          title: "Podcast Editing",
          description:
            "Professional podcast editing and post-production for clear, engaging episodes",
          longDescription:
            "Our podcast editing services clean up recordings, remove mistakes, balance levels, and add music and effects to create professional, engaging podcast episodes. We handle all the technical aspects so you can focus on creating great content.",
          keywords: [
            "podcast editing service",
            "podcast post-production",
            "podcast mixing",
            "podcast cleanup",
            "professional podcast editing",
            "podcast enhancement",
          ],
          benefits: [
            "Removal of mistakes, stutters, and long pauses",
            "Noise reduction and audio cleanup",
            "Consistent levels between hosts and guests",
            "Addition of intros, outros, music, and sound effects",
          ],
          icon: <Radio className="h-6 w-6 text-purple-400" />,
          href: "/services/editing/podcast",
        },
        {
          id: "audio-restoration",
          title: "Audio Restoration",
          description:
            "Clean up and restore audio from any source to remove noise and enhance quality",
          longDescription:
            "Our audio restoration services can rescue recordings affected by noise, hum, clicks, pops, and other issues. Using advanced digital tools, we can breathe new life into old recordings, interview audio, live recordings, and more.",
          keywords: [
            "audio restoration service",
            "noise reduction",
            "audio cleanup",
            "click and pop removal",
            "hum elimination",
            "audio enhancement",
          ],
          benefits: [
            "Removal of background noise, hiss, and hum",
            "Elimination of clicks, pops, and digital artifacts",
            "Enhancement of clarity and intelligibility",
            "Salvaging of otherwise unusable recordings",
          ],
          icon: <Wand2 className="h-6 w-6 text-purple-400" />,
          href: "/services/editing/restoration",
        },
        {
          id: "beatmaking",
          title: "Beatmaking / Production",
          description:
            "Custom beat production for artists and projects with any style or genre",
          longDescription:
            "Our beatmaking and production services create custom instrumentals tailored to your artistic vision. Whether you need trap, hip-hop, R&B, pop, or electronic beats, our producers can craft the perfect sonic foundation for your project.",
          keywords: [
            "beat maker Philadelphia",
            "custom beat production",
            "hip hop producer",
            "trap beats",
            "R&B production",
            "instrumental creation",
          ],
          benefits: [
            "Custom beats tailored to your style and vision",
            "High-quality samples and virtual instruments",
            "Unique sounds that help you stand out",
            "Flexible stems for easy vocal integration",
          ],
          icon: <FileAudio className="h-6 w-6 text-purple-400" />,
          href: "/services/editing/beatmaking",
        },
      ],
    },
    {
      id: "creative",
      title: "Creative Services",
      description:
        "Video production, beatmaking, and creative content services",
      longDescription:
        "Our creative services extend beyond audio to help artists and brands create compelling visual and musical content. From 4K music videos to custom beats and songwriting, we provide end-to-end creative solutions to bring your vision to life.",
      keywords: [
        "creative content production",
        "music video production Philadelphia",
        "custom beats",
        "songwriting services",
        "artist development",
        "content creation",
      ],
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      subcategories: [
        {
          id: "video-production",
          title: "4K Video Production",
          description:
            "Professional 4K video production for music videos, performances, and promotional content",
          longDescription:
            "Our 4K video production services capture stunning visuals for music videos, live performances, interviews, and promotional content. With professional cameras, lighting, and editing, we create compelling visual stories that enhance your music and brand.",
          keywords: [
            "4K music video production",
            "Philadelphia video production",
            "music video filming",
            "concert video",
            "promotional video",
            "artist video content",
          ],
          benefits: [
            "Cinema-quality 4K cameras and lenses",
            "Professional lighting and sound capture",
            "Creative direction and concept development",
            "Color grading and visual effects",
          ],
          icon: <Video className="h-6 w-6 text-purple-400" />,
          href: "/services/creative/video",
        },
        {
          id: "beatmaking",
          title: "Beatmaking",
          description:
            "Custom beat production for artists across all genres and styles",
          longDescription:
            "Our beatmaking services create original, high-quality instrumentals tailored to your artistic vision. Our producers work in all genres including hip-hop, R&B, pop, electronic, and trap, using premium samples and instruments to craft unique sounds.",
          keywords: [
            "custom beat production",
            "hip hop beats",
            "trap beat maker",
            "R&B production",
            "pop instrumental production",
            "original beats Philadelphia",
          ],
          benefits: [
            "Original compositions tailored to your style",
            "Premium samples and virtual instruments",
            "Flexible delivery formats including stems",
            "Unlimited revisions until you're satisfied",
          ],
          icon: <FileAudio className="h-6 w-6 text-purple-400" />,
          href: "/services/creative/beatmaking",
        },
        {
          id: "instrumental-recreation",
          title: "Instrumental Recreation",
          description:
            "Professional recreation of instrumentals and backing tracks for performances and recordings",
          longDescription:
            "Our instrumental recreation services can reproduce existing songs, create backing tracks for performances, or develop custom karaoke tracks. Our musicians and producers can match the sound and feel of original recordings while adapting them to your specific needs.",
          keywords: [
            "instrumental recreation",
            "backing track production",
            "karaoke track creation",
            "cover song production",
            "performance tracks",
            "custom backing tracks",
          ],
          benefits: [
            "Accurate recreation of original songs",
            "Customizable arrangements to suit your needs",
            "High-quality instruments and production",
            "Performance-ready files in any format",
          ],
          icon: <Music className="h-6 w-6 text-purple-400" />,
          href: "/services/creative/instrumental",
        },
        {
          id: "songwriting",
          title: "Songwriting / Toplining",
          description:
            "Professional songwriting and toplining services to help complete your musical vision",
          longDescription:
            "Our songwriting and toplining services help artists develop melodies, lyrics, and song structures that connect with audiences. Whether you need a complete song or help finishing an existing idea, our experienced songwriters can bring your vision to life.",
          keywords: [
            "professional songwriting",
            "toplining service",
            "melody writing",
            "lyric writing",
            "song development",
            "co-writing Philadelphia",
          ],
          benefits: [
            "Experienced songwriters across multiple genres",
            "Melody and hook development",
            "Lyric writing that connects with audiences",
            "Song structure and arrangement guidance",
          ],
          icon: <PenTool className="h-6 w-6 text-purple-400" />,
          href: "/services/creative/songwriting",
        },
      ],
    },
    {
      id: "rental",
      title: "Space Rental",
      description:
        "Rentable studio space for recording, rehearsals, and podcasting",
      longDescription:
        "Our Philadelphia studio spaces are available for hourly and daily rental, providing professional environments for recording, rehearsals, and content creation. With premium equipment, acoustic treatment, and flexible booking options, we offer the perfect space for your creative projects.",
      keywords: [
        "recording studio rental Philadelphia",
        "rehearsal space rental",
        "podcast studio rental",
        "hourly studio rental",
        "music production space",
        "audio recording space",
      ],
      icon: <Building className="h-8 w-8 text-purple-400" />,
      subcategories: [
        {
          id: "studio-rental",
          title: "Rentable Music Studio",
          description:
            "Professional recording studio space available for hourly and daily rental",
          longDescription:
            "Our rentable music studios in Philadelphia provide access to professional recording environments without the long-term commitment. With premium equipment, acoustic treatment, and optional engineer assistance, our spaces are perfect for independent artists and producers.",
          keywords: [
            "recording studio rental Philadelphia",
            "hourly studio rental",
            "professional recording space",
            "music production studio rental",
            "audio recording booth rental",
          ],
          benefits: [
            "Professional-grade equipment included",
            "Acoustically-treated recording environments",
            "Flexible hourly and daily rates",
            "Optional engineer assistance available",
          ],
          icon: <Home className="h-6 w-6 text-purple-400" />,
          href: "/services/rental/studio",
        },
        {
          id: "rehearsal-space",
          title: "Band Rehearsal Space",
          description:
            "Spacious rehearsal rooms for bands and musical groups with equipment available",
          longDescription:
            "Our band rehearsal spaces in Philadelphia provide the perfect environment for practice and preparation. With soundproofed rooms, PA systems, backline equipment, and 24/7 availability, we make it easy for bands to focus on their music.",
          keywords: [
            "band rehearsal space Philadelphia",
            "music practice rooms",
            "rehearsal studio rental",
            "band practice space",
            "hourly rehearsal room",
            "equipped rehearsal space",
          ],
          benefits: [
            "Soundproofed rooms for undisturbed practice",
            "PA systems and backline equipment available",
            "Flexible booking hours including evenings and weekends",
            "Monthly lockout options for regular rehearsals",
          ],
          icon: <Users className="h-6 w-6 text-purple-400" />,
          href: "/services/rental/rehearsal",
        },
        {
          id: "podcast-studio",
          title: "Podcast Studio Rental",
          description:
            "Professional podcast studio available for hourly rental with all equipment included",
          longDescription:
            "Our podcast studio rentals in Philadelphia provide everything you need to record professional-quality episodes. With broadcast microphones, mixers, acoustic treatment, and comfortable seating for hosts and guests, you can focus on content while we handle the technical setup.",
          keywords: [
            "podcast studio rental Philadelphia",
            "podcast recording space",
            "podcast equipment rental",
            "professional podcast booth",
            "podcast production studio",
            "podcast recording room",
          ],
          benefits: [
            "Broadcast-quality microphones for all participants",
            "Mixer and recording equipment included",
            "Acoustically-treated environment for clean audio",
            "Comfortable seating for hosts and guests",
          ],
          icon: <Radio className="h-6 w-6 text-purple-400" />,
          href: "/services/rental/podcast",
        },
      ],
    },
    {
      id: "promotion",
      title: "Artist Promotion",
      description:
        "Website design, EPK creation, and artist promotion services",
      longDescription:
        "Our artist promotion services help musicians and creators build their brand and reach new audiences. From professional websites and EPKs to social media content and branding consultation, we provide the tools and expertise to elevate your presence in the industry.",
      keywords: [
        "artist promotion services",
        "musician marketing Philadelphia",
        "music EPK creation",
        "artist website design",
        "music branding",
        "artist development",
      ],
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      subcategories: [
        {
          id: "website-epk",
          title: "Website Design / EPK Creation",
          description:
            "Custom websites and electronic press kits for artists and musicians",
          longDescription:
            "Our website design and EPK creation services build professional online presences for artists and musicians. With mobile-responsive designs, music players, tour calendars, and press materials, we create compelling digital platforms that showcase your music and brand to fans, venues, and industry professionals.",
          keywords: [
            "artist website design",
            "musician website",
            "electronic press kit",
            "music EPK creation",
            "band website development",
            "artist web design Philadelphia",
          ],
          benefits: [
            "Mobile-responsive custom designs",
            "Integrated music players and video galleries",
            "Tour date calendars and ticket links",
            "Press materials and downloadable assets",
            "Social media integration",
          ],
          icon: <Globe className="h-6 w-6 text-purple-400" />,
          href: "/services/promotion/website",
        },
        {
          id: "social-media",
          title: "Social Media Content Packages",
          description:
            "Professional social media content creation and management for artists",
          longDescription:
            "Our social media content packages help artists maintain a consistent, engaging presence across platforms. From professional photos and graphics to scheduled posts and engagement strategies, we help you connect with fans and grow your following.",
          keywords: [
            "artist social media management",
            "musician content creation",
            "music social media strategy",
            "band social content",
            "artist Instagram content",
            "music TikTok content",
          ],
          benefits: [
            "Professional photo and video content",
            "Custom graphics and animations",
            "Scheduled posting across platforms",
            "Engagement strategies to grow your audience",
            "Analytics and performance tracking",
          ],
          icon: <Share2 className="h-6 w-6 text-purple-400" />,
          href: "/services/promotion/social",
        },
        {
          id: "branding",
          title: "Branding Consultation",
          description:
            "Professional branding consultation for artists and musicians to develop a unique identity",
          longDescription:
            "Our branding consultation services help artists develop a cohesive, memorable identity that resonates with audiences. From logo design and color schemes to messaging and visual style, we create comprehensive brand strategies that help you stand out in a crowded industry.",
          keywords: [
            "artist branding services",
            "musician brand development",
            "music logo design",
            "band identity creation",
            "artist brand strategy",
            "music branding consultation",
          ],
          benefits: [
            "Logo and visual identity development",
            "Brand messaging and positioning",
            "Audience analysis and targeting",
            "Consistent brand application across platforms",
            "Long-term brand growth strategy",
          ],
          icon: <Palette className="h-6 w-6 text-purple-400" />,
          href: "/services/promotion/branding",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#252525]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-3xl mx-auto">
            Philadelphia&apos;s premier recording studio offering professional
            audio, video, and creative services for artists, bands, podcasters,
            and content creators.
          </p>
        </div>

        {!selectedCategory ? (
          // Main categories view
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories.map((category) => (
                <Card
                  key={category.id}
                  className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-[#FFFFF0]/70">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.subcategories
                        .slice(0, 3)
                        .map((subcategory, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{subcategory.title}</span>
                          </li>
                        ))}
                      {category.subcategories.length > 3 && (
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">And more...</span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Explore {category.title}{" "}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* SEO-rich content section */}
            <div className="mt-16 text-[#FFFFF0]/80 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Philadelphia&apos;s Premier Recording Studio Services
                </h3>
                <p className="mb-4">
                  At Sounds Like Soma, we provide comprehensive audio and music
                  production services in the heart of Philadelphia. Our
                  state-of-the-art recording studios are equipped with the
                  latest technology and staffed by experienced engineers who are
                  passionate about helping artists and content creators bring
                  their vision to life.
                </p>
                <p>
                  Whether you&apos;re recording vocals for your next hit single,
                  capturing your band&apos;s live energy, producing a podcast,
                  or creating content for your brand, our Philadelphia recording
                  studios offer the perfect environment and expertise to achieve
                  professional results.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Sounds Like Soma?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Professional Equipment</h4>
                      <p className="text-sm">
                        Industry-standard microphones, preamps, and processing
                        gear for exceptional sound quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Experienced Engineers</h4>
                      <p className="text-sm">
                        Skilled professionals who understand how to capture your
                        sound and enhance your vision
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Acoustically-Treated Spaces
                      </h4>
                      <p className="text-sm">
                        Purpose-built rooms designed for optimal sound capture
                        and monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Comprehensive Services</h4>
                      <p className="text-sm">
                        End-to-end solutions from recording and mixing to
                        promotion and distribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Subcategories view
          <>
            <div className="mb-8">
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                onClick={() => setSelectedCategory(null)}
              >
                ← Back to all services
              </Button>

              <h3 className="text-2xl font-bold mt-4 mb-2">
                {mainCategories.find((c) => c.id === selectedCategory)?.title}
              </h3>
              <p className="text-[#FFFFF0]/80 mb-6">
                {
                  mainCategories.find((c) => c.id === selectedCategory)
                    ?.longDescription
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories
                .find((c) => c.id === selectedCategory)
                ?.subcategories.map((subcategory) => (
                  <Card
                    key={subcategory.id}
                    className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {subcategory.icon}
                        <CardTitle>{subcategory.title}</CardTitle>
                      </div>
                      <CardDescription className="text-[#FFFFF0]/70">
                        {subcategory.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-[#FFFFF0]/80">
                          {subcategory.longDescription}
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-1">
                            {subcategory.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#FFFFF0]/80">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={subcategory.href} className="w-full">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            {/* SEO-rich content for subcategory */}
            <div className="mt-16 text-[#FFFFF0]/80">
              <h3 className="text-2xl font-bold mb-4">
                Professional{" "}
                {mainCategories.find((c) => c.id === selectedCategory)?.title}{" "}
                Services in Philadelphia
              </h3>
              <p className="mb-4">
                Our{" "}
                {mainCategories
                  .find((c) => c.id === selectedCategory)
                  ?.title.toLowerCase()}{" "}
                services provide Philadelphia artists, creators, and businesses
                with professional solutions tailored to their specific needs.
                With state-of-the-art equipment, experienced professionals, and
                a client-focused approach, we ensure exceptional results for
                every project.
              </p>
              <p>
                Located in the heart of Philadelphia&apos;s vibrant music scene,
                Sounds Like Soma offers convenient access to premium
                {mainCategories
                  .find((c) => c.id === selectedCategory)
                  ?.title.toLowerCase()}{" "}
                services without the high costs typically associated with
                professional studios. We work with clients of all levels, from
                beginners to established professionals, providing the same
                attention to detail and quality for every project.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Our Approach</h4>
                  <p className="text-sm">
                    We take a collaborative approach to every project, working
                    closely with you to understand your vision and goals. Our
                    team combines technical expertise with creative insight to
                    deliver results that exceed expectations while staying true
                    to your artistic direction.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Equipment & Facilities
                  </h4>
                  <p className="text-sm">
                    Our Philadelphia studios feature carefully selected
                    equipment from industry-leading brands,
                    acoustically-designed spaces, and comfortable environments
                    that inspire creativity. We continuously update our
                    technology to ensure we offer the best possible tools for
                    your project.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
