import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostIds, getPostData } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { CalendarDays, User, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const post = await getPostData(params.id);
    return {
      title: `${post.title} | Sounds Like Soma Blog`,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: "Blog Post | Sounds Like Soma",
      description:
        "Read our latest blog post about music production and recording.",
    };
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  try {
    const post = await getPostData(params.id);

    return (
      <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#252525] py-16">
          <div className="container mx-auto px-4">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="mb-6 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>

            <div className="max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="inline-block bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 mb-8 text-[#FFFFF0]/70">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                  {post.authorRole && (
                    <span className="text-[#FFFFF0]/50 ml-1">
                      ({post.authorRole})
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={post.coverImage || "/placeholder.svg?height=800&width=1600"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400"
                  >
                    Share on Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400"
                  >
                    Share on Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400"
                  >
                    Share on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="py-16 bg-[#252525]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">You might also like</h2>
              {/* Related posts would go here */}
              <div className="text-center py-8">
                <Link href="/blog">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
