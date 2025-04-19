import Image from "next/image"
import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarDays, User, Tag } from "lucide-react"

export const metadata = {
  title: "Blog | Sounds Like Soma | Philadelphia Recording Studio",
  description:
    "Articles, tutorials, and insights about music production, recording techniques, industry trends, and studio news from Sounds Like Soma in Philadelphia.",
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  // Group posts by category
  const categories = [...new Set(allPostsData.map((post) => post.category))]

  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Studio Blog</h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">
              Articles, tutorials, and insights about music production, recording techniques, industry trends, and
              studio news.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {allPostsData.length > 0 && (
        <section className="py-16 bg-[#2E2E2E]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Post</h2>
            <div className="bg-[#3A3A3A] rounded-lg overflow-hidden border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-square lg:aspect-auto">
                  <Image
                    src={allPostsData[0].coverImage || "/placeholder.svg?height=600&width=600"}
                    alt={allPostsData[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {allPostsData[0].category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{allPostsData[0].title}</h3>
                  <p className="text-[#FFFFF0]/80 mb-6">{allPostsData[0].excerpt}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-[#FFFFF0]/60">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {new Date(allPostsData[0].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {allPostsData[0].author}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link href={`/blog/${allPostsData[0].id}`}>
                      <Button className="bg-purple-600 hover:bg-purple-700">Read Article</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts by Category */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">All Articles</h2>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-purple-400" />
                {category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPostsData
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <Card key={post.id} className="bg-[#3A3A3A] border-gray-700 overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={post.coverImage || "/placeholder.svg?height=400&width=600"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <span className="inline-block bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                        <p className="text-[#FFFFF0]/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center gap-4 text-xs text-[#FFFFF0]/60">
                          <div className="flex items-center">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 pb-6 px-6">
                        <Link href={`/blog/${post.id}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400"
                          >
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}

          {allPostsData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#FFFFF0]/60">No blog posts found. Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest articles, tutorials, and studio news directly in your
            inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-[#3A3A3A] border border-gray-700 text-[#FFFFF0] flex-grow"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
