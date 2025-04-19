import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen flex items-center justify-center">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Article Not Found</h1>
        <p className="text-xl text-[#FFFFF0]/80 mb-8 max-w-2xl mx-auto">
          Sorry, the blog post you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/blog">
          <Button className="bg-purple-600 hover:bg-purple-700">Return to Blog</Button>
        </Link>
      </div>
    </div>
  )
}
