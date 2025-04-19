import { Sliders, Radio, Wand2, FileAudio } from "lucide-react";
import ServiceCategoryLayout from "@/components/service-category-layout";

export const metadata = {
  title: "Editing & Production Services | Sounds Like Soma | Philadelphia",
  description:
    "Professional audio editing, mixing, mastering, and production services in Philadelphia. Transform your recordings into polished, professional tracks ready for release.",
};

export default function EditingPage() {
  const services = [
    {
      id: "mixing",
      title: "Mixing",
      description:
        "Professional audio mixing to balance and enhance your tracks",
      icon: <Sliders className="h-6 w-6 text-purple-400" />,
      href: "/services/editing/mixing",
    },
    {
      id: "mastering",
      title: "Mastering",
      description:
        "Final polish and preparation of your audio for distribution",
      icon: <Sliders className="h-6 w-6 text-purple-400" />,
      href: "/services/editing/mastering",
    },
    {
      id: "podcast-editing",
      title: "Podcast Editing",
      description: "Professional podcast editing and post-production",
      icon: <Radio className="h-6 w-6 text-purple-400" />,
      href: "/services/editing/podcast",
    },
    {
      id: "audio-restoration",
      title: "Audio Restoration",
      description: "Clean up and restore audio from any source",
      icon: <Wand2 className="h-6 w-6 text-purple-400" />,
      href: "/services/editing/restoration",
    },
    {
      id: "beatmaking",
      title: "Beatmaking / Production",
      description: "Custom beat production for artists and projects",
      icon: <FileAudio className="h-6 w-6 text-purple-400" />,
      href: "/services/editing/beatmaking",
    },
  ];

  const faqs = [
    {
      question: "What's the difference between mixing and mastering?",
      answer:
        "Mixing is the process of balancing individual tracks, applying effects, and creating a cohesive stereo mix. Mastering is the final step that optimizes the overall sound, ensures consistency across an album, and prepares the audio for distribution across different platforms and formats.",
    },
    {
      question: "How long does it take to mix a song?",
      answer:
        "Mixing time varies depending on the complexity of the project. A typical song with 20-40 tracks usually takes 4-8 hours to mix. More complex projects with 50+ tracks may take longer. We always take the time needed to ensure quality results rather than rushing the process.",
    },
    {
      question: "Do you offer stem mastering?",
      answer:
        "Yes, we offer stem mastering services where we master from grouped elements (vocals, drums, bass, etc.) rather than just the stereo mix. This provides more control and often yields better results, especially for complex productions.",
    },
    {
      question: "Can you match the sound of my favorite artist or album?",
      answer:
        "While we can certainly use reference tracks to aim for a similar sonic character, each recording is unique. We focus on making your music sound its best rather than exactly copying another artist's sound. That said, we're skilled at achieving specific genre-appropriate sounds and can get very close to your references.",
    },
    {
      question: "How many revisions do you offer for mixing projects?",
      answer:
        "Our standard mixing packages include two rounds of revisions. This is usually sufficient to address any concerns and fine-tune the mix to your satisfaction. Additional revision rounds can be arranged at a reduced hourly rate if needed.",
    },
    {
      question: "Do I need to be present for mixing and mastering sessions?",
      answer:
        "No, most clients are not present for mixing and mastering sessions. We'll work from your references and notes, then send you the results for feedback. However, if you prefer to attend the sessions, we can arrange that for an additional studio fee.",
    },
    {
      question: "What should I prepare before sending my project for mixing?",
      answer:
        "For best results, provide clearly labeled, organized tracks with any editing completed (comping vocals, fixing timing issues, etc.). Include reference tracks, notes about your vision for the mix, and any rough mixes you've created. We'll provide detailed instructions when you book your project.",
    },
  ];

  const keywords = [
    "audio mixing Philadelphia",
    "music mastering services",
    "professional mixing engineer",
    "podcast editing service",
    "audio restoration Philadelphia",
    "beat production",
    "music production services",
    "professional audio editing",
    "mixing and mastering near me",
    "audio post-production",
    "stem mastering",
    "vocal tuning services",
  ];

  return (
    <ServiceCategoryLayout
      title="Editing & Production"
      description="Transform your raw recordings into polished, professional tracks with our comprehensive editing and production services."
      longDescription="Our editing and production services take your raw recordings to the next level, enhancing clarity, balance, and impact while maintaining your artistic vision. From detailed mixing to final mastering, podcast editing to audio restoration, our experienced engineers use premium tools and techniques to deliver exceptional results."
      services={services}
      faqs={faqs}
      ctaText="Ready to elevate your audio? Contact us today to discuss your editing and production needs."
      ctaButtonText="Start Your Project"
      keywords={keywords}
    >
      <p className="mb-4">
        At Sounds Like Soma, we combine technical expertise with artistic
        sensibility to enhance your audio while staying true to your vision. Our
        Philadelphia-based editing and production services include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Professional Mixing:</strong> Balancing levels, enhancing
          tones, creating depth and dimension with premium analog and digital
          tools
        </li>
        <li>
          <strong>Mastering:</strong> The final polish that makes your music
          sound competitive and translates well across all playback systems
        </li>
        <li>
          <strong>Podcast Editing:</strong> Cleaning up recordings, removing
          mistakes, balancing levels, and adding music and effects
        </li>
        <li>
          <strong>Audio Restoration:</strong> Removing noise, clicks, pops, and
          other issues from recordings of any age or source
        </li>
        <li>
          <strong>Beat Production:</strong> Creating custom instrumentals
          tailored to your artistic vision across all genres
        </li>
      </ul>

      <p className="mb-4">
        Our engineers have worked across countless genres and project types,
        from indie releases to major label productions, commercial podcasts to
        audiobooks. We understand the technical requirements for different
        distribution platforms and ensure your audio meets industry standards
        while standing out from the crowd.
      </p>

      <p>
        Whether you&apos;re finishing a single track or a complete album,
        launching a podcast series, or restoring archival recordings, our
        editing and production services provide the professional polish that
        makes your audio shine.
      </p>
    </ServiceCategoryLayout>
  );
}
